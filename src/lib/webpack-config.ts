import { fromCwd } from 'quickenv';

export default async function getWebpackConfigPath(id) {
  return fromCwd('node_modules', '@mamba', 'webpack', `config.${id}.js`);
}
