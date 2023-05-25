import signUp from '../models/register.js';
import bcrypt from 'bcrypt';
const signInController = async (req, res) => {
  try {
    const data = req.body;

    const check = await signUp.findOne({ email: data.email });

    if (check) {
      let compare = await  bcrypt.compare(data.password, check.password)
      
      if (compare == true) {
        return res.status(202).json({
          message: "login successfu"
        });
      }else{
        return res.status(409).json({
          message: "please enter correct password"
        });
      }
    } else {




      res.status(409).json({
        message: "please sign up",
      });
    }
  } catch (err) {
    console.log("Error caught:", err);
    res.status(500).json({
      message: "Failed to process the data",
      error: "Failed",
    });
  }
};

export default signInController;