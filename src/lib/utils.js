// basic pagination of an array of data
//  param {any[]} data
// {{ page?: number, limit number }} args
// return

export function paginate(data, { page = 1, limit } = {}) {
	if (limit) {
		return data.slice((page - 1) * limit, page * limit);
	}
	return data;
}
