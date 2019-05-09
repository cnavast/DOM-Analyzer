function analyzeDOM(e, criteria) {
	e = e || document;
	criteria = criteria || 'length';
	var data = {
		'element': e,
		'nodes': e.children.length,
		'depth': 1,
		'length': e.outerHTML ? e.outerHTML.replace(/\s/g, '').length : 'NA',
		'children': []
	};

	if (!e.children.length) {
		return data;
	};

	var maxDepth = 0;
	for (var i = 0; i < e.children.length; i++) {
		var child = analyzeDOM(e.children[i], criteria);
		maxDepth = child.depth > maxDepth ? child.depth : maxDepth;
		data.nodes += child.nodes;

		data.children.push(child);
	}

	data.depth += maxDepth;

	data.children.sort(function(a,b) {
		if (a[criteria] < b[criteria]){
			return 1;
		}
		if (a[criteria] > b[criteria]){
			return -1;
		}
		return 0;
	});

	return data;
}
