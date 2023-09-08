""" 
    Deep Learning

    @file laboratory/pnuskgh/mnist_gan.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

import os
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime
import tensorflow as tf
from tensorflow import keras
from tqdm import tqdm

#--- python  laboratory/pnuskgh/mnist_gan.py
class MNIST_GAN():
    def __init__(self, rows, cols, channels, latent_dim=100):
        self.img_rows = rows
        self.img_cols = cols
        self.channels = channels
        self.img_shape = (self.img_rows, self.img_cols, self.channels)

        self.latent_dim = latent_dim                        #--- 생성기의 input으로 사용할 난수의 갯수
        
    def load_data(self):
        mnist = keras.datasets.mnist
        (x_train, y_train), (x_test, y_test) = mnist.load_data()                #--- 60,000/10,000개 데이터 (28 * 28)
        x_train = x_train.reshape(x_train.shape[0], 28, 28, 1).astype('float32')
        self.x_train = (x_train - 127.5) / 127.5
        self.train_dataset = tf.data.Dataset.from_tensor_slices(x_train).shuffle(len(x_train)).batch(256)
        
        # x_train = x_train / 127.5 - 1.0                     #--- [-1, 1]로 정규화
        # self.x_train = np.expand_dims(x_train, axis=3)
        
    def build_model(self):
        self.optimizer_generator = keras.optimizers.Adam(1e-4)
        self.optimizer_discriminator = keras.optimizers.Adam(1e-4)
        
        #--- 판별기 구성
        self.discriminator = self.build_model_discriminator()
        self.discriminator.compile(loss='binary_crossentropy', optimizer=self.optimizer_discriminator, metrics=['accuracy'])
        
        #--- 생성기 구성
        self.generator = self.build_model_generator()
        
        #--- GAN 모델 (generator와 discriminator가 결합된 모델) 구성
        ganInput = keras.Input(shape=(self.latent_dim,))    #--- Keras tensor 초기화
        ganImage = self.generator(ganInput)
        self.discriminator.trainable = False                #--- True. 학습
        genValid = self.discriminator(ganImage)
        self.gan = keras.Model(ganInput, genValid)
        self.gan.compile(loss='binary_crossentropy', optimizer=self.optimizer_generator)
    
    #--- 생성기
    def build_model_generator(self):
        model = keras.models.Sequential()
        model.add(keras.layers.Dense(128 * 7 * 7, activation='relu', input_dim=self.latent_dim))
        model.add(keras.layers.Reshape((7, 7, 128)))
        model.add(keras.layers.UpSampling2D())
        
        model.add(keras.layers.Conv2D(128, kernel_size=3, padding='same'))
        model.add(keras.layers.BatchNormalization(momentum=0.8))
        model.add(keras.layers.Activation('relu'))
        model.add(keras.layers.UpSampling2D())
        
        model.add(keras.layers.Conv2D(64, kernel_size=3, padding='same'))
        model.add(keras.layers.BatchNormalization(momentum=0.8))
        model.add(keras.layers.Activation('relu'))

        model.add(keras.layers.Conv2D(self.channels, kernel_size=3, padding='same'))
        model.add(keras.layers.Activation('tanh'))
        model.summary()
        
        noise = keras.Input(shape=(self.latent_dim,))
        img = model(noise)
        return keras.Model(noise, img)
        
    def build_model_generator_dense(self):
        model = keras.models.Sequential()
        model.add(keras.layers.Dense(256, input_dim=self.latent_dim))
        model.add(keras.layers.LeakyReLU(0.2))
        
        model.add(keras.layers.Dense(512))
        model.add(keras.layers.LeakyReLU(0.2))
        
        model.add(keras.layers.Dense(1024))
        model.add(keras.layers.LeakyReLU(0.2))
        
        model.add(keras.layers.Dense(self.img_shape, activation='tanh'))
        return model
        
    #--- 판별기
    def build_model_discriminator(self):
        model = keras.models.Sequential()
        model.add(keras.layers.Conv2D(32, kernel_size=3, strides=2, input_shape=self.img_shape, padding='same'))
        model.add(keras.layers.LeakyReLU(alpha=0.2))
        model.add(keras.layers.Dropout(0.25))
        
        model.add(keras.layers.Conv2D(64, kernel_size=3, strides=2, padding='same'))
        model.add(keras.layers.ZeroPadding2D(padding=((0,1), (0,1))))
        model.add(keras.layers.BatchNormalization(momentum=0.8))
        model.add(keras.layers.LeakyReLU(alpha=0.2))
        model.add(keras.layers.Dropout(0.25))
        
        model.add(keras.layers.Conv2D(128, kernel_size=3, strides=2, padding='same'))
        model.add(keras.layers.BatchNormalization(momentum=0.8))
        model.add(keras.layers.LeakyReLU(alpha=0.2))
        model.add(keras.layers.Dropout(0.25))
        
        model.add(keras.layers.Conv2D(256, kernel_size=3, strides=1, padding='same'))
        model.add(keras.layers.BatchNormalization(momentum=0.8))
        model.add(keras.layers.LeakyReLU(alpha=0.2))
        model.add(keras.layers.Dropout(0.25))
        
        model.add(keras.layers.Flatten())
        model.add(keras.layers.Dense(1, activation='sigmoid'))
        model.summary()
        
        img = keras.Input(shape=self.img_shape)
        validity = model(img)
        return keras.Model(img, validity)

    def build_model_discriminator_dense(self):
        model = keras.models.Sequential()
        model.add(keras.layers.Dense(1024, input_dim=self.image_sharp))
        model.add(keras.layers.LeakyReLU(0.2))
        model.add(keras.layers.Dropout(0.3))
        
        model.add(keras.layers.Dense(512))
        model.add(keras.layers.LeakyReLU(0.2))
        model.add(keras.layers.Dropout(0.3))
        
        model.add(keras.layers.Dense(256))
        model.add(keras.layers.LeakyReLU(0.2))
        model.add(keras.layers.Dropout(0.3))
        
        model.add(keras.layers.Dense(1, activation='sigmoid'))                  #--- 1. 진짜 이미지, 0. 가짜 이미지
        return model
    
    def train(self, epochs, batch_size=256, save_interval=5):
        self.input_noise = tf.random.normal([16, self.latent_dim])
        dataset = self.train_dataset
        for epoch in tqdm(range(epochs)):

            for image_batch in dataset:
                self.train_step(image_batch, batch_size)
            
            if (epoch % save_interval == 0):
                self.save_images(epoch)
                
    #@tf.function
    def train_step(self, images, BATCH_SIZE):
        cross_entropy = keras.losses.BinaryCrossentropy(from_logits=True)
        
        noise = tf.random.normal([BATCH_SIZE, self.latent_dim])
        with tf.GradientTape() as gen_tape, tf.GradientTape() as disc_tape:
            images_fake = self.generator(noise, training=True)

            real_output = self.discriminator(images, training=True)
            fake_output = self.discriminator(images_fake, training=True)

            gen_loss = cross_entropy(tf.ones_like(fake_output), fake_output)
            real_loss = cross_entropy(tf.ones_like(real_output), real_output)
            fake_loss = cross_entropy(tf.zeros_like(fake_output), fake_output)
            disc_loss = real_loss + fake_loss

        gradients_of_generator = gen_tape.gradient(gen_loss, self.generator.trainable_variables)
        gradients_of_discriminator = disc_tape.gradient(disc_loss, self.discriminator.trainable_variables)

        self.optimizer_generator.apply_gradients(zip(gradients_of_generator, self.generator.trainable_variables))
        self.optimizer_discriminator.apply_gradients(zip(gradients_of_discriminator, self.discriminator.trainable_variables))
          
    # def train(self, epochs=4000, batchSize=256, save_interval=50):
    #     real = np.ones((batchSize, 1))
    #     fake = np.zeros((batchSize, 1))
        
    #     for epoch in range(1, epochs + 1):
    #         #--- 진짜 이미지를 random하게 가져 온다.
    #         imgIndex = np.random.randint(0, self.x_train.shape[0], size=batchSize)
    #         images_real = self.x_train[imgIndex]

    #         #--- 가짜 이미지를 생성 한다.
    #         noise = np.random.normal(0, 1, size=[batchSize, self.latent_dim])
    #         images_fake = self.generator.predict(noise)
            
    #         #--- 판별기를 훈련 한다.
    #         # self.discriminator.trainable = True         #--- True. 학습
    #         d_loss_real = self.discriminator.train_on_batch(images_real, real)
    #         d_loss_fake = self.discriminator.train_on_batch(images_fake, fake)
    #         d_loss = 0.5 * np.add(d_loss_real, d_loss_fake)
            
    #         #--- 생성기를 훈련 한다.
    #         # self.discriminator.trainable = False        #--- True. 학습
    #         g_loss = self.gan.train_on_batch(noise, real)
            
    #         print(f'epoch: {epoch}, loss: {d_loss[0]}, acc.: {d_loss[1] * 100:.2f}, g_loss: {g_loss}')
            
    #         if (epoch % save_interval == 0):
    #             self.save_images(epoch)
                
    # def save_images(self, epoch):
    #     r, c = 5, 5
    #     noise = np.random.normal(0, 1, size=[r * c, self.latent_dim])
    #     images_fake = self.generator(noise, training=False)
        
    #     fig, axs = plt.subplots(r, c)
    #     cnt = 0
    #     for i in range(r):
    #         for j in range(c):
    #             axs[i, j].imshow(images_fake[cnt, :, :, 0], cmap='gray')
    #             axs[i, j].axis('off')
    #             cnt = cnt + 1
        
    #     fig.savefig(f'{self.foldername}/epoch_{epoch}.png')
    #     plt.close
        
    def save_images(self, epoch):
        r, c = 4, 4
        images_fake = self.generator(self.input_noise, training=False)

        fig = plt.figure(figsize=(4, 4))

        for i in range(images_fake.shape[0]):
            plt.subplot(4, 4, i+1)
            plt.imshow(images_fake[i, :, :, 0] * 127.5 + 127.5, cmap='gray')
            plt.axis('off')
        fig.savefig(f'{self.foldername}/epoch_{epoch}.png')
        plt.close()
        
    def save_images_dense(self, epoch, examples=100, dim=(10, 10), figsize=(10, 10)):
        noise = np.random.normal(0, 1, size=[examples, self.latent_dim])
        images_fake = self.generator.predict(noise)
        images_fake = images_fake.reshape(examples, 28, 28)
        
        plt.figure(figsize=figsize)
        for i in range(images_fake.shape[0]):
            plt.subplot(dim[0], dim[1], i + 1)
            plt.imshow(images_fake[i], interpolation='nearest', cmap='gray_r')
            plt.axis('off')
        plt.tight_layout()
        plt.savefig(f'{self.foldername}/mnist_gan_image_epoch_{epoch}.png')
        
    def plotLoss(self, epoch, dLosses, gLosses):
        plt.figure(figsize=(10, 8))
        plt.plot(dLosses, label='Discriminative_loss')
        plt.plot(gLosses, label="Generative loss")
        plt.xlabel('Epoch')
        plt.ylabel('Loss')
        plt.legend()
        plt.savefig(f'{self.foldername}/mnist_gan_loss_epoch_{epoch}.png')
        
    def makeFolder(self):
        self.folder = datetime.now().strftime("%Y%m%d_%H%M%S")
        self.foldername = os.path.dirname(__file__).replace('\\', '/')
        self.foldername = f"{self.foldername}/output/mnist_gan_{self.folder}"
        if (os.path.exists(self.foldername) == False):
            os.makedirs(self.foldername)

if __name__ == "__main__":
    appl = MNIST_GAN(28, 28, 1)
    appl.load_data()
    appl.build_model()

    appl.makeFolder()
    appl.train(epochs=50)
