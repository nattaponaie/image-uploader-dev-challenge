import apiV1 from './v1';

// List of all supporting APIs
export const supportApis = [
  apiV1.controllers,
];

// Always specify the latest API version supporting as the default
export const defaultApi = apiV1.controllers;
