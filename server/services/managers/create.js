const Projects = require('../../models/Projects');
const utils = require('../../utils/admin');

function create(request, response) {
	let data = request.body.data;
	const { id, role } = request.body.access;

	data['managerId'] = id;

	utils.isAdmin(id, role)
		.then(() => {
			new Projects(data)
				.save((error, doc) => {
					if (error) return response.json(error);
					return response.json({
						success: true,
						message: `${data.name} created successfully.`
					});
				});
		})
		.catch(error => {
			return response.json({
				success: false,
				message: 'This operation can only be performed by Managers.'
			});
		});
}

module.exports = {
	create: create
};