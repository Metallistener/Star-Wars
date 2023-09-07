import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { useForm } from 'effector-forms';
import { charactersModel } from 'pages/Characters/model';
import { charactersHandlers } from 'pages/Characters/lib/handlers';
import { Clear } from '@mui/icons-material';

export const Search = () => {
  const { fields, errorText } = useForm(
    charactersModel.search.stores.searchForm,
  );
  return (
    <Box marginTop="20px" marginX="20px">
      <TextField
        label="Search character"
        variant="outlined"
        fullWidth
        error={!fields.search.isValid}
        helperText={errorText('search')}
        value={fields.search.value}
        InputProps={{
          endAdornment: Boolean(fields.search.value) && (
            <IconButton onClick={charactersHandlers.onClear}>
              <Clear />
            </IconButton>
          ),
        }}
        InputLabelProps={{
          sx: (theme) => ({
            color: theme.custom.input.placeholderColor,
          }),
        }}
        onChange={charactersHandlers.onChange('search')}
      />
    </Box>
  );
};
