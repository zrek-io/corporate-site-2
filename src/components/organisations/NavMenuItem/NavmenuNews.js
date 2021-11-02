import { Box, Link } from '@chakra-ui/react';
import NextLink from "next/link"
import { useState } from 'react';

export const NavmenuNews = () => {
  const [isHover, setIsHover] = useState()
  const onMouseEnterNews = () => {
    setIsHover(false)
  }

  return (
    <Box>
      <NextLink href="/news" passHref>
        <Link onMouseEnter={onMouseEnterNews} _hover={{ color: "primary.250", borderBottom: "1px", borderColor: "primary.250", paddingBottom: "7px" }}>ニュース</Link>
      </NextLink>
    </Box>
  )
}