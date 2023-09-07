export enum ESpriteName {
  chat = 'chat',
  wallet = 'wallet',
  common = 'common',
  settings = 'settings',
  default = 'default',
  exchange = 'exchange',
  userInfo = 'userInfo',
  gift = 'gift',
  addressbook = 'addressbook',
  toast = 'toast',
  emails = 'emails',
  contextMenu = 'contextMenu',
  story = 'story',
  market = 'market',
}

export interface ISvg {
  idIcon: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  onClick?: () => void;
  id?: string;
}
