---
title: Defense Mechanisms
tags: [Neural network, Defense]
style: border
color: success
description: Presentation of some defense mechanism to train robust neural networks
comments: true
biblio: [2014_Szegedy_C_p-iclr_ipnn,2015_Goodfellow_I_p-iclr_ehae,2018_Madry_A_p-iclr_tdlmaa,2016_Huang_R_arxiv_lsa,2018_Shaham_U_j-nc_uatilssmro]
---

> In progress

## 1. Adversarial Training

{% include cite.html id="2014_Szegedy_C_p-iclr_ipnn"%} showed that by training a neural network $$f_\theta$$ on a mixture of clean and adversarial examples, then $$f_\theta$$ can be somewhat regularized.

More generally, for some $$\alpha\in]0,1[$$, many adversarial training methods amounts in solving

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \alpha\mathcal{L}(f_\theta(x),y) + (1-\alpha)\mathcal{L}( f_\theta(\varepsilon(x)),y) \Big]
$$

This idea was later popularized by {% include cite.html id="2015_Goodfellow_I_p-iclr_ehae"%}, leading to the *AT-FGSM* mechanism, thanks to the efficient crafting of FGSM attacks.


## 2. Adversarially Robust Training



**RT** {% include cite.html id="2018_Shaham_U_j-nc_uatilssmro"%}. The *Robust Training* method suggested to replace the lower-objective by a surrogate obtained by linearizing the adversarial loss, i.e.,

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \underset{\varepsilon\in\mathcal{S}(x)}{\max} \mathcal{L}(f_\theta(x),y) + \langle \nabla \mathcal{L}(f_\theta(x),y),\varepsilon\rangle \Big]
$$

where $$\mathcal{S}(x)$$ denotes the uncertainty set corresponding to the example $$x$$.



{% include cite.html id="2016_Huang_R_arxiv_lsa"%}

The work of {% include cite.html id="2018_Madry_A_p-iclr_tdlmaa"%} provided a min-max formulation encompassing much prior work on adversarial robustness. 

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \underset{\varepsilon\in\mathcal{S}}{\max} \mathcal{L}(f_\theta(x+\varepsilon),y)\Big]
$$

The inner maximization problem aims to find an adversarial perturbation of a given data point $$x$$ that achieves a high loss while the goal of the outer minimization problem is to find model parameters so that the adversarial loss given by the inner attack problem is minimized. This is precisely the problem of training a robust classifier using adversarial training techniques.





## 3. Noise Injection Mechanisms




