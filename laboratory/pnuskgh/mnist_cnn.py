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
class MNIST_CNN(MNIST_DENSE):
    def __init__(self):
        super().__init__()

        self.name = 'mnist_cnn'
        
    def initialize(self):
        super().initialize();

        self.loss_function = 'categorical_crossentropy'
        self.optimizer = tf.keras.optimizers.Adam()
        self.metrics = 'accuracy'
        
        self.epochs = 15                                                        #--- 훈련 집합 횟수
        self.batch_size = 128                                                   #--- 훈련 집합당 훈련 횟수
        self.validation_split = 0.9                                             #--- 검증용 데이터 (20%)
        self.nb_classes = 10                                                    #--- 분류 갯수
        self.n_hidden = 128
        self.dropout = 0.3

    def load_data(self):
        mnist = keras.datasets.mnist
        (x_train, y_train), (x_test, y_test) = mnist.load_data()                #--- 60,000/10,000개 데이터 (28 * 28)

        x_train = x_train.reshape(60000, 28, 28, 1)
        x_test = x_test.reshape(10000, 28, 28, 1)
        x_train = x_train.astype("float32")
        x_test = x_test.astype("float32")

        x_train /= 255                                                          #--- Normalize
        x_test /= 255

        y_train = tf.keras.utils.to_categorical(y_train, self.nb_classes)
        y_test = tf.keras.utils.to_categorical(y_test, self.nb_classes)
        return (x_train, y_train), (x_test, y_test)

    def build_model(self):
        model = self.load_model()
        if (model != None):
            self.load_weights(model)
        else:        
            IMG_ROWS, IMG_COLS = 28, 28
            input_shape = (IMG_ROWS, IMG_COLS, 1)

            model = tf.keras.models.Sequential()            #--- 모델 : Sequential
            model.add(keras.layers.Conv2D(20, (5, 5), activation='relu', input_shape=input_shape))
            model.add(keras.layers.BatchNormalization())
            model.add(keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(2, 2)))
            # model.add(keras.layers.ZeroPadding2D(1, 1))
            model.add(keras.layers.Dropout(self.dropout))

            model.add(keras.layers.Conv2D(50, (5, 5), activation='relu'))
            model.add(keras.layers.BatchNormalization())
            model.add(keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(2, 2)))
            model.add(keras.layers.Dropout(self.dropout))

            model.add(keras.layers.Flatten())
            # model.add(keras.layers.Dense(500, activation='relu'))
            model.add(keras.layers.Dense(self.nb_classes, activation="softmax"))

        model.compile(
            optimizer=self.optimizer,                       #--- Optimizer
            loss=self.loss_function,                        #--- Loss Function
            metrics=[ self.metrics ],                       #--- Matric
        )
        model.summary()
        self.save_model(model)
        return model
    
    # def process_model(self, model, x_train, y_train, x_test, y_test):
    #     super().process_model(self, model, x_train, y_train, x_test, y_test)

if __name__ == "__main__":
    datetimeFr = datetime.now()
    deep_learning = MNIST_CNN()
    deep_learning.initialize()
    
    (x_train, y_train), (x_test, y_test) = deep_learning.load_data()
    model = deep_learning.build_model()
    deep_learning.process_model(model, x_train, y_train, x_test, y_test)

    print(' ')
    print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
    print(datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    deep_learning.run_tensorboard()
