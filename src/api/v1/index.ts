import BaseRoute from '../_baseRoute';

import images from './images';

export default {
  controllers: BaseRoute({
    version: 'v1',
    routes: [
      images.controller,
    ],
  }),
};
