import { Request, Response, NextFunction } from 'express';
import { get } from 'lodash';

import { logError } from '@utils/logger';

type IArgExpress = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

interface IFunctionExpress {
  (
    req: Request,
    res: Response,
    next: NextFunction
  ): void;
}

export default (fn: IFunctionExpress): IArgExpress => (req, res, next): void => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    logError(err);
    const status = get(err, ['status'], 500);
    const model = get(err, ['model']);
    const message = get(err, ['message']);
    res.status(status);
    res.json({ status, model, message });
  });
};
