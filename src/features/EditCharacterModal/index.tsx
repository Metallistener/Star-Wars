import React, { FC } from 'react';
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  useTheme,
} from '@mui/material';
import { useUnit } from 'effector-react';
import { editCharacterModalModel } from './model';
import { editCharacterModalHandlers } from './lib/handlers';
import { useForm } from 'effector-forms';
import { Clear } from '@mui/icons-material';
import { modalBoxCenterSx } from 'shared/css/modal';
import { IEditForm } from './types';
import { ModalHeader } from 'shared/ui/ModalHeader';

export const EditCharacterModal: FC = () => {
  const theme = useTheme();
  const modal = useUnit(editCharacterModalModel.modal.$store);
  const { fields, errorText } = useForm(
    editCharacterModalModel.form.stores.editForm,
  );
  const editFields = Object.keys(fields);

  return (
    <Modal open={modal.isOpen} onClose={editCharacterModalHandlers.onClose}>
      <Box
        borderRadius="8px"
        padding="40px"
        paddingTop="0"
        maxWidth='420px'
        width='100%'
        bgcolor={theme.palette.background.default}
        sx={modalBoxCenterSx}>
        <ModalHeader
          title="Edit character"
          onClose={editCharacterModalHandlers.onClose}
        />
        <form onSubmit={editCharacterModalHandlers.onSubmit}>
          {editFields.map((field) => (
            <TextField
              label={field.replace('_', ' ')}
              variant="outlined"
              fullWidth
              error={!fields[field].isValid}
              helperText={errorText(field as keyof IEditForm)}
              value={fields[field].value}
              sx={{ marginBottom: '20px' }}
              InputProps={{
                endAdornment: Boolean(fields.name.value) && (
                  <IconButton
                    onClick={editCharacterModalHandlers.onClearField(field)}>
                    <Clear />
                  </IconButton>
                ),
              }}
              InputLabelProps={{
                sx: (theme) => ({
                  color: theme.custom.input.placeholderColor,
                  textTransform: 'capitalize',
                }),
              }}
              onChange={editCharacterModalHandlers.onChange(field)}
            />
          ))}
          <Button fullWidth variant='contained' color="primary" size="large" type="submit">
            Save changes
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
