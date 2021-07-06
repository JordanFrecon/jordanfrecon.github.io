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

Robust Optimization is an area of optimization theory aiming to obtain solutions which are stable under some level of pertubation of the data. In the context of adversarial robustness, such perturbations are hence intended as adversarial perturbations. Formally, adversarially robust training can be framed as a min-max optimization problem as follows.

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \underset{\varepsilon\in\mathcal{S}}{\max} \mathcal{L}(f_\theta(x+\varepsilon),y)\Big]
$$

The inner maximization problem aims to find an adversarial perturbation of a given data point $$x$$ that achieves a high loss while the goal of the outer minimization problem is to find model parameters so that the adversarial loss given by the inner attack problem is minimized. 


**RT** {% include cite.html id="2018_Shaham_U_j-nc_uatilssmro"%}. The *Robust Training* method suggested to replace the lower-objective by a surrogate obtained by linearizing the adversarial loss, i.e.,

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \underset{\varepsilon\in\mathcal{S}(x)}{\max} \mathcal{L}(f_\theta(x),y) + \langle \nabla \mathcal{L}(f_\theta(x),y),\varepsilon\rangle \Big]
$$

where $$\mathcal{S}(x)$$ denotes the set of allowed perturbations added to the example $$x$$.


**LWA** {% include cite.html id="2016_Huang_R_arxiv_lsa"%}. The *Learning With an Adversary* method ..

**ART** {% include cite.html id="2018_Madry_A_p-iclr_tdlmaa"%}. This work first properly considered the optimization of the original *Adversarial Robust Training* saddle-point problem. As such, the authors have addressed each lower maximization by crafting *PGD* adversaries (see post on adversarial examples). In addition, they have shown that if a neural network is trained to be robust against PGD adversaries, then it will be robust against all first-order adversaries.







## 3. Noise Injection Mechanisms




