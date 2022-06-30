import { Request, Response,   NextFunction } from "express";


const requiredUser = ( req: Request, res: Response , next: NextFunction) => {

  const User = res.locals.user;

  if(!User) {
    return res.sendStatus(403);
  }

  return next(); 

}


export default requiredUser;