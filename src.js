/**
 * @param {String} order : order by criteria ('nodes', 'depth' or 'length')
 * @param {Element} e
 */
function analyzeDOM(order, e) {
	e = e || document;
	order = order || 'length';
	var data = {
		'element': e,
		'nodes': e.children.length,
		'depth': 1,
		'length': e.outerHTML ? e.outerHTML.replace(/\s/g, '').length : 'NA',
		'_children': []
	};

	if (!e.children.length) {
		return data;
	};

	var maxDepth = 0;
	for (var i = 0; i < e.children.length; i++) {
		var child = analyzeDOM(order, e.children[i]);
		maxDepth = child.depth > maxDepth ? child.depth : maxDepth;
		data.nodes += child.nodes;

		data._children.push(child);
	}

	data.depth += maxDepth;

	data._children.sort(function(a,b) {
		if (a[order] < b[order]){
			return 1;
		}
		if (a[order] > b[order]){
			return -1;
		}
		return 0;
	});

	return data;
}
