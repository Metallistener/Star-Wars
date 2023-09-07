import { ChangeEvent } from 'react';
import { editCharacterModalModel } from '../model';

const onClose = () => {
  editCharacterModalModel.modal.resetModal();
};

const onClearField = (fieldName: string) => () => {
  editCharacterModalModel.form.stores.editForm.fields[fieldName]?.onChange('');
};

const onChange = (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
  editCharacterModalModel.form.stores.editForm.fields[name]?.onChange(
    e.target.value,
  );
};

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  editCharacterModalModel.form.stores.editForm.submit();
};

export const editCharacterModalHandlers = {
  onClose,
  onClearField,
  onChange,
  onSubmit,
};
