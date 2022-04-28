import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction): void {
    if (req.query !== undefined && req.query !== null) {
      let page: number = req.query.page !== undefined && req.query.page !== null ? +(<any>req.query).page : 0;
      res.locals.nextPageNumber = page ? page + 1 : 2;
      res.locals.prevPageNumber = page ? page - 1 : 0;
    }
    return next();
  }

}