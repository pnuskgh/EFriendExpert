""" 
    Deep Learning

    @file laboratory/pnuskgh/image_segmentation.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

import tensorflow as tf
from tensorflow import keras

#--- 데이터 증강
class Augment(keras.layers.Layer):
    def __init__(self, seed=42):
        super().__init__()
        
        self.augment_inputs = keras.layers.RandomFlip(mode='horizontal', seed=seed) #--- 랜덤하게 50% 이미지를 수평으로 뒤집기
        # self.augment_inputs = keras.layers.RandomRotation(0.1)                  #-- -10% ~ 10% 범위에서 회전
        # self.augment_inputs = keras.layers.RandomZoom(0.2)                      #-- -20% ~ 20% 범위에서 확대/축소
        self.augment_labels = keras.layers.RandomFlip(mode='horizontal', seed=seed)
        
    def call(self, inputs, labels):
        inputs = self.augment_inputs(inputs)
        labels = self.augment_labels(labels)
        return inputs, labels

