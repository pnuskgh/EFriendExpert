""" 
    CNN (Convolutional Neural Networks, 컨볼루션 신경망)

    @file laboratory/pnuskgh/pnus_chapter_05.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

#--- cd  /work/EFriendExpert
#--- conda  activate  py310
#--- python laboratory/pnuskgh/pnus_chapter_05.py

import time
import numpy as np
from datetime import datetime
from tensorflow import keras

#--- https://scikit-image.org/docs/stable/auto_examples/transform/plot_rescale.html
# from skimage.transform import rescale, resize, downscale_local_mean
# import imageio.v2 as imageio
# import PIL
import cv2
import matplotlib.pyplot as plt

from model_base import MODEL_BASE

class CNN01(MODEL_BASE):
    def __init__(self):
        super().__init__()
        
        self.title = 'CNN (Convolutional Neural Networks, 컨볼루션 신경망)'
        self.name = 'cnn2'
        self.model = None
        
        self.functions = [
            ['estimator', self.run_228_232, 'Estimator을 만들어서 사용'],
            ['inception', self.run_233_236, 'Inception-v3를 사용한 전이학습'],
            ['mobilenet', self.run_237_242, 'MobileNetV2를 사용한 전이학습'],
            ['vqa', self.run_250_251, 'Visual Question Answering with Text/Image Embedding'],
            ['deep_dream', self.run_257_259, 'DeepDream망 생성'],
            ['imdb', self.run_264_267, '감정 분석'],
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
        
    #--- pppqqq

if __name__ == "__main__":
    appl = CNN01()
    appl.run()
    