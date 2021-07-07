---
title: Defense Mechanisms
tags: [Neural network, Defense]
style: border
color: success
description: Presentation of some defense mechanism to train robust neural networks
comments: true
biblio: [2014_Szegedy_C_p-iclr_ipnn,2015_Goodfellow_I_p-iclr_ehae,2018_Madry_A_p-iclr_tdlmaa,2016_Huang_R_arxiv_lsa,2018_Shaham_U_j-nc_uatilssmro,2020_Araujo_A_arxiv_rnnurat,2018_Liu_X_p-eccv_trnnrse,2018_Komiyama_R_p-iconip_amtraae,2019_He_Z_p-cvpr_pni,2021_Picot_M_arxiv_arfrr,2019_Zhang_H_p-icml_tptora,2020_Phan_H_p-icml_sdpcral,2019_Lecuyer_M_p-sp_craedp,2019_Cohen_J_p-icml_carrs,2016_Papernot_N_p-sp_ddapadnn]
---

> In progress

## 1. Adversarial Training

The idea of adversarial training relies in also training the neural network model on adversarial examples in order to correctly predict their label.

**AT** {% include cite.html id="2014_Szegedy_C_p-iclr_ipnn"%}. This work first showed that by training a neural network $$f_\theta$$ on a mixture of clean and adversarial examples, then $$f_\theta$$ can be somewhat regularized. The corresponding training procedures amounts in solving

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \mathcal{L}(f_\theta(x),y) + \mathcal{L}( f_\theta(\varepsilon(x)),y) \Big]
$$

where $$\varepsilon(x)$$ denotes an adversarial example crafted from $$x$$.


**AT-FGSM** {% include cite.html id="2015_Goodfellow_I_p-iclr_ehae"%}. The former idea was later popularized thanks to the efficient crafting of FGSM attacks. In addition, the authors considered a slighlty more general formulation by adding a weight parameter $$\alpha\in]0,1[$$, i.e.,

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \alpha\mathcal{L}(f_\theta(x),y) + (1-\alpha)\mathcal{L}( f_\theta(\varepsilon^{\rm FGSM}(x)),y) \Big]
$$

**AMT** {% include cite.html id="2018_Komiyama_R_p-iconip_amtraae"%}. Inspired by Generative Adversarial Networks (GANs), the *Adversarial Minimax Training* method uses two types of networks: a classiﬁer $$f_\theta$$ and a generator $$g_\nu$$ trained to craft noise for adversarial examples. The overall optimization procedure seems to read

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{\nu\in\mathcal{V}}{\max}\; \underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \mathcal{L}(f_\theta(x),y) + \mathcal{L}( f_\theta(x+g_\nu(x)),y) \Big]\quad\text{s.t.}\quad g_\nu(x)\in\mathcal{B}
$$

where $$\mathcal{B}$$ is a $$\ell_\infty$$-ball whose radius is weirdly estimated as well. While the idea is interesting it lacks some mathematical background. Note that the method is also closely related to the adversarially robust training techniques discussed in the next section.

**RAT** {% include cite.html id="2020_Araujo_A_arxiv_rnnurat"%}. The *Randomized Adversarial Training* method combines both adversarial training and noise injection mechanisms.





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


**LWA** {% include cite.html id="2016_Huang_R_arxiv_lsa"%}. The *Learning With an Adversary* method considers the following peculiar setting

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \underset{\|\varepsilon\|\leq \delta}{\max} \mathcal{L}(f_\theta(x+\varepsilon),y)\Big]
$$

and explores two surrogate approximations of the lower-level problem. The first one relies on a linearization technique similar to *RT* while the second one considers the misclassification rate in place of the loss function.

**ART** {% include cite.html id="2018_Madry_A_p-iclr_tdlmaa"%}. This work first properly considered the optimization of the original *Adversarial Robust Training* saddle-point problem. As such, the authors have addressed each lower maximization by crafting *PGD* adversaries (see post on adversarial examples). In addition, they have shown that if a neural network is trained to be robust against PGD adversaries, then it will be robust against all first-order adversaries.


## 3. Noise Injection Mechanisms


**RSE** {% include cite.html id="2018_Liu_X_p-eccv_trnnrse"%}. This paper introduces a defense algorithm called *Random Self-Ensemble* which adds a Gaussian *noise layer* before each convolution layer in both training and prediction phases. In practice, at inference time, RSE peforms $$K$$ independent noisy forward pass, each yielding different prediction scores due to the noises, and then ensembles the results, i.e.,

$$
\bar{f}_\theta(x) = \sum_{k=1}^{K} f_\theta^k(x)
$$

**PNI** {% include cite.html id="2019_He_Z_p-cvpr_pni"%}. The *Parametric Noise Injection* technique injects Gaussian noise to each component (e.g, input, weight, ...) of the DNN. In addition, the variance of the noise can be tuned layer-wise through a coefficient whose authors suggest to additionnally estimate during the training of the network. An adversarially robust training optimization is also considered to improve the defense.

**PixelDP** {% include cite.html id="2019_Lecuyer_M_p-sp_craedp"%}. In this work, the authors proposed a randomization method by exploiting the link between differential privacy and adversarial robustness. Their framework inherits some theoretical results from the differential privacy (DP) community allowing
them to evaluate the level of accuracy under attack of their method.


**RS** {% include cite.html id="2019_Cohen_J_p-icml_carrs"%}. The authors adopted the term of *Randomized Smoothing* to call adversarial defense techniques that transform any arbitrary base classifier into a new smoothed classifier that certifiably robust in $$\ell_2$$-norm. As such, randomized smoothing was first proposed in *PixelDP*. Here, the authors tightened the analysis and complete the experiments.

**StoBatch** {% include cite.html id="2020_Phan_H_p-icml_sdpcral"%}.




## 4. Adversarial Robustness via Explicit Regularization

Let $$q_\theta(x,y)$$ denotes the probability, predicted by the DNN $$f_\theta$$, that $$x$$ belongs to class $$y$$. In most cases, $$f_\theta$$ already outputs probabilities. If not, a soft-max operation can be added in the last layer. In addition, we restrict to the peculiar case where $$\mathcal{L}$$ is the cross-entropy loss (note that in Pytorch, the cross-entropy function includes a soft-max operation). Thus, we have that

$$
\underset{(x,y)\sim\mathcal{D}}{\mathbb{E}} \Big[ \mathcal{L}(f_\theta(x),y)\Big] = \underset{p(x,y)}{\mathbb{E}}\Big[ -\log q_\theta(y|x)\Big]
$$


**TRADES** {% include cite.html id="2019_Zhang_H_p-icml_tptora"%}. This work defined a new risk as the trade-off between natural and adversarial performances, controlled through an hyperparameter $$\lambda>0$$. Formally, the defense problem reads


$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{p(x,y)}{\mathbb{E}}\Big[ -\log q_\theta(y|x)\Big] + \lambda \underset{p(x)}{\mathbb{E}}\Big[ \underset{x^\prime\colon \|x^\prime-x\|p\leq \delta}{\max} \mathrm{KL}\left( q_\theta(\cdot|x) \| q_\theta(\cdot|x^\prime)\right)\Big]
$$

where the first term is the natural cross-entropy while the second term includes the Kullback-Leibler (KL) divergence between natural and adversarial probability distributions.


**FIRE** {% include cite.html id="2021_Picot_M_arxiv_arfrr"%}. The authors propose a new formulation of adversarial defense with a *FIsher-rao REgularizer*. Here, the Fisher-Rao distance $$d_{R,\mathcal{C}}^2$$ is used to capture the distance between probability distribution over the statistical manifold 
$$\mathcal{C} = \{q_\theta(\cdot|x)\colon x\in\mathcal{X}\}$$ obtained by fixing the parameters of the DNN and changing its feature input in the manifold $$\mathcal{X}$$. The resulting optimization problem reads

$$
\underset{\theta\in\Theta}{\mathrm{minimize}}\; \underset{p(x,y)}{\mathbb{E}}\Big[ -\log q_\theta(y|x)\Big] + \lambda \underset{p(x,x^\prime)}{\mathbb{E}}\Big[ d_{R,\mathcal{C}}^2\left( q_\theta(\cdot|x),q_\theta(\cdot|x^\prime)\right)\Big]
$$

where $$\lambda>0$$ controls the trade-off between natural accuracyand robustness to the adversary.


## 5. Other Defenses

**Distillation** {% include cite.html id="2016_Papernot_N_p-sp_ddapadnn"%}.

