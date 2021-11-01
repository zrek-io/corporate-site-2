import { Box, UnorderedList, ListItem } from '@chakra-ui/react';
import { MenuCardAbout } from '../../moclules/MenuCard/MenuCardAbout';

export const NavmenuAbout = (props) => {
  const { visibility, opacity, onMouseLeave } = props

  return (
    <Box>
      <UnorderedList listStyleType="none">
        <ListItem onMouseLeave={onMouseLeave}>
          <MenuCardAbout visibility={visibility} opacity={opacity} />
        </ListItem>
      </UnorderedList>
    </Box>
  )
}