import { createForm } from 'effector-forms';
import { rules } from 'shared/lib/rules';
import { IEditForm, TCacheCharacterFx } from '../types';
import { editCharactersRules } from '../lib/rules';
import { createEffect, forward, sample } from 'effector';
import { modal } from './modal';
import { planetModel } from 'entities/Planet/model';
import { charactersModel } from 'entities/Characters/model';
import { CACHED_EDITED_CHARACTERS } from 'shared/config/constants';
import { toastModel } from 'shared/ui/Toast/model';
import { IToastMessage } from 'shared/ui/Toast/types';

const editForm = createForm<IEditForm>({
  fields: {
    name: {
      init: '',
      rules: [rules.required(), rules.onlyNumbersAndLetters()],
    },
    birth_date: {
      init: '',
      rules: [rules.required(), editCharactersRules.checkBirthDate()],
    },
    planet: {
      init: '',
      rules: [rules.required(), rules.onlyNumbersAndLetters()],
    },
    gender: {
      init: '',
      rules: [rules.required(), editCharactersRules.checkGender()],
    },
    height: {
      init: '',
      rules: [rules.required(), rules.onlyNumbers()],
    },
    mass: {
      init: '',
      rules: [rules.required(), rules.onlyNumbers()],
    },
    eye_color: {
      init: '',
      rules: [rules.required(), rules.onlyNumbersAndLetters()],
    },
    skin_color: {
      init: '',
      rules: [rules.required(), rules.onlyNumbersAndLetters()],
    },
  },
  validateOn: ['change', 'submit'],
});

const cacheCharacterFx = createEffect<TCacheCharacterFx>(
  ({ info, form, cachedCharacters }) => {
    const newInfo = { ...info, ...form };
    console.log(newInfo);
    if (cachedCharacters.some((item) => item.id === newInfo.id)) {
      const newCachedCharacters = cachedCharacters.map((item) =>
        item.id === newInfo.id ? newInfo : item,
      );
      localStorage.setItem(
        CACHED_EDITED_CHARACTERS,
        JSON.stringify(newCachedCharacters),
      );
      return newCachedCharacters;
    }

    const newCachedCharacters = [...cachedCharacters, newInfo];
    localStorage.setItem(
      CACHED_EDITED_CHARACTERS,
      JSON.stringify(newCachedCharacters),
    );
    return newCachedCharacters;
  },
);

sample({
  clock: modal.$store,
  source: {
    planet: planetModel.stores.$planet,
    cachedCharacters: charactersModel.stores.$cachedCharacters,
  },
  filter: (_, state) => Boolean(state?.isOpen && state?.info),
  fn: ({ planet, cachedCharacters }, { info }): IEditForm => {
    const cachedCharacter = cachedCharacters.find(
      (item) => item.id === info.id,
    );
    const newInfo = cachedCharacter ?? info;
    return {
      name: newInfo.name,
      birth_date: newInfo.birth_year,
      planet: planet.name,
      gender: newInfo.gender,
      height: newInfo.height,
      mass: newInfo.mass,
      eye_color: newInfo.eye_color,
      skin_color: newInfo.skin_color,
    };
  },
  target: editForm.setForm,
});

sample({
  clock: editForm.formValidated,
  source: {
    modalStore: modal.$store,
    cachedCharacters: charactersModel.stores.$cachedCharacters,
  },
  fn: ({ modalStore, cachedCharacters }, form) => ({
    info: modalStore.info,
    form,
    cachedCharacters,
  }),
  target: cacheCharacterFx,
});

forward({
  from: cacheCharacterFx.doneData,
  to: charactersModel.events.setCachedCharacters,
});

sample({
  clock: editForm.formValidated,
  target: modal.resetModal,
});

sample({
  clock: editForm.formValidated,
  fn: (): IToastMessage => ({
    message: 'Changes successfully saved',
    isSuccess: true,
  }),
  target: toastModel.events.setMessage,
});

export const form = {
  stores: {
    editForm,
  },
  events: {},
};
