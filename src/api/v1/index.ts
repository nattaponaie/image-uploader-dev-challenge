import BaseRoute from '../_baseRoute';

import hello from './hello';

export default {
  controllers: BaseRoute({
    version: 'v1',
    routes: [
      hello.controller,
    ],
  }),
};
