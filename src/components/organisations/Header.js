import { Flex, Box, Image, Link, UnorderedList, ListItem } from '@chakra-ui/react';
import Logo from '../../static/header_logo.png'
import { SecondaryButton } from '../atoms/SecondaryButton';
import NextLink from "next/link"
import { NavmenuAbout } from './NavMenuItem/NavmenuAbout';
import { NavmenuStrategy } from './NavMenuItem/NavmenuStrategy';
import { NavmenuService } from './NavMenuItem/NavmenuService';
import { useState } from 'react';

export const Header = () => {
  const [isHover, setIsHover] = useState();
  const onMouseEnter = () => {
    setIsHover(false)
  }

  return (
    <>
      <Flex justifyContent="space-between" w="100%" h={28} pos="fixed" top="0" zIndex="100" bgColor="primary.50">
        <Box display="flex" alignItems="center" justifyContent="center" w="20%" pl={4}>
          <NextLink href="/" passHref>
            <Link cursor="pointer" _focus={{ focus: "none" }}>
              <Image src={Logo.src} alt="Logo" w="65%" />
            </Link>
          </NextLink>
        </Box>
        <UnorderedList display="flex" w="60%" alignItems="center" justifyContent="space-around" listStyleType="none">
          <ListItem>
            <NavmenuAbout />
          </ListItem>
          <ListItem>
            <NavmenuStrategy />
          </ListItem>
          <ListItem>
            <NavmenuService />
          </ListItem>
          <ListItem>
            <NextLink href="/news" passHref>
              <Link onMouseEnter={onMouseEnter}>ニュース</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/recruit" passHref>
              <Link onMouseEnter={onMouseEnter}>採用情報</Link>
            </NextLink>
          </ListItem>
          <SecondaryButton title="問い合わせ" width="13%" />
        </UnorderedList>
      </Flex>
    </>
  )
}