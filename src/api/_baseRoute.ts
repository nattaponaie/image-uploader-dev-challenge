import { Router } from 'express';

interface BaseRoute {
  version: string,
  routes: Array<Router>,
}

export default ({ version, routes }: BaseRoute) => {
  const router = Router();
  router.use(routes);

  return {
    router,
    version,
  };
};
