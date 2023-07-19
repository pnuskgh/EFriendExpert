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

import os
from tensorflow import keras

class MODEL_BASE:
    def __init__(self):
        self.name = 'model_base'
        self._init()
        
    def _init(self):
        os.environ["CUDA_VISIBLE_DEVICES"] = "0"                                #--- 0. 0번 GPU 사용, -1. GPU 사용하지 않음
        
        self.foldername = os.path.dirname(__file__).replace('\\', '/') + '/save'
        if (os.path.exists(self.foldername) == False):
            os.makedirs(self.foldername)
        
    def _getName(self, name = None):
        if (name):
            return name
        else:
            return self.name

    def save_model(self, model, name = None):
        model_json = model.to_json()
        with open(f'{self.foldername}/{self._getName(name)}.json', 'w') as json_file:
            json_file.write(model_json)

    def load_model(self, name = None):
        filename = f'{self.foldername}/{self._getName(name)}.json'
        if (os.path.exists(filename)):
            return keras.models.model_from_json(open(filename).read())
        else:
            return None

    def save_weights(self, model, name = None):
        model.save_weights(f'{self.foldername}/{self._getName(name)}.h5')

    def load_weights(self, model, name = None):
        filename = f'{self.foldername}/{self._getName(name)}.h5'
        if (os.path.exists(filename)):
            model.load_weights(filename)
            return True
        else:
            return False
