const Projects = require('../../models/Projects');

function fetch(request, response) {
  Projects.find({ id: request.query.id }, (error, docs) => {
  	console.log(docs)
    if (error) return response.json(error.message);
    return response.json(docs);
  });
}

module.exports = {
  fetch: fetch
}