""" 
    Denst with mnist

    @file laboratory/pnuskgh/mnist_dense.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

from datetime import datetime
from tensorflow import keras

from model_base import MODEL_BASE

#--- conda  activate  py310
#--- python  laboratory/pnuskgh/mnist_dense.py
class MNIST_DENSE(MODEL_BASE):
    def __init__(self):
        super().__init__()

        self.name = 'mnist_dense'
        
    def initialize(self):
        super().initialize()
        
        self.nb_classes = 10                                                    #--- 분류 갯수

    def load_data(self):
        mnist = keras.datasets.mnist
        (x_train, y_train), (x_test, y_test) = mnist.load_data()                #--- 60,000/10,000개 데이터 (28 * 28)

        x_train = x_train.reshape(60000, 28 * 28).astype("float32")             #--- 행렬 (28 * 28)
        x_test = x_test.reshape(10000, 28 * 28).astype("float32")

        self.x_train = x_train / 255                                      #--- Normalize
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
            else:
                model = self.build_model_dense()

        model.summary()
        model.compile(optimizer=optimizer, loss=loss_function, metrics=[ metric ])
        self.save_model(model)
        self.model = model
    
    def build_model_default(self):                           #--- Accuracy: 92.58%
        reshaped = 28 * 28                                  #--- 행열(28 * 28)을 벡터(784 * 1)로 변환
        model = keras.models.Sequential()
        model.add(keras.layers.Dense(self.nb_classes, input_shape=(reshaped,), activation='softmax'))
        return model
        
    def build_model_dense(self):                            #--- Accuracy: 97.92%
        reshaped = 28 * 28                                  #--- 행열(28 * 28)을 벡터(784 * 1)로 변환
        n_hidden = 128
        dropout = 0.3

        model = keras.models.Sequential()
        model.add(keras.layers.Dense(n_hidden, input_shape=(reshaped,), activation='relu'))
        model.add(keras.layers.Dropout(dropout))
        model.add(keras.layers.Dense(n_hidden, activation='relu'))
        model.add(keras.layers.Dropout(dropout))
        model.add(keras.layers.Dense(self.nb_classes, activation='softmax'))
        return model

    def process_model(self, epochs, batch_size, verbose, validation_split, allowTensorBoard = False):
        history = self.model.fit(self.x_train, self.y_train,     #--- 학습
            epochs=epochs, batch_size=batch_size, 
            verbose=verbose,
            validation_split=validation_split,
            callbacks=[ keras.callbacks.TensorBoard(log_dir=self.tensorboard_folder) ]
        )
        print(' ')
        self.save_weights(self.model)

        test_loss, test_acc = self.model.evaluate(self.x_test, self.y_test)  #--- 평가
        print(' ')

        print(self.datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        print(' ')
        
        # predictions = self.model.predict(slee.x_test)            #--- 예측
        # print("Predictions:", predictions)

        if (allowTensorBoard):
            self.run_tensorboard()

if __name__ == "__main__":
    appl = MNIST_DENSE()
    appl.load_data()
    appl.build_model('Adam', 'categorical_crossentropy', 'accuracy', 'default', False)
    appl.process_model(35, 512, 1, 0.2, True)
