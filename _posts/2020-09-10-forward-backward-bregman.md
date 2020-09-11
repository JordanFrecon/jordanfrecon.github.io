---
title: Forward-Backward with Bregman distances
tags: [Optimization, Bregman]
style: 
color: 
description: How to ...
---


The Lipschitz continuous gradient condition (i.e., smoothness) is an important concept in convex optimization which is essential to ensure the convergence of many gradient descent based algorithms. Intuitively, a Lipschitz continuous function is limited in how fast it can change.
Traditionally, the Euclidean function $$\phi=\frac{1}{2}\|\cdot\|^2$$ is use leading to ..
where $$D_\phi$$ is the Bregman distance associated to $$\phi$$, i.e.,
$$D_\phi(x,z) = \phi(x) - \phi(z) - \langle \nabla\phi(z), x-z\rangle$$



We consider the following generic optimization problem

$$ \underset{x}{\mathrm{minimize}}\; \left\{\mathcal{L}(x) \triangleq f(x) + g(x)\right\} $$

where both $$f$$ and $$g$$ are proper lower semi-continuous convex functions. In addition, we suppose that $$f$$ is $$\mu$$-smooth with respect to some Legendre function $$\phi$$. 


{% include definition.html title="Smoothness" content="The function $$f$$ is said to be $$\mu$$-smooth with respect to $$\phi$$ if the following equivalent conditions are verified.
- $$\mu\phi-f$$ is convex on $$\mathrm{int}\,\mathrm{dom}\,\phi$$
- \\((\forall x\in\mathrm{dom}\,\phi,z\in\mathrm{int}\,\mathrm{dom}\,\phi)\quad f(x) \leq f(z) + \nabla f(z)^\top(x-z) + \mu D_\phi(x,z)\\)" %}

> Actually, there are many equivalent formulations. The reader in invited to report to (Bolte, Proposition 1).


The former condition is useful in practice in order to find the constant $$\mu>0$$ while the latter permits to implement a majorization-minimization (MM) algorithm. The underlying idea behind the MM algorithm is to convert a hard optimization problem into a sequence of simpler ones. Its principle relies on iteratively minimizing a majorizing surrogate $$\mathcal{L}_k$$ of the objective function $$\mathcal{L}$$. The prototypal algorithm is the following.

$$ x_0\in\mathrm{int}\,\mathrm{dom}\,\phi\\
    \text{for}\;k=0,1,\ldots,K-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} = \underset{x}{\mathrm{argmin}}\; \mathcal{L}_k(x)\\
    \end{array}\right.$$


Here, the majorant $$\mathcal{L}_k(x)$$ is simply built as $$\mathcal{L}_k(x)\triangleq h_k(x) + g(x)$$ where $$h_k(x) = f(x_k) + \nabla f(x_k)^\top(x-x_k) + \tau^{-1} D_\phi(x,x_k)$$ for $$\tau\leq 1/\mu$$. We recall below the classical conditions for having a valid majorant. 

{% include definition.html title="Surrogate conditions" content="The traditional conditions for $$h_k$$ to be a valid majorant of $$f$$ anchored at $$x_k$$ are
- Touching: $$f(x_k) = h_k(x_k)$$
- Tangency:  $$\nabla f(x_k) = \nabla h_k(x_k)$$
- Global majorant:  $$f(x) \leq h_k(x)$$"%}


We are not left with solving each minimization problem. This boils down to finding $$x_{k+1}$$ such that $$0\in\partial\mathcal{L}_k(x)$$, i.e.,

$$
\begin{align}
0&\in \{\nabla f(x_k) + \tau^{-1} \nabla\phi(x_{k+1}) - \tau^{-1}\nabla\phi(x_k)\} + \partial g (x_{k+1})\\
(\tau \partial g + \nabla \phi)(x_{k+1}) &\ni \nabla\phi(x_k) - \tau \nabla f(x_k) \\
x_{k+1} &= (\tau \partial g + \nabla\phi)^{-1}(\nabla\phi(x_k) - \tau\nabla f(x_k))\\
x_{k+1} &= \mathrm{prox}_{\tau g}^\phi (\nabla\phi(x_k) - \tau\nabla f(x_k))
\end{align}
$$



