---
title: Multi-Task Structure Learning
tags: [Multi-Task, Clustering]
style: fill
color: secondary
description: A short survey on various approaches to discover groups of related tasks
comments: true
biblio: [2008_Argyriou_A_j-ml_cmtfl,2012_Kumar_A_p-icml_ltgomtl,2013_Maurer_A_p-icml_scmtl,2015_Barzilai_A_p-aistats_cmtl,2016_Zhong_S_j-n_fmtlltg,2018_Jeong_J-Y_p-sigkdd_vstgmtl,2010_Jalali_A_p-nips_dmmtl,2011_Chen_J_p-sigkdd_ilrgssrml,2015_Han_L_p-aaai_lmltgmtl, 2016_Lee_G_p-icml_amlbtrl, 2017_Liu_S_p-ijcai_agsmtltl, 2019_Yao_Y_p-sigkdd_rtgrtcmtl, 2011_Kang_Z_p-icml_lwwtsmtfl, 2017_Kshirsagar_M_p-pkdd_ltcsgml, 2020_Frecon_J_p-icpr_ugrtmtl, 2008_Jacob_J-p-nips_cmtlcf, 2012_Fei_H_j-kis_sfstrimtl, 2014_Zhang_Y_j-tkdd_rattrml, 2014_Flamary_R_book_lctsgrml, 2016_Gongalves_A_j-mlr_mtsslgcm, 2019_Goncalves_A_j-bi_bmlrhpc, 2020_Alesiani_F_arxiv_timlbp]
---


In the paradigm of multi-task learning, multiple related prediction tasks are learned jointly by sharing some information. This calls to specify when to share (i.e., decide when some tasks are related), what to share (i.e., determine the form through which sharing among the related tasks occur) and how to share (i.e., specify concrete ways to share knowledge among tasks). More formally, multi-task learning is defined as follows.

{% include definition.html title="Multi-Task Learning" content="Let $$T$$ learning tasks $$\{\mathcal{T}_t\}_{t=1}^T$$ where each task $$\mathcal{T}_t$$ is associated to a  training set $$\mathcal{D}_t = \{x_{t,i},y_{t,i}\}_{i=1}^{n_t}$$, a model parameter $$w_t\in\mathbb{R}^d$$ which need to be learned, and a loss function $$\mathcal{L}(\cdot,\mathcal{D}_t)$$ evaluating the prediction performance of $$w_t$$ on the training set. In the following, we denote by $$W=[w_1\cdots w_T]\in\mathbb{R}^{d\times T}$$ the collection of model parameters. Multi-task learning aims to help improve the learning of a model for $$\mathcal{T}_t$$ by using the knowledge contained in all or some of the $$T$$ tasks." %}

A major challenge in multi-task learning consist in finding groups of related tasks in order to prevent that two unrelated tasks do not end up influencing each other, hence worsening the performance of both tasks.

## 1. Factorization approaches and sparse coding techniques 

One line of research relies on the assumption that the parameter matrix $$W$$ can be factorized as $$W=LS$$ where $$L$$ denotes the latent basis tasks and $$S$$ is a matrix containing the weights of linear combination for each task. Hence, the predictor $$w_t$$ for the $$t$$-th task is given by $$Ls_t$$ where $$s_t$$ is the $$t$$-th column of $$S$$. Several assumptions can be made on $$L$$ and $$S$$.


To the best of my knowledge, the work of {% include cite.html id="2012_Kumar_A_p-icml_ltgomtl"%} initiated these factorization techniques in multi-task learning by taking its inspiration from the low dimensional subspace assumption of {% include cite.html id="2008_Argyriou_A_j-ml_cmtfl"%} where it was achieved by imposing a trace-constraint, encouraging sparsity on the singular values of $$W$$. The same assumption is enforced there by factorizing $$W=LS$$ with a small number $$k$$ of latent basis tasks so that $$L$$ and $$S$$ are low-rank matrices. In addition, each linear combination is assumed to be sparse in the latent bases and the overlap in the sparsity patterns of two tasks controls the amount of sharing between them. A similar work has been conducted in {% include cite.html id="2013_Maurer_A_p-icml_scmtl"%} where the authors highlight the connection between such factorization technique and sparse coding. They additionally present a probabilistic analysis which complements well with the practical insights in the above work. The same factorization is found in {% include cite.html id="2015_Barzilai_A_p-aistats_cmtl"%} but the approach differs by the fact that each task is associated to a single latent basis task. Departing from these works, {% include cite.html id="2016_Zhong_S_j-n_fmtlltg"%} considers instead a full-rank assumption on $$L$$ along with a row-sparsity assumption on $$S$$ that encourages related tasks to share a subset of basis tasks. More recently, the work {% include cite.html id="2018_Jeong_J-Y_p-sigkdd_vstgmtl"%} brought the low-rank assumption up to date with sparsity assumptions between and within the rows of $$L$$ and the use of the $$k$$-support norm on columns of $$S$$ to impose sparsity while considering possible correlations.


**GO-MTL** {% include cite.html id="2012_Kumar_A_p-icml_ltgomtl"%}. The authors assume that there are $$k < T$$ latent basis tasks, i.e., $$L\in\mathbb{R}^{d\times k}$$ and $$S\in\mathbb{R}^{k\times T}$$ are two low-rank matrices. In addition, they penalize the complexity of $$L$$ and assume that each task is represented by a sparse combination of the latent tasks. This results in the following optimization problem.

$$
\underset{L,S}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(Ls_t,\mathcal{D}_t) + \lambda \| L\|_F^2 + \mu \|S\|_1 
$$

Since the model allow two tasks from different groups to overlap by having one or more bases in common, it is called *Grouping and Overlap in Multi-Task Learning* by the authors.



**ASAP-MT** {% include cite.html id="2015_Barzilai_A_p-aistats_cmtl"%}. The authors also assume that there are $$k < T$$ latent basis tasks, i.e., $$L\in\mathbb{R}^{d\times k}$$ and $$S\in\mathbb{R}^{k\times T}$$. They penalize the complexity of $$L$$ and enforce that the $$t$$-th column of the matrix $$S$$, denoted by $$s_t\in\mathbb{R}^k$$ associates task $$t$$ with one of the $$k$$ clusters. For example, if the $$k$$-th element of $$s_t$$ is one, and all other elements of $$s_t$$ are zero, we would say that $$t$$ is associated with cluster $$k$$.

$$
\underset{L,S}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(L s_t,\mathcal{D}_t) + \lambda \|L\|^2_F\quad \text{s.t}\quad s_t\in\{0,1\}^K,\; \| s_t\|_2=1\;\text{for}\; t\in\{1,\ldots,T\} 
$$

Here the authors considers the hinge loss and logistic loss, and use some slack variables to optimize the objective. The optimization problem is then recast as *A SAddle Point convex optimization problem* which gives its name to the method.



**FMTL** {% include cite.html id="2016_Zhong_S_j-n_fmtlltg"%}. Motivated by GO-MTL, the authors propose the *Flexible Multi-Task Learning* paradigm to identify the task grouping and overlap without imposing any specific structure assumptions, e.g., the number of latent basis tasks. Instead of predetermining the size of latent basis tasks and constraining the subspace to be low rank, the authors use a full rank subspace and introduce two regularization terms to the corresponding representation matrix $$S$$ of the learning tasks. The first is a $$\ell_{2,1}$$-norm regularization term, which introduces row-sparsity on $$S$$ that encourages related tasks to share a subset of basis tasks. The second term is column-orthogonality that prevents unrelated tasks
from sharing common basis. The constraint ensure that the latent basis tasks are orthogonal and form a subspace in $$\mathbb{R}^d$$.

$$
\underset{L,S}{\mathrm{minimize}} \; \sum_{t=1}^T \mathcal{L}(Ls_t,\mathcal{D}_t) + \lambda_1 \| S \|_{2,1} + \lambda_2 \| S^\top S\|_F^2\quad \text{s.t.}\quad L^\top L = I_{d\times d} 
$$

Since $$L$$ is orthogonal and full rank, we can easily derive the representation matrix as $$S=L^{-1}W=L^\top W$$ and $$S^\top S = W^\top W$$. Thus we have

$$
\underset{L,W}{\mathrm{minimize}} \; \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t) + \lambda_1 \| L^\top W \|_{2,1} + \lambda_2 \| W^\top W\|_F^2\quad \text{s.t.}\quad L^\top L = I_{d\times d} 
$$


**VSTG-MTL** {% include cite.html id="2018_Jeong_J-Y_p-sigkdd_vstgmtl"%}. The *Variable Selection and Task Grouping for Multi-Task Learning* method also assumes that $$L$$ and $$S$$ are low-rank matrices but differs from the regularization terms. It encourages the sparsities between and within the latent task vectors and relies on the k-support norm to induce less sparse weighting vector $$v_t$$ than that from the $$\ell_1$$ norm and similarly enhances the overlaps in the
task groups.

$$
\underset{L,S}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(Ls_t,\mathcal{D}_t) + \lambda_1 \| L\|_1 + \lambda_2 \| L\|_{1,\infty} + \lambda_3 \sum_{t=1}^T\Big( \| s_t\|_k^{\mathrm{sp}} \Big)^2
$$

The group structure among tasks are decided by the sparsity patterns on the weighting vector $$s_t$$. Tasks with same sparsity patterns on the weighting vector $$s_t$$ belong to the same group, whereas those with the orthogonal ones belong to disjoint groups. Two groups are regard as being overlapped if their sparsity patterns are not orthogonal, i.e., they partially share the latent bases.


## 2. Decomposition approaches and dirty models

Another set of approaches called decomposition approaches assume that the parameter matrix can be decomposed as the sum of multiple component matrices, i.e., $$W=\sum_{h=1}^H W^{(h)}$$. Depending on the sparsity patterns or closeness of some components, groups of related tasks can be a posteriori discovered.


In {% include cite.html id="2010_Jalali_A_p-nips_dmmtl"%} the authors proposes a dirty models with element-wise sparsity in $$W^{(1)}$$ and block-structured row-sparsity in $$W^{(2)}$$ so that the resulting sparsity patterns of the sum unveils the related tasks. On the clean side, the work of {% include cite.html id="2011_Chen_J_p-sigkdd_ilrgssrml"%} captures the relationship of multiple related tasks using a low-rank structure in $$W^{(1)}$$ while identifying the outlier tasks using a group-sparse structure in $$W^{(2)}$$. A multi-level decomposition is considered in {% include cite.html id="2015_Han_L_p-aaai_lmltgmtl"%} where a $$\ell_2$$ norm encourages the closeness of pairs of task at each level. A group structure can then be a posteriori recovered level-wise.

**Dirty** {% include cite.html id="2010_Jalali_A_p-nips_dmmtl"%}. This work considers a model where features are assumed to be either active for all tasks, or inactive for most of the tasks. To do so, the parameter matrix is written as $$W = W^{(1)} + W^{(2)}$$ with different sparsity assumptions for each: element-wise sparsity in $$W^{(1)}$$ and block-structured row-sparsity in $$W^{(2)}$$.

$$
\underset{W^{(1)},W^{(2)}}{\mathrm{minimize}} \; \sum_{t=1}^T \mathcal{L}(w_t^{(1)}+ w_{t}^{(2)},\mathcal{D}_t) + \lambda_1 \|W^{(1)}\|_{1,1} + \lambda_2 \|W^{(2)}\|_{1,\infty}
$$

As a result, certain rows of $$W$$ would have many non-zero entries, corresponding to features shared by several tasks, while certain rows would be elementwise sparse, corresponding to those features which are relevant for some tasks but not all, while certain rows would have all zero entries, corresponding to those features that are not relevant to any task. On the contrary, a *clean* model would just use one type of sparsity assumption and not multiple. 




**RMTL** {% include cite.html id="2011_Chen_J_p-sigkdd_ilrgssrml"%}. In the *Robust Multi-Task Learning* approach, the parameter matrix is written as $$W = W^{(1)} + W^{(2)}$$ where $$W^{(1)}$$ is supposed to be low-rank and $$W^{(2)}$$ is assumed to be group sparse. The corresponding optimization problem reads

$$
\underset{W^{(1)},W^{(2)}}{\mathrm{minimize}} \; \sum_{t=1}^T \mathcal{L}(w_t^{(1)}+ w_{t}^{(2)}, \mathcal{D}_t) + \lambda_1 \|W^{(1)}\|_* + \lambda_2 \|W^{(2)}\|_{1,2}
$$

If the $$t$$-th task is from the related tasks group, $$w_t^{(2)}$$ is expected to be a zero-vector and hence $$w_t$$ obeys the specified low-rank structure constraint; on the other hand, if the $$t$$-th task is from the outlier tasks group, $$w_t^{(2)}$$ is expected to be non-zero.


**MeTaG** {% include cite.html id="2015_Han_L_p-aaai_lmltgmtl"%}. The *Multi-level TAsk
Grouping* method aims to learn the multi-level grouping structure instead of only one level among tasks.

$$
\underset{\{W^{(h)}\}_{h=1}^H}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}\left(\sum_{h=1}^H w_t^{(h)}, \mathcal{D}_t \right) + \sum_{h=1}^H \lambda_h \sum_{t<t'}^T \| w_{t}^{(h)} - w_{t'}^{(h)}\|_2
$$

The regularization imposes a $$\ell_2$$ norm on the pairwise difference among the column vectors in $$W_h$$, which encourages each pair of columns $$w_{t}^{(h)}$$ and $$w_{t'}^{(h)}$$ in $$W^{(h)}$$ to be identical. If this happens, then the $$t$$-th and $$t'$$-th tasks belong to a task group at the $$h$$-th level.


## 3. Clustering based on representative tasks

In order to exploit the relationships between tasks, this kind of approaches writes the model parameter of each task $$w_t$$ as a linear combination of some representative tasks selected from the tasks pool or from the whole the tasks pool, i.e. $$w_t\approx W c_t$$, where $$C$$ is a $$T\times T$$ task correlation matrix and $$c_t$$ is the combination coefficients. The grouping structure of the tasks is embedded in $$C$$ meaning that tasks that select a common representative task are regarded as a group, and all tasks can be clustered into different groups based on their representative tasks.

In {% include cite.html id="2016_Lee_G_p-icml_amlbtrl"%}, the authors proposed to represent each task by a sparse non-negative linear combination of all the other tasks. The method allow for asymmetric information transfer between the tasks, such that the amount of information transfer from a confident predictor to a less confident one is larger than the other way around. However, since the combination coefficients are restricted to be positive, this prevent negatively correlated tasks from being clustered together and hence from sharing information. To cope with this issue, {% include cite.html id="2017_Liu_S_p-ijcai_agsmtltl"%} relaxed the positive restriction so that the method can capture both positive and negative correlations amongst tasks. In addition, the correlation matrix was restricted to be block-diagonal with a trace Lasso norm penalty. More recently, {% include cite.html id="2019_Yao_Y_p-sigkdd_rtgrtcmtl"%} provides a more robust representation by applying the $$\ell_{1,2}$$-norm regularization twice: once to the representation difference $$W-WC$$ and once to the correlation matrix $$C$$ in order to select a few representative tasks.


**AMTL** {% include cite.html id="2016_Lee_G_p-icml_amlbtrl"%}. The *Asymmetric Multi-Task Learning* method relies on an asymmetric matrix $$C$$ (such that $$c_{t,t}=0$$) which allows for asymmetric information transfer between the tasks, such that the amount of information transfer from a confident predictor to a less confident one is larger than the other way around. The authors considers the following optimization problem

$$
\underset{W, C\geq 0}{\mathrm{minimize}}\; \sum_{t=1}^T \left(  \mathcal{L}(w_t, \mathcal{D}_t) + \lambda_1 \| \Lambda(W)  c_t \|_1 +   \lambda_2 \big\| w_t - W c_t \big\|_2^2\right)
$$

where $$\Lambda(W)=\mathrm{Diag}( \{\mathcal{L}(w_t, \mathcal{D}_t)\}_{t=1}^T)$$ so that the first regularization term enforces each task parameter to be reconstructed as a sparse combination of other tasks selected based on the task-wise loss.


**GAMTL** {% include cite.html id="2017_Liu_S_p-ijcai_agsmtltl"%}. The *Group Adaptive Multi-Task Learning* method uses one  regularization term to enforce that each task is a linear combination of other tasks while the other term is the trace Lasso penalty imposed on the task relationship vectors $$\{c_t\}$$'s in $$C$$.

$$
\underset{W,C}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t) + \lambda_1 \sum_{t=1}^T \| w_t - W_{-t} c_t^{[-t]} \|_2^2 + \underbrace{\lambda_2 \sum_{t=1}^T \| W_{-t} \mathrm{Diag}(c_t^{[-t]}) \|_*}_{\text{Trace lasso penalty}}
$$


**RCMTL** {% include cite.html id="2019_Yao_Y_p-sigkdd_rtgrtcmtl"%}. The *Robust Clustered Multi-Task Learning* approach encourages only the relevant tasks to share common information with each other by using $$\ell_{1,2}$$ penalties. 

$$
\underset{W,C}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t) + \lambda_1 \|W\|_F^2 + \lambda_2 \underbrace{\|(W-WC)^\top \|_{1,2}}_{\substack{\text{chosen instead of $\ell_2$}\\\text{to be more robust to outliers}}} + \lambda_3 \|C\|_{1,2}
$$


## 4. Indicators and Groupwise regularization approaches

Another line of research to unveils groups of related tasks relies on the sum of $$L$$ penalties terms, each one of them applied to a different group of tasks. The $$L$$ groups are explicitly modeled by $$L$$ diagonal matrices $$Q_1,\ldots,Q_L$$ where $$Q_l\in\{0,1\}^{T\times T}$$ is the indicator matrix for the $$l$$-th group. The goal is then to estimate these indicator matrices so that the group-wise penalty best regularizes the parameter matrix.


The first work that initiated these approaches in the multi-task setting is {% include cite.html id="2011_Kang_Z_p-icml_lwwtsmtfl"%} where the authors applied the trace norm squared groupwise in order that tasks parameters within each group lie in a low dimensional subspace. More recently, {% include cite.html id="2017_Kshirsagar_M_p-pkdd_ltcsgml"%} followed the same strategy but used the $$\ell_{1,2}$$ norm instead so that task relatedness is intended as shared sparsity, meaning that tasks in a group all have similar relevant features. Since in both cases the objective is smooth, its optimization is carried alternatively over the parameter matrix $$W$$ and a relaxed version $$\{Q_l\}_l$$'s. Departing from these methods, {% include cite.html id="2020_Frecon_J_p-icpr_ugrtmtl"%} considers the groupwise trace norm penalty and designed a smooth continuous bilevel scheme where the $$\{Q_l\}_l$$ are estimated at the upper-level so that the corresponding parameter matrix, estimated at the lower-level, generalizes well to unseen data.


**Whom** {% include cite.html id="2011_Kang_Z_p-icml_lwwtsmtfl"%}. This method assumes that tasks form disjoint groups and the tasks parameters within each group lie in a low dimensional subspace.

$$
     \underset{W,\{Q_l\}_{l=1}^L}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t) + \lambda \sum_{l=1}^L \| W \sqrt{Q_l}\|_{*}^2 \quad
     \text{s.t.}\quad \begin{cases} \sum_{l=1}^L Q_l = \mathbf{1},\\ 0\leq [Q_l]_{ij} \leq 1\end{cases}
$$


**Group-MTL** {% include cite.html id="2017_Kshirsagar_M_p-pkdd_ltcsgml"%}. In this work, task relatedness is intended as shared sparsity, meaning that tasks in a group all have similar relevant features, i.e., the same zeros in their parameter vectors.

$$
        \underset{W,\{Q_l\}_{l=1}^L}{\mathrm{minimize}}\;\sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t) + \lambda \sum_{l=1}^L \|W \sqrt{Q_l}\|_{1,2}^2\quad \text{s.t.}\quad \begin{cases} \sum_{l=1}^L Q_l = \mathbf{1},\\ 0\leq [Q_l]_{ij} \leq 1\end{cases}
$$
    
    
**BiGMTL** {% include cite.html id="2020_Frecon_J_p-icpr_ugrtmtl"%}. The *Bilevel Grouping in Multi-Task Learning* method decouples the learning of the groups and the parameter matrix in two levels. The upper-level problem optimize the groups so that the corresponding parameter matrix, learned at the lower-level problem, performs well on a validation set. This work also assumes tasks parameters within each group lie in a low dimensional subspace by using the trace norm penalty.

$$\begin{aligned}
\underset{\{Q_l\}_{l=1}^L}{\mathrm{minimize}}\; &\sum_{t=1}^T \mathcal{L}(w_t(Q),\mathcal{D}_t^{(\mathrm{val})}) \quad \text{s.t.}\quad \begin{cases} \sum_{l=1}^L Q_l = \mathbf{1},\\ 0\leq [Q_l]_{ij} \leq 1\end{cases}
\\
W(Q) = \underset{W}{\mathrm{argmin}}\;& \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t^{(\mathrm{trn})}) + \lambda \sum_{l=1}^L \| W Q_l\|_{*}
\end{aligned}$$


## 5. Graph-based regularized approaches

Here we focus on a popular multi-task framework denoted as graph-based regularized framework. In this framework, task relations are represented as a graph whose nodes are the tasks and the weighted edges encode some knowledge over similarities between tasks. Here, the relationship between the tasks is usually modeled by a task covariance matrix $$\Sigma$$ or a task precision matrix $$\Omega=\Sigma^{-1}$$.

**Clustered-MTL** {% include cite.html id="2008_Jacob_J-p-nips_cmtlcf"%}. This work relies on the hypothesis that the parameters of tasks within a cluster lie close to each other in $$\ell_2$$ norm sense.  The penalties are made of three terms: $$\mathcal{R}_{\text{mean}}$$ which measures on average how large the weight vectors are, $$\mathcal{R}_{\text{between}}(W,\mathcal{G})$$ which quantifies how close to each other the different groups are, and $$\mathcal{R}_{\text{within}}(W,\mathcal{G})$$
which measures the compactness of the groups

$$\begin{aligned}
        &\underset{W,\mathcal{G}}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t) + \lambda_m \mathcal{R}_{\text{mean}}(W) + \lambda_b \mathcal{R}_{\text{between}}(W,\mathcal{G}) + \lambda_w \mathcal{R}_{\text{within}}(W,\mathcal{G})\\
        &\text{where}\quad \begin{cases}
        \mathcal{R}_{\text{mean}}(W) = \| \bar{w} \|^2, \quad&\text{with}\quad\bar{w}=(1 / T)\sum_{t=1}^T w_t\\
        \mathcal{R}_{\text{between}}(W,\mathcal{G}) = \sum_{l=1}^L |\mathcal{G}_l| \| \bar{w}_l - \bar{w}\|^2,  \quad&\text{with}\quad \bar{w}_l = (1/|\mathcal{G}_l|)\sum_{t\in\mathcal{G}_l} w_t\\
        \mathcal{R}_{\text{within}}(W,\mathcal{G}) = \sum_{l=1}^L \sum_{t\in\mathcal{G}_l} \| w_t - \bar{w}_l \|^2&
        \end{cases}
\end{aligned}$$

By adopting some convex relaxation technique, the convex objective function can be formulated as

$$
\underset{W,\Sigma}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t) + \lambda \mathrm{tr}{(W 1 1^\top W^\top )} + \mathrm{tr}{( \tilde{W} \Sigma^{-1} \tilde{W}^\top )}\quad\text{s.t.}\quad \begin{cases}\tilde{W} = W (\mathbf{1}-11^\top / T),\\ \alpha \mathbf{1} \preceq \Sigma \preceq \beta \mathbf{1},\\ \mathrm{tr}{(\Sigma)} = \gamma\end{cases}
$$



**MTLapTR** {% include cite.html id="2012_Fei_H_j-kis_sfstrimtl"%}. The *Multi-Task Laplacian regularization with Task Relationship inference* method combines sparse regularization and task relationship modeling in the sense that the method selects a small subset of features and the feature sets of two closely related tasks have common features. To do so, the authors suggest the following objective function:

$$
\underset{W,\Sigma}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t) + \lambda_1\|W\|_1 + \frac{\lambda_2}{2} \mathrm{tr}(W^\top L W) + \frac{\lambda_3}{2}\mathrm{tr}(W\Sigma^{-1}W^\top)\quad\text{s.t.}\quad \begin{cases}
    \Sigma \succeq 0 \\ \mathrm{tr}(\Sigma)=k
    \end{cases}
$$
where $$\mathrm{tr}(W^\top LW)$$ is a Tikhonov regularization term conveniently
written in matrix format in terms of the graph Laplacian $$L$$ matrix in order to impose smoothness across features meaning that the selected features tend to be connected in the feature graph. One down side is that $$L$$ should be specified *a priori*.


**MTRL** {% include cite.html id="2014_Zhang_Y_j-tkdd_rattrml"%}. The *Multi-Task Relationship Learning* method estimates task dependence (in the form of a task covariance matrix) along with task specific coefficients. A convex relaxation is proposed to ease optimization.

$$
\underset{W,\Sigma}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t) + \underbrace{\frac{\lambda_1}{2} \| W \|_F^2}_{\substack{\text{penalizes the}\\\text{ complexity of $W$}}} + \underbrace{\frac{\lambda_2}{2}\mathrm{tr}(W\Sigma^{-1} W^\top)}_{\substack{\text{measures the relationships}\\\text{between all tasks}}} \quad \text{s.t.}\quad     \underbrace{\begin{cases}
    \Sigma \succeq 0 \\ \mathrm{tr}(\Sigma)=1
    \end{cases}}_{\substack{\text{ensures that $\Sigma$ is}\\\text{a covariance matrix}}}
$$


**CoGraph-MTL** {% include cite.html id="2014_Flamary_R_book_lctsgrml"%}. The purpose of the *Constrained Graph-regularized Multi-Task Learning* method is to learn the adjacency matrix of the task relations graph, jointly with the task decision function parameters, while making the graph the more interpretable as possible. The interpretability of the adjacency matrix is achieved by incorporating some sparsity-inducing regularization $$\mathcal{R}$$. The authors consider a model that induces pairwise similarity between tasks. A bilevel framework for learning task similarities in multi-task learning problems is designed where the similarities are learned so as to optimize a proxy on the generalization errors of all tasks. The proposed optimization problem reads

$$\begin{aligned}
\underset{\lambda}{\mathrm{minimize}}\; &\sum_{t=1}^T \mathcal{L}(\hat{w}_t(\lambda),\mathcal{D}_t^{(\mathrm{val})}) + \mathcal{R}(\lambda)\\
\hat{W}(\lambda) = \underset{W}{\mathrm{argmin}}\;& \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t^{(\mathrm{trn})}) + \underbrace{\sum_{t=1}^T\frac{\lambda_t}{2} \|w_t\|^2  + \sum_{t,s} \lambda_{t,s} \| w_t - w_s\|^2}_{=\mathrm{tr}(W\Sigma(\lambda) W^\top)}
\end{aligned}$$

where $$\Sigma(\lambda) = \mathrm{Diag}( \{\lambda_t\}_{t=1}^T) + L(\lambda)$$ plays the role of a tasks covariance matrix (under some constraints which can be included in $$\mathcal{R}$$) with $$L(\lambda)$$ being the Laplacian matrix.




**MSSL** {% include cite.html id="2016_Gongalves_A_j-mlr_mtsslgcm"%}. The *Multi-task Sparse Structure Learning* method assumes that i) the features across tasks (rows $$w_j$$ of the matrix $$W$$) follows a multivariate Gaussian distribution with zero mean and covariance matrix $$\Sigma$$, i.e., $$w_j \sim \mathcal{N}(0,\Sigma)$$, and that ii) $$W$$ and the precision matrix $$\Omega=\Sigma^{-1}$$ are sparse.

$$
\underset{W,\Omega\succ 0}{\mathrm{minimize}}\; \sum_{t=1}^T \mathcal{L}(w_t,\mathcal{D}_t) - d \log |\Omega| + \lambda_1 \mathrm{tr}(W\Omega W^\top) + \lambda_2 \|W\|_1 + \lambda_3\|\Omega\|_1
$$

The authors also propose an extension to copulas.

**BMSL** {% include cite.html id="2019_Goncalves_A_j-bi_bmlrhpc"%}. This work introduces the *Bayesian Multitask with Structure Learning* model and propose a Gibbs sampler for inference. Here the authors considers two types of priors on the precision matrix i) a diffuse Wishart prior so that all tasks are assumed to be equally related a priori and ii) a Bayesian graphical LASSO prior to impose sparsity in the task relatedness.



**GGMTL** {% include cite.html id="2020_Alesiani_F_arxiv_timlbp"%}. The inner problem (model learning) aims at finding the optimal model for a given structure (i.e. graph or equivalently the adjency matrix $$e$$), while the outer problem (structure learning) aims at minimizing a cost function that includes two terms: (1) the learned model's accuracy on the validation data, and (2) the sparseness of the graph. The sparseness of the graph is captured with three terms: (a) the $$\ell_2^2$$ norm of the edge values, measuring the energy of the graph, (b) the $$\ell_1$$ norm measuring the sparseness of the edges, and (c) $$H(e)$$ measuring the entropy of the edges.

$$\begin{aligned}
\underset{e}{\mathrm{minimize}}\; &\sum_{t=1}^T \mathcal{L}(w_t(e),\mathcal{D}_t^{(\mathrm{val})}) + \zeta\|e\|_2^2 + \eta\|e\|_1 + \gamma H(e)\\
W(e) = \underset{W}{\mathrm{argmin}}\;& \sum_{t=1}^T \mathcal{L}(w_t(e),\mathcal{D}_t^{(\mathrm{trn})}) + \frac{\lambda}{2} \mathrm{tr}(W^\top L(e) W)
\end{aligned}$$

where $$L(e)$$ is the Laplacian matrix, so the regularization is the Dirichlet energy 

$$
\mathrm{tr}(W^\top L(e) W) = \sum_{i,j\in G} e_{i,j}\|w_i-w_j\|_2^2,
$$

and $$H(e)$$ is the un-normalized entropy of the edge values
.
