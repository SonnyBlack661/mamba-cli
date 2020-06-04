// import { trim } from 'ramda';
// import getWebpackConfigPath from '../../lib/webpack-config';
import { MambaToolbox } from '../../types';

module.exports = {
  name: 'build',
  alias: ['a'],
  description: 'Build the app',
  hidden: false,
  dashed: false,
  run: async (toolbox: MambaToolbox) => {
    const {
      print: { info, colors },
      system,
      parameters,
    } = toolbox;
    const { yellow, cyan } = colors;

    const { options } = parameters;
    const BROWSER = 'browser';
    const optTarget = options.t || options.target;

    const development = options.d === true || options.development || false;
    const simulator = options.s === true || options.simulator || false;
    const target = optTarget === BROWSER ? BROWSER : 'pos';

    const IS_DEV = development === true || (typeof development === 'number' && development > 0);
    const IS_DEBUG = Number.isInteger(development) && development > 0;
    const ADD_SIMULATOR = simulator || target === BROWSER;

    // const config = await getWebpackConfigPath('app.build');
    // console.log(config);

    const cmd = [
      'cross-env',
      `NODE_ENV=${IS_DEV ? 'development' : 'production'}`,
      `APP_ENV=${target}`,
      /** If development flag has a numeric value */
      IS_DEBUG && `DEBUG_LVL=${development}`,
      ADD_SIMULATOR && 'MAMBA_SIMULATOR=true',
    ]
      .filter(Boolean)
      .join(' ');

    info(cyan('Building app...'));
    info(`  App target: ${yellow(target.toUpperCase())}`);
    info(`  Environment: ${yellow((development ? 'development' : 'production').toUpperCase())}`);

    if (IS_DEBUG) {
      info(`  Debug Level: ${yellow(development)}`);
    }

    if (ADD_SIMULATOR) {
      info(yellow('  Adding the Mamba simulator to the bundle'));
    }

    await system.run(cmd);
  },
};
