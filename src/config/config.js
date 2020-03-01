/**
 * Default config for all environment types
 * @type {{db: string, apiPort: number}}
 */
const defaultConfig = {
  db: 'mysql123://root:mysql123@127.0.0.1/DronesDB',
  apiPort: 3000,
  webUrl: 'http://localhost:8080'
};

/**
 * Enviroment specific configuration
 * @type {{prod: {}, dev: {}, test: {apiPort: number}}}
 */
const envConfig = {
  prod: { apiPort: process.env.PORT},
  qas: {},
  dev: {},
  test: {
    apiPort: 3000
  }
};

/**
 * Loads config based on the current environment
 * @returns {*}
 */
function loadConfig() {
  const env = process.env.NODE_ENV || 'dev';

  if (!envConfig[env]) {
    throw new Error(
      `Environment config for environment '${env}' not found. process.env.NODE_ENV must be one of '${Object.keys(
        envConfig
      )}'`
    );
  }

  console.log('[INFO] config loaded for environment: ', env);

  // merge default config with environment specific config
  return Object.assign({}, defaultConfig, envConfig[env]);
}

export default loadConfig();
