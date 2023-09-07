import { modalFactory } from 'shared/lib/modalFactory';
import { IEditCharacterModal } from '../types';

const modal = modalFactory<IEditCharacterModal>({
  isOpen: false,
  info: null,
});

export { modal };
