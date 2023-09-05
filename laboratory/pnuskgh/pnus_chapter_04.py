""" 
    CNN (Convolutional Neural Networks, 컨볼루션 신경망)

    @file laboratory/pnuskgh/pnus_chapter_04.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

#--- cd  /work/EFriendExpert
#--- conda  activate  py310
#--- python laboratory/pnuskgh/pnus_chapter_04.py

import time
import numpy as np
from datetime import datetime
from tensorflow import keras

#--- https://scikit-image.org/docs/stable/auto_examples/transform/plot_rescale.html
from skimage.transform import resize
# from imageio import imread
import imageio.v2 as imageio

from model_base import MODEL_BASE

class CNN01(MODEL_BASE):
    def __init__(self):
        super().__init__()
        
        self.title = 'CNN (Convolutional Neural Networks, 컨볼루션 신경망)'
        self.name = 'mnist'
        self.model = None
        
        self.functions = [
            ['cnn_mnist', self.run_188_194, 'LeNet - CNN으로 Mnist 분류'],
            ['cifar', self.run_196_199, 'CIFAR-10 이미지 분류'],
            ['deep_cifar', self.run_200_203, 'CIFAR-10 이미지 분류 with DCNN'],
            # ['cifar_generator', self.run_203_206, 'CIFAR-10 이미지 분류 with Generator'],
            ['cifar_predict', self.run_206_207, 'CIFAR-10 이미지 예측'],
            [],
            ['clear', self.cmd_clear_model, 'Model 삭제'],
            ['list', self.cmd_list_model, '저장된 Model 목록 보기'],
            ['save', self.cmd_save_model, 'Model 저장'],
            ['load', self.cmd_load_model, 'Model 불러오기'],
            ['summary', self.cmd_summary, 'Model Summary'],
            ['tensorboard', self.cmd_tensorboard, 'Tensorboard 표시'],
        ]
        
    def initialize(self):
        super().initialize()

    def run_188_194(self):
        self.name = 'cnn_188_194'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        EPOCHS = 10
        BATCH_SIZE = 128
        VERBOSE = 1
        VALIDATION_SPLIT = 0.2
        
        ROWS, COLS = 28, 28
        INPUT_SHAPE = (ROWS, COLS, 1)
        NB_CLASSES = 10

        mnist = keras.datasets.mnist
        (X_train, Y_train), (X_test, Y_test) = mnist.load_data()

        X_train = X_train.reshape((60000, ROWS, COLS, 1))   #--- 60,000개 훈련 데이터
        X_test  = X_test.reshape((10000, ROWS, COLS, 1))    #--- 10,000개 테스트 데이터
        
        X_train = X_train.astype('float32')
        X_test = X_test.astype('float32')
        
        X_train = X_train / 255.0
        X_test = X_test / 255.0

        Y_train = keras.utils.to_categorical(Y_train, NB_CLASSES)
        Y_test = keras.utils.to_categorical(Y_test, NB_CLASSES)

        if (self.model == None):
            self.model = keras.models.Sequential()
            self.model.add(keras.layers.Conv2D(20, (5, 5), activation='relu', input_shape=INPUT_SHAPE))
            self.model.add(keras.layers.MaxPool2D(pool_size=(2, 2), strides=(2, 2)))       
            
            self.model.add(keras.layers.Conv2D(50, (5, 5), activation='relu'))
            self.model.add(keras.layers.MaxPool2D(pool_size=(2, 2), strides=(2, 2)))       

            self.model.add(keras.layers.Flatten())       
            self.model.add(keras.layers.Dense(NB_CLASSES, activation='softmax'))       

        self.model.compile(optimizer='Adam', loss='categorical_crossentropy', metrics=['accuracy'])
        self.model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=EPOCHS, verbose=VERBOSE, validation_split=VALIDATION_SPLIT,
                       callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
        test_loss, test_acc = self.model.evaluate(X_test, Y_test, verbose=VERBOSE)
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        self.model.summary()
        print(' ')
        print(f'Test accuracy: {test_acc * 100}%')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def run_196_199(self):
        self.name = 'cnn_196_199'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        CHANNELS = 3
        ROWS, COLS = 32, 32
        
        EPOCHS = 20
        BATCH_SIZE = 128
        CLASSES = 10
        VERBOSE = 1
        VALIDATION_SPLIT = 0.2
        INPUT_SHAPE = (ROWS, COLS, CHANNELS)
        
        (X_train, Y_train), (X_test, Y_test) = keras.datasets.cifar10.load_data()
        X_train = X_train.astype('float32')
        X_test = X_test.astype('float32')
        
        mean = np.mean(X_train, axis=(0,1,2,3))
        std  = np.std(X_train,  axis=(0,1,2,3))
        X_train = (X_train - mean) / (std+1e-7)
        X_test  = (X_test  - mean) / (std+1e-7)

        Y_train = keras.utils.to_categorical(Y_train, CLASSES)
        Y_test = keras.utils.to_categorical(Y_test, CLASSES)
        
        if (self.model == None):
            self.model = keras.models.Sequential()
            self.model.add(keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=INPUT_SHAPE))
            self.model.add(keras.layers.MaxPool2D(pool_size=(2, 2)))
            self.model.add(keras.layers.Dropout(0.25))   
            
            self.model.add(keras.layers.Flatten())       
            self.model.add(keras.layers.Dense(512, activation='relu'))       
            self.model.add(keras.layers.Dropout(0.5))   
            self.model.add(keras.layers.Dense(CLASSES, activation='softmax'))       

        self.model.compile(optimizer='RMSprop', loss='categorical_crossentropy', metrics=['accuracy'])
        self.model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=EPOCHS, verbose=VERBOSE, validation_split=VALIDATION_SPLIT,
                       callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
        test_loss, test_acc = self.model.evaluate(X_test, Y_test, batch_size=BATCH_SIZE, verbose=VERBOSE)
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        self.model.summary()
        print(' ')
        print(f'Test accuracy: {test_acc * 100}%')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def run_200_203(self):
        self.name = 'cnn_200_203'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        CHANNELS = 3
        ROWS, COLS = 32, 32
        
        EPOCHS = 50
        BATCH_SIZE = 64
        CLASSES = 10
        VERBOSE = 1
        VALIDATION_SPLIT = 0.2
        INPUT_SHAPE = (ROWS, COLS, CHANNELS)
        
        (X_train, Y_train), (X_test, Y_test) = keras.datasets.cifar10.load_data()
        X_train = X_train.astype('float32')
        X_test = X_test.astype('float32')
        
        mean = np.mean(X_train, axis=(0,1,2,3))
        std  = np.std(X_train,  axis=(0,1,2,3))
        X_train = (X_train - mean) / (std+1e-7)
        X_test  = (X_test  - mean) / (std+1e-7)

        Y_train = keras.utils.to_categorical(Y_train, CLASSES)
        Y_test = keras.utils.to_categorical(Y_test, CLASSES)
        
        if (self.model == None):
            self.model = keras.models.Sequential()
            self.model.add(keras.layers.Conv2D(32, (3, 3), padding='same', activation='relu', input_shape=INPUT_SHAPE))
            self.model.add(keras.layers.BatchNormalization())
            self.model.add(keras.layers.Conv2D(32, (3, 3), padding='same', activation='relu'))
            self.model.add(keras.layers.BatchNormalization())
            self.model.add(keras.layers.MaxPool2D(pool_size=(2, 2)))
            self.model.add(keras.layers.Dropout(0.2))   
            
            self.model.add(keras.layers.Conv2D(64, (3, 3), padding='same', activation='relu'))
            self.model.add(keras.layers.BatchNormalization())
            self.model.add(keras.layers.Conv2D(64, (3, 3), padding='same', activation='relu'))
            self.model.add(keras.layers.BatchNormalization())
            self.model.add(keras.layers.MaxPool2D(pool_size=(2, 2)))
            self.model.add(keras.layers.Dropout(0.3))   
            
            self.model.add(keras.layers.Conv2D(128, (3, 3), padding='same', activation='relu'))
            self.model.add(keras.layers.BatchNormalization())
            self.model.add(keras.layers.Conv2D(128, (3, 3), padding='same', activation='relu'))
            self.model.add(keras.layers.BatchNormalization())
            self.model.add(keras.layers.MaxPool2D(pool_size=(2, 2)))
            self.model.add(keras.layers.Dropout(0.4))   
            
            self.model.add(keras.layers.Flatten())       
            self.model.add(keras.layers.Dense(CLASSES, activation='softmax'))       

        self.model.compile(optimizer='RMSprop', loss='categorical_crossentropy', metrics=['accuracy'])
        self.model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=EPOCHS, verbose=VERBOSE, validation_split=VALIDATION_SPLIT,
                       callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
        test_loss, test_acc = self.model.evaluate(X_test, Y_test, batch_size=BATCH_SIZE, verbose=VERBOSE)
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        self.model.summary()
        print(' ')
        print(f'Test accuracy: {test_acc * 100}%')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    # def run_203_206(self):
    #     #--- 아래 환경에서 실행하지 않으면 오류 발생
    #     # os.environ["CUDA_VISIBLE_DEVICES"] = "-1"                               #--- 0. 0번 GPU 사용, -1. GPU 사용하지 않음
        
    #     #--- model.fit_generator가 Deprecated되어 정상 동작하지 않음
        
    #     self.name = 'cnn_203_206'
    #     self.initialize()

    #     datetimeFr = datetime.now()
    #     timeFr = time.time()
        
    #     CHANNELS = 3
    #     ROWS, COLS = 32, 32
        
    #     EPOCHS = 50
    #     BATCH_SIZE = 64
    #     CLASSES = 10
    #     VERBOSE = 1
    #     VALIDATION_SPLIT = 0.2
    #     INPUT_SHAPE = (ROWS, COLS, CHANNELS)
        
    #     (X_train, Y_train), (X_test, Y_test) = keras.datasets.cifar10.load_data()
    #     X_train = X_train.astype('float32')
    #     X_test = X_test.astype('float32')
        
    #     mean = np.mean(X_train, axis=(0,1,2,3))
    #     std  = np.std(X_train,  axis=(0,1,2,3))
    #     X_train = (X_train - mean) / (std+1e-7)
    #     X_test  = (X_test  - mean) / (std+1e-7)

    #     Y_train = keras.utils.to_categorical(Y_train, CLASSES)
    #     Y_test = keras.utils.to_categorical(Y_test, CLASSES)
        
    #     datagen = keras.preprocessing.image.ImageDataGenerator(
    #         rotation_range=30,
    #         width_shift_range=0.2,
    #         height_shift_range=0.2,
    #         horizontal_flip=True
    #     )
    #     datagen.fit(X_train)
    #     X_train = datagen.flow_from_directory(X_train, target_size=(ROWS,COLS, CHANNELS), batch_size=128, class_mode="binary")
    #     Y_train = datagen.flow_from_directory(Y_train, target_size=(ROWS,COLS, CHANNELS), batch_size=128, class_mode="binary")
        
    #     if (self.model == None):
    #         self.model = keras.models.Sequential()
    #         self.model.add(keras.layers.Conv2D(32, (3, 3), padding='same', activation='relu', input_shape=INPUT_SHAPE))
    #         self.model.add(keras.layers.BatchNormalization())
    #         self.model.add(keras.layers.Conv2D(32, (3, 3), padding='same', activation='relu'))
    #         self.model.add(keras.layers.BatchNormalization())
    #         self.model.add(keras.layers.MaxPool2D(pool_size=(2, 2)))
    #         self.model.add(keras.layers.Dropout(0.2))   
            
    #         self.model.add(keras.layers.Conv2D(64, (3, 3), padding='same', activation='relu'))
    #         self.model.add(keras.layers.BatchNormalization())
    #         self.model.add(keras.layers.Conv2D(64, (3, 3), padding='same', activation='relu'))
    #         self.model.add(keras.layers.BatchNormalization())
    #         self.model.add(keras.layers.MaxPool2D(pool_size=(2, 2)))
    #         self.model.add(keras.layers.Dropout(0.3))   
            
    #         self.model.add(keras.layers.Conv2D(128, (3, 3), padding='same', activation='relu'))
    #         self.model.add(keras.layers.BatchNormalization())
    #         self.model.add(keras.layers.Conv2D(128, (3, 3), padding='same', activation='relu'))
    #         self.model.add(keras.layers.BatchNormalization())
    #         self.model.add(keras.layers.MaxPool2D(pool_size=(2, 2)))
    #         self.model.add(keras.layers.Dropout(0.4))   
            
    #         self.model.add(keras.layers.Flatten())       
    #         self.model.add(keras.layers.Dense(CLASSES, activation='softmax'))       

    #     self.model.compile(optimizer='RMSprop', loss='categorical_crossentropy', metrics=['accuracy'])
    #     self.model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=EPOCHS, verbose=VERBOSE, validation_split=VALIDATION_SPLIT,
    #                    callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
    #     #--- Deprecated
    #     # self.model.fit_generator(datagen.flow(X_train, Y_train, batch_size=BATCH_SIZE),
    #     #     epochs=EPOCHS, verbose=VERBOSE, validation_data=(X_test, Y_test),
    #     #     callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
    #     test_loss, test_acc = self.model.evaluate(X_test, Y_test, batch_size=BATCH_SIZE, verbose=VERBOSE)
    #     datetimeTo = datetime.now()
    #     timeTo = time.time()
        
    #     self.model.summary()
    #     print(' ')
    #     print(f'Test accuracy: {test_acc * 100}%')
    #     print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
    #     print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
    #     print(f'소요시간 : {timeTo - timeFr}초')
        
    def run_206_207(self):
        if (self.model == None):
            return
        
        (X_train, Y_train), (X_test, Y_test) = keras.datasets.cifar10.load_data()
        X_train = X_train.astype('float32')
        X_test = X_test.astype('float32')
        
        mean = np.mean(X_train, axis=(0,1,2,3))
        std  = np.std(X_train,  axis=(0,1,2,3))
        X_train = (X_train - mean) / (std+1e-7)
        X_test  = (X_test  - mean) / (std+1e-7)

        predictions = self.model.predict(X_test)
        print(predictions)

if __name__ == "__main__":
    appl = CNN01()
    appl.run()
    