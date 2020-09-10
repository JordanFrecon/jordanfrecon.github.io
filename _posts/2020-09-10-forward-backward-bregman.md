---
title: Forward-Backward with Bregman distances
tags: [Optimization, Bregman]
style: 
color: 
description: How to ...
---

We consider the following generic optimization problem

$$ \hat{x} = \underset{x}{\mathrm{argmin}}\; f(x) + g(x) $$

where both $$f$$ and $$g$$ are proper lower semi-continuous functions. In addition, we suppose that $$f$$ is $$\mu$$-smooth with respect to some Legendre function $$\phi$$, meaning that

- $$\mu\phi-f$$ is convex
- $$(\forall x,z)\quad f(x) \leq f(z) + \nabla f(z)^\top(x-z) + \mu D_\phi(x,z)$$ 

where $$D_\phi$$ is the Bregman distance associated to $$\phi$$, i.e.,

$$D_\phi(x,z) = \phi(x) - \phi(z) - \langle \nabla\phi(z), x-z\rangle$$

