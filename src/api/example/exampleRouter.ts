import express, { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ServiceResponse } from '@/common/models/serviceResponse';
import { handleServiceResponse } from '@/common/utils/httpHandlers';

export const exampleRouter: Router = (() => {
  const router = express.Router();

  router.get('/', async (_req: Request, res: Response) => {
    const serviceResponse: ServiceResponse = {
      success: true,
      message: 'test',
      responseObject: null,
      statusCode: StatusCodes.OK,
    };
    handleServiceResponse(serviceResponse, res);
  });

  return router;
})();
