import { BIRTH_DATE, GENDER } from '../config';

export const editCharactersRules = {
  checkGender: () => ({
    name: 'onlyNumbers',
    validator: (value: string) => {
      return {
        isValid: new RegExp(GENDER).test(value) || value === '',
        errorText: 'Field can only contain [0-9a-zA-Z/_ ]',
      };
    },
  }),
  checkBirthDate: () => ({
    name: 'checkBirthDate',
    validator: (value: string) => {
      return {
        isValid: new RegExp(BIRTH_DATE).test(value) || value === '',
        errorText: 'Field can only contain [0-9a-zA-Z. ]',
      };
    },
  }),
};
