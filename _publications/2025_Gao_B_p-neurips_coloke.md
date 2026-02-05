---
layout: publication
title: Conformal Online Learning of Deep Koopman Linear Embeddings
authors: B. Gao, J. Patracone, O. Alata, and S. Chrétien
publication: Conference on Neural Information Processing Systems (NeurIPS)
year: 2025
doi:
image: True
type: conference
project: dynamics
nobib: True
---


We introduce Conformal Online Learning of Koopman embeddings (COLoKe), a novel framework for adaptively updating Koopman-invariant representations of nonlinear dynamical systems from streaming data. Our modeling approach combines deep feature learning with multi-step prediction consistency in the lifted space, where the dynamics evolve linearly. To prevent overfitting, COLoKe employs a conformal-style mechanism that shifts the focus from evaluating the conformity of new states to assessing the consistency of the current Koopman model. Updates are triggered only when the current model’s prediction error exceeds a calibrated threshold, allowing selective refinement of the Koopman operator and embedding. Empirical results on benchmark dynamical systems demonstrate the effectiveness of COLoKe in maintaining long-term predictive accuracy while significantly reducing unnecessary updates.
