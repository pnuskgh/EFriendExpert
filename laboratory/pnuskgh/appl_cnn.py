""" 
    Deep Learning

    @file laboratory/pnuskgh/appl_cnn.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

import tensorflow as tf
from tensorflow import keras


#--- python laboratory/pnuskgh/appl_cnn.py

# https://bkshin.tistory.com/entry/%EC%BB%B4%ED%93%A8%ED%84%B0-%EB%B9%84%EC%A0%84-9-%EA%B0%9D%EC%B2%B4-%ED%83%90%EC%A7%80Object-Detection-%EA%B0%9C%EC%9A%94
class APPLICATION_CNN():       
    def classification(self):
        #--- 분류
        IMG_ROWS, IMG_COLS = 28, 28
        input_shape = (IMG_ROWS, IMG_COLS, 1)

        model = keras.models.Sequential()
        model.add(keras.layers.Conv2D(20, (5, 5), activation='relu', input_shape=input_shape))
        model.add(keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(2, 2)))

        model.add(keras.layers.Conv2D(50, (5, 5), activation='relu'))
        model.add(keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(2, 2)))

        model.add(keras.layers.Flatten())
        model.add(keras.layers.Dense(500, activation='relu'))
        model.add(keras.layers.Dense(self.nb_classes, activation="softmax"))
        return model

    def localization(self):
        #--- 지역화
        backbone = self.classification()
        vectorizer = keras.layers.GlobalAveragePooling2D(name="GAP_vertorizer")

        regresssion_head = self.localization_regression()

        bbox_regressor = keras.models.Sequential(
            backbone,
            vectorizer,
            regresssion_head
        )
        pass
    def localization_regression(self):
        IMG_SIZE = 224
        
        model = keras.Sequential()
        model.add(keras.layers.Conv2D(32, 3, activation='relu', padding='SAME', input_shape=(IMG_SIZE, IMG_SIZE, 3)))
        model.add(keras.layers.MaxPool2D(padding='SAME'))
        model.add(keras.layers.Conv2D(64, 3, activation='relu', padding='SAME'))
        model.add(keras.layers.MaxPool2D(padding='SAME'))
        model.add(keras.layers.Conv2D(128, 3, activation='relu', padding='SAME'))
        model.add(keras.layers.MaxPool2D(padding='SAME'))
        model.add(keras.layers.Conv2D(256, 3, activation='relu', padding='SAME'))
        model.add(keras.layers.MaxPool2D(padding='SAME'))
        model.add(keras.layers.Conv2D(256, 3, activation='relu', padding='SAME'))
        model.add(keras.layers.MaxPool2D(padding='SAME'))
        model.add(keras.layers.Flatten())
        model.add(keras.layers.Dense(1024, activation='relu'))
        model.add(keras.layers.Dropout(0.4))
        model.add(keras.layers.Dense(4, activation='sigmoid'))
        return model

    def object_detection(self):
        #--- 개체 탐지
        pass

    def segmentation(self):
        #--- 세그멘테이션
        pass
        
