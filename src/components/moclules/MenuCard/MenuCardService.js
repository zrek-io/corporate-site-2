import { Link } from '@chakra-ui/react';
import { Box, Divider, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/layout"
import NextLink from "next/link"
import bgImg from "../../../static/navmenu_company.jpg"

export const MenuCardService = (props) => {
  const { visibility, opacity } = props;

  return (
    <Box
      pos="fixed"
      alignItems="center"
      top="20%"
      left="50%"
      transform="translateX(-50%)"
      display="flex"
      w="80%"
      h={60}
      bgColor="primary.100"
      borderRadius="md"
      zIndex="90"
      transition=".5s"
      boxShadow="2xl"
      visibility={visibility}
      opacity={opacity}
    >
      <Box w="20%" pl={6}>
        <Heading fontSize="2rem">Services</Heading>
        <Text fontSize="sm">事業内容</Text>
      </Box>
      <Divider w="5%" h="70%" borderColor="primary.150" orientation="vertical" />
      <UnorderedList w="45%" listStyleType="none" listStylePos="inside" marginInlineStart="0">
        <ListItem pb={4}>
          <NextLink href="/strategy" passHref>
            <Link fontSize="md" _hover={{ color: "primary.250", borderBottom: "1px", borderColor: "primary.250", paddingBottom: "7px" }}>事業内容</Link>
          </NextLink>
        </ListItem>
        <ListItem py={2}>
          <NextLink href="/strategy/vision" passHref>
            <Link fontSize="xs" _hover={{ color: "primary.250", borderBottom: "1px", borderColor: "primary.250", paddingBottom: "7px" }}>気候変動対策</Link>
          </NextLink>
        </ListItem>
        <ListItem py={2}>
          <NextLink href="/strategy/message" passHref>
            <Link fontSize="xs" _hover={{ color: "primary.250", borderBottom: "1px", borderColor: "primary.250", paddingBottom: "7px" }}>ソフトウェア開発</Link>
          </NextLink>
        </ListItem>
        <ListItem py={2}>
          <NextLink href="/strategy/identity" passHref>
            <Link fontSize="xs" _hover={{ color: "primary.250", borderBottom: "1px", borderColor: "primary.250", paddingBottom: "7px" }}>研究開発</Link>
          </NextLink>
        </ListItem>
      </UnorderedList>
      <Box w="30%" h={60} bgImage={bgImg.src} bgSize="cover" bgRepeat="no-repeat" borderRightRadius="md"></Box>
    </Box>
  )
}