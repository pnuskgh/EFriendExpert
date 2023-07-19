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
import signal
import subprocess
import webbrowser
from datetime import datetime
from tensorflow import keras

def SignalHandler_SIGINT(SignalNumber, Frame):
     print(' ')
     
class MODEL_BASE:
    def __init__(self):
        self.name = 'model_base'
        self.initialize()
        
    def initialize(self):
        os.environ["CUDA_VISIBLE_DEVICES"] = "0"                                #--- 0. 0번 GPU 사용, -1. GPU 사용하지 않음
        
        signal.signal(signal.SIGINT,SignalHandler_SIGINT)
        
        self.foldername = os.path.dirname(__file__).replace('\\', '/')
        if (os.path.exists(f"{self.foldername}/save") == False):
            os.makedirs(f"{self.foldername}/save")
        self.tensorboard_folder = f'{self.foldername}/logs/{self.name}_{datetime.now().strftime("%Y%m%d_%H%M%S")}'
        
    def _getName(self, name = None):
        if (name):
            return name
        else:
            return self.name

    def save_model(self, model, name = None):
        model_json = model.to_json()
        with open(f'{self.foldername}/save/{self._getName(name)}.json', 'w') as json_file:
            json_file.write(model_json)

    def load_model(self, name = None):
        filename = f'{self.foldername}/save/{self._getName(name)}.json'
        if (os.path.exists(filename)):
            return keras.models.model_from_json(open(filename).read())
        else:
            return None

    def save_weights(self, model, name = None):
        model.save_weights(f'{self.foldername}/save/{self._getName(name)}.h5')

    def load_weights(self, model, name = None):
        filename = f'{self.foldername}/save/{self._getName(name)}.h5'
        if (os.path.exists(filename)):
            model.load_weights(filename)
            return True
        else:
            return False
        
    def run_tensorboard(self):
        webbrowser.open('http://localhost:6006/')
        subprocess.call([ 'tensorboard', f'--logdir={self.tensorboard_folder}', '--host=localhost', '--port=6006' ])
