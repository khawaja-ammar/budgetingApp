import express from 'express';

const router = express.Router();

router
  .get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({ status: 'Success' });
    // res.status(200).send('ok');
  })
  .put('/', (req: express.Request, res: express.Response) => {
    if (req.body.message === 'hello') {
      res.status(300).json({ Message: 'YES' });
    } else {
      res.status(300).json({ Message: 'NO' });
    }
  });

export default router;
