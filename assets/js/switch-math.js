function content(divSelector, value) {
	var math = MathJax.Hub.getAllJax(divSelector)[0];
	const content = String.raw`${value}`;
	MathJax.Hub.Queue(["Text",math,content.replace(/\$/g,'')]);
}
