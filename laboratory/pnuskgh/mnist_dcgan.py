""" 
    Deep Learning

    @file laboratory/pnuskgh/mnist_dcgan.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

#--- python  laboratory/pnuskgh/mnist_dcgan.py
import os
from datetime import datetime

from tensorflow.keras.datasets import mnist
from tensorflow.keras.layers import Input, Dense, Reshape, Flatten, Dropout
from tensorflow.keras.layers import BatchNormalization, Activation, ZeroPadding2D
from tensorflow.keras.layers import LeakyReLU, Conv2DTranspose
from tensorflow.keras.layers import UpSampling2D, Conv2D
from tensorflow.keras.models import Sequential, Model
from tensorflow.keras.optimizers import Adam
import tensorflow as tf
from tensorflow import keras

import matplotlib.pyplot as plt

import sys

import numpy as np
from tqdm import tqdm

print(tf.__version__)
folder = datetime.now().strftime("%Y%m%d_%H%M%S")
foldername = os.path.dirname(__file__).replace('\\', '/')
foldername = f"{foldername}/output/mnist_dcgan_{folder}"
if (os.path.exists(foldername) == False):
    os.makedirs(foldername)

num_of_samples = 16
latent_dim = 100
epochs = 50
batch_size = 256

input_noise = tf.random.normal([16, latent_dim])
# binary_cross_entropy = keras.losses.BinaryCrossentropy(from_logits=True)
# def discriminator_loss(real_output, fake_output):
#     real_loss = binary_cross_entropy(tf.ones_like(real_output), real_output)
#     fake_loss = binary_cross_entropy(tf.zeros_like(fake_output), fake_output)
#     total_loss = real_loss + fake_loss
#     return total_loss

# def generator_loss(fake_output):
#     return binary_cross_entropy(tf.ones_like(fake_output), fake_output)

class DCGAN():
    def __init__(self, rows, cols, channels, latent_dim = 100):
        self.img_rows = rows
        self.img_cols = cols
        self.channels = channels
        self.img_shape = (self.img_rows, self.img_cols, self.channels)
        self.latent_dim = latent_dim

        self.discriminator = self.build_discriminator()

        self.generator = self.build_generator()

    def build_generator(self):
        model = Sequential()
        model.add(Dense(128 * 7 * 7, activation="relu", input_dim=self.latent_dim))
        model.add(Reshape((7, 7, 128)))
        model.add(UpSampling2D())
        
        model.add(Conv2D(128, kernel_size=3, padding="same"))
        model.add(BatchNormalization(momentum=0.8))
        model.add(Activation("relu"))
        model.add(UpSampling2D())
        
        model.add(Conv2D(64, kernel_size=3, padding="same"))
        model.add(BatchNormalization(momentum=0.8))
        model.add(Activation("relu"))
        
        model.add(Conv2D(self.channels, kernel_size=3, padding="same"))
        model.add(Activation("tanh"))
        model.summary()

        noise = Input(shape=(self.latent_dim,))
        img = model(noise)
        return Model(noise, img)

    def build_discriminator(self):
        model = Sequential()
        model.add(Conv2D(32, kernel_size=3, strides=2, input_shape=self.img_shape, padding="same"))
        model.add(LeakyReLU(alpha=0.2))
        model.add(Dropout(0.25))
        
        model.add(Conv2D(64, kernel_size=3, strides=2, padding="same"))
        model.add(ZeroPadding2D(padding=((0,1),(0,1))))
        model.add(BatchNormalization(momentum=0.8))
        model.add(LeakyReLU(alpha=0.2))
        model.add(Dropout(0.25))
        
        model.add(Conv2D(128, kernel_size=3, strides=2, padding="same"))
        model.add(BatchNormalization(momentum=0.8))
        model.add(LeakyReLU(alpha=0.2))
        model.add(Dropout(0.25))
        
        model.add(Conv2D(256, kernel_size=3, strides=1, padding="same"))
        model.add(BatchNormalization(momentum=0.8))
        model.add(LeakyReLU(alpha=0.2))
        model.add(Dropout(0.25))
        
        model.add(Flatten())
        model.add(Dense(1, activation='sigmoid'))
        model.summary()

        img = Input(shape=self.img_shape)
        validity = model(img)
        return Model(img, validity)

    def train(self, dataset, epochs, batch_size=256, save_interval=50):
        binary_cross_entropy = keras.losses.BinaryCrossentropy()
        generator_optimizer = keras.optimizers.Adam(1e-4)
        discriminator_optimizer = keras.optimizers.Adam(1e-4)
        
        for epoch in tqdm(range(epochs)):
            for images_real in dataset:
                noise = tf.random.normal([batch_size, self.latent_dim])

                #--- with 구문 : 변수를 생성하고, 시작시 __enter__ 함수를 실행하고 종료시 __exit__ 함수를 실행 한다.
                with tf.GradientTape() as gen_tape, tf.GradientTape() as disc_tape:
                    images_fake = self.generator(noise, training=True)

                    real_output = self.discriminator(images_real, training=True)
                    fake_output = self.discriminator(images_fake, training=True)

                    gen_loss = binary_cross_entropy(tf.ones_like(fake_output), fake_output)
                    real_loss = binary_cross_entropy(tf.ones_like(real_output), real_output)
                    fake_loss = binary_cross_entropy(tf.zeros_like(fake_output), fake_output)
                    disc_loss = real_loss + fake_loss

                gradients_of_generator = gen_tape.gradient(gen_loss, self.generator.trainable_variables)
                gradients_of_discriminator = disc_tape.gradient(disc_loss, self.discriminator.trainable_variables)

                generator_optimizer.apply_gradients(zip(gradients_of_generator, self.generator.trainable_variables))
                discriminator_optimizer.apply_gradients(zip(gradients_of_discriminator, self.discriminator.trainable_variables))

            if (epoch + 1) % save_interval == 0:
                self.save_imgs(epoch + 1)

    def save_imgs(self, epoch):
        r, c = 4, 4
        gen_imgs = self.generator(input_noise, training=False)

        fig = plt.figure(figsize=(4, 4))

        for i in range(gen_imgs.shape[0]):
            plt.subplot(4, 4, i+1)
            plt.imshow(gen_imgs[i, :, :, 0] * 127.5 + 127.5, cmap='gray')
            plt.axis('off')
        fig.savefig(f'{foldername}/epoch_{epoch}.png')
        plt.close()

(X_train, _), (_, _) = mnist.load_data()
X_train = X_train.reshape(X_train.shape[0], 28, 28, 1).astype('float32')
X_train = (X_train - 127.5) / 127.5

train_dataset = tf.data.Dataset.from_tensor_slices(X_train).shuffle(len(X_train)).batch(batch_size)

dcgan = DCGAN(28, 28, 1)
dcgan.train(train_dataset, epochs=epochs, batch_size=batch_size, save_interval=5)
