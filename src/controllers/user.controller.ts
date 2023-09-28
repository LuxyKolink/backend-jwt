import { Request, Response } from 'express';
import UserModel from '../models/user.model';
import Jwt from 'jsonwebtoken';

const authController = { 
    async register(req: Request, res: Response) {
      try {
        const { username, email, password } = req.body;
        console.log('req.body');

        const newUser = new UserModel({ username, email, password });
        newUser.save();

        const token = Jwt.sign({ userId: newUser._id }, 'secretKey');
        res.status(201).json({ token });
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    },

    
  
    async login(req: Request, res: Response) {
      try {
        const { username, password } = req.body;
  
        const user = await UserModel.findOne({ username });
  
        if (user && user.password === password) {
          const token = Jwt.sign({ userId: user._id }, 'secretKey');
          res.json({ token });
        } else {
          res.status(401).json({ error: 'Unauthorized' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    },
};

export default authController;


