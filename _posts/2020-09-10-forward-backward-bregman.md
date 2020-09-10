---
title: Forward-Backward with Bregman distances
tags: [Optimization, Bregman]
style: 
color: 
description: How to ...
---

We consider the following generic optimization problem

$$ \hat{x} = \underset{x}{\mathrm{argmin}}\; f(x) + g(x) $$

where both $$f$$ and $$g$$ are proper lower semi-continuous convex functions. In addition, we suppose that $$f$$ is $$\mu$$-smooth with respect to some Legendre function $$\phi$$, meaning that


{:.massage-box .alert-info}
**Smoothness.**
The function $$f$$ is said to be $$\mu$$-smooth with respect to $$\phi$$ if the following equivalent conditions are verified.
- \\({e}^{i\pi }+1=0\\)
- $$\mu\phi-f$$ is convex
- \\((\forall x,z)\quad f(x) \leq f(z) + \nabla f(z)^\top(x-z) + \mu D_\phi(x,z)\\)

where $$D_\phi$$ is the Bregman distance associated to $$\phi$$, i.e.,

{{site.data.alerts.note}}
<p>This is my note.</p>
<pre>
def foo(x):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return x+1
</pre>
{{site.data.alerts.end}}


{% include note.html content="The function $$f$$ is said to be $$\mu$$-smooth with respect to $$\phi$$ if the following equivalent conditions are verified.
- \\({e}^{i\pi }+1=0\\)
- $$\mu\phi-f$$ is convex
- \\((\forall x,z)\quad f(x) \leq f(z) + \nabla f(z)^\top(x-z) + \mu D_\phi(x,z)\\)" %}

$$D_\phi(x,z) = \phi(x) - \phi(z) - \langle \nabla\phi(z), x-z\rangle$$

{:.massage-box .alert-info}
**Majorize-minimize surrogate conditions**
The traditional conditions for $$h$$ to be a valid majorant are
. Touching: $$f(x_k) = h(x_k)$$
. Tangency:  $$\nabla f(x_k) = \nabla h(x_k)$$
. Global majorant:  $$f(x) \leq h(x)$$

{:.massage-box .alert-danger}
**Test Message alert danger**
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a in, ullam.

{:.massage-box .alert-warning}
**Test Message alert warning**
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a in, ullam.