import { createEvent, restore } from 'effector';

export const modalFactory = <T = boolean>(defaultValue?: T) => {
  const setVisible = createEvent<T>();
  const resetModal = createEvent();
  const $store = restore<T>(
    setVisible,
    defaultValue !== undefined ? defaultValue : null,
  ).reset(resetModal);

  return { $store, setVisible, resetModal };
};
