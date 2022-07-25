# Neural ODEs

## Vanilla Neural ODEs (Chen et al., 2018)

### Principle

**Resnets as Euler integrators**

```json
	def f(z,t,theta):
		return nnet(z,theta[t])
		
	def resnet(z):
		for t in [1:T]:
			z = z  + f(z,t,theta)
		return z
```

In order to make the dynamics continously defined with the depth, the authors of [...] proposed a simple change

```json
	def f(z,t,theta):
		return nnet([z,t],theta)
		
	def resnet(z):
		for t in [1:T]:
			z = z  + f(z,t,theta)
		return z
```

Now instead of using the standard Euler integrator, we are free to choose a more advanced ODE solver


```json
	def f(z,t,theta):
		return nnet([z,t],theta)
		
	def resnet(z):
		return ODESolve(f, z, 0, 1 , theta)
```


### Limitations

There are two ways of improving the model
- investigate the advantaged of advanced ODE solvers
- use depth-varying parameter $$t\mapsto\theta(t)$$

Concerning the former, the [Vanilla ODEs package](https://github.com/rtqichen/torchdiffeq) made available a few solvers, namely:
**Adaptive-step:**
    - Runge-Kutta of order 8 of Dormand-Prince-Shampine.
    - Runge-Kutta of order 5 of Dormand-Prince-Shampine.
    - Runge-Kutta of order 3 of Bogacki-Shampine.
    - Runge-Kutta-Fehlberg of order 2.
    - Runge-Kutta of order 2.
**Fixed-step:**
	- Euler method.
	- Midpoint method.
	- Fourth-order Runge-Kutta with 3/8 rule.
    - Explicit Adams-Bashforth.
    - Implicit Adams-Bashforth-Moulton.


Concerning the latter ..

**Hypernetwork** (Zhang et al., 2019)
idea: train another neural network whose goal is to parametrize the dynamic of $$t\mapsto \theta(t)$$

**Galërkin Neural ODEs** (Massaroli et al., 2021)
idea: learn coefficient parameters $$(\alpha_1,\ldots,\alpha_m)$$ of the truncated expansion of $$\theta$$ in a complete orthogonal basis s, i.e., $$\theta(t)=\sum_{j=1}^m \alpha_j\odot \psi_j(t)$$.

**Stacked Neural ODEs** (Massaroli et al., 2021)
idea: using piece-wise constant $$\theta$$ boils down to stacking multiple Neural ODEs with constant parameters.

## Advances in Neural ODEs

Since the flow of an ODE is an homeomorphism, standard Neural ODES (NODEs) cannot, for example. tear a connected region apart.

**ANODEs** [Dupon et al., 2019](https://arxiv.org/pdf/1904.01681.pdf). The *Augmented Neural ODES* provide a simple solution to the above-mentioned problem by avoid intersecting trajectories through an augmented dimension.

**MALI** [Zhuang et al, 2021](https://openreview.net/pdf?id=blfSjHeFM_e). The *Memory-efficient ALF Integrator* method proposes a novel way to estimate the gradient for Neural ODEs. It achieves constant memory cost w.r.t. number of solver steps and is based on the *Asynchronous LeapFrog* (ALF) integrator.
