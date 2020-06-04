import { GluegunToolbox } from 'gluegun';

export type MambaTools = {
  useYarn: boolean;
};

export interface MambaToolbox extends GluegunToolbox {
  mamba: MambaTools;
}
