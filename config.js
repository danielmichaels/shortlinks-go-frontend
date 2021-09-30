const prod = {
  url: {
    API_URL: `https://s.danielms.site/`,
  },
};
const dev = {
  url: {
    API_URL: `http://127.0.0.1:1987/api`,
  },
};
// eslint-disable-next-line no-undef
export const config = process.env.NODE_ENV === 'development' ? dev : prod;
