import { build, print } from 'gluegun';

/**
 * CLI kick off entry run.
 *
 * @param  {array} argv An array of command line arguments.
 * @return {RunContext} The gluegun RunContext
 */
async function run(argv) {
  // create a CLI runtime
  const cli = build()
    .brand('mamba')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'mamba-cli-*', hidden: true })
    .version() // provides default for version, v, --version, -v
    .exclude(['http'])
    .create();

  // run it
  const toolbox = await cli.run(argv);

  if (toolbox.error) {
    print.debug(toolbox.error);
  }

  // send it back (for testing, mostly)
  return toolbox;
}

module.exports = { run };
