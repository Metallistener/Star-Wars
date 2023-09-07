import React, { FC } from 'react';
import { Box, Button, CircularProgress, Container, Grid } from '@mui/material';
import { useForm } from 'effector-forms';
import { useUnit } from 'effector-react';
import { charactersModel } from 'pages/Characters/model';
import { Svg } from 'shared/ui/Svg';
import { Text } from 'shared/ui/Text';
import { Card } from '../Card';
import { charactersHandlers } from 'pages/Characters/lib/handlers';
import {
  contentContainerSx,
  emptyResultContainerSx,
  emptyResultTitleSx,
  isLoadingContainerSx,
  isLoadingSx,
} from './style';

export const Content: FC = () => {
  const [characters, charactersIsPending, searchResult, searchIsPending] =
    useUnit([
      charactersModel.characters.stores.$characters,
      charactersModel.characters.stores.$charactersIsPending,
      charactersModel.search.stores.$searchResult,
      charactersModel.search.stores.$searchIsPending,
    ]);
  const { fields } = useForm(charactersModel.search.stores.searchForm);
  const isLoadMoreShown = Boolean(fields.search.value.length)
    ? searchResult && searchResult?.next
    : characters && characters?.next;

  if (
    (Boolean(fields.search.value) &&
      !searchIsPending &&
      !Boolean(searchResult || searchResult?.results?.length)) ||
    (!charactersIsPending &&
      !Boolean(characters || characters?.results?.length))
  )
    return (
      <Container sx={emptyResultContainerSx}>
        <Svg idIcon="icNoResult" width={150} height={150} />
        <Text sx={emptyResultTitleSx}>Empty result</Text>
      </Container>
    );

  if (
    (searchIsPending &&
      !Boolean(searchResult || searchResult?.results?.length)) ||
    (charactersIsPending && !Boolean(characters || characters?.results?.length))
  )
    return (
      <Container sx={isLoadingContainerSx}>
        <CircularProgress color="primary" />
        <Text sx={isLoadingSx}>Characters is loading...</Text>
      </Container>
    );

  return (
    <>
      <Grid container sx={contentContainerSx}>
        {(Boolean(fields.search.value)
          ? searchResult
          : characters
        )?.results?.map((char, index) => (
          <Card key={char.url} data={char} index={index + 1} />
        ))}
      </Grid>
      {isLoadMoreShown && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginBottom="20px"
          marginTop="10px">
          <Button
            color="primary"
            size="large"
            disabled={charactersIsPending}
            onClick={charactersHandlers.onClickNext(
              Boolean(fields.search.value),
            )}>
            {charactersIsPending || searchIsPending ? (
              <CircularProgress size={30} />
            ) : (
              'Load more'
            )}
          </Button>
        </Box>
      )}
    </>
  );
};
