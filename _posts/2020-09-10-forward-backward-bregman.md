---
title: Forward-Backward with Bregman distances
tags: [Convex, Optimization, Bregman]
style: fill
color: info
description: A quick introduction to convex optimization with Bregman distances
comments: true
biblio: [2017_Bauschke_H_j-mor_dlblgc,2017_VanNguyen_Q_j-vjm_fbsbd]
---


For this first post, I have chosen to shortly introduce the forward-backward algorithm with Bregman distances.


The forward-backward algorithm is a widely used first order method to minimize the sum of two convex functions where one of them is smooth whereas the other one is non-smooth but has a simple proximity operator. The smoothness property is usually intended as the Lipschitz continuous gradient condition which intuitively states that the gradient is limited in how fast it can change. More formally, a continously differentiable function $$f$$ is $$\mu$$-smooth if

$$
(\forall x,z)\; \| \nabla f(x) - \nabla f(z) \| \leq \mu \| x - z\|. 
$$

Hence, the Lipschitz continuous gradient condition is essential to carefully design optimal step-sizes and ensure the convergence of many gradient descent based algorithms. For convex functions one can derive the following equivalent definitions
- $$\frac{\mu}{2} \|\cdot \|^2 - f$$ is convex
- $$(\forall x,z)\; f(x) \leq f(z) + \nabla f(z)^\top(x-z) + \frac{\mu}{2}\|x-z\|^2$$
$$\,$$

In the following, we present a more general framework and briefly explain how we can still devise a forward-backward type algorithm.

## 1. Optimization problem

We consider the following generic optimization problem

$$ \underset{x}{\mathrm{minimize}}\; \left\{\mathcal{L}(x) \triangleq f(x) + g(x)\right\} $$

where both $$f$$ and $$g$$ are proper lower semi-continuous convex functions. In addition, we suppose that $$f$$ is $$\mu$$-smooth with respect to some Legendre function $$\phi$$. 


{% include definition.html title="Smoothness" content="The function $$f$$ is said to be $$\mu$$-smooth with respect to $$\phi$$ if the following equivalent conditions are verified.
- $$\mu\phi-f$$ is convex on $$\mathrm{int}\,\mathrm{dom}\,\phi$$
- $$(\forall x\in\mathrm{dom}\,\phi,z\in\mathrm{int}\,\mathrm{dom}\,\phi)$$ $$f(x) \leq f(z) + \nabla f(z)^\top(x-z) + \mu D_\phi(x,z)$$

where $$D_\phi$$ is the Bregman distance associated to $$\phi$$, i.e.,

$$D_\phi(x,z) = \phi(x) - \phi(z) - \langle \nabla\phi(z), x-z\rangle$$

" %}

> Actually, there are many equivalent formulations. The reader in invited to report to {% include cite.html id="2017_Bauschke_H_j-mor_dlblgc"%}. 

> One recovers the classical definition of smoothness for $$\phi = \frac{1}{2}\|\cdot \|^2$$.

The former condition is useful in practice in order to find the constant $$\mu>0$$ while the latter permits to implement a majorization-minimization (MM) algorithm presented in the next section.


## 2. Algorithm

The underlying idea behind the MM algorithm is to convert a hard optimization problem into a sequence of simpler ones. Its principle relies on iteratively minimizing a majorizing surrogate $$\mathcal{L}_k$$ of the objective function $$\mathcal{L}$$. The prototypal algorithm is the following.

$$ x_0\in\mathrm{int}\,\mathrm{dom}\,\phi\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} = \underset{x}{\mathrm{argmin}}\; \mathcal{L}_k(x)\\
    \end{array}\right.$$


Here, the surrogate $$\mathcal{L}_k(x)$$ is simply built as $$\mathcal{L}_k(x)\triangleq h_k(x) + g(x)$$ where $$h_k(x) = f(x_k) + \nabla f(x_k)^\top(x-x_k) + \tau^{-1} D_\phi(x,x_k)$$ is a majorant of $$f$$ for $$\tau^{-1}\geq \mu$$. We recall below the classical conditions for having a valid majorant. 

{% include definition.html title="Surrogate conditions" content="The traditional conditions for $$h_k$$ to be a valid majorant of $$f$$ anchored at $$x_k$$ are
- Touching: $$f(x_k) = h_k(x_k)$$
- Tangency:  $$\nabla f(x_k) = \nabla h_k(x_k)$$
- Global majorant:  $$f(x) \leq h_k(x)$$"%}


We are now left with solving each minimization problem. This boils down to finding $$x_{k+1}$$ such that $$0\in\partial\mathcal{L}_k(x_{k+1})$$, i.e.,

$$
\begin{align}
0&\in \{\nabla f(x_k) + \tau^{-1} \nabla\phi(x_{k+1}) - \tau^{-1}\nabla\phi(x_k)\} + \partial g (x_{k+1})\\
(\tau \partial g + \nabla \phi)(x_{k+1}) &\ni \nabla\phi(x_k) - \tau \nabla f(x_k) \\
x_{k+1} &= (\tau \partial g + \nabla\phi)^{-1}(\nabla\phi(x_k) - \tau\nabla f(x_k))\\
x_{k+1} &= \mathrm{prox}_{\tau g}^\phi (\nabla\phi(x_k) - \tau\nabla f(x_k))
\end{align}
$$

where in the last two-steps we encounted the proximity operator with Bregman distance {% include cite.html id="2017_VanNguyen_Q_j-vjm_fbsbd"%}.

{% include definition.html title="Proximity operator with Bregman distance" content="Let some Legendre function $$\phi$$ and a proper lower semi-continous convex function $$h$$. The proximity operator (in Van Nguyen sense) of $$h$$ with respect to $$\phi$$ reads

$$
\mathrm{prox}_{h}^\phi(y) = \underset{x}{\mathrm{argmin}}\; h(x) + \phi(x) - \langle x,y\rangle
$$

"%}

Finally, the overall procedure boils down to the ***Forward-Backward algorithm with Bregman distances***.

$$ x_0\in\mathrm{int}\,\mathrm{dom}\,\phi\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} = \mathrm{prox}_{\tau g}^\phi (\nabla\phi(x_k) - \tau\nabla f(x_k))\\
    \end{array}\right.$$


> In particular, when $$\phi=\frac{1}{2}\|\cdot\|^2$$ we recover the classical foward-backward algorithm.
