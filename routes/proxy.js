// routes/proxy.js
import { Router } from 'express';
import { getResource } from '../services/api.js';

const router = Router();

router.get('/resource', async (req, res, next) => {
  try {
    const data = await getResource('/fetch-all', req.query);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
