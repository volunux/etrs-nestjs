import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ValidationErrors } from '../../helper/validation/ValidationErrors';

export class FormValidation {

  public static execute(req: Request, res: Response, next: NextFunction): void {
    req.validationErrors = new ValidationErrors([]);
    req.validationErrorTypeList = new Set<string>();
    return next();
  }

}

@Injectable()
export class FormValidationMiddleware implements NestMiddleware {

  use(req: Request , res: Response, next: NextFunction): void {
    req.validationErrors = new ValidationErrors([]);
    req.validationErrorTypeList = new Set<string>();
    return next();
  }

}