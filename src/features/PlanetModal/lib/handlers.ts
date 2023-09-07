import { planetModalModel } from '../model';

const onClose = () => {
  planetModalModel.modal.resetModal();
};

export const planetModalHandlers = { onClose };
