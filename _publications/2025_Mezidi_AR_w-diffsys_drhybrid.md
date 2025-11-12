---
layout: publication
title: Douglas-Rachford Splitting for Hybrid Differentiable Models
authors: A.-R. Mezidi, J. Patracone and A. Habrard
publication: EurIPS Workshop - Differentiable Systems and Scientific Machine Learning (DiffSys)
year: 2025
doi:
image: false
type: workshop
project: physics
nobib: True
---


Hybrid differentiable models that combine neural networks with numerical solvers have shown promise in scientific machine learning applications, particularly for modeling complex physical phenomena governed by partial differential equations (PDEs). However, many real systems exhibit incomplete or partially known physics. We address this setting by introducing a proximal optimization framework based on Douglas–Rachford splitting that cleanly separates the known physics from learned corrections. Our approach reformulates learning as a structured splitting of an incomplete-physics objective and a data-driven regularizer, yielding an unrolled architecture that alternates a numerical solver on the available physics and a neural network that compensates missing effects. Theoretically, we establish connections between our Douglas-Rachford iterations and gradient flows in PDE systems. Empirically, on the Allen-Cahn benchmark problem, our method improves accuracy over standard methods.
