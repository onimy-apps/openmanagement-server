const Projects = require('../../models/Projects');

function create(request, response) {
	let data = request.body.data;
	let access = request.body.access;

	data['managerId'] = access.id;

	new Projects(data)
		.save((error, doc) => {
			if (error) return response.json(error);
			return response.json({
				success: true,
				message: `${data.name} created successfully.`
			});
		});
}

module.exports = {
	create: create
};