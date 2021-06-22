---
title: Adversarial Attacks
tags: [Neural network, Robustness]
style: border
color: danger
description: An overview of the most common techniques to craft adversarial attacks fooling neural networks based classification models
comments: true
biblio: [2015_Goodfellow_I_p-iclr_ehae, 2017_Kurakin_A_p-iclr-w_aepw, 2017_Carlini_N_p-sp_ternn]
---

> In progress

With  recent  technological  advances,  the  use  of  deep neural networks (DNN) have widespread to numerous applications ranging from biomedical imaging to the design of autonomous vehicle. The reasons of their prosperity strongly rely on the increasingly large datasets becoming available, their high expressiveness  and  their empirical  successes in  various tasks (e.g.  computer vision, natural language processing or speech recognition). However,  their  high  representation  power  is  also a  weakness  that  some  adversary  might  exploit  to craft adversarial attacks which could potentially lead the  DNN  model  to  take  unwanted  actions. More  precisely, adversarial  attacks are almost imperceptible transformations aiming to modify an example well classified by a DNN into a new example, called adversarial, which is itself wrongly classified.


## 1. Span of adversarial attacks

## 2. Specific attacks


**FGSM** {% include cite.html id="2015_Goodfellow_I_p-iclr_ehae"%}. The *Fast Gradient Sign Method* is one of the first effective technique to craft an adversarial perturbation. The underlined idea is to perform a single $$\delta$$ step in the direction given by the sign of the gradient of the training loss with respect to the input image $$x$$, i.e.,

$$
a = x+\varepsilon(x) \quad\text{where}\quad\varepsilon(x)  = \delta\,\mathrm{sign}(\nabla_x H(f(x),y)).
$$



**PGD** {% include cite.html id="2017_Kurakin_A_p-iclr-w_aepw"%}. This technique is a multi-step variant of FGSM where the adversarial example is updated until it fools the DNN. More formally, it reads


$$
\begin{align}
 &a = x\\
    &\text{while $$f$$ predicts the label $$y$$ to $$a$$}\\[0.4ex]
    &\left\lfloor\begin{array}{l}
    a = \mathrm{Proj}_{x+\mathcal{B}}( a + \delta\,\mathrm{sign}(\nabla_a H(f(a,y))\\
    \end{array}\right.
\end{align}
$$

where $$\mathcal{B}$$ denotes the space of allowed perturbations. Since it boils down to a *Projected Gradient Descent* algorithm, it is commonly called PGD.


**CW** {% include cite.html id="2017_Carlini_N_p-sp_ternn"%} A more elaborated, yet similar approach, have been developed by Carlini and Wagner. They suggest to find the adversarial perturbation $\varepsilon(x)$ as the solution of the following optimization problem

$$
\underset{\varepsilon}{\mathrm{minimize}}\; \|\varepsilon\|_p + \lambda g(x+\varepsilon)
$$
