---
title: Adversarial Attacks
tags: [Neural network, Robustness]
style: border
color: danger
description: An overview of the most common techniques to craft adversarial attacks fooling neural networks based classification models
comments: true
biblio: [2015_Goodfellow_I_p-iclr_ehae, 2017_Kurakin_A_p-iclr-w_aepw, 2017_Carlini_N_p-sp_ternn, 2016_MoosaviDezfooli_S-M_p-cvpr_deepfool,2017_MoosaviDezfooli_S-M_p-cvpr_uap, 2020_Shafahi_A_p-aaai_uat,2021_Frecon_J_p-cap_adil]
---

> In progress

With  recent  technological  advances,  the  use  of  deep neural networks (DNN) have widespread to numerous applications ranging from biomedical imaging to the design of autonomous vehicle. The reasons of their prosperity strongly rely on the increasingly large datasets becoming available, their high expressiveness  and  their empirical  successes in  various tasks (e.g.  computer vision, natural language processing or speech recognition). However,  their  high  representation  power  is  also a  weakness  that  some  adversary  might  exploit  to craft adversarial attacks which could potentially lead the  DNN  model  to  take  unwanted  actions. More  precisely, adversarial  attacks are almost imperceptible transformations aiming to modify an example well classified by a DNN into a new example, called adversarial, which is itself wrongly classified.


## 1. Span of adversarial attacks


There exist multiple definition of adversarial examples depending on whether we enforce that the adversarial example yield a specific target predicted by the DNN $$f$$ or not.

{% include definition.html title="Untargeted and targeted attacks" content="Given some valid input instance $$x\in\mathcal{X}$$, the adversarial example $$a$$ is said to be
- *Untargeted* if $$C_f(a)\neq C_f(x)$$
- *Targeted*, with target $$t\neq C_f(x)$$, if $$C_f(a)=t$$
" %}

In addition, there exist two main ways of crafting such adversarial example

{% include definition.html title="Perturbation and functional attacks" content="Given some valid input instance $$x\in\mathcal{X}$$, the adversarial example $$a$$ is said to be
- *Pertubation-based* if $$a=x+\varepsilon$$ for some perturbation $$\varepsilon$$ small enough
- *Functional-based* if $$a=h(x)$$ where $$h$$ models ...
" %}

## 2. Per-instance attacks


**FGSM** {% include cite.html id="2015_Goodfellow_I_p-iclr_ehae"%}. The *Fast Gradient Sign Method* is one of the first effective technique to craft an adversarial perturbation. The underlined idea is to perform a single $$\delta$$ step in the direction given by the sign of the gradient of the training loss with respect to the input image $$x$$, i.e.,

$$
a = x+\varepsilon(x) \quad\text{where}\quad\varepsilon(x)  = \delta\,\mathrm{sign}(\nabla_x H(f(x),y)).
$$



**PGD** {% include cite.html id="2017_Kurakin_A_p-iclr-w_aepw"%}. This technique is a multi-step variant of FGSM where the adversarial example is updated until it fools the DNN. More formally, it reads


$$
\begin{align}
 &a = x\\
    &\text{while } f \text{ predicts the label } y \text{ to } a\\[0.4ex]
    &\left\lfloor\begin{array}{l}
    a = \mathrm{Proj}_{x+\mathcal{B}}( a + \delta\,\mathrm{sign}(\nabla_a H(f(a,y))\\
    \end{array}\right.
\end{align}
$$

where $$\mathcal{B}$$ denotes the space of allowed perturbations. Since it boils down to a *Projected Gradient Descent* algorithm, it is commonly called PGD.


**DeepFool** {% include cite.html id="2016_MoosaviDezfooli_S-M_p-cvpr_deepfool"%} A more elaborated, yet similar approach, consists in finding the adversarial perturbation $$\varepsilon(x)$$ as the solution of the following optimization problem

$$
\underset{\varepsilon\in\mathcal{X}}{\mathrm{minimize}}\; \|\varepsilon\|_2\quad\text{s.t.}\quad \underset{k}{\mathrm{argmax}}\, f(x+\varepsilon) \neq \underset{k}{\mathrm{argmax}}\, f(x) 
$$


**CW** {% include cite.html id="2017_Carlini_N_p-sp_ternn"%}  A similar idea to DeepFool is pursued by Carlini and Wagner by considering the fooling requirement as a regularization instead of a constraint, i.e.,

$$
\underset{\varepsilon\in\mathcal{X}}{\mathrm{minimize}}\; \|\varepsilon\|_p + \lambda g(x+\varepsilon)
$$

where the first term penalizes the $$\ell_p$$-norm of the added perturbation while the second term enforces the fooling of the DNN classifier $$f$$ by means of the function $$g$$.




## 3. Universal and semi-universal attacks

**UAP** {% include cite.html id="2017_MoosaviDezfooli_S-M_p-cvpr_uap"%}. This work seeks for a *Universal Attack Perturbation* that fools the classifier on almost all training points. To do so, the authors have designed an algorithmic solution which relies on an inner loop applying DeepFool to each training instance.

$$
\begin{align}
 &\varepsilon = 0\\
    &\text{while the desired fooling rate is not achieved}\\[0.4ex]
    &\left\lfloor\begin{array}{l}
    	\text{for each } x_i \text{ such that } x_i+\varepsilon \text{ is not an adversarial example }\\[0.4ex]
    	\left\lfloor\begin{array}{l}
    	   	\Delta \varepsilon_i = \underset{r\in\mathcal{X}}{\mathrm{argmin}}\; \|r\|_2\quad\text{s.t.}\quad \underset{k}{\mathrm{argmax}}\, f(x_i+\varepsilon+r) \neq \underset{k}{\mathrm{argmax}}\, f(x_i) \\
    	   	\varepsilon = \mathrm{Proj}_{\mathcal{B}}( \varepsilon + \Delta \varepsilon_i)
    	\end{array}\right.\\
    \end{array}\right.
\end{align}
$$


**UAP-v2** {% include cite.html id="2020_Shafahi_A_p-aaai_uat"%}. This method frames the crafting of universarial perturbations as an optimization problem, i.e.,

$$
\underset{\varepsilon\in\mathcal{X}}{\mathrm{maximize}}\; \frac{1}{N}\sum_{i=1}^N H(f(x_i+\varepsilon,y))\quad\text{s.t.}\quad \|\varepsilon\|_p\leq \delta
$$

Contrary to the original UAP, it benefits from more efficient solvers since it can be solved using gradient ascent based methods.


**ADiL** {% include cite.html id="2021_Frecon_J_p-cap_adil"%}. Contrary to all aforementioned methods, this work is semi-universal as it crafts each adversarial example as $$a(x_i)= x_i + \varepsilon(x_i)$$ with $$\varepsilon(x_i)=D v_i$$ where $$D$$ is a universal dictionary while $$v_i$$ is a per-instance coding vector. Given some adversarial targets $$\{t_1,\ldots,t_N\}$$, it solves

$$
\underset{\substack{D\in \mathcal{C}\subseteq \mathbb{R}^{P\times M}\\ [v_1\cdots v_N]\in\mathbb{R}^{M\times N}}}{\mathrm{minimize}}\; \sum_{i=1}^N \lambda_1 \| v_i\|_1 + \lambda_2 \|Dv_i\|_2^2 + H(f(x_i+D v_i),t_i),
$$

where $$\mathcal{C}$$ encodes some constraints on $$D$$ while $$\lambda_1>0$$ and $$\lambda_2>0$$ are regularization parameters.

