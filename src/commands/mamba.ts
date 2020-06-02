import { GluegunCommand } from 'gluegun';

const command: GluegunCommand = {
  description: '🐍 MAMBA CLI 🐍',
  run: async (toolbox) => {
    const {
      parameters: { first },
      print: { error },
    } = toolbox;
    if (first !== undefined) {
      error(`Mamba '${first}' is not a command`);
    } else {
      return require('./help').run(toolbox);
    }
  },
};

module.exports = command;
