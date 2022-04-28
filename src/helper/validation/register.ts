import { Request , Response , NextFunction , RequestHandler } from 'express';
import { ValidationResult , ValidationOptions } from 'joi';
import { ValidationMessageBuilder } from './builder';
import { ValidationErrorMessage } from './ValidationErrorMessage';
import { ValidationSchemaFactory } from './schema/ValidationSchemaFactory';
import { Injectable } from '@nestjs/common';

let joiOptions : ValidationOptions = { 'convert' : true , 'abortEarly' : false , 'allowUnknown' : true };

@Injectable()
export abstract class ValidationRegister {

  static { ValidationSchemaFactory.loadConfigurations(); }

  public validate(req : Request , res : Response , next : NextFunction , entityName : string) : void {
    let validationResult : ValidationResult =  ValidationSchemaFactory.getSchema(entityName).validate(req.bindingModel , joiOptions);
    let msgList : ValidationErrorMessage[] = ValidationMessageBuilder.build(validationResult , ValidationSchemaFactory.getMessageCategory(entityName));
    if (msgList.length > 0) { let transformedErrorList = ValidationMessageBuilder.transformValidationErrorsToArrayOfString(msgList);
      req.validationErrors.addManyError(transformedErrorList);
      req.validationErrors.addManyValidationMessage(msgList);
      return next(); }
    else { return next(); }
  }
}