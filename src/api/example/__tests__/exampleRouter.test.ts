import { StatusCodes } from 'http-status-codes';
import request from 'supertest';

import { ServiceResponse } from '@/common/models/serviceResponse';
import { app } from '@/server';

describe('User API Endpoints', () => {
  describe('GET /example', () => {
    it('should do trivial stuff', async () => {
      // Act
      const response = await request(app).get('/example');
      const responseBody: ServiceResponse = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.OK);
      expect(responseBody.success).toBeTruthy();
    });
  });
});
