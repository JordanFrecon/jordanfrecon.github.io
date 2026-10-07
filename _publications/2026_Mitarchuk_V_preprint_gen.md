---
layout: publication
title: "The Metric Matters: Certifying Generative Models with Validation and PAC-Bayes Bounds"
authors: V. Mitarchuk, A. Habrard, Q. Bertrand, J. Patracone, G. Gasso and R. Emonet
publication: preprint
year: 2026
doi:
image: False
type: preprint
project: deepLearning
nopdf: True
nobib: True
---

Generative models are usually evaluated with metrics that compare generated images with real ones, such as the Fréchet Inception Distance (FID), the Kernel Inception Distance (KID) or Wasserstein distances between image features. These metrics are computed on finite samples, which raises a basic question: does the value measured on a sample reflect the quality of the model with respect to the true data distribution? Generalization bounds answer it with a guarantee: an upper bound on the true value of the metric that holds with high probability. In this work, we ask which evaluation metrics admit a useful guarantee. For six standard metrics, we derive explicit, computable bounds of two kinds, validation bounds and disintegrated PAC-Bayes bounds, extending the latter beyond integral probability metrics to kernel-based metrics and to the Fréchet distance. We evaluate them on three generative architectures, each trained on three datasets with five different train/validation partitions. Our experiments show that the choice of metric is decisive: the same model can be certified under one metric and not under another, and the metrics that best distinguish good models from weaker ones are not those that admit tight guarantees.
