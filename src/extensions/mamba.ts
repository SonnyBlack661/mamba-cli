import * as shell from 'shelljs';
import { MambaToolbox } from '../types';

// Mamba extras
module.exports = (toolbox: MambaToolbox) => {
  toolbox.mamba = {
    useYarn: Boolean(shell.which('yarn')),
  };
};
