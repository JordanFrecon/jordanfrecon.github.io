---
title: Multi-Task Structure Learning
tags: [Multi-Task, Clustering]
style: fill
color: secondary
description: A short survey on various approaches to discover groups of related tasks
comments: true
biblio: [2008_Argyriou_A_j-ml_cmtfl,2012_Kumar_A_p-icml_ltgomtl,2013_Maurer_A_p-icml_scmtl,2015_Barzilai_A_p-aistats_cmtl,2016_Zhong_S_j-n_fmtlltg,2018_Jeong_J-Y_p-sigkdd_vstgmtl,2010_Jalali_A_p-nips_dmmtl,2011_Chen_J_p-sigkdd_ilrgssrml,2015_Han_L_p-aaai_lmltgmtl]
---



In the paradigm of multi-task learning, multiple related prediction tasks are learned jointly by sharing some information. This calls to specify when to share (i.e., decide when some tasks are related), what to share (i.e., determine the form through which sharing among the related tasks occur) and how to share (i.e., specify concrete ways to share knowledge among tasks). More formally, multi-task learning is defined as follows.

{% include definition.html title="Multi-Task Learning" content="Let $$T$$ learning tasks $$\{\mathcal{T}_t\}_{t=1}^T$$ where each task $$\mathcal{T}_t$$ is associated to a  training set $$\mathcal{D}_t = \{x_{t,i},y_{t,i}\}_{i=1}^{n_t}$$, a model parameter $$w_t$$ which need to be learned, and a loss function $$\mathcal{L}(\cdot,\mathcal{D}_t)$$ evaluating the prediction performance of $$w_t$$ on the training set. In the following, we denote by $$W=[w_1\cdots w_T]$$ the collection of model parameters. Multi-task learning aims to help improve the learning of a model for $$\mathcal{T}_t$$ by using the knowledge contained in all or some of the $$T$$ tasks." %}

A major challenge in multi-task learning consist in finding groups of related tasks in order to prevent that two unrelated tasks do not end up influencing each other, hence worsening the performance of both tasks.

## 1. Factorization approaches and sparse coding techniques 

One line of research relies on the assumption that the parameter matrix $$W$$ can be factorized as $$W=LS$$ where $$L$$ denotes the latent basis tasks and $$S$$ is a matrix containing the weights of linear combination for each task. Hence, the predictor $$w_t$$ for the $$t$$-th task is given by $$Ls_t$$ where $$s_t$$ is the $$t$$-th column of $$S$$. Several assumptions can be made on $$L$$ and $$S$$.


To the best of my knowledge, the work of {% include cite.html id="2012_Kumar_A_p-icml_ltgomtl"%} initiated these factorization techniques in multi-task learning by taking its inspiration from the low dimensional subspace assumption of {% include cite.html id="2008_Argyriou_A_j-ml_cmtfl"%} where it was achieved by imposing a trace-constraint, encouraging sparsity on the singular values of $$W$$. The same assumption is enforced there by factorizing $$W=LS$$ with a small number $$k$$ of latent basis tasks so that $$L$$ and $$S$$ are low-rank matrices. In addition, each linear combination is assumed to be sparse in the latent bases and the overlap in the sparsity patterns of two tasks controls the amount of sharing between them. A similar work has been conducted in {% include cite.html id="2013_Maurer_A_p-icml_scmtl"%} where the authors highlight the connection between such factorization technique and sparse coding. They additionally present a probabilistic analysis which complements well with the practical insights in the above work. The same factorization is found in {% include cite.html id="2015_Barzilai_A_p-aistats_cmtl"%} but the approach differs by the fact that each task is associated to a single latent basis task. Departing from these works, {% include cite.html id="2016_Zhong_S_j-n_fmtlltg"%} considers instead a full-rank assumption on $$L$$ along with a row-sparsity assumption on $$S$$ that encourages related tasks to share a subset of basis tasks. More recently, the work {% include cite.html id="2018_Jeong_J-Y_p-sigkdd_vstgmtl"%} brought the low-rank assumption up to date with sparsity assumptions between and within the rows of $$L$$ and the use of the $$k$$-support norm on columns of $$S$$ to impose sparsity while considering possible correlations.


## 2. Decomposition approaches and dirty models

Another set of approaches called decomposition approaches assume that the parameter matrix can be decomposed as the sum of multiple component matrices, i.e., $$W=\sum_{h=1}^H W^{(h)}$$. Depending on the sparsity patterns or closeness of some components, groups of related tasks can be a posteriori discovered.


In {% include cite.html id="2010_Jalali_A_p-nips_dmmtl"%} the authors proposes a dirty models with element-wise sparsity in $$W^{(1)}$$ and block-structured row-sparsity in $$W^{(2)}$$ so that the resulting sparsity patterns of the sum unveils the related tasks. On the clean side, the work of {% include cite.html id="2011_Chen_J_p-sigkdd_ilrgssrml"%} captures the relationship of multiple related tasks using a low-rank structure in $$W^{(1)}$$ while identifying the outlier tasks using a group-sparse structure in $$W^{(2)}$$. A multi-level decomposition is considered in {% include cite.html id="2015_Han_L_p-aaai_lmltgmtl"%} where a $$\ell_2$$ norm encourages the closeness of pairs of task at each level. A group structure can then be a posteriori recovered level-wise.
