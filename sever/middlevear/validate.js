import Joi from 'joi'

const validate = (schema, req, res, next) => {
	console.log(req.body);
	const options = {
		abortEarly: true,
		stripUnknown: true
	}

    const { error, value } = schema.validate(req.body, options);
	let message = '';
	if (error) {
		console.log(error.details[0].path[0]);
		switch (error.details[0].path[0]) {
			case 'email':
				message = ' Neivestas arba Neteisingas el.pašto adresas';
				break;
			case 'password':
				message = 'Neuzpildytas slaptazodios laukialis arba suvesta permazai simboliu, Slaptažodis turi turėti nuo 5 iki 12 ženklų';
				break;
			// case 'goal': 
			// 	message = "Sumos tikslas turi būti daugiau nei nulis"
			// 	break;
			default:
				message = 'Prašome užpildyti visus laukelius';
				break;
		}
		return res.status(500).send(message);
	}
	req.body = value;
	next();
};

export const loginValidator = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(5).max(12).required()
	});
	validate(schema, req, res, next);
};

export const newStoryValidator = (req, res, next) => {
	const schema = Joi.object({
		story_name: Joi.string().required(),
		story: Joi.string().min(100).max(2000).required(),
		photo: Joi.string(),
		amount_donation: Joi.number().required()

		

	});
	validate(schema, req, res, next);
};



export default validate