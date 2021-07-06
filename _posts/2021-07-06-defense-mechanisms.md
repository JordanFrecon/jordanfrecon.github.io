---
title: Defense Mechanisms
tags: [Neural network, Defense]
style: border
color: success
description: Presentation of some defense mechanism to train robust neural networks
comments: true
biblio: [2014_Szegedy_C_p-iclr_ipnn]
---

> In progress

## 1. Adversarial Training

{% include cite.html id="2014_Szegedy_C_p-iclr_ipnn"%} showed that by training on a mixture of clean and adversarial examples, a neural network can be somewhat regularized.

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \mathbb{E}_{(x,y)\sim\mathcal{D}} \left[ \alpha\mathcal{L}(f_\theta(x),y) + (1-\alpha)\mathcal{L}( f_\theta(\varepsilon(x)),y) \right]
$$


## 2. Noise Injection Mechanisms




