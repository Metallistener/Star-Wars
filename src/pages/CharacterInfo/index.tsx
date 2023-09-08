import React, { FC, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  Container,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  characterInfoContainerSx,
  characterInfoDescPendingSx,
  characterInfoDescSx,
  characterInfoImageBoxSx,
  characterInfoImageContainerStyle,
  characterInfoImageStyle,
  characterInfoNameBoxSx,
  characterInfoNameSx,
  characterInfoParamSx,
} from './style';
import { useParams } from 'react-router-dom';
import { characterInfoModel } from './model';
import { useUnit } from 'effector-react';
import NoImage from 'shared/config/assets/images/noImage.png';
import { Text } from 'shared/ui/Text';
import { planetModel } from 'entities/Planet/model';
import { Edit } from '@mui/icons-material';
import { editCharacterModalModel } from 'features/EditCharacterModal/model';
import { charactersModel } from 'entities/Characters/model';
import { Image } from 'shared/ui/Image';

export const CharacterInfo: FC = () => {
  const theme = useTheme();
  const params = useParams<{ id: string }>();
  const [info, infoIsPending, planetIsPending, cachedCharacters] = useUnit([
    characterInfoModel.info.stores.$info,
    characterInfoModel.info.stores.$infoIsPending,
    planetModel.stores.$planetIsPending,
    charactersModel.stores.$cachedCharacters,
  ]);
  const data = cachedCharacters.find((item) => item.id === info?.id) ?? info;

  useEffect(() => {
    charactersModel.events.getCachedCharacters();

    if (params?.id)
      characterInfoModel.info.events.getCharacterInfo(Number(params.id));

    return () => {
      planetModel.events.resetPlanet();
    };
  }, []);

  return (
    <Container sx={characterInfoContainerSx}>
      <Box
        maxWidth="300px"
        width="100%"
        borderRadius="8px"
        bgcolor={theme.custom.card.backgroundColor}
        boxShadow={theme.custom.card.boxShadow}
        sx={characterInfoImageBoxSx}>
        <Image
          alt={`${info?.name}_photo`}
          src={info || infoIsPending ? info?.image : NoImage}
          containerStyle={characterInfoImageContainerStyle}
          style={characterInfoImageStyle}
        />
      </Box>
      {!infoIsPending ? (
        <Box
          flex="1"
          borderRadius="8px"
          padding="20px"
          minHeight="350px"
          marginLeft="20px"
          bgcolor={theme.custom.card.backgroundColor}
          boxShadow={theme.custom.card.boxShadow}
          sx={characterInfoDescSx}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={characterInfoNameBoxSx}>
            <Text sx={characterInfoNameSx}>
              <span>{data?.name}</span>
            </Text>
            {data && (
              <IconButton
                onClick={() =>
                  editCharacterModalModel.modal.setVisible({
                    isOpen: true,
                    info: data,
                  })
                }>
                <Edit />
              </IconButton>
            )}
          </Box>
          <Text sx={characterInfoParamSx}>
            Birth date: <span>{data?.birth_year}</span>
          </Text>
          <Text sx={characterInfoParamSx}>
            Planet: <span>{!planetIsPending ? data?.homeworld : '-'}</span>
          </Text>
          <Text sx={characterInfoParamSx}>
            Gender: <span>{data?.gender}</span>
          </Text>
          <Text sx={characterInfoParamSx}>
            Height: <span>{data?.height}</span>
          </Text>
          <Text sx={characterInfoParamSx}>
            Mass: <span>{data?.mass}</span>
          </Text>
          <Text sx={characterInfoParamSx}>
            Eye color: <span>{data?.eye_color}</span>
          </Text>
          <Text sx={characterInfoParamSx}>
            Skin color: <span>{data?.skin_color}</span>
          </Text>
        </Box>
      ) : (
        <Box
          flex="1"
          borderRadius="8px"
          padding="20px"
          marginLeft="20px"
          minHeight="350px"
          justifyContent="center"
          alignItems="center"
          display="flex"
          bgcolor={theme.custom.card.backgroundColor}
          boxShadow={theme.custom.card.boxShadow}
          sx={characterInfoDescPendingSx}>
          <CircularProgress size={30} />
        </Box>
      )}
    </Container>
  );
};
