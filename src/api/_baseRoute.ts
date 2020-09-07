import { Router } from 'express';

interface BaseRoute {
  version: string,
  routes: Array<Router>,
}

interface IReturnBaseRoute {
  version: string,
  router: Router,
}

export default ({ version, routes }: BaseRoute): IReturnBaseRoute => {
  const router = Router();
  router.use(routes);

  return {
    router,
    version,
  };
};
