import { print } from 'gluegun';

module.exports = () => {
  const {
    info,
    colors: { green, yellow },
  } = print;

  info(green('███╗   ███╗ █████╗ ███╗   ███╗██████╗  █████╗     ███████╗██████╗ ██╗  ██╗'));
  info(green('████╗ ████║██╔══██╗████╗ ████║██╔══██╗██╔══██╗    ██╔════╝██╔══██╗██║ ██╔╝'));
  info(green('██╔████╔██║███████║██╔████╔██║██████╔╝███████║    ███████╗██║  ██║█████╔╝ '));
  info(green('██║╚██╔╝██║██╔══██║██║╚██╔╝██║██╔══██╗██╔══██║    ╚════██║██║  ██║██╔═██╗ '));
  info(green('██║ ╚═╝ ██║██║  ██║██║ ╚═╝ ██║██████╔╝██║  ██║    ███████║██████╔╝██║  ██╗'));
  info(green('╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═╝    ╚══════╝╚═════╝ ╚═╝  ╚═╝'));
  info('');
  info('$ The Mamba CLI makes it easy to create and manage POS Mamba SDK projects.');
  info(yellow('$ https://mambasdk-docs.stone.com.br/'));
  info('');
};
