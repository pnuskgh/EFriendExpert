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
# from skimage.transform import rescale, resize, downscale_local_mean
# import imageio.v2 as imageio
# import PIL
import cv2
import matplotlib.pyplot as plt

from model_base import MODEL_BASE

class CNN01(MODEL_BASE):
    def __init__(self):
        super().__init__()
        
        self.title = 'CNN (Convolutional Neural Networks, 컨볼루션 신경망)'
        self.name = 'cnn'
        self.model = None
        
        self.functions = [
            ['cnn_mnist', self.run_188_194, '(99.08%, 17초, 10 * 128), LeNet - CNN으로 Mnist 분류'],
            ['cifar', self.run_196_199, '(68.67%, 51초, 20 * 128), CIFAR-10 이미지 분류'],
            ['deep_cifar', self.run_200_203, '(84.83%, 368초, 50 * 64), CIFAR-10 이미지 분류 with DCNN'],
            # ['cifar_generator', self.run_203_206, '(50 * 64), CIFAR-10 이미지 분류 with Generator'],
            ['cifar_predict', self.run_206_207, 'CIFAR-10 이미지 예측'],
            ['vgg16', self.run_208_211, 'VGG16'],
            ['vgg16_application', self.run_211_213, 'VGG16 Application'],
            ['vgg16_embedding', self.run_213_214, 'Image embedding with VGG16 Application'],
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

    def run_203_206(self):
        #--- 아래 환경에서 실행하지 않으면 오류 발생
        # os.environ["CUDA_VISIBLE_DEVICES"] = "-1"                               #--- 0. 0번 GPU 사용, -1. GPU 사용하지 않음
        
        #--- model.fit_generator가 Deprecated되어 정상 동작하지 않음
        
        self.name = 'cnn_203_206'
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
        
        datagen = keras.preprocessing.image.ImageDataGenerator(
            rotation_range=30,
            width_shift_range=0.2,
            height_shift_range=0.2,
            horizontal_flip=True
        )
        datagen.fit(X_train)
        X_train = datagen.flow_from_directory(X_train, target_size=(ROWS,COLS, CHANNELS), batch_size=128, class_mode="binary")
        Y_train = datagen.flow_from_directory(Y_train, target_size=(ROWS,COLS, CHANNELS), batch_size=128, class_mode="binary")
        
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
        #--- Deprecated
        # self.model.fit_generator(datagen.flow(X_train, Y_train, batch_size=BATCH_SIZE),
        #     epochs=EPOCHS, verbose=VERBOSE, validation_data=(X_test, Y_test),
        #     callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
        test_loss, test_acc = self.model.evaluate(X_test, Y_test, batch_size=BATCH_SIZE, verbose=VERBOSE)
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        self.model.summary()
        print(' ')
        print(f'Test accuracy: {test_acc * 100}%')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')
        
    def run_206_207(self):
        model = keras.models.model_from_json(open(f'{self.foldername}/save/cifar10.json').read())
        model.load_weights(f'{self.foldername}/save/cifar10.h5')

        img_names = [f'{self.foldername}/cat-standing.jpg', f'{self.foldername}/dog.jpg']
        imgs = [ cv2.resize(cv2.imread(img_name), (32, 32)).astype("float32") for img_name in img_names ]
        imgs = np.array(imgs) / 255
        print("imgs.shape:", imgs.shape)

        model.compile(loss="categorical_crossentropy", optimizer='sgd', metrics=["accuracy"])

        predictions = model.predict(imgs)
        print("predictions:", predictions) 
        print(' ')   
        print(np.argmax(predictions[0]), predictions[0])    #--- 3. cat
        print(np.argmax(predictions[1]), predictions[1])    #--- 5. dog

    def run_206_207_new(self):
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

    def run_208_211(self):
        self.name = 'cnn_208_211'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        # if (self.model == None):
        self.model = keras.models.Sequential()
        #--- VGG16
        self.model.add(keras.layers.ZeroPadding2D((1, 1), input_shape=(224, 224, 3)))
        self.model.add(keras.layers.Conv2D(64, (3, 3), activation='relu'))
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(64, (3, 3), activation='relu'))
        self.model.add(keras.layers.MaxPool2D((2, 2), strides=(2, 2)))
        
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(128, (3, 3), activation='relu'))
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(128, (3, 3), activation='relu'))
        self.model.add(keras.layers.MaxPool2D((2, 2), strides=(2, 2)))
        
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(256, (3, 3), activation='relu'))
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(256, (3, 3), activation='relu'))
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(256, (3, 3), activation='relu'))
        self.model.add(keras.layers.MaxPool2D((2, 2), strides=(2, 2)))
        
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(512, (3, 3), activation='relu'))
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(512, (3, 3), activation='relu'))
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(512, (3, 3), activation='relu'))
        self.model.add(keras.layers.MaxPool2D((2, 2), strides=(2, 2)))

        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(512, (3, 3), activation='relu'))
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(512, (3, 3), activation='relu'))
        self.model.add(keras.layers.ZeroPadding2D((1, 1)))
        self.model.add(keras.layers.Conv2D(512, (3, 3), activation='relu'))
        self.model.add(keras.layers.MaxPool2D((2, 2), strides=(2, 2)))

        self.model.add(keras.layers.Flatten())       

        self.model.add(keras.layers.Dense(4096, activation='relu'))       
        self.model.add(keras.layers.Dropout(0.5))   
        self.model.add(keras.layers.Dense(4096, activation='relu'))       
        self.model.add(keras.layers.Dropout(0.5))   
        self.model.add(keras.layers.Dense(1000, activation='softmax')) 
            
        #--- https://github.com/fchollet/deep-learning-models/releases/download/v0.1/vgg16_weights_tf_dim_ordering_tf_kernels.h5
        #---     vgg16_weights_tf_dim_ordering_tf_kernels.h5, 527MB
        self.model.load_weights(f'{self.foldername}/save/vgg16_weights_tf_dim_ordering_tf_kernels.h5')      
        self.model.compile(optimizer='sgd', loss='categorical_crossentropy', metrics=['accuracy'])
        self.model.summary()
        
        im = cv2.resize(cv2.imread(f'{self.foldername}/cat.jpg'), (224, 224)).astype(np.float32)
        # im = im.transpose((2,0,1))
        im = np.expand_dims(im, axis=0)
        
        predictions = self.model.predict(im)                #--- 285. 이집트 고양이
        # print(predictions)
        print(np.argmax(predictions))

        datetimeTo = datetime.now()
        timeTo = time.time()

        print(' ')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def run_211_213(self):
        self.name = 'cnn_211_213'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()

        self.model = self.load_model('vgg16')
        if (self.model == None):
            self.model = keras.applications.vgg16.VGG16(weights="imagenet", include_top=True)
            self.save_model(self.model, 'vgg16')
            self.save_weights(self.model, 'vgg16')
        else:  
            self.load_weights(self.model, 'vgg16')      

        # for i, layer in enumerate(self.model.layers):
        #     print(i, layer.name, layer.output_shape)

        self.model.compile(optimizer='sgd', loss='categorical_crossentropy', metrics=['accuracy'])
        self.model.summary()

        im = cv2.resize(cv2.imread(f'{self.foldername}/steam-locomotive.jpg'), (224, 224)).astype("float32")
        # im = np.array(im) / 255
        # print("im.shape:", im.shape)
        im = np.expand_dims(im, axis=0)

        predictions = self.model.predict(im)                #--- 820. 증기 기차
        # print(predictions)
        print(np.argmax(predictions))
        
        # plt.plot(predictions.ravel())
        # plt.show()

        datetimeTo = datetime.now()
        timeTo = time.time()
        
        print(' ')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def run_213_214(self):
        self.name = 'cnn_213_214'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        base_model = self.load_model('vgg16')
        if (base_model == None):
            base_model = keras.applications.vgg16.VGG16(weights="imagenet", include_top=True)
            self.save_model(base_model, 'vgg16')
            self.save_weights(base_model, 'vgg16')
        else:  
            self.load_weights(base_model, 'vgg16')      

        for i, layer in enumerate(base_model.layers):
            print(i, layer.name, layer.output_shape)
        base_model.summary()
        
        self.model = keras.models.Model(
            inputs=base_model.input,
            outputs=base_model.get_layer('block4_pool').output
        )
        self.model.summary()
        
        img = keras.preprocessing.image.load_img(f'{self.foldername}/cat.jpg', target_size=(224, 224))
        x = keras.preprocessing.image.img_to_array(img)
        x = np.expand_dims(x, axis=0)
        x = keras.applications.vgg16.preprocess_input(x)
        
        features = self.model.predict(x)
        print(features)

        datetimeTo = datetime.now()
        timeTo = time.time()
        
        print(' ')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

if __name__ == "__main__":
    appl = CNN01()
    appl.run()
    