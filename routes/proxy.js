// routes/proxy.js
import { Router } from 'express';
import { getResource } from '../services/api.js';

const router = Router();

router.get('/resource', async (req, res, next) => {
  try {
    const data = await getResource('/fetch-all', req.query);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
