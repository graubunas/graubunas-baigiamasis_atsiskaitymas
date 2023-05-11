import User from '../models/user.model.js';

export const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    const validatedNewUser = new User(newUser);

    const savedData = await validatedNewUser.save();

    res.json(savedData);
  } catch (error) {
    console.log(error);
    res.json({ message: 'Error...' });
  }
};

export const getUsers = async (_req, res) => {
  try {
    const user = await User.find();

    res.json(user);
  } catch (error) {
    console.log(error);
    res.json({ message: 'Error...' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;

    await User.findByIdAndUpdate(userId, updatedUserData);
    const updatedUser = await User.findById(userId);

    console.log(userId);
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.json({ message: 'Error...' });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    console.log(userId);

    res.json({ message: 'User deleted' });
  } catch (error) {
    console.log(error);
    res.json({ message: 'Error...' });
  }
};
