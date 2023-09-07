import { Event, Store } from 'effector';

export interface IModalFactory<T> {
  $store: Store<T>;
  setVisible: Event<T>;
}
