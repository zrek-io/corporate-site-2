import { Box, UnorderedList, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import { MenuCardStrategy } from '../../moclules/MenuCard/MenuCardStrategy';

export const NavmenuStrategy = (props) => {
  const { visibility, opacity, onMouseLeave } = props

  return (
    <Box>
      <UnorderedList listStyleType="none">
        <ListItem onMouseLeave={onMouseLeave}>
          <MenuCardStrategy visibility={visibility} opacity={opacity} />
        </ListItem>
      </UnorderedList>
    </Box>
  )
}