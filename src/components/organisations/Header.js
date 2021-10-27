import { Flex, Box, Image, Link } from '@chakra-ui/react';
import Logo from '../../static/header_logo.png'
import { SecondaryButton } from '../atoms/SecondaryButton';
import NextLink from "next/link"

export const Header = () => {
  return (
    <Flex justifyContent="space-between" w="100%" h={28} pos="fixed" top="0" zIndex="100">
      <Box display="flex" alignItems="center" justifyContent="center" w="20%">
        <NextLink href="/" passHref>
          <Link cursor="pointer" _focus={{ focus: "none" }}>
            <Image src={Logo.src} alt="Logo" w="70%" />
          </Link>
        </NextLink>
      </Box>
      <Box w="60%" display="flex" alignItems="center" justifyContent="space-around">
        <NextLink href="about" passHref>
          <Link>企業情報</Link>
        </NextLink>
        <NextLink href="strategy" passHref>
          <Link>経営方針</Link>
        </NextLink>
        <NextLink href="service" passHref>
          <Link>事業内容</Link>
        </NextLink>
        <NextLink href="news" passHref>
          <Link>ニュース</Link>
        </NextLink>
        <NextLink href="recruit" passHref>
          <Link>採用情報</Link>
        </NextLink>
        <SecondaryButton title="問い合わせ" width="13%" />
      </Box>
    </Flex>
  )
}