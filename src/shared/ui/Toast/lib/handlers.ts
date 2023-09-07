import { toastModel } from '../model';

const onCloseHandler = () => {
  toastModel.events.reset();
};

export const toastHandlers = {
  onCloseHandler,
};
