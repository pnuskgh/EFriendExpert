""" 
    Deep Learning

    @file laboratory/pnuskgh/appl_cnn.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

from tensorflow import keras

#--- python laboratory/pnuskgh/appl_cnn.py
# https://bkshin.tistory.com/entry/%EC%BB%B4%ED%93%A8%ED%84%B0-%EB%B9%84%EC%A0%84-9-%EA%B0%9D%EC%B2%B4-%ED%83%90%EC%A7%80Object-Detection-%EA%B0%9C%EC%9A%94
class APPLICATION_CNN():       
    #--- 분류
    def classification(self):
        IMG_ROWS, IMG_COLS = 28, 28
        input_shape = (IMG_ROWS, IMG_COLS, 1)

        model = keras.models.Sequential()
        model.add(keras.layers.Conv2D(20, (5, 5), activation='relu', padding='SAME', input_shape=input_shape))
        model.add(keras.layers.MaxPooling2D(padding='SAME'))

        model.add(keras.layers.Conv2D(50, (5, 5), activation='relu', padding='SAME'))
        model.add(keras.layers.MaxPooling2D(padding='SAME'))

        model.add(keras.layers.Flatten())
        model.add(keras.layers.Dense(500, activation="relu"))
        model.add(keras.layers.Dense(self.nb_classes, activation="softmax"))
        return model

    #--- 회귀
    def regression(self):
        IMG_ROWS, IMG_COLS = 28, 28
        input_shape = (IMG_ROWS, IMG_COLS, 1)

        model = keras.models.Sequential()
        model.add(keras.layers.Conv2D(20, (5, 5), activation='relu', padding='SAME', input_shape=input_shape))
        model.add(keras.layers.MaxPooling2D(padding='SAME'))

        model.add(keras.layers.Conv2D(50, (5, 5), activation='relu', padding='SAME'))
        model.add(keras.layers.MaxPooling2D(padding='SAME'))
        
        model.add(keras.layers.Flatten())
        model.add(keras.layers.Dense(1024, activation='relu'))
        model.add(keras.layers.Dropout(0.4))
        model.add(keras.layers.Dense(4, activation='sigmoid'))                  #--- 4 : x, y, width, height
        return model

    #--- 지역화
    def localization(self):
        backbone = self.classification()
        vectorizer = keras.layers.GlobalAveragePooling2D(name="GAP_vertorizer")

        regresssion_head = self.regression()

        bbox_regressor = keras.models.Sequential(
            backbone,
            vectorizer,
            regresssion_head
        )

    #--- 개체 탐지
    def object_detection(self):
        pass

    #--- 세그멘테이션
    def segmentation(self):
        pass
        
