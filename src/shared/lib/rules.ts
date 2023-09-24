import { Rule } from 'effector-forms';
import {
  LISTING,
  ONLY_NUMBERS,
  ONLY_NUMBERS_LETTERS_SPACES,
  REQUIRED,
} from 'shared/config/constants';

export const rules = {
  required: function <T = any>(text?: string): Rule<T> {
    return {
      name: 'required',
      validator: (value) => ({
        isValid: Boolean(value),
        errorText: text || REQUIRED,
      }),
    };
  },
  listing: () => ({
    name: 'listing',
    validator: (value: string) => {
      return {
        isValid: new RegExp(LISTING).test(value) || value === '',
        errorText: 'Allowed symbols [A-Za-z0-9 ,]',
      };
    },
  }),
  onlyNumbers: () => ({
    name: 'onlyNumbers',
    validator: (value: string) => {
      return {
        isValid: new RegExp(ONLY_NUMBERS).test(value) || value === '',
        errorText: 'Allowed symbols [0-9 ]',
      };
    },
  }),
};
