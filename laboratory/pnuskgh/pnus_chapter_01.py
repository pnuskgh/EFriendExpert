""" 
    필기체 숫자 인식
    감정 분석

    @file laboratory/pnuskgh/pnus_chapter_01.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

#--- cd  /work/EFriendExpert
#--- conda  activate  py310
#--- python laboratory/pnuskgh/pnus_chapter_01.py

import time
from datetime import datetime
from tensorflow import keras

from model_base import MODEL_BASE

class Mnist(MODEL_BASE):
    def __init__(self):
        super().__init__()
        
        self.title = '필기체 숫자 인식'
        self.name = 'mnist'
        self.model = None
        
        self.functions = [
            ['dense', self.run_063_071, 'Dense layer 사용'],
            ['dense3', self.run_072_075, 'Deep Dense layer 사용'],
            ['dense_drop', self.run_076_078, 'Deep Dense layer with Dropout 사용'],
            ['dense_optimizer', self.run_078_085, 'Deep Dense layer with Dropout 사용'],
            ['colab', self.run_096_099, '감정 분석 사용'],
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

    def run_063_071(self):
        self.name = 'mnist_063_071'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        EPOCHS = 200
        BATCH_SIZE = 128
        VERBOSE = 1
        NB_CLASSES = 10
        N_HIDDEN = 128
        VALIDATION_SPLIT = 0.2
        
        mnist = keras.datasets.mnist
        (X_train, Y_train), (X_test, Y_test) = mnist.load_data()
        
        RESHAPED = 28 * 28                                  #--- 784
        
        X_train = X_train.reshape(60000, RESHAPED)          #--- 60,000개 훈련 데이터
        X_test  = X_test.reshape(10000, RESHAPED)           #--- 10,000개 테스트 데이터
        
        X_train = X_train.astype('float32')
        X_test = X_test.astype('float32')
        
        X_train = X_train / 255.0
        X_test = X_test / 255.0

        Y_train = keras.utils.to_categorical(Y_train, NB_CLASSES)
        Y_test = keras.utils.to_categorical(Y_test, NB_CLASSES)
            
        if (self.model == None):
            self.model = keras.models.Sequential()
            self.model.add(keras.layers.Dense(NB_CLASSES, input_shape=(RESHAPED,), name='dense_layer', activation='softmax'))        

        self.model.compile(optimizer='SGD', loss='categorical_crossentropy', metrics=['accuracy'])
        self.model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=EPOCHS, verbose=VERBOSE, validation_split=VALIDATION_SPLIT,
                       callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
        test_loss, test_acc = self.model.evaluate(X_test, Y_test)
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        self.model.summary()
        print(' ')
        print(f'Test accuracy: {test_acc * 100}%')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')
        
    def run_072_075(self):
        self.name = 'mnist_072_075'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        EPOCHS = 50
        BATCH_SIZE = 128
        VERBOSE = 1
        NB_CLASSES = 10
        N_HIDDEN = 128
        VALIDATION_SPLIT = 0.2
        
        mnist = keras.datasets.mnist
        (X_train, Y_train), (X_test, Y_test) = mnist.load_data()
        
        RESHAPED = 28 * 28                                  #--- 784
        
        X_train = X_train.reshape(60000, RESHAPED)          #--- 60,000개 훈련 데이터
        X_test  = X_test.reshape(10000, RESHAPED)           #--- 10,000개 테스트 데이터
        
        X_train = X_train.astype('float32')
        X_test = X_test.astype('float32')
        
        X_train = X_train / 255.0
        X_test = X_test / 255.0

        Y_train = keras.utils.to_categorical(Y_train, NB_CLASSES)
        Y_test = keras.utils.to_categorical(Y_test, NB_CLASSES)
            
        if (self.model == None):
            self.model = keras.models.Sequential()
            self.model.add(keras.layers.Dense(  N_HIDDEN, input_shape=(RESHAPED,), name='dense_layer_1', activation='relu'))        
            self.model.add(keras.layers.Dense(  N_HIDDEN,                          name='dense_layer_2', activation='relu'))        
            self.model.add(keras.layers.Dense(NB_CLASSES,                          name='dense_layer_3', activation='softmax'))        

        self.model.compile(optimizer='SGD', loss='categorical_crossentropy', metrics=['accuracy'])
        self.model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=EPOCHS, verbose=VERBOSE, validation_split=VALIDATION_SPLIT,
                       callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
        test_loss, test_acc = self.model.evaluate(X_test, Y_test)
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        self.model.summary()
        print(' ')
        print(f'Test accuracy: {test_acc * 100}%')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def run_076_078(self):
        self.name = 'mnist_076_078'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        EPOCHS = 200
        BATCH_SIZE = 128
        VERBOSE = 1
        NB_CLASSES = 10
        N_HIDDEN = 128
        VALIDATION_SPLIT = 0.2
        DROPOUT = 0.3
        
        mnist = keras.datasets.mnist
        (X_train, Y_train), (X_test, Y_test) = mnist.load_data()
        
        RESHAPED = 28 * 28                                  #--- 784
        
        X_train = X_train.reshape(60000, RESHAPED)          #--- 60,000개 훈련 데이터
        X_test  = X_test.reshape(10000, RESHAPED)           #--- 10,000개 테스트 데이터
        
        X_train = X_train.astype('float32')
        X_test = X_test.astype('float32')
        
        X_train = X_train / 255.0
        X_test = X_test / 255.0

        Y_train = keras.utils.to_categorical(Y_train, NB_CLASSES)
        Y_test = keras.utils.to_categorical(Y_test, NB_CLASSES)
            
        if (self.model == None):
            self.model = keras.models.Sequential()
            self.model.add(keras.layers.Dense(  N_HIDDEN, input_shape=(RESHAPED,), name='dense_layer_1', activation='relu'))
            self.model.add(keras.layers.Dropout(DROPOUT))       
            self.model.add(keras.layers.Dense(  N_HIDDEN,                          name='dense_layer_2', activation='relu'))        
            self.model.add(keras.layers.Dropout(DROPOUT))       
            self.model.add(keras.layers.Dense(NB_CLASSES,                          name='dense_layer_3', activation='softmax'))        

        self.model.compile(optimizer='SGD', loss='categorical_crossentropy', metrics=['accuracy'])
        self.model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=EPOCHS, verbose=VERBOSE, validation_split=VALIDATION_SPLIT,
                       callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
        test_loss, test_acc = self.model.evaluate(X_test, Y_test)
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        self.model.summary()
        print(' ')
        print(f'Test accuracy: {test_acc * 100}%')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def run_078_085(self):
        self.name = 'mnist_078_085'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        EPOCHS = 200
        BATCH_SIZE = 128
        VERBOSE = 1
        NB_CLASSES = 10
        N_HIDDEN = 128
        VALIDATION_SPLIT = 0.2
        DROPOUT = 0.3
        
        mnist = keras.datasets.mnist
        (X_train, Y_train), (X_test, Y_test) = mnist.load_data()
        
        RESHAPED = 28 * 28                                  #--- 784
        
        X_train = X_train.reshape(60000, RESHAPED)          #--- 60,000개 훈련 데이터
        X_test  = X_test.reshape(10000, RESHAPED)           #--- 10,000개 테스트 데이터
        
        X_train = X_train.astype('float32')
        X_test = X_test.astype('float32')
        
        X_train = X_train / 255.0
        X_test = X_test / 255.0

        Y_train = keras.utils.to_categorical(Y_train, NB_CLASSES)
        Y_test = keras.utils.to_categorical(Y_test, NB_CLASSES)
            
        if (self.model == None):
            self.model = keras.models.Sequential()
            self.model.add(keras.layers.Dense(  N_HIDDEN, input_shape=(RESHAPED,), name='dense_layer_1', activation='relu'))
            self.model.add(keras.layers.Dropout(DROPOUT))       
            self.model.add(keras.layers.Dense(  N_HIDDEN,                          name='dense_layer_2', activation='relu'))        
            self.model.add(keras.layers.Dropout(DROPOUT))       
            self.model.add(keras.layers.Dense(NB_CLASSES,                          name='dense_layer_3', activation='softmax'))        

        optimizer = input('optimizer를 선택 하세요 (SGD, RMSProp, Adam) : ')
        self.model.compile(optimizer=optimizer, loss='categorical_crossentropy', metrics=['accuracy'])
        self.model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=EPOCHS, verbose=VERBOSE, validation_split=VALIDATION_SPLIT,
                       callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
        test_loss, test_acc = self.model.evaluate(X_test, Y_test)
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        self.model.summary()
        print(' ')
        print(f'Test accuracy: {test_acc * 100}%')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def run_096_099(self):
        self.name = 'colab_096_099'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        max_len = 200
        n_words = 10000
        dim_embedding = 256
        EPOCHS = 20
        BATCH_SIZE = 500
        
        #--- 영화 인터넷 데이터셋
        (X_train, Y_train), (X_test, Y_test) = keras.datasets.imdb.load_data(num_words=n_words)
        X_train = keras.preprocessing.sequence.pad_sequences(X_train, maxlen=max_len)               #--- 문장을 max_len 길이로 변환
        X_test = keras.preprocessing.sequence.pad_sequences(X_test, maxlen=max_len)

        if (self.model == None):
            self.model = keras.models.Sequential()
            self.model.add(keras.layers.Embedding(n_words, dim_embedding, input_length=max_len))
            self.model.add(keras.layers.Dropout(0.3))       
            self.model.add(keras.layers.GlobalMaxPooling1D())
            
            self.model.add(keras.layers.Dense(128, activation='relu'))
            self.model.add(keras.layers.Dropout(0.5))       
            self.model.add(keras.layers.Dense(1, activation='sigmoid'))

        self.model.compile(optimizer='Adam', loss='binary_crossentropy', metrics=['accuracy'])
        self.model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=EPOCHS, validation_data=(X_test, Y_test),
                       callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ])
        test_loss, test_acc = self.model.evaluate(X_test, Y_test, batch_size=BATCH_SIZE)
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        self.model.summary()
        print(' ')
        print(f'Test accuracy: {test_acc * 100}%')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

if __name__ == "__main__":
    appl = Mnist()
    appl.run()
    