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


The former condition is useful in practice in order to find the constant $$\mu$$ while the former to devise an algorithmic solution. Indeed, one can see it as a way to build a majorant of $$f$$ anchored at some point $$z$$. Thus, it paves the way to the design of a majorize-minimize algorithmic solution. We recall below the classical conditions for having a valid majorant. 

{% include definition.html title="Surrogate conditions" content="The traditional conditions for $$h_k$$ to be a valid majorant of $$f$$ anchored at $$x_k$$ are
- Touching: $$f(x_k) = h_k(x_k)$$
- Tangency:  $$\nabla f(x_k) = \nabla h_k(x_k)$$
- Global majorant:  $$f(x) \leq h_k(x)$$"%}


$$\begin{cases}
   x_0\in\mathcal{C} \text{ is chosen arbitrarily}\\
    \text{for}\;q=0,1,\ldots,Q-1\\[0.4ex]
    \left\lfloor\begin{array}{l}
    x_{k+1} = \argmin_x \Big\{g(x;x_k) = g_k(x)\Big\}\\
    \end{array}\right.
    \end{cases}$$
