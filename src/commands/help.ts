import { GluegunToolbox } from 'gluegun';

module.exports = {
  dashed: true,
  alias: ['h'],
  description: 'Displays Mamba CLI help',
  run: async (toolbox: GluegunToolbox) => {
    const {
      print: { info },
      meta,
    } = toolbox;

    info('');
    require('../lib/header')(meta.version());
    info(``);
  },
};
