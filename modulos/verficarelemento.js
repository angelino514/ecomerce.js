export function getImage(path) {
  const BASE_URL = window.location.pathname.includes('/test/')
    ? '/test/'
    : '/';

  return BASE_URL + path;
}