""" 
    Embedding

    @file laboratory/pnuskgh/pnus_chapter_07.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

#--- cd  /work/EFriendExpert
#--- conda  activate  py310
#--- python laboratory/pnuskgh/pnus_chapter_07.py

import time
import numpy as np
from datetime import datetime
from tensorflow import keras

#--- https://scikit-image.org/docs/stable/auto_examples/transform/plot_rescale.html
# from skimage.transform import rescale, resize, downscale_local_mean
# import imageio.v2 as imageio
# import PIL
import cv2
import gensim
import matplotlib.pyplot as plt

from model_base import MODEL_BASE

class CNN01(MODEL_BASE):
    def __init__(self):
        super().__init__()
        
        self.title = 'Embedding'
        self.name = 'embedding'
        self.model = None
        
        self.functions = [
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
    