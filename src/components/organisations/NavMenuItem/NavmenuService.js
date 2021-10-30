import { Box, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import NextLink from "next/link"
import { useState } from 'react';
import { MenuCardService } from '../../moclules/MenuCard/MenuCardService';

export const NavmenuService = () => {
  const [ isActiveService, setIsActiveService ] = useState(false)
  const onMouseEnterService = () => {
    setIsActiveService(true)
  }

  const onMouseLeaveService = () => {
    setIsActiveService(false)
  }

  return (
    <Box>
      <NextLink href="/about" passHref>
        <Link onMouseEnter={onMouseEnterService} onMouseLeave={onMouseEnterService} _hover={{ color: "primary.250", borderBottom: "1px", borderColor: "primary.250", paddingBottom: "7px" }}>事業内容</Link>
      </NextLink>
      <UnorderedList listStyleType="none">
        <ListItem onMouseLeave={onMouseLeaveService}>
          <MenuCardService visibility={!isActiveService ? "hidden" : "visible"} opacity={!isActiveService ? "0" : "1"} />
        </ListItem>
      </UnorderedList>
    </Box>
  )
}