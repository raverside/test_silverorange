import { Router, Request, Response } from 'express';
import RepoService from '../services/RepoService';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  const repositories = await RepoService.fetchAllRepos();

  res.json(repositories);
  res.header('Cache-Control', 'no-store');
  res.status(200);
});
