import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SearchFilterMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction): void {
    if (req.query !== undefined && req.query !== null) {
      res.locals.inputType = req.query.type !== undefined && req.query.type !== null ? req.query.type : "";
      res.locals.searchInput = req.query.search !== undefined && req.query.search !== null ? req.query.search : "";
    }
    return next();
  }

}