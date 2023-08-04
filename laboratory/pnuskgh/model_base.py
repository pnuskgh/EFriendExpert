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
import pandas as pd
import signal
import subprocess
import webbrowser
from datetime import datetime
from tensorflow import keras

def SignalHandler_SIGINT(SignalNumber, Frame):
     print(' sigint')

class MODEL_BASE:
    def __init__(self):
        self.name = 'model_base'
        self.datetimeFr = datetime.now()
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

    def print_model_info(self, model):
        print(' ')
        for i, layer in enumerate(model.layers):
            print(i, layer.name, layer.output_shape, layer)
        print(' ')
        print(' ')

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

    def print_weights(self, model):
        weights = model.weights
        for weight in weights:
            print(weight)
            print(' ')
            
    def plot(self, model):
        keras.utils.plot_model(model, to_file='model.png', show_shapes=True, show_layer_names=True)
        
    #--- https://deepinout.com/pandas/pandas-questions/786_pandas_hdf5_concurrency_compression_io_performance.html
    def print_hd5(self, filename = './save/mnist_dense.h5'):
        store = pd.HDFStore(filename, 'r')
        store.open('r')
        # keys = store.keys('native')
        keys = [
            n._v_pathname for n in store._handle.walk_nodes("/", "Array")
        ]
        for key in keys:
            node = store.get_node(key)
            print(node)
            
            # print(store.get(key))
            # print(store.select(key))

            # print(node.__dict__)
            # print(getattr(node, "atom", None))
            # print(getattr(node, "_v_attrs", None))

        store.close()
