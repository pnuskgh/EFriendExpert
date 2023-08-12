""" 
    Deep Learning

    @file laboratory/pnuskgh/rnn.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

import tensorflow as tf
from tensorflow import keras

class Encoder(keras.Model):
    #--- vocab_size                     : 영어 문장의 총 단어 갯수
    #--- num_timesteps                  : Embedding시 입력의 크기
    #--- embedding_dim                  : Embedding시 출력의 크기
    #--- encoder_dim                    : 인코딩 결과의 크기
    def __init__(self, vocab_size, num_timesteps, embedding_dim, encoder_dim, **kwargs):
        super(Encoder, self).__init__(**kwargs)

        self.encoder_dim = encoder_dim
        self.embedding = keras.layers.Embedding(vocab_size, embedding_dim, input_length=num_timesteps)
        #--- return_sequences           : True. 양방향 처리 (Attention이 반영됨)
        #--- return_state               : True. 상태 정보도 반환
        self.rnn = keras.layers.GRU(encoder_dim, return_sequences=False, return_state=True)

    def call(self, x, state):
        x = self.embedding(x)
        x, state = self.rnn(x, initial_state=state)
        return x, state

class Decoder(keras.Model):
    #--- vocab_size                     : 영어 문장의 총 단어 갯수
    #--- num_timesteps                  : Embedding시 입력의 크기
    #--- embedding_dim                  : Embedding시 출력의 크기
    #--- decoder_dim                    : 디코딩 결과의 크기
    def __init__(self, vocab_size, num_timesteps, embedding_dim, decoder_dim, **kwargs):
        super(Decoder, self).__init__(**kwargs)

        self.decoder_dim = decoder_dim
        self.embedding = keras.layers.Embedding(vocab_size, embedding_dim, input_length=num_timesteps)
        #--- return_sequences           : True. 양방향 처리
        #--- return_state               : True. 상태 정보도 반환
        self.rnn = keras.layers.GRU(decoder_dim, return_sequences=True, return_state=True)
        self.dense = keras.layers.Dense(vocab_size)

    def call(self, x, state):
        x = self.embedding(x)
        x, state = self.rnn(x, initial_state=state)
        x = self.dense(x)
        return x, state

class Seq2Seq(keras.Model):
    def __init__(self, vocab_size_en, vocab_size_fr, maxlen_en, maxlen_fr, encoder_dim = 1024, decoder_dim = 1024, embedding_dim = 256):
        super(Seq2Seq, self).__init__()

        self.encoder = Encoder(vocab_size_en + 1, maxlen_en, embedding_dim, encoder_dim)
        self.decoder = Decoder(vocab_size_fr + 1, maxlen_fr, embedding_dim, decoder_dim)
        
    def call(self, input_features):
        encoded = self.encoder(input_features)
        reconstructed = self.decoder(encoded)
        return reconstructed
    
    def train(self, num_epochs, train_dataset, batch_size):
        optimizer = keras.optimizers.Adam()

        for e in range(num_epochs):
            encoder_state = self.encoder.init_state(batch_size)

            for encoder_in, decoder_in, decoder_out in train_dataset:
                with tf.GradientTape() as tape:
                    encoder_out, encoder_state = self.encoder(encoder_in, encoder_state)
                    decoder_pred, decoder_state = self.decoder(decoder_in, encoder_state)
                    loss = loss_fn(decoder_out, decoder_pred)
                
                variables = (self.encoder.trainable_variables + self.decoder.trainable_variables)
                gradients = tape.gradient(loss, variables)
                optimizer.apply_gradients(zip(gradients, variables))



vocab_size_en = 10000                   #--- 영어 문장의 총 단어 갯수
vocab_size_fr = 10000                   #--- 프랑스 문장의 총 단어 갯수
maxlen_en = 90000                       #--- 영어 문자의 갯수
maxlen_fr = 90000                       #--- 프랑스 문장의 갯수

embedding_dim = 256
encoder_dim, decoder_dim = 1024, 1024





class CustomSeq2Seq(keras.Model):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        MAX_LEN = 10
        VOCAB_SIZE = 15000
        encoder_vocab = 1000
        decoder_vocab = 2000
        HIDDEN_DIM=300
        
        self.encoder_inputs = keras.Input(shape=(MAX_LEN, ), dtype='int32',)
        self.encoder_embedding = keras.layers.Embedding(input_dim=encoder_vocab, output_dim=64)
        self.encoder_LSTM = keras.layers.LSTM(HIDDEN_DIM, return_state=True)
        
        self.decoder_inputs = keras.Input(shape=(MAX_LEN, ), dtype='int32',)
        self.decoder_embedding = keras.layers.Embedding(input_dim=decoder_vocab, output_dim=64)
        self.decoder_LSTM = keras.layers.LSTM(HIDDEN_DIM, return_state=True, return_sequences=True)
        
        # self.outputs = Dense(VOCAB_SIZE, activation='softmax')
        self.outputs = keras.layers.TimeDistributed(keras.layers.Dense(VOCAB_SIZE, activation='softmax'))
        # model = keras.Model([encoder_inputs, decoder_inputs], outputs)
        # return model
    
    def call(self, x1, x2):
        x1 = self.encoder_inputs(x1)
        x1 = self.encoder_embedding(x1)
        x1, state_h, state_c = self.encoder_LSTM(x1)

        x2 = self.decoder_inputs(x2)
        x2 = self.decoder_embedding(x2)
        x2, _, _ = self.decoder_LSTM(x2, initial_state=[state_h, state_c])

        output = self.outputs(x2)
        return output

    def encoder_decoder(self):
        encoder_vocab = 1000
        decoder_vocab = 2000

        encoder_input = keras.Input(shape=(None,))
        encoder_embedded = keras.layers.Embedding(input_dim=encoder_vocab, output_dim=64)(encoder_input)
        #--- return_state: True. 상태 정보도 반환
        output, state_h, state_c = keras.layers.LSTM(64, return_state=True, name="encoder")(encoder_embedded)
        encoder_state = [state_h, state_c]


        decoder_input = keras.Input(shape=(None,))
        decoder_embedded = keras.layers.Embedding(input_dim=decoder_vocab, output_dim=64)(decoder_input)
        decoder_output = keras.layers.LSTM(64, name="decoder")(decoder_embedded, initial_state=encoder_state)
        output = keras.layers.Dense(10)(decoder_output)

        model = keras.Model([encoder_input, decoder_input], output)
        return model


class CustomBidirectionalClass(keras.Model):
    def get_sample(self):
        model = keras.Sequential()
        model.add(keras.layers.Embedding(input_dim=1000, output_dim=64))
        model.add(keras.layers.Bidirectional(keras.layers.LSTM(10, return_sequences=True, input_shape=(5, 10))))
        model.add(keras.layers.Dense(10))
        return model

class CustomLSTMClass(keras.Model):
    def get_sample(self):
        model = keras.Sequential()
        model.add(keras.layers.Embedding(input_dim=1000, output_dim=64))
        model.add(keras.layers.LSTM(128))
        model.add(keras.layers.Dense(10))
        return model

class CustomGruClass(keras.Model):
    def get_sample(self):
        model = keras.Sequential()
        model.add(keras.layers.Embedding(input_dim=1000, output_dim=64))
        #--- return_sequences : True. 양방향 처리
        model.add(keras.layers.GRU(256,
                                recurrent_initializer='glorot_uniform',
                                recurrent_activation='sigmoid',
                                stateful=True, 
                                return_sequences=True))
        model.add(keras.layers.Dense(10))
        return model




