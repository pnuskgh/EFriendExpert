""" 
    Deep Learning with Tensorflow 2 and Keras

    @file laboratory/pnuskgh/tests/sample_test.py
    @version 0.0.1
    @license OBCon License 1.0
    @copyright pnuskgh, All right reserved.
    @author gye hyun james kim <pnuskgh@gmail.com>
"""

def factorial(n):
    if n < 0:
        n = -n
    val = 1

    while n > 0:
        val *= n
        n -= 1

    return val

def test_factorial_zero():
    assert factorial(0) == 1
