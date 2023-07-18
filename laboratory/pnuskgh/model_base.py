""" 
    Deep Learning

    @file laboratory/pnuskgh/model_base.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

#--- https://knowyourdata-tfds.withgoogle.com/#tab=STATS&dataset=mnist
#--- conda  activate  py310
#--- python  laboratory/pnuskgh/mnist_dense.py

#--- 사전 제작된 모델
#---     https://www.tensorflow.org/api_docs/python/tf/keras/applications
#--- https://keras.io/layers/pooling

import os
import tensorflow as tf
from tensorflow import keras

class MODEL_BASE:
    def __init__(self):
        self.init_gpu()

        self.name = 'model_base'
        
    def init_gpu(self):
        os.environ["CUDA_VISIBLE_DEVICES"] = "0"                                #--- 0. 0번 GPU 사용, -1. GPU 사용하지 않음

    def save_model(self, model, name = None):
        model_json = model.to_json()
        if (name):
            with open(f'save/{name}.json', 'w') as json_file:
                json_file.write(model_json)
        else:
            with open(f'save/{self.name}.json', 'w') as json_file:
                json_file.write(model_json)

    def load_model(self, name = None):
        if (name):
            return tf.keras.models.model_from_json(open(f'save/{name}.json').read())
        else:
            return tf.keras.models.model_from_json(open(f'save/{self.name}.json').read())

    def save_weights(self, model, name = None):
        if (name):
            model.save_weights(f'save/{name}.h5')
        else:
            model.save_weights(f'save/{self.name}.h5')

    def load_weights(self, model, name = None):
        if (name):
            model.load_weights(f'save/{name}.h5')
        else:
            model.load_weights(f'save/{self.name}.h5')
