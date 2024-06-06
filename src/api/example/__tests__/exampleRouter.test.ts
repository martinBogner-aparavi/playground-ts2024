import { StatusCodes } from 'http-status-codes';
import request from 'supertest';

import { ServiceResponse } from '@/common/models/serviceResponse';
import { app } from '@/server';

describe('EXAMPLE API Endpoints', () => {
  describe(' /example', () => {
    it('should do trivial stuff', async () => {
      // Act
      const response = await request(app).get('/example');
      const responseBody: ServiceResponse = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.OK);
      expect(responseBody.success).toBeTruthy();
    });

    it('should accept post requests', async () => {
      // Act
      const postData = { example: 'data' };
      const response = await request(app).post('/example').send({ id: 123, data: postData });
      const responseBody: ServiceResponse = response.body;

      // Assert
      expect(response.statusCode).toEqual(StatusCodes.OK);
      expect(responseBody.success).toBeTruthy();
      expect(responseBody.message).toMatch(/id 123/);
      expect(responseBody.responseObject).toEqual(postData);
    });
  });
});
