import User from '../models/user.model.js';

export const userExist = async (req, res, next) => {
  try {
    const email = req.body.email;

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(404).json({ message: 'Toks jau yra' });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
