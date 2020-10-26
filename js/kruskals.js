/**
 * Creates a minimum spanning tree using the Kruskal's algorithm
 *
 * @param nodes a dictionary of nodes
 * @param edges a dictionary array of edges
 * @returns an array of edges in the MST
 */
function kruskalsMST(nodes, edges) {
	// sort the list of edges in ascending order
	edges.sort(sortingCompare);

	// create a new UnionFind instance with a parameter of the number of nodes
	let uf = new UnionFind(nodes.length);

	// create a variable to hold the edges of the MST
	let result = [];
	// create a variable to keep track of the processed edges
	let processedEdges = 0;

	// iterate while we don't have enough edges for an MST
	while (result.length < nodes.length - 1) {
		// get the next edge
		let currEdge = edges[processedEdges];

		// get the representatives for each vertex attached to the edge
		let representative1 = uf.find(Number(currEdge.from));
		let representative2 = uf.find(Number(currEdge.to));

		// check if the representatives are the same, proceed if different
		if (representative1 !== representative2) {
			// merge the subsets
			uf.union(representative1, representative2);
			// add the current edge to the result
			result.push(currEdge);
		}

		// increment the number of processed edges
		processedEdges++;
	}

	// return the resulting list of edges
	return result; // the edges in the MST
}

function sortingCompare(edge1, edge2) {
	// return a positive number if item1 should go first, 0 if they're the same, negative if item2 should go first
	return Number(edge1.label) - Number(edge2.label);
}