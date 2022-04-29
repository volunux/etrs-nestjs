import { Request } from 'express';
import { Strategy } from 'passport-local';
import { PassportStatic } from 'passport';
import { UserHelper } from '../helper/entry/UserHelper';
import { UserSession } from '../model/UserSession';
import { User } from '../model/user/entities/user.entity';
import { Role } from '../model/role/entities/role.entity';

export class PassportConfig {

  public static init(passport: PassportStatic): void {
    passport.serializeUser(function(user: Express.User, done: Function) {
      done(null, user);
    });

    passport.deserializeUser(function(user: UserSession, done: Function) {
      done(null, user);
    });
  }

  static signUp(passport: PassportStatic): PassportStatic {
    return passport.use('local-signup', new Strategy({
      'usernameField': 'email_address',
      'passwordField': 'password',
      'passReqToCallback': true
    },

      async function(req: Request, emailAddress: string, password: string, done: Function) {

      }));
  }

  static signIn(passport: PassportStatic): PassportStatic {
    return passport.use('local-signin', new Strategy({
      'usernameField': 'email_address',
      'passwordField': 'password'
    },

      async function(emailAddress: string, password: string, done: Function) {

      }));
  }

}