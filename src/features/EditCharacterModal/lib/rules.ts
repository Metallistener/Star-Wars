import { BIRTH_DATE, GENDER, NAME } from '../config';

export const editCharactersRules = {
  checkGender: () => ({
    name: 'onlyNumbers',
    validator: (value: string) => {
      return {
        isValid: new RegExp(GENDER).test(value) || value === '',
        errorText: 'Field can only contain [A-Za-z0-9-_/. ]',
      };
    },
  }),
  checkBirthDate: () => ({
    name: 'checkBirthDate',
    validator: (value: string) => {
      return {
        isValid: new RegExp(BIRTH_DATE).test(value) || value === '',
        errorText: 'Field can only contain [A-Za-z0-9-. ]',
      };
    },
  }),
  checkName: () => ({
    name: 'checkName',
    validator: (value: string) => {
      return {
        isValid: new RegExp(NAME).test(value) || value === '',
        errorText: 'Allowed symbols [A-Za-z0-9-_. ]',
      };
    },
  }),
};
