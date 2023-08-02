""" 
    Auto Graph

    @file laboratory/pnuskgh/model_subclassing.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

import traceback
import contextlib
from keras.utils import losses_utils
import tensorflow as tf
from tensorflow import keras

@contextlib.contextmanager
def assert_raises(error_class):
    try:
        yield
    except error_class as e:
        print(f'Caught expected exception \n  {error_class}:')
        traceback.print_exc(limit=2)
    except Exception as e:
        raise e
    else:
        raise Exception(f'Expected {error_class} to be raised but no error was raised!')

#--- https://www.tensorflow.org/guide/function?hl=ko
@tf.function
def dense_layer(x, w, b):
    return tf.matmul(x, w) + b


# keras.applications

#--- https://www.tensorflow.org/guide/keras/custom_layers_and_models?hl=ko
class CustomModel(keras.Model):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.linear_layer = keras.layers.Dense(1, input_dim=1, activation='linear')
        
    def call(self, x):
        y_pred = self.linear_layer(x)
        return y_pred
    
    def get_config(self):
        return { "hidden_units": self.hidden_units }
    
    @classmethod
    def from_config(cls, config):
        return cls(**config)
    
    def summary(self):
        inputs = keras.Input((1, 10))
        keras.Model(inputs, self.call(inputs)).summary()



#--- https://www.tensorflow.org/guide/keras/save_and_serialize?hl=ko
model = tf.keras.Sequential([])

model.save('my_model')
keras.models.load_model("my_model", custom_objects={ "CustomModel": CustomModel })

with open('my_model.json', 'w') as json_file:
    json_file.write(model.to_json())
my_model = keras.models.model_from_json(open('my_model.json').read(), custom_objects={ "CustomModel": CustomModel })



#--- https://www.tensorflow.org/guide/keras/custom_layers_and_models?hl=ko
class CustomLayer(keras.layers.Layer):
    def __init__(self, trainable=True, name=None, dtype=None, dynamic=False, **kwargs):
        super().__init__(trainable, name, dtype, dynamic, **kwargs)
        
    def call(self, inputs):
        return tf.matmul(inputs, self.w) + self.b



class CustomActivationFunction(keras.activations):
    pass

@tf.function
def CustomActivationFunction(x, axis=-1):
    if x.shape.rank > 1:
        if isinstance(axis, int):
            output = tf.nn.softmax(x, axis=axis)
        else:
            e = tf.exp(x - tf.reduce_max(x, axis=axis, keepdims=True))
            s = tf.reduce_sum(e, axis=axis, keepdims=True)
            output = e / s
    else:
        raise ValueError(
            "Cannot apply softmax to a tensor that is 1D. "
            f"Received input: {x}"
        )

    output._keras_logits = x
    return output



class CustomLossFunction(keras.losses.Loss):
    def __init__(self, reduction=losses_utils.ReductionV2.AUTO, name=None):
        super().__init__(reduction, name)
        
    def call(self, y_true, y_pred):
        return super().call(y_true, y_pred)
    
    def get_config(self):
        return super().get_config()



class CustomOptimizer(keras.optimizers.Optimizer):
   def __init__(self, name, gradient_aggregator=None, gradient_transformers=None, **kwargs):
       super().__init__(name, gradient_aggregator, gradient_transformers, **kwargs)



#--- https://www.tensorflow.org/guide/keras/train_and_evaluate?hl=ko       
class CustomMetric(keras.metrics.Metric):
    def __init__(self, name="categorical_true_positives", **kwargs):
        super(CustomMetric, self).__init__(name=name, **kwargs)
        self.true_positives = self.add_weight(name="ctp", initializer="zeros")

    def update_state(self, y_true, y_pred, sample_weight=None):
        y_pred = tf.reshape(tf.argmax(y_pred, axis=1), shape=(-1, 1))
        values = tf.cast(y_true, "int32") == tf.cast(y_pred, "int32")
        values = tf.cast(values, "float32")
        if sample_weight is not None:
            sample_weight = tf.cast(sample_weight, "float32")
            values = tf.multiply(values, sample_weight)
        self.true_positives.assign_add(tf.reduce_sum(values))

    def result(self):
        return self.true_positives

    def reset_state(self):
        self.true_positives.assign(0.0)
 
 
 
#--- https://www.tensorflow.org/guide/keras/custom_callback?hl=ko
class CustomCallback(keras.callbacks.Callback):
    def __init__(self):
        super().__init__()
        
    def on_train_begin(self, logs=None):
        keys = list(logs.keys())
        print("Starting training; got log keys: {}".format(keys))

    def on_train_end(self, logs=None):
        keys = list(logs.keys())
        print("Stop training; got log keys: {}".format(keys))

    def on_epoch_begin(self, epoch, logs=None):
        keys = list(logs.keys())
        print("Start epoch {} of training; got log keys: {}".format(epoch, keys))

    def on_epoch_end(self, epoch, logs=None):
        keys = list(logs.keys())
        print("End epoch {} of training; got log keys: {}".format(epoch, keys))

    def on_test_begin(self, logs=None):
        keys = list(logs.keys())
        print("Start testing; got log keys: {}".format(keys))

    def on_test_end(self, logs=None):
        keys = list(logs.keys())
        print("Stop testing; got log keys: {}".format(keys))

    def on_predict_begin(self, logs=None):
        keys = list(logs.keys())
        print("Start predicting; got log keys: {}".format(keys))

    def on_predict_end(self, logs=None):
        keys = list(logs.keys())
        print("Stop predicting; got log keys: {}".format(keys))

    def on_train_batch_begin(self, batch, logs=None):
        keys = list(logs.keys())
        print("...Training: start of batch {}; got log keys: {}".format(batch, keys))

    def on_train_batch_end(self, batch, logs=None):
        keys = list(logs.keys())
        print("...Training: end of batch {}; got log keys: {}".format(batch, keys))

    def on_test_batch_begin(self, batch, logs=None):
        keys = list(logs.keys())
        print("...Evaluating: start of batch {}; got log keys: {}".format(batch, keys))

    def on_test_batch_end(self, batch, logs=None):
        keys = list(logs.keys())
        print("...Evaluating: end of batch {}; got log keys: {}".format(batch, keys))

    def on_predict_batch_begin(self, batch, logs=None):
        keys = list(logs.keys())
        print("...Predicting: start of batch {}; got log keys: {}".format(batch, keys))

    def on_predict_batch_end(self, batch, logs=None):
        keys = list(logs.keys())
        print("...Predicting: end of batch {}; got log keys: {}".format(batch, keys))        
    