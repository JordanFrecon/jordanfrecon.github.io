---
title: Adversarial Attacks
tags: [Neural network, Attack]
style: border
color: danger
description: An overview of the most common techniques to craft adversarial attacks fooling neural networks based classification models
comments: true
biblio: [2015_Goodfellow_I_p-iclr_ehae, 2017_Kurakin_A_p-iclr-w_aepw, 2017_Carlini_N_p-sp_ternn, 2016_MoosaviDezfooli_S-M_p-cvpr_deepfool,2017_MoosaviDezfooli_S-M_p-cvpr_uap, 2020_Shafahi_A_p-aaai_uat,2021_Frecon_J_p-cap_adil,2014_Szegedy_C_p-iclr_ipnn,2018_Madry_A_p-iclr_tdlmaa,2019_Finlay_C_p-iccv_laa,2020_Croce_F_p-icml_rearedpfa,2020_Zhang_Y_j-tsp_pcae,2021_Dai_J_j-nc_fastuap,2020_Zhang_p-aaai_cduap,2021_Benz_P_p-icme_uatcwp]
---

> In progress

With  recent  technological  advances,  the  use  of  deep neural networks (DNN) have widespread to numerous applications ranging from biomedical imaging to the design of autonomous vehicle. The reasons of their prosperity strongly rely on the increasingly large datasets becoming available, their high expressiveness  and  their empirical  successes in  various tasks (e.g.  computer vision, natural language processing or speech recognition). However,  their  high  representation  power  is  also a  weakness  that  some  adversary  might  exploit  to craft adversarial attacks which could potentially lead the  DNN  model  to  take  unwanted  actions. More  precisely, adversarial  attacks are almost imperceptible transformations aiming to modify an example well classified by a DNN into a new example, called adversarial, which is itself wrongly classified.


## 1. Quick reminder about classification based DNN

Given some trained DNN $$f$$, the predicted label of any input $$x\in\mathcal{X}\subseteq\mathbb{R}^P$$ by $$f$$ is denoted as

$$
C_f(x) = \underset{i\in\{1,\ldots,c\}}{\mathrm{argmax}}\, f_i(x)
$$

<img class="post-img" src="/images/posts/neuralnet.png" alt="Classification based DNN"/>

## 2. Span of adversarial attacks


There exist multiple definition of adversarial examples depending on whether we enforce that the adversarial example yields a specific target predicted by the DNN $$f$$ or not.

{% include definition.html title="Untargeted and targeted attacks" content="Given some valid input instance $$x\in\mathcal{X}$$, the adversarial example $$a$$ is said to be
- *Untargeted* if $$C_f(a)\neq C_f(x)$$.
- *Targeted*, with target $$t\neq C_f(x)$$, if $$C_f(a)=t$$.
" %}

In addition, there exist two main ways of crafting such adversarial example.

{% include definition.html title="Perturbation and functional attacks" content="Given some valid input instance $$x\in\mathcal{X}$$, the adversarial example $$a$$ is said to be
- *Pertubation-based* if $$a=x+\varepsilon$$ for some perturbation $$\varepsilon$$ small enough.
- *Functional-based* if $$a=h(x)$$ where $$h$$ models a small degradation operator.
" %}


The key question then becomes exactly how much distortion we must add to cause the classification to change. In each domain, the distance metric that we must use is different. In the space of images, many works suggest that $$\ell_p$$ norms are reasonable approximations of human perceptual distance. It should be noted that most common methods focus on perturbation-based attacks. Henceforth, it what follows we will solely consider those types of attacks. Finally, we will distinguish between per-instance and universal perturbations.

{% include definition.html title="Per-instance and universal attacks" content="Given some data distribution $$\mu$$ on $$\mathcal{X}$$, we consider two types of perturbations, namely
- *Per-instance* if for every $$x\sim\mu$$ there exist $$\varepsilon(x)$$ such that $$a=x+\varepsilon(x)$$ is an adversarial example.
- *Universal* if there exist $$\varepsilon$$ such that for every $$x\sim\mu$$, $$a=x+\varepsilon$$ is an adversarial example
" %}

## 3. Per-instance attacks

**L-BFGS** {% include cite.html id="2014_Szegedy_C_p-iclr_ipnn"%}. This work is the first that noticed the existence of adversarial examples for image classification. Given some adversarial target $$t\neq C_f(x)$$, solve

$$
\underset{\varepsilon\in\mathcal{X}}{\mathrm{minimize}}\; \lambda \|\varepsilon\|_2 + H(f(x+\varepsilon,t))\quad\text{s.t.}\quad x+\varepsilon\in\mathcal{X}
$$

where the regularization parameter $$\lambda>0$$ is determined by line-search in order to ensure that $$C_f(x+\varepsilon)=t$$. The authors have considered the case where $$\mathcal{X}=[0,1]^P$$ so that the constraint enforces the $$P$$ pixels to lie inside a box. In addition, they have promoted the use of a box-constrained L-BFGS solver, which hence gave its name to such adversarial crafting technique.


**FGSM** {% include cite.html id="2015_Goodfellow_I_p-iclr_ehae"%}. The *Fast Gradient Sign Method* is one of the first effective technique to craft an adversarial perturbation. The underlined idea is to perform a single $$\delta$$ step in the direction given by the sign of the gradient of the training loss with respect to the input image $$x$$, i.e.,

{% include switch.html id='fgsm' content1="$$a = x+\varepsilon(x) \quad\text{where}\quad\varepsilon(x)  = \delta\,\mathrm{sign}(\nabla_x H(f(x),y)).$$" btn1="$$\ell_\infty$$" content2="test" btn2="$$\ell_2$$" %}



**IFGSM** {% include cite.html id="2017_Kurakin_A_p-iclr-w_aepw"%}. This technique is a multi-step iterative variant of FGSM where the adversarial example is updated until it fools the DNN. More formally, it reads


$$
\begin{align}
 &a = x\\
    &\text{while } C_f(a) = C_f(x)\\[0.4ex]
    &\left\lfloor\begin{array}{l}
    a = \mathrm{Proj}_{x+\mathcal{B}}( a + \delta\,\mathrm{sign}(\nabla_a H(f(a,y))\\
    \end{array}\right.
\end{align}
$$

where $$\mathcal{B}$$ denotes the space of allowed perturbations. 


**PGD** {% include cite.html id="2018_Madry_A_p-iclr_tdlmaa"%}. The same previous idea was also conducted by different authors who termed the method *PGD* since it boils down to a *Projected Gradient Descent* algorithm. The only difference lies in the initial point. While for IFGSM, the initial point is $$x$$, there the initial point is randomly sampled in a ball centered in $$x$$.




**DeepFool** {% include cite.html id="2016_MoosaviDezfooli_S-M_p-cvpr_deepfool"%}. A more elaborated, yet similar approach, consists in finding the adversarial perturbation $$\varepsilon(x)$$ as the solution of the following optimization problem

$$
\underset{\varepsilon\in\mathcal{X}}{\mathrm{minimize}}\; \|\varepsilon\|_2\quad\text{s.t.}\quad C_f(x+\varepsilon) \neq C_f(x) 
$$


**CW** {% include cite.html id="2017_Carlini_N_p-sp_ternn"%}. A similar idea to DeepFool is pursued by Carlini and Wagner by considering the fooling requirement as a regularization instead of a constraint, i.e.,

$$
\underset{\varepsilon\in\mathcal{X}}{\mathrm{minimize}}\; \|\varepsilon\|_p + \lambda g(x+\varepsilon)
$$

where the first term penalizes the $$\ell_p$$-norm of the added perturbation while the second term enforces the fooling of the DNN classifier $$f$$ by means of the function $$g$$.

**MIFGSM**

**LogBarrier** {% include cite.html id="2019_Finlay_C_p-iccv_laa"%}. Let $$k=C_f(x)$$ be the predicted target of $$x$$ by the DNN $$f$$. If it is well trained then it should correspond to the label $$y$$. Thus, a necessary and sufficient condition for a misclassified adversarial example $$x+\varepsilon$$ is to have $$\max_{i\neq k} f_i(x+\varepsilon) - f_k(x+\varepsilon)>0$$ with $$\varepsilon$$ small. On the one hand, a small perturbation $$\varepsilon$$ can be found by minimizing a criterion $$\ell$$. One the other hand, the misclassication constraint can be enforced through a negative logarithm penalty (i.e., a logarithmic barrier) weighted by a regularization parameter $$\lambda>0$$. The resulting problem reads

$$
\underset{\varepsilon\in\mathcal{X}}{\mathrm{minimize}}\; \ell(\varepsilon) - \lambda \log\left( \max_{i\neq k} f_i(x+\varepsilon) - f_k(x+\varepsilon)\right)
$$

**APGD** {% include cite.html id="2020_Croce_F_p-icml_rearedpfa"%}. The *Auto*-PGD is a variant of *PGD* with momentum where the step-size is selected according to some heuristic depending on the allowed budget and on the progress of the optimization. The overall idea is to gradually transit from exploring the whole feasible set to a local optimization.

**PCAE** {% include cite.html id="2020_Zhang_Y_j-tsp_pcae"%}. The *Principal Component Adversarial Example* technique ..


## 4. Universal and semi-universal attacks

**UAP** {% include cite.html id="2017_MoosaviDezfooli_S-M_p-cvpr_uap"%}. This work seeks for a *Universal Attack Perturbation* that fools the classifier on almost all training points. To do so, the authors have designed an algorithmic solution which relies on an inner loop applying DeepFool to each training instance.

$$
\begin{align}
 &\varepsilon = 0\\
    &\text{while the desired fooling rate is not achieved}\\[0.4ex]
    &\left\lfloor\begin{array}{l}
    	\text{for each } x_i \text{ such that } x_i+\varepsilon \text{ is not an adversarial example }\\[0.4ex]
    	\left\lfloor\begin{array}{l}
    	   	\Delta \varepsilon_i = \underset{r\in\mathcal{X}}{\mathrm{argmin}}\; \|r\|_2\quad\text{s.t.}\quad C_f(x_i+\varepsilon+r) \neq C_f(x_i) \\
    	   	\varepsilon = \mathrm{Proj}_{\mathcal{B}}( \varepsilon + \Delta \varepsilon_i)
    	\end{array}\right.\\
    \end{array}\right.
\end{align}
$$


**UAP-PGD** {% include cite.html id="2020_Shafahi_A_p-aaai_uat"%}. This method frames the crafting of universarial perturbations as an optimization problem, i.e.,

$$
\underset{\varepsilon\in\mathcal{X}}{\mathrm{maximize}}\; \frac{1}{N}\sum_{i=1}^N H(f(x_i+\varepsilon,y))\quad\text{s.t.}\quad \|\varepsilon\|_p\leq \delta
$$

Contrary to the original UAP, it benefits from more efficient solvers since it can be solved using gradient ascent based methods.

**CD-UAP** {% include cite.html id="2020_Zhang_p-aaai_cduap"%}. The *Class discriminative UAP* attack aims at generating a single perturbation that fools a network to misclassify only a chosen group of classes, while having limited influence on the remaining classes.

**CW-UAP** {% include cite.html id="2021_Benz_P_p-icme_uatcwp"%}. The *Class-wise* UAP
is variant of UAP-PGD where an universal perturbation is built for each of the class.

**Fast-UAP** {% include cite.html id="2021_Dai_J_j-nc_fastuap"%}. This work improves upon UAP by additionally exploiting the orientations of the perturbation vectors.

**ADiL** {% include cite.html id="2021_Frecon_J_p-cap_adil"%}. Contrary to all aforementioned methods, this work is semi-universal as it crafts each adversarial example as $$a(x_i)= x_i + \varepsilon(x_i)$$ with $$\varepsilon(x_i)=D v_i$$ where $$D$$ is a universal dictionary while $$v_i$$ is a per-instance coding vector. Given some adversarial targets $$\{t_1,\ldots,t_N\}$$, it solves

$$
\underset{\substack{D\in \mathcal{C}\subseteq \mathbb{R}^{P\times M}\\ [v_1\cdots v_N]\in\mathbb{R}^{M\times N}}}{\mathrm{minimize}}\; \sum_{i=1}^N \lambda_1 \| v_i\|_1 + \lambda_2 \|Dv_i\|_2^2 + H(f(x_i+D v_i),t_i),
$$

where $$\mathcal{C}$$ encodes some constraints on $$D$$ while $$\lambda_1>0$$ and $$\lambda_2>0$$ are regularization parameters.

