import { Rule } from 'effector-forms';
import {
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
  onlyNumbersAndLetters: () => ({
    name: 'onlyNumbersAndLetters',
    validator: (value: string) => {
      return {
        isValid:
          new RegExp(ONLY_NUMBERS_LETTERS_SPACES).test(value) || value === '',
        errorText: 'Field can only contain numbers and letters',
      };
    },
  }),
  onlyNumbers: () => ({
    name: 'onlyNumbers',
    validator: (value: string) => {
      return {
        isValid: new RegExp(ONLY_NUMBERS).test(value) || value === '',
        errorText: 'Field can only contain numbers',
      };
    },
  }),
};
