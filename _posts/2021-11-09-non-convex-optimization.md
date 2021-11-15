---
title: Non-smooth non-convex optimization
tags: [Non-convex, Optimization]
style: fill
color: info
description: Presentation of efficient proximal solvers for non-convex optimization
comments: true
biblio: [2010_Attouch_H_j-mor_pam,2013_Bolte_J_j-mp_palmnnp, 2016_Pock_T_j-is_ipalm,2021_Driggs_D_arxiv_spring,2016_Reddi_J_p-nips_psmnnfso,2012_Sra_S_p-nips_snips,2017_Bonettini_S_j-ip_clbpgmno,2019_Peng_W_j-ota_npiagmlc,2019_Gao_X_j-go_gsipalmnop,2016_Reddi_S_p_allerton_sfmno,2020_Hovath_S_w-opt_asgmno,2018_Zaheer_M_p-nips_amno,2016_Hazan_E_p-icml_vrpfso,2015_Kingma_D_p-iclr_adam]
---

> In progress. Upcoming: full sets of assumptions, convergence results and comparisons

**Notations**. Throughout this post, we denote by $$\gamma$$ the step-sizes.


## 1. Constrained Smooth Optimization Problem

We consider peculiar optimization problems of the form

$$ \underset{x\in\Omega}{\mathrm{minimize}}\;  F(x) \quad\text{with either}\quad \begin{cases} F(x)\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x) \quad \text{(finite-sum)}\\[0.4ex] F(x) \triangleq \mathbb{E}_{s\sim\mathbb{P}}\left[ f(x,s)\right]\quad \text{(stochastic)}\end{cases}$$

and where $$\Omega\subseteq\mathbb{R}^{m}$$ is convex and compact.

### 1.1. Stochastic setting

We begin by presenting some exponential moving average based adaptive methods, which are very popular in the deep learning
community. Note that they aim at solving a particular instance of the original problem where $$\Omega=\mathbb{R}^m$$. 

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

We now turn to the general case where $$\Omega\subseteq\mathbb{R}^m$$.

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


### 1.1. Finite-sum setting

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




## 2. Generic Optimization Problem

We consider the following generic optimization problem

$$ \underset{x\in\mathbb{R}^{m}}{\mathrm{minimize}}\; \left\{\mathcal{L}(x) \triangleq J(x) + F(x) \right\} $$


where $$F\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x)$$ has a finite-sum structure, and the function $$J$$ is a possibly non-smooth simple function.

**NIPS** {% include cite.html id="2012_Sra_S_p-nips_snips"%}. The *Nonconvex Inexact Proximal Splitting* method hinges on the splitting into smooth and nonsmooth parts..

$$ \begin{array}{l}x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{k} J}\; \left( x_k - \gamma_{k} \nabla F(x_k) + \gamma_{k} e(x_k) \right)
    \end{array}\right.\end{array}$$

**ProxSVRG** {% include cite.html id="2016_Reddi_J_p-nips_psmnnfso"%}

**ProxSAGA** {% include cite.html id="2016_Reddi_J_p-nips_psmnnfso"%}

$$ \begin{array}{l}x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\text{Uniformly pick batches } I_k \text{ and } J_k \text{ (with replacement) of size } b\\
	\bar{g}_k = \tilde{g}_k + \frac{1}{b}\sum_{i_k\in I_k} ( \nabla F_{i_k}(x_k) - \nabla F_{i_k}(\bar{x}_{k,i_k}))\\
	x_{k+1} \in \mathrm{prox}_{\gamma J}\; \left( x_k - \gamma \bar{g}_k\right)\\
	\bar{x}_{k+1,j}=x_{k} \text{ for } j\in J_k \text{ and } \bar{x}_{k,j} \text{ otherwise}\\
	\tilde{g}_{k+1} = \tilde{g}_k - \frac{1}{n} \sum_{j_k\in J_k} ( \nabla F_{j_k}(\bar{x}_{k,j_k}) - \nabla F_{j_k}(\bar{x}_{k+1,j_k}))
    \end{array}\right.\end{array}$$

**VMILAn** {% include cite.html id="2017_Bonettini_S_j-ip_clbpgmno"%}

**PIAG** {% include cite.html id="2019_Peng_W_j-ota_npiagmlc"%}

## 3. Block-Structured Optimization Problem

We consider the following block-structured optimization problem

$$ \underset{x\in\mathbb{R}^{m_1}, y\in\mathbb{R}^{m_2}}{\mathrm{minimize}}\; \left\{\mathcal{L}(x,y) \triangleq J(x) + F(x,y) + R(y) \right\} $$


where $$F\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x,y)$$ has a finite-sum structure, and functions $$J$$ and $$R$$ are possibly non-smooth functions.


{% include definition.html title="Assumptions" content="Throughout this section, we consider the following assumptions.
- $$J\colon \mathbb{R}^{m_1} \to \mathbb{R}\cup \{+\infty\}$$ and $$R\colon \mathbb{R}^{m_1} \to \mathbb{R}\cup \{+\infty\}$$ are proper lower semi-continuous functions that are bounded from below. 
- $$F_i\colon \mathbb{R}^{m_1} \times \mathbb{R}^{m_2} \to \mathbb{R}$$ are finite-valued, differentiable and their gradients are $$M$$-Lipschitz continuous on bounded sets of $$\mathbb{R}^{m_1} \times \mathbb{R}^{m_2}$$.
- The objective $$\mathcal{L}$$ is bounded from below.
" %}

> No convexity assumption is imposed on any of the functions $$J$$, $$F_i$$, $$R$$. 


**PAM** {% include cite.html id="2010_Attouch_H_j-mor_pam"%}. The *Proximal Alternating Minimization* method

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \underset{x\in\mathbb{R}^{m_1}}{\mathrm{argmin}}\; \mathcal{L}(x,y_k) + \frac{1}{2\gamma_{1,k}} \| x - x_k \|^2\\
	y_{k+1} \in \underset{y\in\mathbb{R}^{m_2}}{\mathrm{argmin}}\; \mathcal{L}(x_{k+1},y) + \frac{1}{2\gamma_{2,k}} \| y - y_k \|^2
    \end{array}\right.\end{array}$$

**PALM** {% include cite.html id="2013_Bolte_J_j-mp_palmnnp"%}. The *Proximal Alternating Linearized Minimization* method circumvent the limitation of PAM by replacing the subproblems with their proximal linearizations :

$$
\begin{align}
\mathcal{L}_{1,k}(x)&\triangleq F(x_k,y_k) + \nabla_x F(x_k,y_k)^
\top(x-x_k) + \frac{1}{2\gamma_{1,k}}\|x_k - x\|^2 + J(x)\\
\mathcal{L}_{2,k}(y)&\triangleq F(x_{k+1},y_k) + \nabla_y F(x_{k+1},y_k)^
\top(y-y_k) + \frac{1}{2\gamma_{2,k}}\|y_k - y\|^2 + R(y)
\end{align}
$$

This results in the following PALM's iterations:

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( x_k - \gamma_{1,k} \nabla_x F(x_k,y_k) \right)\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( y_k - \gamma_{2,k} \nabla_y F(x_{k+1},y_k) \right)
    \end{array}\right.\end{array}$$
	
	
**iPALM** {% include cite.html id="2016_Pock_T_j-is_ipalm"%}.

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\tilde{x}_{k} = x_k + \alpha_{1,k}( x_k - x_{k-1})\\
	\bar{x}_k = x_k + \beta_{1,k}(x_k - x_{k-1})\\
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( \tilde{x}_k - \gamma_{1,k} \nabla_x F(\bar{x}_k,y_k) \right)\\
	\tilde{y}_{k} = y_k + \alpha_{2,k}( y_k - y_{k-1})\\
	\bar{y}_k = y_k + \beta_{2,k}(y_k - y_{k-1})\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( \tilde{y}_k - \gamma_{2,k} \nabla_y F(x_{k+1},\bar{y}_k) \right)
    \end{array}\right.\end{array}$$
	
**GiPALM** {% include cite.html id="2019_Gao_X_j-go_gsipalmnop"%}. The *Gauss-Seidel type iPALM* ... 

$$ \begin{array}{l}(\bar{x}_0,\bar{y}_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( \bar{x}_k - \gamma_{1,k} \nabla_x F(\bar{x}_k,\bar{y}_k) \right)\\
	\bar{x}_{k+1} = x_{k+1} + \rho_{1,k}(x_{k+1} - x_{k})\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( \bar{y}_k - \gamma_{2,k} \nabla_y F(\bar{x}_{k+1},\bar{y}_k) \right)\\
	\bar{y}_{k+1} = y_{k+1} + \rho_{2,k}(y_{k+1} - y_{k})\\
    \end{array}\right.\end{array}$$

**SPRING** {% include cite.html id="2021_Driggs_D_arxiv_spring"%}. The *Stochastic PRoximal alternatING linearized minimization* algorithm is a randomized version of PALM where the gradients are replaced by random estimates $$\tilde{\nabla} F$$ formed using the gradients estimated on mini-batches.

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} J}\; \left( x_k - \gamma_{1,k} \tilde{\nabla}_x F(x_k,y_k) \right)\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} R}\; \left( y_k - \gamma_{2,k} \tilde{\nabla}_y F(x_{k+1},y_k) \right)
    \end{array}\right.\end{array}$$
