import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const users = await User.findAll({
      attributes: ['id', 'name', 'email'],
      limit: 20,
      offset: (page - 1) * 20,
    });
    console.log(users);
    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fail.' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

  async delete(req, res) {
    console.log(`ACHOU: ${req.params.id}`);
    const user = await User.findByPk(req.params.id);
    const result = await User.destroy([user]);
    console.log(result);
    return res.json({ ok: true });
  }
}

export default new UserController();
