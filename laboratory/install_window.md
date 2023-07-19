# Install

  

## Windows 11

- Windows 11 : 8 cores (16 processes) / 32 GB Memory / 2 TB SSD
- [Anaconda](https://www.anaconda.com/)
- NVIDIA GeForce  Ti
  - [NVIDIA 드라이버 다운로드](https://www.nvidia.com/Download/index.aspx?lang=kr)후 설치
    - 그래픽 카드에 해당하는 것을 설치할 것
    - GRD(Game Ready Driver)
  - [CUDA Toolkit Archive](https://developer.nvidia.com/cuda-toolkit-archive) 설치
    - CUDA Toolkit 12.1 Update 1
  - [NVIDIA cuDNN](https://developer.nvidia.com/cudnn) 설치

```powershell
conda  activate  py310

python  --version                       #--- 3.10.6
pip  --version                          #--- 23.1.2
# python.exe  -m pip  install  --upgrade pip
conda  --version                        #--- 4.14.0
conda  update  -n base  -c defaults  conda
# conda  update  -n base  -c conda-forge  conda        #--- base: 가상환경 이름
# conda  update  --all

pip  install  cmake
pip  install  wheel  setuptools  --upgrade

pip  install  tensorflow==2.10.0        #--- 2.10.0
#--- TensorFlow 2.11 버전부터는 WSL2에 설치하여야 한다.
#---     https://www.tensorflow.org/install/pip?hl=ko#windows-wsl2

#--- PC에 연결된 GPU 정보 확인
nvidia-smi
nvidia-smi  -l

#--- GPU 지원 여부 확인
conda  activate  py310
cd   DL_TensorFlow2_Keras
python  laboratory/pnuskgh/tensorflow_gpu.py

#--- zlibwapi.dll 파일 다운로드
#---     https://docs.nvidia.com/deeplearning/cudnn/install-guide/index.html#install-zlib-windows
#---     http://www.winimage.com/zLibDll/zlib123dllx64.zip
#---         다운로드한 후 zlibwapi.dll 파일을 c:/windows 폴더에 추가 한다.
```

  

## 참고 문헌

- [TensorFlow 설치 절차](https://velog.io/@hsedmr/TensorFlow-%EC%84%A4%EC%B9%98-%EC%A0%88%EC%B0%A8)
