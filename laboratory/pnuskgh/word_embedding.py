""" 
    Deep Learning

    @file laboratory/pnuskgh/word_embedding.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

#--- python laboratory/pnuskgh/word_embedding.py
import gensim.downloader as api
from gensim.models import Word2Vec, KeyedVectors, FastText
from tensorflow import keras

def downloadDataset(datasetName):
    dataset = api.load(datasetName)
    #--- dataset : string array
    word2vec = Word2Vec(dataset, size=100, window=5, min_count=5, workers=4, sg=1)
    word2vec.save(f'output/{datasetName}.model')

    word2vec.wv.similarity('강아지', '고양이')
    word2vec.wv.most_similar('강아지', topn=10)
    word2vec.wv.most_similar(positive=['대한민국', '일본'], negative=['서울'])

datasetName = 'text8'
# downloadDataset(datasetName)
word2vec = KeyedVectors.load(f'output/{datasetName}.model')
#  ㅋㅋfastText = FastText(word2vec.wv)

word2vec.train([[ 'hello', 'world' ]], total_examples=1, epochs=1)

vector = word2vec.wv['computer']
most_similar = word2vec.wv.most_similar('computer', topn=10)


class SpamClassfierModel(keras.Model):
    def __init__(self, vocab_sz, embed_sz, input_length, num_filters, kernel_size, output_size, embedding_weights, **kwargs):
        super(SpamClassfierModel, self).__init__(**kwargs)

        self.embedding = keras.layers.Embedding(vocab_sz, embed_sz, 
                                                input_length=input_length, 
                                                weights=[embedding_weights], trainable=True)
        self.conv = keras.layers.Conv1D(filters=num_filters, kernel_size=kernel_size, activation='relu')
        self.dropout = keras.layers.SpatialDropout1D(0.2)
        self.pool = keras.layers.GlobalMaxPooling1D()
        self.dense = keras.layers.Dense(output_size, activation='softmax')

    def call(self, input):
        x = self.embedding(input)
        x = self.conv(x)
        x = self.dropout(x)
        x = self.pool(x)
        x = self.dense(x)
        return x
