""" 
    Deep Learning

    @file laboratory/pnuskgh/mnist.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

#--- https://knowyourdata-tfds.withgoogle.com/#tab=STATS&dataset=mnist
#--- conda  activate  py310
#--- python  laboratory/pnuskgh/chapter_1_065.py

import os
import tensorflow as tf
from tensorflow import keras

class MNIST:
    def __init__(self):
        os.environ["CUDA_VISIBLE_DEVICES"] = "0"                                #--- 0. 0번 GPU 사용, -1. GPU 사용하지 않음
        
    def initialize(self):
        self.activation_function = 'softmax'                                    #--- softmax, relu
        self.loss_function = 'categorical_crossentropy'
        self.optimizer = 'SGD'
        self.metrics = 'accuracy'
        
        self.epochs = 200                                                       #--- 훈련 집합 횟수
        self.batch_size = 128                                                   #--- 훈련 집합당 훈련 횟수
        self.validation_split = 0.2                                             #--- 검증용 데이터 (20%)

    def load_data(self):
        reshaped = 28 * 28                                                      #--- 행열(28 * 28)을 벡터(784 * 1)로 변환
        nb_classes = 10                                                         #--- 분류 갯수

        mnist = keras.datasets.mnist
        (x_train, y_train), (x_test, y_test) = mnist.load_data()                #--- 60,000/10,000개 데이터 (28 * 28)

        x_train = x_train.reshape(60000, reshaped)
        x_test = x_test.reshape(10000, reshaped)
        x_train = x_train.astype("float32")
        x_test = x_test.astype("float32")

        x_train /= 255                                                          #--- Normalize
        x_test /= 255

        y_train = tf.keras.utils.to_categorical(y_train, nb_classes)
        y_test = tf.keras.utils.to_categorical(y_test, nb_classes)
        return (x_train, y_train), (x_test, y_test)

    def build_model(self):
        reshaped = 28 * 28                                                      #--- 행열(28 * 28)을 벡터(784 * 1)로 변환
        nb_classes = 10                                                         #--- 분류 갯수

        model = tf.keras.models.Sequential()                                    #--- 모델 : Sequential
        model.add(keras.layers.Dense(nb_classes, input_shape=(reshaped,),       #--- 출력 갯수, 입력 갯수
                name="dense_layer_1", activation=self.activation_function       #--- Activation Function
        ))

        model.summary()
        model.compile(
            optimizer=self.optimizer,                                           #--- Optimizer
            loss=self.loss_function,                                            #--- Loss Function
            metrics=[ self.metrics ],                                           #--- Matric
        )
        return model

    def process_model(self, model, x_train, y_train, x_test, y_test):
        verbose = 1
        model.fit(                                                              #--- 학습
            x_train,
            y_train,
            batch_size=self.batch_size,
            epochs=self.epochs,
            verbose=verbose,
            validation_split=self.validation_split,
        )

        test_loss, test_acc = model.evaluate(x_test, y_test)                    #--- 평가
        print("Test accuracy:", test_acc)

        predictions = model.predict(x_test)                                     #--- 예측

if __name__ == "__main__":
    deep_learning = MNIST()
    deep_learning.initialize()
    
    (x_train, y_train), (x_test, y_test) = deep_learning.load_data()
    model = deep_learning.build_model()
    deep_learning.process_model(model, x_train, y_train, x_test, y_test)
