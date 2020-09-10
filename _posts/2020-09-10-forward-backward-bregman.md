---
title: Forward-Backward with Bregman distances
tags: [Optimization, Bregman]
style: 
color: 
description: How to ...
---

We consider the following generic optimization problem

$$ \hat{x} = \underset{x}{\mathrm{argmin}}\; f(x) + g(x) $$

where both $$f$$ and $$g$$ are proper lower semi-continuous functions. In addition, we suppose that $$f$$ is $$\mu$$-smooth with respect to some Legendre function $$\phi$$, meaning that

- $$\mu\phi-f$$ is convex
- $$(\forall x,z)\quad f(x) \leq f(z) + \nabla f(z)^\top(x-z) + \mu D_\phi(x,z)$$ 

where $$D_\phi$$ is the Bregman distance associated to $$\phi$$, i.e.,

$$D_\phi(x,z) = \phi(x) - \phi(z) - \langle \nabla\phi(z), x-z\rangle$$


### {% icon hands_on %} Hands-on: Spliced mapping

1. **RNA STAR** {% icon tool %}: Map your reads on the reference genome with
   - *"Single-end or paired-end reads"*:  `Paired-end (as individual datasets)`
   - *"RNA-Seq FASTQ/FASTA file, forward reads"*: the generated `trimmed reads pair 1` files (multiple datasets)
   - *"RNA-Seq FASTQ/FASTA file, reverse reads"*: the generated `trimmed reads pair 2` files (multiple datasets)
   - *"Custom or built-in reference genome"*: `Use a built-in index`
   - *"Reference genome with or without an annotation"*: `use genome reference without builtin gene-model`
   - *"Select reference genome"*: `Drosophila Melanogaster (dm6)`
   - *"Gene model (gff3,gtf) file for splice junctions"*: the imported `Drosophila_melanogaster.BDGP6.87.gtf`
   - *"Length of the genomic sequence around annotated junctions"*: `36`
