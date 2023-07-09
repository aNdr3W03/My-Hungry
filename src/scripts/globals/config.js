const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: {
    SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
    MEDIUM: 'https://restaurant-api.dicoding.dev/images/medium/',
    LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  },
  DEFAULT_LANGUAGE: 'en-us',
  DATABASE_NAME: 'my-hungry-databasea',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  CACHE_NAME: new Date().toISOString(),
  WEB_SOCKET_SERVER: 'wss://javascript.info/article/websocket/chat/ws',
};

export default CONFIG;
