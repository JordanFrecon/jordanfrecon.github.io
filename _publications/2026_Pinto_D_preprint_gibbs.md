---
layout: publication
title: Beyond Gaussian Initialization - Activation-Induced Gibbs States for Critical and Width-Efficient Networks
authors: D. Pinto-Suarez, J. Patracone and M. Sebban
publication: preprint
year: 2026
doi:
image: False
type: preprint
project: deepLearning
nopdf: True
nobib: True
---

Classical initialization typically searches for a suitable weight scale while keeping the preactivation family Gaussian. We ask whether the activation should also determine the shape of this distribution. For activations derived by Legendre potential, the same Legendre potential canonically induces the Gibbs family , whose score is directly prescribed by . We characterize criticality over arbitrary preactivation laws. For Softplus, no finite mean-zero Gaussian preactivation state in a zero-bias network is simultaneously forward-stationary and mean-square critical, whereas the activation-induced Gibbs family provably contains such a state. We then study finite-width fluctuations in an explicit decoupled propagation model. For sigmoid, the Gibbs critical state has a substantially smaller coefficient than its Gaussian counterpart, predicting a reduced width requirement; an explicit row-wise scale-mixture realization remains favorable after accounting for its additional heteroscedasticity. Preliminary MNIST experiments are consistent with the resulting optimization and width-efficiency predictions.
