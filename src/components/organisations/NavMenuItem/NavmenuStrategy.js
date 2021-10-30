import { Box, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import NextLink from "next/link"
import { useState } from 'react';
import { MenuCardStrategy } from '../../moclules/MenuCard/MenuCardStrategy';

export const NavmenuStrategy = () => {
  const [ isActiveStrategy, setIsActiveStrategy ] = useState(false)
  const onMouseEnterStrategy = () => {
    setIsActiveStrategy(true)
  }

  const onMouseLeaveStrategy = () => {
    setIsActiveStrategy(false)
  }

  return (
    <Box>
      <NextLink href="/about" passHref>
        <Link onMouseEnter={onMouseEnterStrategy} onMouseLeave={onMouseEnterStrategy} _hover={{ color: "primary.250", borderBottom: "1px", borderColor: "primary.250", paddingBottom: "7px" }}>経営方針</Link>
      </NextLink>
      <UnorderedList listStyleType="none">
        <ListItem onMouseLeave={onMouseLeaveStrategy}>
          <MenuCardStrategy visibility={!isActiveStrategy ? "hidden" : "visible"} opacity={!isActiveStrategy ? "0" : "1"} />
        </ListItem>
      </UnorderedList>
    </Box>
  )
}