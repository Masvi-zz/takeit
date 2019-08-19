import * as Yup from 'yup';
import House from '../models/House';

class HouseController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name } = req.body;
    const user_id = req.userId;

    const house = await House.create({
      name,
      user_id,
    });

    return res.json(house);
  }
}

export default new HouseController();
