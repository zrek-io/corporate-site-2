import { Box, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import NextLink from "next/link"
import { useState } from 'react';
import { MenuCardAbout } from '../../moclules/MenuCard/MenuCardAbout';

export const NavmenuAbout = () => {
  const [isHover, setIsHover] = useState(false)
  const onMouseEnterAbout = () => {
    setIsHover(true)
  }

  const onMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <Box>
      <NextLink href="/about" passHref>
        <Link onMouseEnter={onMouseEnterAbout} onMouseLeave={onMouseLeave} _hover={{ color: "primary.250", borderBottom: "1px", borderColor: "primary.250", paddingBottom: "7px" }}>企業情報</Link>
      </NextLink>
      <UnorderedList listStyleType="none">
        <ListItem onMouseLeave={onMouseLeave}>
          <MenuCardAbout visibility={!isHover ? "hidden" : "visible"} opacity={!isHover ? "0" : "1"} />
        </ListItem>
      </UnorderedList>
    </Box>
  )
}