""" 
    Deep Learning

    @file laboratory/pnuskgh/mnist_cnn.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

from tensorflow import keras

from mnist_dense import MNIST_DENSE

#--- python laboratory/pnuskgh/mnist_cnn.py
class MNIST_CNN(MNIST_DENSE):
    def __init__(self):
        super().__init__()

        self.name = 'mnist_cnn'
        
    def load_data(self):
        mnist = keras.datasets.mnist
        (x_train, y_train), (x_test, y_test) = mnist.load_data()                #--- 60,000/10,000개 데이터 (28 * 28)

        x_train = x_train.reshape(60000, 28, 28, 1).astype("float32") 
        x_test = x_test.reshape(10000, 28, 28, 1).astype("float32")

        self.x_train = x_train / 255                                                          #--- Normalize
        self.x_test = x_test / 255

        self.y_train = keras.utils.to_categorical(y_train, self.nb_classes)
        self.y_test = keras.utils.to_categorical(y_test, self.nb_classes)

    def build_model(self, optimizer, loss_function, metric, modelType = 'default', allowLoad = True):
        model = None
        if (allowLoad):
            model = self.load_model()
        if (model != None):
            self.load_weights(model)
        else:
            if (modelType == 'default'):
                model = self.build_model_default()
            elif (modelType == 'default2'):
                model = self.build_model_default2()
            else:
                model = self.build_model_187()

        model.summary()
        model.compile(optimizer=optimizer, loss=loss_function, metrics=[ metric ])
        self.save_model(model)
        self.model = model
        
    def build_model_default(self):
        IMG_ROWS, IMG_COLS = 28, 28
        input_shape = (IMG_ROWS, IMG_COLS, 1)
        dropout = 0.3

        model = keras.models.Sequential()               #--- 모델 : Sequential
        model.add(keras.layers.Conv2D(20, (5, 5), activation='relu', input_shape=input_shape))
        model.add(keras.layers.BatchNormalization())
        model.add(keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(2, 2)))
        # model.add(keras.layers.ZeroPadding2D(1, 1))
        model.add(keras.layers.Dropout(dropout))

        model.add(keras.layers.Conv2D(50, (5, 5), activation='relu'))
        model.add(keras.layers.BatchNormalization())
        model.add(keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(2, 2)))
        model.add(keras.layers.Dropout(dropout))

        model.add(keras.layers.Flatten())
        # model.add(keras.layers.Dense(500, activation='relu'))
        model.add(keras.layers.Dense(self.nb_classes, activation="softmax"))
        return model
    
    def build_model_default2(self):
        inputs = keras.Input(shape=(28, 28, 1))
        x = keras.layers.Conv2D(filters=32, kernel_size=(3, 3), activation='relu')(inputs)
        x = keras.layers.MaxPooling2D(pool_size=(2, 2), strides=2)(x)
        x = keras.layers.Conv2D(filters=64, kernel_size=(3, 3), activation='relu')(x)
        x = keras.layers.MaxPooling2D(pool_size=(2, 2), strides=2)(x)
        x = keras.layers.Conv2D(filters=64, kernel_size=(3, 3), activation='relu')(x)
        
        x = keras.layers.Flatten()(x)
        x = keras.layers.Dense(64, activation='relu')(x)
        predictions = keras.layers.Dense(self.nb_classes, activation='softmax')(x)
        model = keras.Model(inputs=inputs, outputs=predictions)
        return model

    def build_model_187(self):
        IMG_ROWS, IMG_COLS = 28, 28
        input_shape = (IMG_ROWS, IMG_COLS, 1)

        model = keras.models.Sequential()
        model.add(keras.layers.Conv2D(20, (5, 5), activation='relu', input_shape=input_shape))
        model.add(keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(2, 2)))

        model.add(keras.layers.Conv2D(50, (5, 5), activation='relu'))
        model.add(keras.layers.MaxPooling2D(pool_size=(2, 2), strides=(2, 2)))

        model.add(keras.layers.Flatten())
        model.add(keras.layers.Dense(500, activation="relu"))
        model.add(keras.layers.Dense(self.nb_classes, activation="softmax"))
        return model

if __name__ == "__main__":
    appl = MNIST_CNN()
    appl.load_data()
    appl.build_model(keras.optimizers.Adam(), 'categorical_crossentropy', 'accuracy', 'page_187', False)
    appl.process_model(20, 128, 1, 0.95, False)
