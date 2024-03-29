import {
  Flex,
  Box,
  Image,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Logo from "../../../public/static/logo/header_logo.svg";
import { SecondaryButton } from "../atoms/SecondaryButton";
import NextLink from "next/link";
import { NavmenuAbout } from "./NavMenuItem/NavmenuAbout";
import { NavmenuStrategy } from "./NavMenuItem/NavmenuStrategy";
import { NavmenuService } from "./NavMenuItem/NavmenuService";
import { useState } from "react";
import { useRouter } from "next/router";
import { MenuSp } from "../moclules/MenuSp";

export const Header = () => {
  const [aboutIsHover, setAboutIsHover] = useState(false);
  const onMouseAbout = () => {
    setAboutIsHover(true);
    setStrategyIsHover(false);
    setServiceIsHover(false);
  };

  const [strategyIsHover, setStrategyIsHover] = useState(false);
  const onMouseStrategy = () => {
    setStrategyIsHover(true);
    setAboutIsHover(false);
    setServiceIsHover(false);
  };

  const [serviceIsHover, setServiceIsHover] = useState(false);
  const onMouseService = () => {
    setServiceIsHover(true);
    setAboutIsHover(false);
    setStrategyIsHover(false);
  };

  const onMouseLeave = () => {
    setAboutIsHover(false);
    setStrategyIsHover(false);
    setServiceIsHover(false);
  };

  const router = useRouter();
  const onClickContact = () => router.push("/contact");

  return (
    <>
      <Flex
        justifyContent="space-between"
        w="100%"
        h={{ sm: "20", md: "28" }}
        pos="fixed"
        top="0"
        zIndex="100"
        bgColor="primary.50"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w={{ sm: "35%", lg: "20%" }}
          pl={4}
        >
          <NextLink href="/" passHref>
            <Link cursor="pointer" _focus={{ focus: "none" }}>
              <Image
                src={Logo.src}
                alt="Logo"
                w={{ sm: "100%", md: "70%", lg: "65%" }}
              />
            </Link>
          </NextLink>
        </Box>
        <UnorderedList
          display={{ sm: "none", lg: "flex" }}
          w="60%"
          alignItems="center"
          justifyContent="space-around"
          listStyleType="none"
        >
          <ListItem onMouseEnter={onMouseAbout}>
            <NextLink href="/about" passHref>
              <Link
                fontWeight="bold"
                _hover={{
                  color: "primary.250",
                  borderBottom: "1px",
                  borderColor: "primary.250",
                  paddingBottom: "7px",
                }}
              >
                企業情報
              </Link>
            </NextLink>
            <NavmenuAbout
              visibility={!aboutIsHover ? "hidden" : "visible"}
              opacity={!aboutIsHover ? "0" : "1"}
              onMouseLeave={onMouseLeave}
            />
          </ListItem>
          <ListItem onMouseEnter={onMouseStrategy}>
            <NextLink href="/strategy" passHref>
              <Link
                fontWeight="bold"
                _hover={{
                  color: "primary.250",
                  borderBottom: "1px",
                  borderColor: "primary.250",
                  paddingBottom: "7px",
                }}
              >
                経営方針
              </Link>
            </NextLink>
            <NavmenuStrategy
              visibility={!strategyIsHover ? "hidden" : "visible"}
              opacity={!strategyIsHover ? "0" : "1"}
              onMouseLeave={onMouseLeave}
            />
          </ListItem>
          <ListItem onMouseEnter={onMouseService}>
            <NextLink href="/service" passHref>
              <Link
                fontWeight="bold"
                _hover={{
                  color: "primary.250",
                  borderBottom: "1px",
                  borderColor: "primary.250",
                  paddingBottom: "7px",
                }}
              >
                事業内容
              </Link>
            </NextLink>
            <NavmenuService
              visibility={!serviceIsHover ? "hidden" : "visible"}
              opacity={!serviceIsHover ? "0" : "1"}
              onMouseLeave={onMouseLeave}
            />
          </ListItem>
          <ListItem>
            <NextLink href="/news" passHref>
              <Link
                fontWeight="bold"
                onMouseEnter={onMouseLeave}
                _hover={{
                  color: "primary.250",
                  borderBottom: "1px",
                  borderColor: "primary.250",
                  paddingBottom: "7px",
                }}
              >
                ニュース
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <NextLink href="/recruit" passHref>
              <Link
                fontWeight="bold"
                onMouseEnter={onMouseLeave}
                _hover={{
                  color: "primary.250",
                  borderBottom: "1px",
                  borderColor: "primary.250",
                  paddingBottom: "7px",
                }}
              >
                採用情報
              </Link>
            </NextLink>
          </ListItem>
          <SecondaryButton
            title="問い合わせ"
            width="13%"
            onClick={onClickContact}
          />
        </UnorderedList>
        <MenuSp />
      </Flex>
    </>
  );
};
