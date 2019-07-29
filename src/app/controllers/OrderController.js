import * as Yup from 'yup';
import Order from '../models/Order';

class OrderController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      status: Yup.string().required(),
      amount: Yup.number().required(),
      user_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, status, amount, user_id } = req.body;

    const order = await Order.create({
      name,
      status,
      amount,
      user_id,
    });
    return res.json(order);
  }
}

export default new OrderController();
