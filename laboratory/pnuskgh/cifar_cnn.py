""" 
    Deep Learning

    @file laboratory/pnuskgh/mnist_cnn.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

from datetime import datetime
import tensorflow as tf
from tensorflow import keras

from mnist_dense import MNIST_DENSE

#--- python laboratory/pnuskgh/mnist_cnn.py
class CIFAR_CNN(MNIST_DENSE):
    def __init__(self):
        super().__init__()

        self.name = 'cifar_cnn'
        
    def load_data(self):
        pass

    def build_model(self, optimizer, loss_function, metric, modelType = 'default', allowLoad = True):
        model = None
        if (allowLoad):
            model = self.load_model()
        if (model != None):
            self.load_weights(model)
        else:
            if (modelType == 'default'):
                model = self.build_model_196()
            else:
                model = self.build_model_196()

        model.summary()
        model.compile(optimizer=optimizer, loss=loss_function, metrics=[ metric ])
        self.save_model(model)
        self.model = model

    def build_model_196(self):
        pass

if __name__ == "__main__":
    appl = CIFAR_CNN()
    appl.load_data()
    appl.build_model(keras.optimizers.Adam(), 'categorical_crossentropy', 'accuracy', 'page_187', False)
    appl.process_model(5, 128, 1, 0.95, False)
