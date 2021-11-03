import {
  Drawer,
  DrawerBody,
  DrawerContent,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton
} from "@chakra-ui/react"
import { Box, Heading, UnorderedList, ListItem, Link, Image } from "@chakra-ui/layout"
import { useDisclosure } from '@chakra-ui/hooks';
import { AiOutlineMenu } from 'react-icons/ai'
import NextLink from 'next/link';
import Logo from '../../static/header_logo.png'

export const MenuSp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box display={{ sm: 'flex', lg: 'none' }} alignItems="center">
      <IconButton variant='unstyled' color='primary.400' onClick={onOpen} aria-label="menu" icon={<AiOutlineMenu />} _focus={{ focus: "none" }}>open</IconButton>
      <Drawer isOpen={isOpen} onClose={onClose} placement='top'>
        <DrawerContent>
          <DrawerBody py={12}>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <Heading as='h2' size='md'>
                  <AccordionButton _focus={{ focus: 'none' }}>
                    <Box flex="1" textAlign="left">
                      企業情報
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <UnorderedList listStyleType='none'>
                    <ListItem>
                      <NextLink href='/about' passHref>
                        <Link fontSize='xs'>企業情報TOP</Link>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href="/about/company" passHref>
                        <Link fontSize="xs">会社概要</Link>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href="/about/history" passHref>
                        <Link fontSize="xs">沿革</Link>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href="/about/access" passHref>
                        <Link fontSize="xs">アクセス</Link>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href="/about/brand" passHref>
                        <Link fontSize="xs">ブランド</Link>
                      </NextLink>
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading as='h2' size='md'>
                  <AccordionButton _focus={{ focus: 'none' }}>
                    <Box flex="1" textAlign="left">
                      経営方針
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <UnorderedList listStyleType="none">
                    <ListItem>
                      <NextLink href="/strategy" passHref>
                        <Link fontSize="xs">経営方針TOP</Link>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href="/strategy/vision" passHref>
                        <Link fontSize="xs">ビジョン</Link>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href="/strategy/message" passHref>
                        <Link fontSize="xs">トップメッセージ</Link>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href="/strategy/identity" passHref>
                        <Link fontSize="xs">経営理念</Link>
                      </NextLink>
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading as='h2' size='md'>
                  <AccordionButton _focus={{ focus: 'none' }}>
                    <Box flex="1" textAlign="left">
                      事業内容
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel pb={4}>
                  <UnorderedList listStyleType="none">
                    <ListItem>
                      <NextLink href="/service" passHref>
                        <Link fontSize="xs">事業内容TOP</Link>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href="/services/climate_change" passHref>
                        <Link fontSize="xs">気候変動対策</Link>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href="/services/software" passHref>
                        <Link fontSize="xs">ソフトウェア開発</Link>
                      </NextLink>
                    </ListItem>
                    <ListItem>
                      <NextLink href="/services/research_and_development" passHref>
                        <Link fontSize="xs">研究開発</Link>
                      </NextLink>
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <Heading as='h2' size='md'>
                  <AccordionButton _focus={{ focus: 'none' }}>
                    <Box flex="1" textAlign="left">
                      <NextLink href="/news" passHref>
                        <Link fontSize="md">ニュース</Link>
                      </NextLink>
                    </Box>
                  </AccordionButton>
                </Heading>
              </AccordionItem>

              <AccordionItem>
                <Heading as='h2' size='md'>
                  <AccordionButton _focus={{ focus: 'none' }}>
                    <Box flex="1" textAlign="left">
                      <NextLink href="/recruit" passHref>
                        <Link fontSize="md">採用情報</Link>
                      </NextLink>
                    </Box>
                  </AccordionButton>
                </Heading>
              </AccordionItem>

              <AccordionItem>
                <Heading as='h2' size='md'>
                  <AccordionButton _focus={{ focus: 'none' }}>
                    <Box flex="1" textAlign="left">
                      <NextLink href="/contact" passHref>
                        <Link fontSize="md">問い合わせ</Link>
                      </NextLink>
                    </Box>
                  </AccordionButton>
                </Heading>
              </AccordionItem>

            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}