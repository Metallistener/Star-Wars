import { SEARCH } from '../config';

export const searchRules = {
  search: () => ({
    name: 'search',
    validator: (value: string) => {
      return {
        isValid: new RegExp(SEARCH).test(value) || value === '',
        errorText: 'Field can only contain [A-Za-z0-9/_-., ]',
      };
    },
  }),
};
