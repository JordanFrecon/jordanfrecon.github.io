---
title: Forward-Backward with Bregman distances
tags: [Optimization, Bregman]
style: 
color: 
description: How to ...
---


An important concept in convex optimization, namely the Lipschitz continuous gradient condition, is essential to ensure the convergence of many gradient descent based algorithms. Intuitively, a Lipschitz continuous function is limited in how fast it can change.



We consider the following generic optimization problem

$$ \hat{x} = \underset{x}{\mathrm{argmin}}\; f(x) + g(x) $$

where both $$f$$ and $$g$$ are proper lower semi-continuous convex functions. In addition, we suppose that $$f$$ is $$\mu$$-smooth with respect to some Legendre function $$\phi$$. Traditionally, the Euclidean function $$\phi=\frac{1}{2}\|\cdot\|^2$$ is use leading to ..


where $$D_\phi$$ is the Bregman distance associated to $$\phi$$, i.e.,
$$D_\phi(x,z) = \phi(x) - \phi(z) - \langle \nabla\phi(z), x-z\rangle$$



{% include definition.html title="Smoothness" content="The function $$f$$ is said to be $$\mu$$-smooth with respect to $$\phi$$ if the following equivalent conditions are verified.
- $$\mu\phi-f$$ is convex on $$\mathrm{int}\,\mathrm{dom}\,\phi$$
- \\((\forall x\in\mathrm{dom}\,\phi,z\in\mathrm{int}\,\mathrm{dom}\,\phi)\quad f(x) \leq f(z) + \nabla f(z)^\top(x-z) + \mu D_\phi(x,z)\\)" %}

> Actually, there are many equivalent formulations. The reader in invited to report to (Bolte, Proposition 1).


The former condition is useful in practice in order to find the constant $$\mu$$ while the former to devise an algorithmic solution. Indeed, one can see it as a way to build a majorant of $$f$$ anchored at some point $$z$$. 

{% include definition.html title="Surrogate conditions" content="The traditional conditions for $$h_k$$ to be a valid majorant of $$f$$ anchored at $$x_k$$ are
- Touching: $$f(x_k) = h_k(x_k)$$
- Tangency:  $$\nabla f(x_k) = \nabla h_k(x_k)$$
- Global majorant:  $$f(x) \leq h_k(x)$$"%}

{:.massage-box .alert-danger}
**Test Message alert danger**
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a in, ullam.

{:.massage-box .alert-warning}
**Test Message alert warning**
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a in, ullam.