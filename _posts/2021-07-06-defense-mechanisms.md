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

{% include cite.html id="2014_Szegedy_C_p-iclr_ipnn"%} showed that by training a neural network $$f_\theta$$ on a mixture of clean and adversarial examples, then $$f_\theta$$ can be somewhat regularized.

More generally, for some $$\alpha\in]0,1[$$, many adversarial training methods amounts in solving

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \alpha\mathcal{L}(f_\theta(x),y) + (1-\alpha)\mathcal{L}( f_\theta(\varepsilon(x)),y) \Big]
$$



## 2. Noise Injection Mechanisms




