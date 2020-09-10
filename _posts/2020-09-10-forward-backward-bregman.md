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

{:.bg-danger}
Test paragraph with **bg-danger** custom class.

{:.bg-success}
Test paragraph with **bg-success** custom class.

{:.bg-info}
Test paragraph with **bg-info** custom class.

{:.bg-warning}
Test paragraph with **bg-warning** custom class.


{:.massage-box .alert-success}
**Test Message alert success**
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a in, ullam.

{:.massage-box .alert-info}
**Test Message alert info**
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a in, ullam.

{:.massage-box .alert-danger}
**Test Message alert danger**
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a in, ullam.

{:.massage-box .alert-warning}
**Test Message alert warning**
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a in, ullam.