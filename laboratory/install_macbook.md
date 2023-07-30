# Install

  

## MacBook

- MacBook Pro 13
- Apple M2
- 16 GB Memory, 500 GB storage
- macOS Ventura 13.4.1

```bash
python  --version                       #--- 3.10.6
pip  --version                          #--- 23.1.2
# python.exe  -m pip  install  --upgrade pip
conda  --version                        #--- 23.5.0
# conda  update  -n base  -c conda-forge  conda     #--- base: 가상환경 이름

xcode-select  --install                 #--- XCode 개발자 도구
conda  install  -c apple  tensorflow-deps
# pip  install  tensorflow-macos          #--- 2.13.0
pip  install  tensorflow-macos==2.9
# pip  install  tensorflow-metal          #--- 0.6.0
pip  install  tensorflow-metal==0.5.0
pip  install  tensorflow-datasets       #--- 4.9.2
# pip  install  tensorflow                #--- 2.13.0

conda  install  jupyter  pandas  numpy  matplotlib  scikit-learn

pip  install  keras                     #--- 2.13.1
pip  install  numpy                     #--- 1.23.1
pip  install  pandas                    #--- 1.5.1
pip  install  tensorboard               #--- 2.13.0

#--- GPU 지원 여부 확인
cd   DL_TensorFlow2_Keras
python  laboratory/pnuskgh/tensorflow_gpu.py
```

  