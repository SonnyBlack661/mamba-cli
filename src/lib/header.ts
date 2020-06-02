import { print } from 'gluegun';

module.exports = (version) => {
  const {
    info,
    colors: { green, yellow, bold },
  } = print;

  info(green('███╗   ███╗ █████╗ ███╗   ███╗██████╗  █████╗     ███████╗██████╗ ██╗  ██╗'));
  info(green('████╗ ████║██╔══██╗████╗ ████║██╔══██╗██╔══██╗    ██╔════╝██╔══██╗██║ ██╔╝'));
  info(green('██╔████╔██║███████║██╔████╔██║██████╔╝███████║    ███████╗██║  ██║█████╔╝ '));
  info(green('██║╚██╔╝██║██╔══██║██║╚██╔╝██║██╔══██╗██╔══██║    ╚════██║██║  ██║██╔═██╗ '));
  info(green('██║ ╚═╝ ██║██║  ██║██║ ╚═╝ ██║██████╔╝██║  ██║    ███████║██████╔╝██║  ██╗'));
  info(green('╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝    ╚══════╝╚═════╝ ╚═╝  ╚═╝'));
  info('');
  info(bold('The Mamba CLI makes it easy to create and manage POS Mamba SDK projects.'));
  info(print.colors.dim(`Version: ${version}`));
  info('');
  info(yellow('> https://mambasdk-docs.stone.com.br/'));
  info('');
  info('');
};
