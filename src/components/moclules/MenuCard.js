import { Button } from "@chakra-ui/button";
import { Link } from '@chakra-ui/react';
import { Box, ListItem, UnorderedList } from "@chakra-ui/layout"
import NextLink from "next/link"

export const MenuCard = (props) => {
  const { visibility, opacity, href, firstItem } = props;

  return (
    <Box>
      {/* <Box
        pos="fixed"
        top="0"
        left="0"
        w="100%"
        h="100%"
        mt={28}
        bgColor='primary.400'
        zIndex="10"
        opacity=".4"
        transition=".7s"
        visibility={visibility}
        opacity={opacity}
      ></Box> */}
      <UnorderedList
        // visibility={visibility}
        // opacity={opacity}
        pos="fixed"
        top="20%"
        left="50%"
        transform="translateX(-50%)"
        w="80%"
        h={60}
        bgColor="primary.100"
        borderRadius="md"
        listStyleType="none"
        listStylePos="inside"
        marginInlineStart="0"
        zIndex="90"
        transition=".5s"
      >
        <ListItem>
          <NextLink href="/" passHref>
            <Link>{firstItem}</Link>
          </NextLink>
        </ListItem>
        <ListItem>メニューアイテム</ListItem>
        <ListItem>メニューアイテム</ListItem>
        <ListItem>メニューアイテム</ListItem>
      </UnorderedList>
    </Box>
  )
}