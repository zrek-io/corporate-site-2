import { Box, Text } from "@chakra-ui/layout";
import { Hero } from "../../src/components/organisations/Hero";
import { SectionTitle } from "../../src/components/moclules/SectionTitle";
import { Image } from "@chakra-ui/image";
import LogoCharacter from "../../public/static/logo/logo_character.png";
import LogoImage from "../../public/static/logo/logo.png";
import { Header } from "../../src/components/organisations/Header";
import { Footer } from "../../src/components/organisations/Footer";
import { Meta } from "../../src/components/moclules/Meta";

export default function Brand() {
  return (
    <Box>
      <Meta
        pageTitle="ブランド"
        pageDescription="ゼレックの社名由来、ロゴ、カラーについて記載しています。"
      />
      <Header />
      <Hero title="ブランド" />
      <Box
        as="main"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        w={{ sm: "90%", md: "80%", lg: "73%" }}
        mx="auto"
        my={{ sm: 16, lg: 32 }}
      >
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="社名" />
          <Image
            src={LogoCharacter.src}
            w={{ sm: "50%", md: "35%", lg: "28%" }}
            mx="auto"
            py={{ sm: 4, lg: 14 }}
            alt="Zrek文字ロゴ"
          />
          <Box w={{ sm: "85%", lg: "60%" }} mx="auto" lineHeight={8}>
            <Text py={5}>「Z」と「Trek」の造語です。</Text>
            <Text py={5}>「Z」は、アルファベットの最終文字且つ最も希少で使われない文字とされています。最高の、という意味があります。「Trek」は、骨の折れる長い旅という意味を持っています。2つを組み合わせて「Zrek」です。最高の旅を届ける企業であり続けるという意味が込められています。
            </Text>
          </Box>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="ロゴ" />
          <Image
            src={LogoImage.src}
            w={{ sm: "30%", md: "25%", lg: "15%" }}
            mx="auto"
            py={{ sm: 4, lg: 14 }}
            alt="Zrekロゴ"
          />
          <Box w={{ sm: "85%", lg: "60%" }} mx="auto" lineHeight={8}>
            <Text py={5}>
              社名の「ゼレック」に相応しいロゴとして考えられました。
            </Text>
            <Text py={5}>
              どこか日本らしい炎、羽がモチーフになっています。
            </Text>
          </Box>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="カラー" />
{/*
            <Box
            display="flex"
            alignItem="center"
            justifyContent="space-evenly"
            w="100%"
            my={6}
          >
            <Box
              w={{ sm: 36, lg: 72 }}
              h={{ sm: 14, lg: 28 }}
              bgColor="primary.200"
            ></Box>
            <Box
              w={{ sm: 36, lg: 72 }}
              h={{ sm: 14, lg: 28 }}
              bgColor="primary.350"
            ></Box>
          </Box>
*/}
          <Box w={{ sm: "85%", lg: "60%" }} mx="auto" lineHeight={8}>
            <Text py={5}>
              ゼレックカラーは、黒・白・青で構成されています。クールさとシンプルさがあるカラーとして選ばれ、ロゴと組み合わせたときのストーリー性を追求したカラーとなっています。
            </Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
