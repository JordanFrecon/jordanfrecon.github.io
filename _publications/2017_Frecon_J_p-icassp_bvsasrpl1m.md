---
layout: publication
title: Bayesian-variational scheme to automatically select the regularization parameter in the L1-Potts model
authors: J. Frecon, N. Pustelnik, N. Dobigeon, H. Wendt and P. Abry
publication: International Conference on Acoustics, Speech and Signal Processing (ICASSP)
year: 2017
doi: 10.1109/ICASSP.2017.7952875
type: conference
toolbox: https://github.com/JordanFrecon/TVL0_select
project: piecewiseCstDenoising
---

This work focusses on the parameter estimation in the L1-Potts model, i.e., a variational approach involving a L1 dataterm and a
TVL0 penalization. Variational approaches based on total variation have gained considerable interest to solve piecewise constant denoising problems due to their deterministic setting and low computational cost. However, the estimation performance of the achieved solution strongly depend on the tuning of a regularization parameter. While recent works have tailored various hierarchical Bayesian procedure in order to additionally estimate the regularization parameter when the noise is Gaussian, less attention has been devoted to Laplacian noise. In this context and elaborating on a previous work, this contribution promotes a fast and parameter-free denoising procedure of piecewise constant signals corrupted by Laplacian noise. It relies on the minimization of a Bayesian-driven criteria whose similarities with the L1-Potts model permits to derive an efficient algorithm