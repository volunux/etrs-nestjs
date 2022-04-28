import { Request, Response, NextFunction, RequestHandler } from 'express';
import { UserSession } from '../../model/UserSession';
import { AuthorizationException } from '../../model/error/AuthorizationException';

export class UserPermission {

  public static isUserPermitted(roles: string[]): RequestHandler {
    return function(req: Request, res: Response, next: NextFunction): void {
      let userRoles: string[] = (<UserSession>req.user).getRole();
      let isPermitted: boolean = false;
      userRoles.forEach(function(role: string): void { if (roles.indexOf(role) > -1) { isPermitted = true; } });
      if (isPermitted !== false) { return next(); }
      else { throw new AuthorizationException("User is unauthorized to access this page.", 403); }
    }
  }
}