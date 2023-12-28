import User from "../model/user-schema.js";

export const userSignup = async (request, response) => {
  try {
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ message: user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const userLogin = async (request, response) => {
  try {
    const email = request.body.email;
    const password = request.body.password;
    let user = await User.findOne({ email: email, password: password });

    if(user){
      return response.status(200).json({data:user});
    }else {
      response.status(401).json('invalid user');
    }
  } catch (error) {
    response.status(500).json('Error' , error.message);
  }
};
