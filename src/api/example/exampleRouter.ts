import express, { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ResponseStatus, ServiceResponse } from '@/common/models/serviceResponse';
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

  router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 10);
    const serviceResponse = new ServiceResponse(
      ResponseStatus.Success,
      `got ${id}`,
      { id, example: 'data' },
      StatusCodes.OK
    );

    handleServiceResponse(serviceResponse, res);
  });

  router.post('/', async (req: Request, res: Response) => {
    const payload = req.body as { id: number; data: any };

    const serviceResponse = new ServiceResponse(
      ResponseStatus.Success,
      `post request for id ${payload.id}`,
      payload.data,
      StatusCodes.OK
    );

    handleServiceResponse(serviceResponse, res);
  });

  return router;
})();
