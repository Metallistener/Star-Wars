import { modalFactory } from 'shared/lib/modalFactory';
import { IPlanetModal } from '../types';

const modal = modalFactory<IPlanetModal>({
  isOpen: false,
});

export { modal };
