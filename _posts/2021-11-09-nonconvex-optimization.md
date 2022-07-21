---
title: Nonsmooth Nonconvex Composite Optimization
tags: [Nonconvex, Nonsmooth, Optimization]
style: fill
color: info
description: Presentation of efficient proximal solvers for nonconvex composite optimization
comments: true
biblio: [2010_Attouch_H_j-mor_pam,2013_Bolte_J_j-mp_palmnnp, 2016_Pock_T_j-is_ipalm,2021_Driggs_D_arxiv_spring,2016_Reddi_J_p-nips_psmnnfso,2012_Sra_S_p-nips_snips,2017_Bonettini_S_j-ip_clbpgmno,2019_Peng_W_j-ota_npiagmlc,2019_Gao_X_j-go_gsipalmnop,2019_Wang_Z_p-nips_spiderboost,2014_Xiao_L_j-jo_psgmpvr,2020_Pham_N_j-mlr_proxsarah,2021_Metel_M_j-mlr_spmnncso,2014_Defazio_A_p-nips_saga]
---

> In progress. Upcoming: Uniformization of notations, full sets of assumptions, convergence results and comparisons


## 1. Nonconvex Optimization Problem with Convex Nonsmooth Term

We consider the following generic optimization problem

$$ \underset{x\in\mathbb{R}^{m}}{\mathrm{minimize}}\; \left\{\mathcal{L}(x) \triangleq F(x)  + R(X) \right\} $$


where $$F\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x)$$ has a finite-sum structure, and the function $$R$$ is a possibly non-smooth simple convex function. Here, $$R$$ is said to be simple in the sense that its proximity operator has a closed form expression. Moreover, throughout this section, we will resort to the following assumptions.


{% include definition.html title="Assumptions" content="Throughout this section, we consider the following assumptions.
- A1. $$\mathcal{L}$$ is bounded from below and $$\mathrm{dom}\;\mathcal{L}\neq \emptyset$$.
- A2. $$R\colon\mathbb{R}^m\to\mathbb{R}\cup\{+\infty\}$$ is a proper, convex and lower semi-continuous
- A3. Each $$F_i\colon\mathbb{R}^m\to\mathbb{R}$$ is continuously differentiable on an open set $$\Omega\supset\overline{\mathrm{dom}\;R}$$. Moreover, there exist $$L\in(0,+\infty)$$ such that, 
	- A3-i ($$L$$ smoothness). F has an $$L$$-Lipschitz continuous gradient on $$\mathrm{dom}\;R$$
	- A3-ii ($$L$$-individual smoothness). Each $$F_i$$ has a L-Lipschitz continuous gradient on $$\mathrm{dom}\;J$$
	- A3-iii ($$L$$-average smoothness). $$\frac{1}{n}\sum_{i-1}^n \| \nabla F_i(x)-\nabla F(y)\|^2 \leq L^2 \| x - y\|^2$$.
- A4 (Bounded variance) There exist $$\sigma\in(0,\infty)$$ such that $$\frac{1}{n}\sum_{i-1}^n \| \nabla F_i(x)-\nabla F(x)\|^2 \leq \sigma^2$$ for every $$x\in\mathrm{dom}\; F$$.
" %}

Assumptions A1 and A2 are basic assumptions used in optimization. A1 usually holds since $$F$$ and $$R$$ typically stand for a loss function and a regularizer, respectively. Hence, they are usually nonnegative or bounded from below, and the domain of $$R$$ intersects the domain of $$F$$. Also note that, most of convex regularizers popularly encountered also satisfy A2. The next assumption A3 deals with the smoothness of $$F$$ and its components. As such, full-batch algorithms will rely on A3-i while stochastic algorithms, which fully exploits the finite-sum nature of $$F$$, will typically rely on A3-ii. Note that some exceptions may rely on the weaker assumption A3-iii. Finally, A4 is standard in stochastic optimization. It appears useful when $$n$$ is extremely large since passing over $$n$$ data points is exhaustive or impossible.


> Actually, in some works, slightly weaker assumptions may be required. However, the assumptions stated above are general enough to encapsulate many optimization problems.


### 1.1. Full-batch algorithms

We begin by presenting some algorithms which do not take into account the finite-sum nature of $$F$$. In their original forms, they allow for inexact gradient computations and/or inexact computations of the proximal points. However, here, for the sake of simplicity, we will not show such aspects and solely deal with exact computations.

**NIPS** {% include cite.html id="2012_Sra_S_p-nips_snips"%}. The *Nonconvex Inexact Proximal Splitting* method hinges on the splitting into smooth and nonsmooth parts. Without inexact gradient computation, it boils down to the following nonconvex forward-backward algorithm.

$$ \begin{array}{l}x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{k} R}\; \left( x_k - \gamma_{k} \nabla F(x_k) + \gamma_{k} \right)
    \end{array}\right.\end{array}$$

**VMILAn** {% include cite.html id="2017_Bonettini_S_j-ip_clbpgmno"%}. The *Variable Metric Inexact Line-search Algorithm (new version)* ...

$$ \begin{array}{l}x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1/2} \in \mathrm{prox}_{\gamma_{k} R}\; \left( x_k - \gamma_{k} \nabla F(x_k) + \gamma_{k} \right)\\
	x_{k+1} = (1-\rho_k) x_k + \rho_k x_{k+1/2}
    \end{array}\right.\end{array}$$
	
The relaxation parameter $$\rho_k$$ is determined to yield a sufficient decrease in objective value.

### 1.2. Stochastic variance-reduced algorithms

We now present a variety of proximal variance reduction stochastic gradient algorithms.

**ProxSVRG** {% include cite.html id="2016_Reddi_J_p-nips_psmnnfso"%}. This algorithm is a nonconvex variant of the *Proximal Stochastic Variance Reduced Gradient* method devised in {% include cite.html id="2014_Xiao_L_j-jo_psgmpvr"%}. Note that ProxSVRG is not a
fully incremental algorithm since it requires calculation of the full gradient once per epoch. <a onClick="ShowAndHide('proxsvrg')"><i class="fas fa-angle-double-down"></i> Convergence results</a>.
<div id="proxsvrg" style="display:none;">For some batch-size \(b=1\) and step-size \(\gamma=1/3Ln\)

$$\mathbb{E}\left[ \|\mathcal{G}_\gamma(x_a)\|^2 \right] \leq \frac{18 Ln^2}{3n-2} \left( \frac{\mathcal{L}(x_0) - \mathcal{L}(x^\star)}{K M} \right)$$

For some batch-size \(b=n^{2/3}\), step-size \(\gamma=1/3L\) and \(M=n^{1/3}\)

$$\mathbb{E}\left[ \|\mathcal{G}_\gamma(x_a)\|^2 \right] \leq   \frac{18L \left(\mathcal{L}(x_0) - \mathcal{L}(x^\star)\right)}{K n^{1/3}} $$
</div>

$$ \begin{array}{l}\bar{x}_0 = x_0^{(M)}=x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	x_{k+1}^{(0)} = x_k^{(M)}\\
	g_{k+1} = \frac{1}{n}\sum_{i=1}^n \nabla F_i(\bar{x}_k)\\
		\text{for}\;m=0,1,\ldots,M-1\\[0.4ex]
    	\left\lfloor\begin{array}{l}
		\text{Uniformly pick batches } I_m \text{ (with replacement) of size } b\\
		\bar{g}_{k+1}^{(m)} = g_{k+1} + \frac{1}{b}\sum_{i_m\in I_m} \left( \nabla F_{i_m}(x_{k+1}^{(m)}) - \nabla F_{i_m}(\bar{x}_{k})\right)\\
		x_{k+1}^{(m+1)} = \mathrm{prox}_{\gamma R}\left( x_{k+1}^{(m)} - \gamma \bar{g}_{k+1}^{(m)}\right)
		\end{array}\right.\\
	\bar{x}_{k+1} = x_{k+1}^{(M)}
    \end{array}\right.\end{array}$$

**ProxSAGA** {% include cite.html id="2016_Reddi_J_p-nips_psmnnfso"%}. By hinging on the work of {% include cite.html id="2014_Defazio_A_p-nips_saga"%}, the authors have devised a nonconvex proximal variant of SAGA as follows.

$$ \begin{array}{l}x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\text{Uniformly pick batches } I_k \text{ and } J_k \text{ (with replacement) of size } b\\
	\bar{g}_k = \tilde{g}_k + \frac{1}{b}\sum_{i_k\in I_k} ( \nabla F_{i_k}(x_k) - \nabla F_{i_k}(\bar{x}_{k,i_k}))\\
	x_{k+1} = \mathrm{prox}_{\gamma R}\; \left( x_k - \gamma \bar{g}_k\right)\\
	\bar{x}_{k+1,j}=x_{k} \text{ for } j\in J_k \text{ and } \bar{x}_{k,j} \text{ otherwise}\\
	\tilde{g}_{k+1} = \tilde{g}_k - \frac{1}{n} \sum_{j_k\in J_k} ( \nabla F_{j_k}(\bar{x}_{k,j_k}) - \nabla F_{j_k}(\bar{x}_{k+1,j_k}))
    \end{array}\right.\end{array}$$

**ProxSpiderBoost** {% include cite.html id="2019_Wang_Z_p-nips_spiderboost"%}. SpiderBoost uses the same gradient estimator as SARAH and SPIDER. <a onClick="ShowAndHide('proxspiderboost')"><i class="fas fa-angle-double-down"></i> Convergence results</a>.
<div id="proxspiderboost" style="display:none;">For \(q=\sqrt{n}\), some batch-size \(b=\sqrt{n}\) and step-size \(\gamma=1/2L\), then

$$\mathbb{E}\left[ \|\nabla F(x_a)\|^2 \right] \leq 40 L \left( \frac{\mathcal{L}(x_0) - \mathcal{L}(x^\star)}{K} \right)$$

</div>

$$ \begin{array}{l}x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\text{if } \mathrm{mod}(k,q)=0 \text{ then }\\
		\left\lfloor\begin{array}{l}
		g_{k+1} = \nabla F(x_k)
		\end{array}\right.\\
	\text{else}\\
		\left\lfloor\begin{array}{l}
		\text{Uniformly pick batch } I_k \text{ (with replacement) of size } b\\
		g_{k+1} = \frac{1}{b}\sum_{i\in I_k}\left( \nabla F_i(x_k) - \nabla F_i(x_{k-1}) + g_{k}\right)
		\end{array}\right.\\
    x_{k+1} = \mathrm{prox}_{\gamma R}\; \left( x_k - \gamma g_{k+1} \right)
    \end{array}\right.\end{array}$$

**ProxSARAH** {% include cite.html id="2020_Pham_N_j-mlr_proxsarah"%}. The ProxSARAH algorithm differs from the *StochAstic Recursive grAdient algoritHm* (SARAH) by its proximal step followed by an additional averaging step. Note that, for $$\rho_m=1$$, it boils down to the vanilla proximal SARAH which is similar to ProxSVRG and ProxSpiderBoost. <a onClick="ShowAndHide('proxsarah')"><i class="fas fa-angle-double-down"></i> Convergence results</a>.
<div id="proxsarah" style="display:none;">Let us consider fixed mini-batch sizes \(b=n\) and \(b_m=\hat{b}\in[1,\sqrt{n}]\) for the outer and inner-loop, respectively. For fixed step-size \(\gamma=1/L\sqrt{\omega M}\) and \(\rho=2\sqrt{\omega M}/(4\sqrt{\omega M}+1)\), where \(\omega=3(n-\hat{b})/(2\hat{b}(n-1)\), then

$$\mathbb{E}\left[ \|\mathcal{G}_\gamma(x_a)\|^2 \right] \leq \frac{16 \sqrt{3} L}{\sqrt{2n}} \left( \frac{\mathcal{L}(x_0) - \mathcal{L}(x^\star)}{K} \right)$$.

</div>

$$ \begin{array}{l}\tilde{x}_0 \in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	x_{k+1}^{(0)} = \tilde{x}_k \\
	\text{Randomly pick batch } J_k \text{ of size } b \\
	g_{k+1}^{(0)} = \frac{1}{b}\sum_{j\in J_k} \nabla F_{j}(x_{k+1}^{(0)}) \\
	\bar{x}_{k+1}^{(0)} = \mathrm{prox}_{\gamma_0 R}\left( x_{k+1}^{(0)} - \gamma_0 g_{k+1}^{(0)}\right)\\
	x_{k+1}^{(0)} = (1-\rho_0) x_{k+1}^{(0)} + \rho_0 \bar{x}_0^{(0)}\\
		\text{for}\;m=0,1,\ldots,M-1\\[0.4ex]
    	\left\lfloor\begin{array}{l}
		\text{Randomly pick batch } I_m \text{ of size } b_m\\
		{g}_{k+1}^{(m+1)} = g_{k+1}^{(m)} + \frac{1}{b_m}\sum_{i\in I_m} \left( \nabla F_{i}(x_{k+1}^{(m+1)}) - \nabla F_{i}(x_{k+1}^{(m)})\right)\\
		\bar{x}_{k+1}^{(m+1)} = \mathrm{prox}_{\gamma_m R}\left( x_{k+1}^{(m)} - \gamma_k g_{k+1}^{(m+1)}\right)\\
		x_{k+1}^{(m+1)} = (1-\rho_m) x_{k+1}^{(m)} + \rho_m \bar{x}_{k+1}^{(m+1)} 
		\end{array}\right.\\
	\tilde{x}_{k+1} = x_{k+1}^{(M)}
    \end{array}\right.\end{array}$$


Comparison of *Stochastic First-order Oracle* (SFO) complexity

| Algorithms | SFO | Step-size |
| --- | --- | --- |
| ProxSVRG | $$\mathcal{O}(n+n^{2/3}\epsilon^{-2})$$ | $$\mathcal{O}(\frac{1}{nL})\to \mathcal{O}(\frac{1}{L})$$ |
| ProxSAGA | $$\mathcal{O}(n+n^{2/3}\epsilon^{-2})$$ | $$\mathcal{O}(\frac{1}{nL})\to \mathcal{O}(\frac{1}{L})$$ |
| ProxSpiderBoost | $$\mathcal{O}(n+n^{1/2}\epsilon^{-2})$$ | $$\mathcal{O}(\frac{1}{L})$$ |
| ProxSARAH | $$\mathcal{O}(n+n^{1/2}\epsilon^{-2})$$ | $$\mathcal{O}(\frac{1}{\sqrt{n}L})\to \mathcal{O}(\frac{1}{L})$$ |

### 1.3. Incremental algorithms

**PIAG** {% include cite.html id="2019_Peng_W_j-ota_npiagmlc"%}. The key idea of the *Proximal Incremental Aggregated Gradient* algorithm is to construct an *inexact gradient* to substitute for the full gradient at each iteration. This inexact gradient is devised by evaluating $$F$$ at past iterates $$x_{k - \tau_{k,i}}$$ where the time-varying delays $$\tau_{k,i}\in\{0,\ldots,\tau\}$$ for some maximum delay parameter $$\tau\in\mathbb{N}^+$$.

$$ \begin{array}{l}x_0\in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	g_k = \sum_{i=1}^n \nabla F_i ( x_{k - \tau_{k,i}})\\
	x_{k+1} = \mathrm{prox}_{\gamma R}\; \left( x_k - \gamma g_k\right)
    \end{array}\right.\end{array}$$

## 2. Nonconvex Optimization Problem with Nonconvex Nonsmooth Term

We now consider a variant where the nonsmooth part can be nonconvex. To this effect, we consider optimization problems of the form

$$ \underset{x\in\mathbb{R}^{m}}{\mathrm{minimize}}\; \left\{\mathcal{L}(x) \triangleq F(x)  + G(X) + R(X) \right\} $$

where the smooth part $$F\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x)$$ has a finite-sum structure and the nonsmooth part is divided into two terms $$R$$ and $$G$$ which are convex and nonconvex, respectively. As in Section 1, we assume that both $$G$$ and $$R$$ have efficiently computable proximal operators. 


**VRSPA** {% include cite.html id="2021_Metel_M_j-mlr_spmnncso"%}. The *Variance Reduced Stochastic Proximal Algorithm* is a variant of MBSPA, devised by the same authors, which takes advantage of the finite-sum nature of $$F$$. Given some parameter $$\lambda>0$$, the algorithm reads as follows.
<a onClick="ShowAndHide('vrspa')"><i class="fas fa-angle-double-down"></i> Convergence results</a>.
<div id="vrspa" style="display:none;">Given some hyper-parameters \(\theta_1\in\mathbb{R}\) and \(\theta_2\in\mathbb{R}\), the authors suggest to set the number of inner-iterations \(M={\lceil N^\alpha_1\rceil}\), the batch-size \(b=M^2\) and the step-size \(\gamma=\frac{1}{6 L_\lambda}\) with \(L_\lambda = L + 1/\lambda\) where \(\lambda=({\lceil (...)\rceil}  M)^{-\theta_2}\).</div>


$$ \begin{array}{l}
	\tilde{x}_0 \in\mathbb{R}^{m}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	x_{k+1}^{(0)} = \tilde{x}_k \\
	g_{k+1} = \nabla F(\tilde{x}_k)\\
		\text{for}\;m=0,1,\ldots,M-1\\[0.4ex]
    	\left\lfloor\begin{array}{l}
		\bar{x}_k^{(m)} \in \mathrm{prox}_{\lambda G}(x_{k+1}^{(m)})\\
		\text{Uniformly pick batch } I_m \text{ of size } b\\
		{g}_{k+1}^{(m+1)} = g_{k+1} + \frac{1}{\lambda}( x_k^{(m)} - \bar{x}_k^{(m)}) + \frac{1}{b}\sum_{i\in I_m} \left( \nabla F_{i}(x_{k+1}^{(m+1)}) - \nabla F_{i}(\tilde{x}_k)\right)\\
		\bar{x}_{k+1}^{(m+1)} = \mathrm{prox}_{\gamma R}\left( x_{k+1}^{(m)} - \gamma g_{k+1}^{(m+1)}\right)\\
		\end{array}\right.\\
	\tilde{x}_{k+1} = x_{k+1}^{(M)}
    \end{array}\right.\end{array}$$
	

## 3. Nonconvex Block-Structured Optimization Problem

We consider the following block-structured optimization problem

$$ \underset{x\in\mathbb{R}^{m_1}, y\in\mathbb{R}^{m_2}}{\mathrm{minimize}}\; \left\{\mathcal{L}(x,y) \triangleq R(x) + F(x,y) + Q(y) \right\} $$


where $$F\triangleq \frac{1}{n}\sum_{i=1}^n F_i(x,y)$$ has a finite-sum structure, and functions $$R$$ and $$Q$$ are possibly non-smooth functions.


{% include definition.html title="Assumptions" content="Throughout this section, we consider the following assumptions.
- $$R\colon \mathbb{R}^{m_1} \to \mathbb{R}\cup \{+\infty\}$$ and $$Q\colon \mathbb{R}^{m_1} \to \mathbb{R}\cup \{+\infty\}$$ are proper lower semi-continuous functions that are bounded from below. 
- $$F_i\colon \mathbb{R}^{m_1} \times \mathbb{R}^{m_2} \to \mathbb{R}$$ are finite-valued, differentiable and their gradients are $$M$$-Lipschitz continuous on bounded sets of $$\mathbb{R}^{m_1} \times \mathbb{R}^{m_2}$$.
- The objective $$\mathcal{L}$$ is bounded from below.
" %}

> No convexity assumption is imposed on any of the functions $$R$$, $$F_i$$, $$Q$$. 


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
\top(x-x_k) + \frac{1}{2\gamma_{1,k}}\|x_k - x\|^2 + R(x)\\
\mathcal{L}_{2,k}(y)&\triangleq F(x_{k+1},y_k) + \nabla_y F(x_{k+1},y_k)^
\top(y-y_k) + \frac{1}{2\gamma_{2,k}}\|y_k - y\|^2 + Q(y)
\end{align}
$$

This results in the following PALM's iterations:

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} R}\; \left( x_k - \gamma_{1,k} \nabla_x F(x_k,y_k) \right)\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} Q}\; \left( y_k - \gamma_{2,k} \nabla_y F(x_{k+1},y_k) \right)
    \end{array}\right.\end{array}$$
	
	
**iPALM** {% include cite.html id="2016_Pock_T_j-is_ipalm"%}.

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
	\tilde{x}_{k} = x_k + \alpha_{1,k}( x_k - x_{k-1})\\
	\bar{x}_k = x_k + \beta_{1,k}(x_k - x_{k-1})\\
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} R}\; \left( \tilde{x}_k - \gamma_{1,k} \nabla_x F(\bar{x}_k,y_k) \right)\\
	\tilde{y}_{k} = y_k + \alpha_{2,k}( y_k - y_{k-1})\\
	\bar{y}_k = y_k + \beta_{2,k}(y_k - y_{k-1})\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} Q}\; \left( \tilde{y}_k - \gamma_{2,k} \nabla_y F(x_{k+1},\bar{y}_k) \right)
    \end{array}\right.\end{array}$$
	
**GiPALM** {% include cite.html id="2019_Gao_X_j-go_gsipalmnop"%}. The *Gauss-Seidel type iPALM* ... 

$$ \begin{array}{l}(\bar{x}_0,\bar{y}_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} R}\; \left( \bar{x}_k - \gamma_{1,k} \nabla_x F(\bar{x}_k,\bar{y}_k) \right)\\
	\bar{x}_{k+1} = x_{k+1} + \rho_{1,k}(x_{k+1} - x_{k})\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} Q}\; \left( \bar{y}_k - \gamma_{2,k} \nabla_y F(\bar{x}_{k+1},\bar{y}_k) \right)\\
	\bar{y}_{k+1} = y_{k+1} + \rho_{2,k}(y_{k+1} - y_{k})\\
    \end{array}\right.\end{array}$$

**SPRING** {% include cite.html id="2021_Driggs_D_arxiv_spring"%}. The *Stochastic PRoximal alternatING linearized minimization* algorithm is a randomized version of PALM where the gradients are replaced by random estimates $$\tilde{\nabla} F$$ formed using the gradients estimated on mini-batches.

$$ \begin{array}{l}(x_0,y_0)\in\mathbb{R}^{m_1}\times \mathbb{R}^{m_2}\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} \in \mathrm{prox}_{\gamma_{1,k} R}\; \left( x_k - \gamma_{1,k} \tilde{\nabla}_x F(x_k,y_k) \right)\\
	y_{k+1} \in \mathrm{prox}_{\gamma_{2,k} Q}\; \left( y_k - \gamma_{2,k} \tilde{\nabla}_y F(x_{k+1},y_k) \right)
    \end{array}\right.\end{array}$$

	
## Notations

|  Notations | Meaning  | Type and range |
| --- | --- | --- |
| $$\gamma$$ | Step-size | positive real |
| $$\rho$$ | Relaxation parameter | real in $$(0,1]$$ |
| $$\alpha$$, $$\beta$$ | Inertial parameter | real in $$[0,1]$$ |
| $$I$$, $$J$$| Mini-batch | finite set of integers |
| $$b$$ | Size of mini-batch | positive integer |
| $$g$$, $$\tilde{g}$$, $$\bar{g}$$ | Gradient (instant, average or approximation) | real matrices |

