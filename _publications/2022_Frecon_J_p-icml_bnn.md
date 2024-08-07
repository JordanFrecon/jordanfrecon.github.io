---
layout: publication
title: Bregman Neural Networks
authors: J. Frecon, G. Gasso, M. Pontil and S. Salzo
publication: International Conference on Machine Learning (ICML)
year: 2022
doi:
image: True
slides: True
type: conference
project: deepLearning
idbib: 2022_Frecon_J_hal_bnn
toolbox: https://github.com/JordanFrecon/bregmanet
spotlight: https://icml.cc/virtual/2022/spotlight/17634
---

We present a framework based on bilevel optimization for learning multilayer, deep data representations. On the one hand, the lower-level problem finds a representation by successively minimizing layer-wise objectives made of the sum of a prescribed regularizer, a fidelity term and a linear function depending on the representation found at the previous layer. On the other hand, the upper-level problem optimizes over the linear functions to yield a linearly separable final representation. We show that, by choosing the fidelity term as the quadratic distance between two successive layer-wise representations, the bilevel problem reduces to the training of a feedforward neural network. Instead, by elaborating on Bregman distances, we devise a novel neural network architecture additionally involving the inverse of the activation function reminiscent of the skip connection used in ResNets. Numerical experiments suggest that the proposed Bregman variant benefits from better learning properties and more robust prediction performance.
