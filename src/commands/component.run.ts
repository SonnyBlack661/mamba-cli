module.exports = {
  name: 'component:run',
  alias: ['a'],
  description: 'Run isolated component',
  hidden: false,
  dashed: false,
  run: async toolbox => {
    const { print } = toolbox;

    print.info(`component run`);
  },
};
