import { Box, UnorderedList, ListItem } from '@chakra-ui/react';
import { MenuCardService } from '../../moclules/MenuCard/MenuCardService';

export const NavmenuService = (props) => {
  const { visibility, opacity, onMouseLeave } = props

  return (
    <Box>
      <UnorderedList listStyleType="none">
        <ListItem onMouseLeave={onMouseLeave}>
          <MenuCardService visibility={visibility} opacity={opacity} />
        </ListItem>
      </UnorderedList>
    </Box>
  )
}