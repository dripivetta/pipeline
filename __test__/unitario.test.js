const { Router } = require('express');

const router = Router();

router.get('/character/avatar', (req, res) => {
  res.status(404).json({ error: 'message.noPage' });
});

describe('Testes das rotas', () => {
  it('Deve retornar um objeto JSON com o status 404 e uma mensagem de erro', (done) => {
    const mockReq = {
      method: 'GET',
      url: '/character/avatar',
    };

    const mockRes = {
      status: (statusCode) => {
        expect(statusCode).toBe(404);
        return mockRes;
      },
      json: (data) => {
        expect(data).toEqual({ error: 'message.noPage' });
        done();
      },
    };

    router.handle(mockReq, mockRes);
  });
});






