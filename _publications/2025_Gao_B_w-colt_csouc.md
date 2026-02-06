---
layout: publication
title: When to Learn - Conformal Scores as Online Update Criteria
authors: B. Gao, J. Patracone, O. Alata, and S. Chrétien
publication: COLT Workshop - Predictions and Uncertainty
year: 2025
doi:
image: False
type: workshop
project: dynamicalSyst
nopdf: True
nobib: True
---


We present Conformal Online Learning (COL), a novel framework designed for adaptive model updates in streaming environments. Inspired by conformal prediction but repurposed for learning, COL evaluates the consistency of models over time, rather than constructing prediction sets. At each step, the model's performance is compared against a calibrated conformity threshold derived from recent history. An update is triggered only if the model's error exceeds this threshold, ensuring that learning occurs only when necessary. This selective adaptation leads to a significant reduction in redundant updates while preserving long-term accuracy. Unlike classical online learning methods that continuously retrain or assume stationarity, COL offers a principled, data-driven mechanism for dynamic model refinement with minimal computational overhead. The framework is general and model-agnostic, making it suitable for a wide range of applications involving evolving data streams and non-stationary environments. We demonstrate the effectiveness of COL through its application to online learning of Koopman linear embeddings for non-linear dynamical systems.
