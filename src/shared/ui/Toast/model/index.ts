import { createEvent, createStore, restore, sample } from 'effector';
import { IToastMessage } from '../types';

const setMessage = createEvent<IToastMessage>();
const $data = restore<IToastMessage>(setMessage, null);
const reset = createEvent();
const $isOpen = createStore<boolean>(false).reset(reset);

sample({
  clock: setMessage,
  fn: () => true,
  target: $isOpen,
});

export const toastModel = {
  stores: { $isOpen, $data },
  events: { reset, setMessage },
};
