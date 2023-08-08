""" 
    Deep Learning

    @file laboratory/pnuskgh/mnist_autoencoder.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

#--- python  laboratory/pnuskgh/mnist_autoencoder.py

import numpy as np
import tensorflow as tf
from tensorflow import keras
import matplotlib.pyplot as plt

np.random.seed(11)
tf.random.set_seed(11)
batch_size = 256
max_epochs = 50
learning_rate = 1e-3
momentum = 8e-1
hidden_dim = 128
original_dim = 784

#--- 데이터 준비
(x_train, _), (x_test, _) = keras.datasets.mnist.load_data()
x_train = (x_train / 255.0).astype(np.float32)
x_test = (x_test / 255.0).astype(np.float32)
x_train = np.reshape(x_train, (x_train.shape[0], 784))
x_test = np.reshape(x_test, (x_test.shape[0], 784))
training_dataset = tf.data.Dataset.from_tensor_slices(x_train).batch(batch_size=batch_size)

class Encoder(keras.layers.Layer):
    def __init__(self, hidden_dim):
        super(Encoder, self).__init__()
        self.hidden_layer = keras.layers.Dense(units=hidden_dim, activation=tf.nn.relu)
        
    def call(self, input_features):
        activation = self.hidden_layer(input_features)
        return activation

class Decoder(keras.layers.Layer):
    def __init__(self, hidden_dim, original_dim):
        super(Decoder, self).__init__()
        self.output_layer = keras.layers.Dense(units=original_dim, activation=tf.nn.relu)
        
    def call(self, encoded):
        activation = self.output_layer(encoded)
        return activation
    
class Autoencoder(keras.Model):
    def __init__(self, hidden_dim, original_dim):
        super(Autoencoder, self).__init__()
        self.loss = []
        self.encoder = Encoder(hidden_dim=hidden_dim)
        self.decoder = Decoder(hidden_dim=hidden_dim, original_dim=original_dim)
        
    def call(self, input_features):
        encoded = self.encoder(input_features)
        reconstructed = self.decoder(encoded)
        return reconstructed

def train(model, loss, opt, dataset, epochs=20):
    for epoch in range(epochs):
        epoch_loss = 0
        for images in dataset:
            with tf.GradientTape() as tape:
                #--- Model 실행
                preds = model(images)                                       
                
                #--- Loss 계산
                loss_values = loss(preds, images)
                
                #--- Optimizer 업데이트
                gradients = tape.gradient(loss_values, model.trainable_variables)
            opt.apply_gradients(zip(gradients, model.trainable_variables))
            
            epoch_loss = epoch_loss + loss_values
        print(f'Epoch {epoch + 1:2d}/{epochs}, Loss: {epoch_loss.numpy():.2f}')
        model.loss.append(epoch_loss)

#--- Training
autoencoder = Autoencoder(hidden_dim=hidden_dim, original_dim=original_dim)
optimizer = tf.keras.optimizers.Adam(learning_rate=1e-2)
def loss_function(preds, real):
    return tf.reduce_mean(tf.square(tf.subtract(preds, real)))
train(autoencoder, loss_function, optimizer, training_dataset, epochs=max_epochs)

plt.plot(range(max_epochs), autoencoder.loss)
plt.xlabel('Epochs')
plt.ylabel('Loss')
plt.show()

number = 10
plt.figure(figsize=(20, 4))
for index in range(number):
    ax = plt.subplot(2, number, index + 1)
    plt.imshow(x_test[index].reshape(28, 28), cmap='gray')
    ax.get_xaxis().set_visible(False)
    ax.get_yaxis().set_visible(False)

    ax = plt.subplot(2, number, index + 1 + number)
    plt.imshow(autoencoder(x_test)[index].numpy().reshape(28, 28), cmap='gray')
    ax.get_xaxis().set_visible(False)
    ax.get_yaxis().set_visible(False)
plt.show()
