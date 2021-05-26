import { Request, Response, NextFunction } from 'express';

import { body, validationResult } from 'express-validator';
const userValidationSignup = () => {
  return [
    body('name', 'Name is required').not().isEmpty(),
    body('mobileNo', 'Mobile No is required').not().isEmpty(),
    body('age', 'Age is requires').not().isEmpty(),
    body('email', 'Please enter a valid Email').isEmail(),
    body('password', 'Min length of password is 6').isLength({ min: 6 }),
  ];
};

const userValidationLogin = () => {
  return [
    body('email', 'Please enter a valid Email').isEmail(),
    body('password', 'Please enter a password').not().isEmpty(),
  ];
};

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
};

export default {
  userValidationSignup,
  validate,
  userValidationLogin,
};
