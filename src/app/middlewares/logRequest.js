/* eslint-disable no-console */
export default (request, response, next) => {
  const { protocol, originalUrl, method, ip } = request;

  console.log(`${protocol}://${request.get('host')}${originalUrl}`, method, ip);

  next();
};
