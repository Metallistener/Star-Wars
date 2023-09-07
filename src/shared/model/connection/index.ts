import { createEvent, createStore, forward, sample } from 'effector';
import { toastModel } from 'shared/ui/Toast/model';
import { IToastMessage } from 'shared/ui/Toast/types';

export const checkOnlineBrowserState = () => {
  initOnlineBrowser(window.navigator.onLine);
  window.addEventListener('online', () => {
    openOnlineBrowser();
  });
  window.addEventListener('offline', () => {
    closeOnlineBrowser();
  });
};

const initOnlineBrowser = createEvent<boolean>();
const openOnlineBrowser = createEvent();
const closeOnlineBrowser = createEvent();
const $isOnlineBrowser = createStore(true);
$isOnlineBrowser
  .on(openOnlineBrowser, () => true)
  .on(closeOnlineBrowser, () => false);

forward({
  from: initOnlineBrowser,
  to: $isOnlineBrowser,
});

sample({
  clock: openOnlineBrowser,
  fn: (): IToastMessage => ({
    message: 'The network connection is active',
    isSuccess: true,
  }),
  target: toastModel.events.setMessage,
});

sample({
  clock: closeOnlineBrowser,
  fn: (): IToastMessage => ({
    message: 'Check the network connection',
    isError: true,
  }),
  target: toastModel.events.setMessage,
});

export const connectionModel = {
  stores: {
    $isOnlineBrowser,
  },
};
