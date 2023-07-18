""" 
    Deep Learning

    @file laboratory/pnuskgh/mnist_dense.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

import os
from datetime import datetime
import tensorflow as tf
from tensorflow import keras

from model_base import MODEL_BASE

class MNIST_DENSE(MODEL_BASE):
    def __init__(self):
        super().__init__()

        self.name = 'mnist_dense'
        
    def initialize(self):
        self.loss_function = 'categorical_crossentropy'
        self.optimizer = 'Adam'
        self.metrics = 'accuracy'
        
        self.epochs = 35                                                        #--- 훈련 집합 횟수
        self.batch_size = 512                                                   #--- 훈련 집합당 훈련 횟수
        self.validation_split = 0.2                                             #--- 검증용 데이터 (20%)
        self.nb_classes = 10                                                    #--- 분류 갯수
        self.n_hidden = 128
        self.dropout = 0.3

    def load_data(self):
        mnist = keras.datasets.mnist
        (x_train, y_train), (x_test, y_test) = mnist.load_data()                #--- 60,000/10,000개 데이터 (28 * 28)

        x_train = x_train.reshape(60000, 28 * 28)                               #--- 행렬 (28 * 28)
        x_test = x_test.reshape(10000, 28 * 28)
        x_train = x_train.astype("float32")
        x_test = x_test.astype("float32")

        x_train /= 255                                                          #--- Normalize
        x_test /= 255

        y_train = tf.keras.utils.to_categorical(y_train, self.nb_classes)
        y_test = tf.keras.utils.to_categorical(y_test, self.nb_classes)
        return (x_train, y_train), (x_test, y_test)

    def build_model(self):
        reshaped = 28 * 28                                                      #--- 행열(28 * 28)을 벡터(784 * 1)로 변환

        model = tf.keras.models.Sequential()                                    #--- 모델 : Sequential
        model.add(keras.layers.Dense(self.n_hidden, input_shape=(reshaped,), activation='relu'))
        model.add(keras.layers.Dropout(self.dropout))
        model.add(keras.layers.Dense(self.n_hidden, activation='relu'))
        model.add(keras.layers.Dropout(self.dropout))
        model.add(keras.layers.Dense(self.nb_classes, activation='softmax'))

        model.summary()
        model.compile(
            optimizer=self.optimizer,                                           #--- Optimizer
            loss=self.loss_function,                                            #--- Loss Function
            metrics=[ self.metrics ],                                           #--- Matric
        )
        return model

    def process_model(self, model, x_train, y_train, x_test, y_test):
        callbacks = [
            tf.keras.callbacks.TensorBoard(log_dir='../../logs')
        ]

        verbose = 1
        history = model.fit(x_train, y_train,                                   #--- 학습
            batch_size=self.batch_size, epochs=self.epochs,
            verbose=verbose,
            validation_split=self.validation_split,
            callbacks=callbacks
        )

        test_loss, test_acc = model.evaluate(x_test, y_test)                    #--- 평가
        print("Test accuracy:", test_acc)

        predictions = model.predict(x_test)                                     #--- 예측
        print("Predictions:", predictions)

if __name__ == "__main__":
    datetimeFr = datetime.now()
    deep_learning = MNIST_DENSE()
    deep_learning.initialize()
    
    (x_train, y_train), (x_test, y_test) = deep_learning.load_data()
    model = deep_learning.build_model()
    deep_learning.process_model(model, x_train, y_train, x_test, y_test)

    deep_learning.save_model(model)
    deep_learning.save_weights(model)

    datetimeTo = datetime.now()
    print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
    print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
