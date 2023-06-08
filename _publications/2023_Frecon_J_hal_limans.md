---
layout: publication
title: Linear Model of the Adversarial Noise Space
authors: J. Frecon, L. Anquetil, Y. Liu, G. Gasso and S. Canu
publication: Under review
year: 2023
doi:
type: unpublished
project: adversarialLearning
---

Recent works have revealed the vulnerability of deep neural network (DNN) classifiers to adversarial attacks. Among such attacks, it is common to distinguish specific attacks adapted to each example from universal ones referred as example-agnostic. Even though specific adversarial attacks are efficient on their target DNN classifier to attack, they struggle to transfer to others. Conversely, universal adversarial attacks suffer from lower attack success. To reconcile universality and efficiency, we propose a model of the adversarial noise space allowing to frame any specific adversarial perturbation as a linear combination of the universal adversarial directions. We bring in two stochastic gradient based algorithms for learning these universal directions and the associated adversarial attacks. Empirical analyses conducted with the CIFAR-10 and ImageNet datasets show that LIMANS (i) enables crafting specific and robust adversarial attacks with high probability, (ii) provides a deeper understanding of DNN flaws, and (iii) shows significant ability in transferability.
