const Projects = require('../../models/Projects');

function fetch(request, response) {
	const { id, role } = request.query;
	
  Projects.find({ managerId: id }, (error, docs) => {
    if (error) return response.json(error.message);
    return response.json(docs);
  });
}

module.exports = {
  fetch: fetch
}