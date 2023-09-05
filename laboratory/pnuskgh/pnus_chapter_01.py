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

import os
import time
from datetime import datetime

import tensorflow as tf
import numpy as np
from tensorflow import keras

from model_base import MODEL_BASE

class Mnist(MODEL_BASE):
    def __init__(self):
        super().__init__()
        
        self.name = 'mnist'
        self.model = None
        
    def initialize(self):
        super().initialize()

    def menu(self):
        print('------------------------------------------------------------')
        print('--- 필기체 숫자 인식')
        print(' ')
        print('dense: Dense layer 사용')
        print('dense3: Deep Dense layer 사용')
        print('dense_drop: Deep Dense layer with Dropout 사용')
        print('dense_optimizer: Deep Dense layer with Dropout 사용')
        print('colab: 감정 분석 사용')
        print(' ')
        print('clear: Model 삭제')
        print('list: 저장된 Model 목록 보기')
        print('save: Model 저장')
        print('load: Model 불러오기')
        print('summary: Model Summary')
        print('tensorboard: Tensorboard 표시')
        print(' ')
        print('exit: 종료')
        print(' ')
        cmd = input('메뉴를 선택 하세요: ')
        print(' ')
        return cmd
    
    def cmd_clear_model(self):
        self.model = None
        
    def cmd_list_model(self):
        print('Model 목록')
        listdir = os.listdir(f'{self.foldername}/save')
        for file in listdir:
            if (file.endswith('.json')):
                print(f'    {file[:-5]}')                
        print(' ')
            
    def cmd_save_model(self):
        if (self.model == None):
            print('Error: 먼저 모델을 생성한 후 저장 하세요.')
        else:
            name = input('저장할 이름을 입력 하세요:')
            self.save_model(self.model, name)
            self.save_weights(self.model, name)

    def cmd_load_model(self):
        self.cmd_list_model()
        name = input('불러올 이름을 입력 하세요: ')
        if (name == 'None'):
            self.model = None
        else:
            self.model = self.load_model(name)
            if (self.model == None):
                print('Error: 불러올 Model이 없습니다.')
            else:
                self.load_weights(self.model, name)
            
    def cmd_tensorboard(self):
        if (self.model == None):
            print('Error: 먼저 모델을 생성한 후 저장 하세요.')
        else:
            self.run_tensorboard()
            
    def run(self):
        self.initialize()

        while (True):
            cmd = self.menu()
            if ((cmd == 'exit') or (cmd == 'e') or (cmd == 'quit') or (cmd == 'q')):
                break
            
            if (cmd == 'dense'):
                self.name = 'mnist_063_071'
                self.initialize()
                self.run_063_071()
            elif (cmd == 'dense3'):
                self.name = 'mnist_072_075'
                self.initialize()
                self.run_072_075()
            elif (cmd == 'dense_drop'):
                self.name = 'mnist_076_078'
                self.initialize()
                self.run_076_078()
            elif (cmd == 'dense_optimizer'):
                self.name = 'mnist_078_085'
                self.initialize()
                self.run_078_085()
            elif (cmd == 'colab'):
                self.name = 'colab_096_099'
                self.initialize()
                self.run_096_099()
            elif (cmd == 'clear'):
                self.cmd_clear_model()
            elif (cmd == 'list'):
                self.cmd_list_model()
            elif (cmd == 'save'):
                self.cmd_save_model()
            elif (cmd == 'load'):
                self.cmd_load_model()
            elif (cmd == 'summary'):
                if (self.model != None):
                    print(' ')
                    self.model.summary()
            elif (cmd == 'tensorboard'):
                self.cmd_tensorboard()
            else:
                print('Error: 목록에 없는 메뉴 입니다')

            print(' ')                
            print('continue ...')
            print(' ')                
            
    def run_063_071(self):
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
        print(f'Test accuracy: {test_acc}')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')
        
    def run_072_075(self):
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
        print(f'Test accuracy: {test_acc}')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def run_076_078(self):
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
        print(f'Test accuracy: {test_acc}')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def run_078_085(self):
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
        print(f'Test accuracy: {test_acc}')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def run_096_099(self):
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
        print(f'Test accuracy: {test_acc}')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

if __name__ == "__main__":
    appl = Mnist()
    appl.run()
    