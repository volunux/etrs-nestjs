import { Request, Response, NextFunction } from 'express';
import { SessionConfig } from '../../config/SessionConfig';
import { UserSession } from '../../model/UserSession';
import { User } from '../../model/user/entities/user.entity';
import { Department } from '../../model/department/entities/department.entity';
import { LoginMaxAttemptException } from '../../model/error/LoginMaxAttemptException';

export class UserProfile {

  public static setUserProfile(req: Request, res: Response, next: NextFunction): void {
    if (req.user) { (<any>req.user) = new UserSession(req.user); }
    return next();
  }

  public static isAuthenticated(req: Request, res: Response, next: NextFunction): void {
    if (req.isAuthenticated()) { return next(); }
    else {
      (<any>req.session).userUrlIntent = res.locals.requestUrl;
      req.validationErrors.addError('You need to sign in before you can perform an action');
      return res.render('pages/distinct/authentication/sign-in');
    }
  }

  public static noAuthentication(req: Request, res: Response, next: NextFunction): void {
    if (req.isAuthenticated()) { return res.redirect('/profile/'); }
    else { return next(); }
  }

  public static isUserLoggedIn(req: Request, res: Response, next: NextFunction): void {
    if (req.user !== null && req.user !== undefined) { res.locals.isUserLoggedIn = true; }
    else { res.locals.isUserLoggedIn = false; }
    return next();
  }

  public static loginAttempt(req: Request, res: Response, next: NextFunction): void {
    if ((<any>req.session).loginAttempt > 3 && (<any>req.cookies).max_login_attempt === undefined || (<any>req.cookies).max_login_attempt === null) {
      res.cookie('max_login_attempt', true, SessionConfig.getSessionOptions(60 * 60 * 7));
      (<any>req.session).loginAttempt = 0;
      throw new LoginMaxAttemptException();
    }
    else if ((<any>req.cookies).max_login_attempt) { throw new LoginMaxAttemptException(); }
    return next();
  }

  public static logOut(req: Request, res: Response, next: NextFunction): void {
    if (req.isAuthenticated()) { return next(); }
    else { UserProfile.isAuthenticated(req, res, next); }
  }

}