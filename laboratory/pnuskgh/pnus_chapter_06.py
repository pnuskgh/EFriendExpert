""" 
    GAN (Generative Adversarial Networks, 생성적 적대 신경망)

    @file laboratory/pnuskgh/pnus_chapter_06.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

#--- cd  /work/EFriendExpert
#--- conda  activate  py310
#--- python laboratory/pnuskgh/pnus_chapter_06.py

import os
import time
import numpy as np
from datetime import datetime
import tensorflow as tf
from tensorflow import keras
from tqdm import tqdm

#--- https://scikit-image.org/docs/stable/auto_examples/transform/plot_rescale.html
# from skimage.transform import rescale, resize, downscale_local_mean
# import imageio.v2 as imageio
# import PIL
import cv2
import matplotlib.pyplot as plt

from model_base import MODEL_BASE

class GAN(MODEL_BASE):
    def __init__(self):
        super().__init__()
        
        self.title = 'GAN (Generative Adversarial Networks, 생성적 적대 신경망)'
        self.name = 'gan'
        self.model = None
        
        self.functions = [
            #--- pppqqq
            # ['gan_dense', self.run_287_293, '(??초, 200 * 128), GAN with Dense'],
            # ['dcgan', self.run_296_302, '(??초, 5000 * 256), DCGAN'],
            # ['cycelgan', self.run_316_327, '(??초,  * ), CycleGAN'],
            [],
            ['clear', self.cmd_clear_model, 'Model 삭제'],
            ['list', self.cmd_list_model, '저장된 Model 목록 보기'],
            ['save', self.cmd_save_model, 'Model 저장'],
            ['load', self.cmd_load_model, 'Model 불러오기'],
            ['summary', self.cmd_summary, 'Model Summary'],
            ['tensorboard', self.cmd_tensorboard, 'Tensorboard 표시'],
        ]
        
    def initialize(self):
        super().initialize()
        
    def run_287_293(self):
        self.name = 'gan_287_293'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        EPOCHS = 200
        BATCH_SIZE = 128
        ROWS, COLS = 28, 28
        randomDim = 10
        latent_dim = 10
        
        np.random.seed(1000)
        
        mnist = keras.datasets.mnist
        (X_train, _), (_, _) = mnist.load_data()
        X_train = X_train.astype('float32')
        X_train = (X_train - 127.5) / 127.5                 #--- [-1, 1]로 정규화
        X_train = X_train.reshape(60000, ROWS * COLS)

        self.makeFolder()
        
        optimizer_generator = keras.optimizers.Adam(1e-4)
        optimizer_discriminator = keras.optimizers.Adam(1e-4)
        
        #--- 판별기 구성
        discriminator = self.discriminator_dense(ROWS * COLS)
        discriminator.compile(loss='binary_crossentropy', optimizer=optimizer_discriminator, metrics=['accuracy'])
        
        #--- 생성기 구성
        generator = self.generator_dense(latent_dim, ROWS * COLS)
        
        #--- GAN 모델 (generator와 discriminator가 결합된 모델) 구성
        ganInput = keras.Input(shape=(latent_dim,))     #--- Keras tensor 초기화
        ganImage = generator(ganInput)
        discriminator.trainable = False                 #--- True. 학습
        genValid = discriminator(ganImage)
        gan = keras.Model(ganInput, genValid)
        gan.compile(loss='binary_crossentropy', optimizer=optimizer_generator)

        dLosses = []
        gLosses = []

        real = np.ones((BATCH_SIZE, 1))
        fake = np.zeros((BATCH_SIZE, 1))
        
        for epoch in range(1, EPOCHS + 1):
            #--- 진짜 이미지를 random하게 가져 온다.
            imgIndex = np.random.randint(0, X_train.shape[0], size=BATCH_SIZE)
            images_real = X_train[imgIndex]

            #--- 가짜 이미지를 생성 한다.
            noise = np.random.normal(0, 1, size=[BATCH_SIZE, randomDim])
            images_fake = generator.predict(noise)
            
            #--- 판별기를 훈련 한다.
            discriminator.trainable = True                  #--- True. 학습
            d_loss_real = discriminator.train_on_batch(images_real, real)
            d_loss_fake = discriminator.train_on_batch(images_fake, fake)
            d_loss = 0.5 * np.add(d_loss_real, d_loss_fake)
            
            #--- 생성기를 훈련 한다.
            discriminator.trainable = False                 #--- True. 학습
            g_loss = gan.train_on_batch(noise, real)
            
            print(f'epoch: {epoch}, loss: {d_loss[0]}, acc.: {d_loss[1] * 100:.2f}, g_loss: {g_loss}')
        
            dLosses.append(d_loss)
            gLosses.append(g_loss)
            
            if ((epoch == 1) or (epoch % 20 == 0)):
                self.save_images_dense(generator, randomDim, epoch)
                self.plotLoss(epoch, dLosses, gLosses)

        datetimeTo = datetime.now()
        timeTo = time.time()
        
        print(' ')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')
                
    def generator_dense(self, latent_dim, img_shape):
        model = keras.models.Sequential()
        model.add(keras.layers.Dense(256, input_dim=latent_dim))
        model.add(keras.layers.LeakyReLU(0.2))
        
        model.add(keras.layers.Dense(512))
        model.add(keras.layers.LeakyReLU(0.2))
        
        model.add(keras.layers.Dense(1024))
        model.add(keras.layers.LeakyReLU(0.2))
        
        model.add(keras.layers.Dense(img_shape, activation='tanh'))
        return model
        
    def discriminator_dense(self, image_sharp):
        model = keras.models.Sequential()
        model.add(keras.layers.Dense(1024, input_dim=image_sharp))
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

    def save_images_dense(self, generator, randomDim, epoch, examples=100, dim=(10, 10), figsize=(10, 10)):
        noise = np.random.normal(0, 1, size=[examples, randomDim])
        images_fake = generator.predict(noise)
        images_fake = images_fake.reshape(examples, 28, 28)
        
        plt.figure(figsize=figsize)
        for i in range(images_fake.shape[0]):
            plt.subplot(dim[0], dim[1], i + 1)
            plt.imshow(images_fake[i], interpolation='nearest', cmap='gray_r')
            plt.axis('off')
        plt.tight_layout()
        plt.savefig(f'{self.foldername}/gan_image_epoch_{epoch}.png')

    def plotLoss(self, epoch, dLosses, gLosses):
        plt.figure(figsize=(10, 8))
        plt.plot(dLosses, label='Discriminative_loss')
        plt.plot(gLosses, label="Generative loss")
        plt.xlabel('Epoch')
        plt.ylabel('Loss')
        plt.legend()
        plt.savefig(f'{self.foldername}/gan_loss_epoch_{epoch}.png')

    def run_296_302(self):
        self.name = 'dcgan_296_302'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        EPOCHS = 20                # 5000
        BATCH_SIZE = 256
        ROWS, COLS = 28, 28
        latent_dim = 10
        
        np.random.seed(1000)
        
        mnist = keras.datasets.mnist
        (X_train, _), (_, _) = mnist.load_data()                #--- 60,000/10,000개 데이터 (28 * 28)
        X_train = X_train.reshape(X_train.shape[0], ROWS, COLS, 1).astype('float32')
        X_train = (X_train - 127.5) / 127.5
        train_dataset = tf.data.Dataset.from_tensor_slices(X_train).shuffle(len(X_train)).batch(256)
        
        self.makeFolder('dcgan')
        
        optimizer_generator = keras.optimizers.Adam(1e-4)
        optimizer_discriminator = keras.optimizers.Adam(1e-4)
        
        #--- 판별기 구성
        discriminator = self.discriminator_dcgan((28, 28, 1))
        discriminator.compile(loss='binary_crossentropy', optimizer=optimizer_discriminator, metrics=['accuracy'])
        
        #--- 생성기 구성
        generator = self.generator_dcgan(latent_dim, 1)
        
        #--- GAN 모델 (generator와 discriminator가 결합된 모델) 구성
        ganInput = keras.Input(shape=(latent_dim,))     #--- Keras tensor 초기화
        ganImage = generator(ganInput)
        discriminator.trainable = False                 #--- True. 학습
        genValid = discriminator(ganImage)
        gan = keras.Model(ganInput, genValid)
        gan.compile(loss='binary_crossentropy', optimizer=optimizer_generator)

        input_noise = tf.random.normal([16, latent_dim])
        dataset = train_dataset
        for epoch in tqdm(range(EPOCHS)):
            for images in dataset:
                cross_entropy = keras.losses.BinaryCrossentropy(from_logits=True)
                
                noise = tf.random.normal([BATCH_SIZE, latent_dim])
                with tf.GradientTape() as gen_tape, tf.GradientTape() as disc_tape:
                    images_fake = generator(noise, training=True)

                    real_output = discriminator(images, training=True)
                    fake_output = discriminator(images_fake, training=True)

                    gen_loss = cross_entropy(tf.ones_like(fake_output), fake_output)
                    real_loss = cross_entropy(tf.ones_like(real_output), real_output)
                    fake_loss = cross_entropy(tf.zeros_like(fake_output), fake_output)
                    disc_loss = real_loss + fake_loss

                gradients_of_generator = gen_tape.gradient(gen_loss, generator.trainable_variables)
                gradients_of_discriminator = disc_tape.gradient(disc_loss, discriminator.trainable_variables)

                optimizer_generator.apply_gradients(zip(gradients_of_generator, generator.trainable_variables))
                optimizer_discriminator.apply_gradients(zip(gradients_of_discriminator, discriminator.trainable_variables))
                
            
            if ((epoch + 1) % 5 == 0):
                self.save_images_dcgan(epoch, generator, input_noise)   
            
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        print(' ')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def generator_dcgan(self, latent_dim, channels):
        model = keras.models.Sequential()
        model.add(keras.layers.Dense(128 * 7 * 7, activation='relu', input_dim=latent_dim))
        model.add(keras.layers.Reshape((7, 7, 128)))
        model.add(keras.layers.UpSampling2D())
        
        model.add(keras.layers.Conv2D(128, kernel_size=3, padding='same'))
        model.add(keras.layers.BatchNormalization(momentum=0.8))
        model.add(keras.layers.Activation('relu'))
        model.add(keras.layers.UpSampling2D())
        
        model.add(keras.layers.Conv2D(64, kernel_size=3, padding='same'))
        model.add(keras.layers.BatchNormalization(momentum=0.8))
        model.add(keras.layers.Activation('relu'))

        model.add(keras.layers.Conv2D(channels, kernel_size=3, padding='same'))
        model.add(keras.layers.Activation('tanh'))
        model.summary()
        
        noise = keras.Input(shape=(latent_dim,))
        img = model(noise)
        return keras.Model(noise, img)
        
    def discriminator_dcgan(self, img_shape):
        model = keras.models.Sequential()
        model.add(keras.layers.Conv2D(32, kernel_size=3, strides=2, input_shape=img_shape, padding='same'))
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
        
        img = keras.Input(shape=img_shape)
        validity = model(img)
        return keras.Model(img, validity)
    
    def save_images_dcgan(self, epoch, generator, input_noise):
        rows, cols = 4, 4
        images_fake = generator(input_noise, training=False)

        fig = plt.figure(figsize=(rows, cols))

        for i in range(images_fake.shape[0]):
            plt.subplot(rows, cols, i + 1)
            plt.imshow(images_fake[i, :, :, 0] * 127.5 + 127.5, cmap='gray')
            plt.axis('off')
        fig.savefig(f'{self.foldername}/epoch_{epoch}.png')
        plt.close()
    
    def run_316_327(self):
        self.name = 'cyclegan_316_327'
        self.initialize()

        datetimeFr = datetime.now()
        timeFr = time.time()
        
        EPOCHS = 50
        BATCH_SIZE = 1
        BUFFER_SIZE = 1000
        IMG_WIDTH = 256
        IMG_HEIGHT = 256
        AUTOTUNE = tf.data.experimental.AUTOTUNE            #--- CPU의 갯수를 확인하여 최적화
        
        np.random.seed(1000)
        
        dataset, metadata = tf.data.Dataset.load('cycle_gan/summer2winter_yosemite', with_info=True, as_supervised=True)
        train_A, train_B = dataset['trainA'], dataset['trainB'] 
        test_A, test_B = dataset['testA'], dataset['testB'] 
        
        train_A = train_A.map(self.normalize, num_parallel_calls=AUTOTUNE).cache().shuffle(BUFFER_SIZE).batch(BATCH_SIZE)
        train_B = train_B.map(self.normalize, num_parallel_calls=AUTOTUNE).cache().shuffle(BUFFER_SIZE).batch(BATCH_SIZE)
        test_A  = test_A.map(self.normalize,  num_parallel_calls=AUTOTUNE).cache().shuffle(BUFFER_SIZE).batch(BATCH_SIZE)
        test_B  = test_B.map(self.normalize,  num_parallel_calls=AUTOTUNE).cache().shuffle(BUFFER_SIZE).batch(BATCH_SIZE)        
        
        inpA = next(iter(train_A))
        inpB = next(iter(train_B))
        plt.subplot(121)
        plt.title("Train Set A")
        plt.imshow(inpA[0]*0.5 + 0.5)
        plt.subplot(122)
        plt.title("Train Set B")
        plt.imshow(inpB[0]*0.5 + 0.5)
        
        generator = self.Generator()
        keras.utils.plot_model(generator, 'generator.png', show_shapes=True)
        generator.summary()
        
        gen_output = generator(inpA, training=False)
        gen_output = (gen_output + 1) / 2
        plt.imshow(gen_output[0])
        print(gen_output.shape, gen_output[0,...].numpy().max(), gen_output[0,...].numpy().min())

        discriminator = self.Discriminator()
        dis_output = discriminator(inpA, training=False)
        print(dis_output.shape)
        keras.utils.plot_model(discriminator, 'discriminator.png', show_shapes=True)

        discriminator_A = self.Discriminator()
        discriminator_B = self.Discriminator()

        generator_AB = self.Generator()
        generator_BA = self.Generator()
        
        valid = np.ones((BATCH_SIZE, 16, 16, 1)).astype('float32')
        fake = np.zeros((BATCH_SIZE, 16, 16, 1)).astype('float32')

        self.train(train_A, train_B, EPOCHS, test_A, test_B, generator_AB, generator_BA, discriminator_A, discriminator_B, valid)
        
        datetimeTo = datetime.now()
        timeTo = time.time()
        
        print(' ')
        print(datetimeFr.strftime("%Y-%m-%d %H:%M:%S"))
        print(datetimeTo.strftime("%Y-%m-%d %H:%M:%S"))
        print(f'소요시간 : {timeTo - timeFr}초')

    def makeFolder(self, name = 'gan'):
        self.folder = datetime.now().strftime("%Y%m%d_%H%M%S")
        self.foldername = os.path.dirname(__file__).replace('\\', '/')
        self.foldername = f"{self.foldername}/output/{name}_{self.folder}"
        if (os.path.exists(self.foldername) == False):
            os.makedirs(self.foldername)

    def normalize(self, input_image, label):  
        input_image = tf.cast(input_image, tf.float32)
        input_image = (input_image / 127.5) - 1
        return input_image

    #--- 이미지에 대해서 컨볼루션 연산 실행
    def downsample(self, filters, size=3, apply_batchnorm=True):
        initializer = tf.random_normal_initializer(0., 0.02)

        result = keras.Sequential()
        result.add(keras.layers.Conv2D(filters, size, strides=2, padding='same', kernel_initializer=initializer, use_bias=False))
        if apply_batchnorm:
            result.add(keras.layers.BatchNormalization())
        result.add(keras.layers.LeakyReLU())
        return result

    #--- 이미지에 대해서 전치 컨볼루션 연산 실행
    def upsample(self, filters, size=3, apply_dropout=False):
        initializer = tf.random_normal_initializer(0., 0.02)

        result = keras.Sequential()
        result.add(keras.layers.Conv2DTranspose(filters, size, strides=2, padding='same', kernel_initializer=initializer, use_bias=False))
        result.add(keras.layers.BatchNormalization())
        if apply_dropout:
            result.add(keras.layers.Dropout(0.5))

        result.add(keras.layers.ReLU())
        return result

    def Generator(self):
        down_stack = [
            self.downsample(64, 4, apply_batchnorm=False), 
            self.downsample(128, 4),
            self.downsample(256, 4), 
            self.downsample(512, 4) 
        ]

        up_stack = [
            self.upsample(256, 4),
            self.upsample(128, 4), 
            self.upsample(64, 4), 
        ]
        
        block1 = ResnetIdentityBlock(3, [512, 512, 512])
        block2 = ResnetIdentityBlock(3, [512, 512, 512])
        block3 = ResnetIdentityBlock(3, [512, 512, 512])
        resnet = [block1, block2, block3]

        inputs = keras.layers.Input(shape=[256, 256, 3])
        x = inputs

        skips = []
        for down in down_stack:
            x = down(x)
            skips.append(x)
            
        for block in resnet:
            x = block(x)

        skips = reversed(skips[:-1])

        # Upsampling and establishing the skip connections
        for up, skip in zip(up_stack, skips):
            concat = keras.layers.Concatenate()
            x = up(x)
            x = concat([x, skip])

        initializer = tf.random_normal_initializer(0., 0.02)
        x = keras.layers.Conv2DTranspose(3, 4, strides=2, padding='same', kernel_initializer=initializer, activation='tanh')(x)
        return keras.Model(inputs=inputs, outputs=x)

    def Discriminator(self):
        inputs = keras.layers.Input(shape=[None,None,3])
        x = inputs
        g_filter = 64
        
        down_stack = [
            self.downsample(g_filter),
            self.downsample(g_filter * 2),
            self.downsample(g_filter * 4),
            self.downsample(g_filter * 8),
        ]
        
        for down in down_stack:
            x = down(x)

        x = keras.layers.Conv2D(1, 4, strides=1, padding='same')(x)
        return keras.Model(inputs=inputs, outputs=x)
    
    @tf.function
    def discriminator_loss(self, disc_real_output, disc_generated_output):
        loss_object = keras.losses.BinaryCrossentropy(from_logits=True)
        real_loss = loss_object(tf.ones_like(disc_real_output), disc_real_output)
        generated_loss = loss_object(tf.zeros_like(disc_generated_output), disc_generated_output)
        total_disc_loss = real_loss + generated_loss
        return total_disc_loss

    @tf.function
    def train_batch(self, imgs_A, imgs_B, generator_AB, generator_BA, discriminator_A, discriminator_B, valid, optimizer, discriminator_optimizer):
        with tf.GradientTape() as g, tf.GradientTape() as d_tape:
            fake_B = generator_AB(imgs_A, training=True)
            fake_A = generator_BA(imgs_B, training=True)
            
            logits_real_A = discriminator_A(imgs_A, training=True)
            logits_fake_A = discriminator_A(fake_A, training=True)
            dA_loss = self.discriminator_loss(logits_real_A, logits_fake_A)
            
            logits_real_B = discriminator_B(imgs_B, training=True)
            logits_fake_B = discriminator_B(fake_B, training=True)
            dB_loss = self.discriminator_loss(logits_real_B, logits_fake_B)
            
            d_loss = (dA_loss + dB_loss) / 2
            # Translate images back to original domain
            reconstr_A = generator_BA(fake_B, training=True)
            reconstr_B = generator_AB(fake_A, training=True)
            
            id_A = generator_BA(imgs_A, training=True)
            id_B = generator_AB(imgs_B, training=True)


            gen_loss = tf.math.reduce_sum([
                1 * tf.math.reduce_mean(keras.losses.mean_squared_error(logits_fake_A, valid)),
                1 * tf.math.reduce_mean(keras.losses.mean_squared_error(logits_fake_B, valid)),
                10 * tf.math.reduce_mean(keras.losses.mean_squared_error(reconstr_A, imgs_A)),
                10 * tf.math.reduce_mean(keras.losses.mean_squared_error(reconstr_B, imgs_B)),
                0.1 * tf.math.reduce_mean(keras.losses.mean_squared_error(id_A, imgs_A)),
                0.1 * tf.math.reduce_mean(keras.losses.mean_squared_error(id_B, imgs_B)),
            ])
            
        gradients_of_d = d_tape.gradient(d_loss, discriminator_A.trainable_variables + discriminator_B.trainable_variables)
        discriminator_optimizer.apply_gradients(zip(gradients_of_d, discriminator_A.trainable_variables + discriminator_B.trainable_variables))

        gradients_of_generator = g.gradient(gen_loss, generator_AB.trainable_variables + generator_BA.trainable_variables)
        optimizer.apply_gradients(zip(gradients_of_generator, generator_AB.trainable_variables + generator_BA.trainable_variables))
        
        return dA_loss, dB_loss, gen_loss

    def train(self, trainA_, trainB_, epochs, test_A, test_B, generator_AB, generator_BA, discriminator_A, discriminator_B, valid):
        checkpoint_dird_A = f'{self.foldername}/training_checkpointsd_A'
        checkpoint_prefixd_A = os.path.join(checkpoint_dird_A, "ckpt_{epoch}")

        checkpoint_dird_B = f'{self.foldername}/training_checkpointsd_B'
        checkpoint_prefixd_B = os.path.join(checkpoint_dird_B, "ckpt_{epoch}")

        checkpoint_dirg_AB = f'{self.foldername}/training_checkpointsg_AB'
        checkpoint_prefixg_AB = os.path.join(checkpoint_dirg_AB, "ckpt_{epoch}")

        checkpoint_dirg_BA = f'{self.foldername}/training_checkpointsg_BA'
        checkpoint_prefixg_BA = os.path.join(checkpoint_dirg_BA, "ckpt_{epoch}")

        optimizer = tf.keras.optimizers.Adam(1e-4, beta_1=0.5)
        discriminator_optimizer = tf.keras.optimizers.Adam(1e-4, beta_1=0.5)

        for epoch in range(epochs):
            start = time.time()
            
            for batch_i, (imgs_A, imgs_B) in enumerate(zip(trainA_, trainB_)):
                dA_loss, dB_loss, g_loss = self.train_batch(imgs_A, imgs_B, generator_AB, generator_BA, discriminator_A, discriminator_B, valid, optimizer, discriminator_optimizer)
                
                if batch_i % 1000 == 0:
                    test_imgA = next(iter(test_A))
                    test_imgB = next(iter(test_B))
                    print ('Time taken for epoch {} batch index {} is {} seconds\n'.format(epoch, batch_i, time.time()-start))
                    print("discriminator A: ", dA_loss.numpy())
                    print("discriminator B: ", dB_loss.numpy())
                    print("generator: {}\n".format(g_loss))

                    fig, axs = plt.subplots(2, 2, figsize=(10, 10), sharey=True, sharex=True)
                    gen_outputA = generator_AB(test_imgA, training=False)
                    gen_outputB = generator_BA(test_imgB, training=False)
                    axs[0,0].imshow(test_imgA[0]*0.5 + 0.5)
                    axs[0,0].set_title("Generator A Input")
                    axs[0,1].imshow(gen_outputA[0]*0.5 + 0.5)
                    axs[0,1].set_title("Generator A Output")
                    axs[1,0].imshow(test_imgB[0]*0.5 + 0.5)
                    axs[1,0].set_title("Generator B Input")
                    axs[1,1].imshow(gen_outputB[0]*0.5 + 0.5)
                    axs[1,1].set_title("Generator B Output")
                    plt.show()

                    discriminator_A.save_weights(checkpoint_prefixd_A.format(epoch=epoch))
                    discriminator_B.save_weights(checkpoint_prefixd_B.format(epoch=epoch))
                    generator_AB.save_weights(checkpoint_prefixg_AB.format(epoch=epoch))
                    generator_BA.save_weights(checkpoint_prefixg_BA.format(epoch=epoch))

#--- 레지듀얼 계층
class ResnetIdentityBlock(keras.Model):
  def __init__(self, kernel_size, filters):
    super(ResnetIdentityBlock, self).__init__(name='')
    filters1, filters2, filters3 = filters

    self.conv2a = keras.layers.Conv2D(filters1, (1, 1))
    self.bn2a = keras.layers.BatchNormalization()

    self.conv2b = keras.layers.Conv2D(filters2, kernel_size, padding='same')
    self.bn2b = keras.layers.BatchNormalization()

    self.conv2c = keras.layers.Conv2D(filters3, (1, 1))
    self.bn2c = keras.layers.BatchNormalization()

  def call(self, input_tensor, training=False):
    x = self.conv2a(input_tensor)
    x = self.bn2a(x, training=training)
    x = tf.nn.relu(x)

    x = self.conv2b(x)
    x = self.bn2b(x, training=training)
    x = tf.nn.relu(x)

    x = self.conv2c(x)
    x = self.bn2c(x, training=training)

    x += input_tensor
    return tf.nn.relu(x)

if __name__ == "__main__":
    appl = GAN()
    appl.run()
    