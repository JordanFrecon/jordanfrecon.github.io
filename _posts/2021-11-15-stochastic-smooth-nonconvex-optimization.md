---
title: Stochastic Smooth Nonconvex Optimization
tags: [Nonconvex, Optimization]
style: fill
color: info
description: Quick tour of recent stochastic algorithms for smooth nonconvex optimization
comments: true
biblio: [2016_Reddi_S_p_allerton_sfmno,2020_Hovath_S_w-opt_asgmno,2018_Zaheer_M_p-nips_amno,2016_Hazan_E_p-icml_vrpfso,2015_Kingma_D_p-iclr_adam,2017_Lei_L_p-nips_ncfsoscsgm,2021_Li_Z_p-icml_page,2018_Fang_C_p-nips_spider,2019_Wang_Z_p-nips_spiderboost]
---

> In progress. Upcoming: full sets of assumptions, convergence results and comparisons

**Notations**. Throughout this post, we denote by $$\gamma$$ the step-sizes.


## Unconstrained Optimization

We consider peculiar optimization problems of the form

$$ \underset{x\in\mathbb{R}^m}{\mathrm{minimize}}\;  F(x) \quad\text{with either}\quad \begin{cases} F(x)\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x) \quad \text{(finite-sum)}\\[0.4ex] F(x) \triangleq \mathbb{E}_{s\sim\mathbb{P}}\left[ f(x,s)\right]\quad \text{(stochastic)}\end{cases}$$


We begin by presenting some exponential moving average based adaptive methods, which are very popular in the deep learning
community.

**ADAM** {% include cite.html id="2015_Kingma_D_p-iclr_adam"%}. The terms $$m_k$$ and $$v_k$$ are the exponential moving averages of the gradient and squared gradient, respectively. The parameter $$\epsilon$$, originally introduced to avoid precision issues...

$$
\begin{array}{l}
	x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\text{Draw a sample } s_k \text{ from } \mathbb{P}\\
	g_k = \nabla f(x_k,s_k)\\
	m_k = \beta_1 m_{k-1} + (1-\beta_1) g_k\\
	v_{k+1} = v_{k} - (1-\beta_2) (v_k - g_k^2)\\
	x_{k+1} = x_k - \gamma_k \frac{m_k}{\sqrt{v_k} + \epsilon}
    \end{array}\right.
\end{array}$$

However, ADAM do not benefits from convergence guarantees. Even worse, non-convergence can be found in simple online convex settings with constant minibatch sizes (see work of Reddi, 2016)


**YOGI** {% include cite.html id="2018_Zaheer_M_p-nips_amno"%}. The YOGI method gets its name the Sanskrit word yuj meaning to add. It is a slight variant of ADAM where the magnitude of the difference of $$v_{k+1}$$ and $$v_k$$ in YOGI only depends on $$g_k^2$$ as opposed to dependence on both $$v_k$$ and $$g_k^2$$. Henceforth, when $$v_k$$ is much larger than $$g_k^2$$, ADAM can rapidly increase the
effective learning rate while YOGI does it in a controlled fashion.

$$
\begin{array}{l}
	x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\text{Draw a sample } s_k \text{ from } \mathbb{P}\\
	g_k = \nabla f(x_k,s_k)\\
	m_k = \beta_1 m_{k-1} + (1-\beta_1) g_k\\
	v_{k+1} = v_{k} - (1-\beta_2) \mathrm{sign}(v_k - g_k^2) g_k^2\\
	x_{k+1} = x_k - \gamma_k \frac{m_k}{\sqrt{v_k} + \epsilon}
    \end{array}\right.
\end{array}$$


**SCGS** {% include cite.html id="2017_Lei_L_p-nips_ncfsoscsgm"%}. The *non-convex stochastically controlled stochastic gradient* method ..


**SPIDER** {% include cite.html id="2018_Fang_C_p-nips_spider"%}.

**SpiderBoost** {% include cite.html id="2019_Wang_Z_p-nips_spiderboost"%}.

**Geom-SARAH** {% include cite.html id="2020_Hovath_S_w-opt_asgmno"%}. The *Geometrized stochastic recursive gradient* method, called *Geom-SARAH*, is a double-loop procedure which can be seen as a combination of the SCSG method and the SARAH biased gradient estimator. Note that, it exploits a randomization technique based on the
*geometric distribution* which allows certain terms to telescope across the outer loop and the inner loop, hence simplifying the analysis of the algorithm.

$$ \begin{array}{l}
	x_0^{(0)}\in\mathbb{R}^m, \text{ expected inner-loop queries } \{m_k\} \\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\text{Sample a batch } J_k \text{ of size } b_k\\
	v_{k+1}^{(0)} = \frac{1}{b_k}\sum_{i\in J_k} \nabla f_i(x_{k+1}^{(0)})\\
	\text{Sample } M_k\sim\mathrm{Geom}(\eta_k)\quad\text{s.t.}\quad\mathbb{E} M_k = m_k/b_k\\
		\text{for}\;m=0,1,\ldots,M_k-1\\[0.4ex]
		\left\lfloor\begin{array}{l}
		x_{k+1}^{(m+1)} = x_{k+1}^{(m)} - \gamma_k v_{k+1}^{(m)}\\
		\text{Sample a batch } I_m \text{ of size } \tilde{b}_m\\
		v^{(m+1)}_{k+1} = \frac{1}{\tilde{b}_m}\sum_{i\in I_m}\left( \nabla f_i(x_{k+1}^{(m+1)}) - f_i({x}_{k+1}^{(m)})\right) + v_{k+1}^{(m+1)}\\
		\end{array}\right.
    \end{array}\right.
	\end{array}$$
	
**PAGE** {% include cite.html id="2021_Li_Z_p-icml_page"%}.

## Constrained Optimization

$$ \underset{x\in\mathbb{R}^m}{\mathrm{minimize}}\;  F(x) \quad\text{with either}\quad \begin{cases} F(x)\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x) \quad \text{(finite-sum)}\\[0.4ex] F(x) \triangleq \mathbb{E}_{s\sim\mathbb{P}}\left[ f(x,s)\right]\quad \text{(stochastic)}\end{cases}$$

and where $$\Omega\subseteq\mathbb{R}^{m}$$ is convex and compact.

**SFW** {% include cite.html id="2016_Reddi_S_p_allerton_sfmno"%}. The *Stochastic Frank-Wolf* algorithm ...

$$ \begin{array}{l}
	x_0^{(M)}\in\Omega\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    	\text{Uniformly randomly pick samples} \{s_1,\ldots,s_{b_k}\} \text{ according to } \mathbb{P}\\
		v_{k+1} = \mathrm{arg}\;\max_{v\in\Omega} \langle v, -\frac{1}{b_k}\sum_{i=1}^{b_k} \nabla f(x_k, s_i)\rangle\\
		x_{k+1} = x_{k} + \rho_k (v_{k+1} - x_k)
    \end{array}\right.
	\end{array}$$



**SVFW** {% include cite.html id="2016_Reddi_S_p_allerton_sfmno"%}. This algorithm can be seen as a *non-convex* variant of the *Stochastic Variance Reduced Frank-Wolf* devised in {% include cite.html id="2016_Hazan_E_p-icml_vrpfso"%}. As such, it is also epoch-based. At the end of each epoch, the full gradient is computed at the
current iterate. This gradient is used for controlling the variance of the stochastic gradients in the inner loop.

$$ \begin{array}{l}
	x_0^{(M)}\in\Omega\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    \tilde{x}_{k} = x_k^{(M)}\\
	\tilde{g}_k = \nabla F(\tilde{x}_k) = \frac{1}{n}\sum_{i=1}^n f(\tilde{x}_k)\\
		\text{for}\;m=0,1,\ldots,M-1\\[0.4ex]
		\left\lfloor\begin{array}{l}
		\text{Uniformly pick batch } I_m \text{ (with replacement) of size } b_m\\
		v^{(m)}_{k+1} = \mathrm{arg}\;\max_{v\in\Omega} \langle v, -\frac{1}{b_m}\left(\sum_{i\in I_m} \nabla f_i(x_{k+1}^{(m)}) - f_i(\tilde{x}_k) + \tilde{g}_k\right)\rangle\\
		x_{k+1}^{(m+1)} = x_{k+1}^{(m)} + \rho_k (v_{k+1}^{(m)} - x_{k+1}^{(m)})
		\end{array}\right.
    \end{array}\right.
	\end{array}$$



