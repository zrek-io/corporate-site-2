import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { SectionTitle } from "../../src/components/moclules/SectionTitle";
import { Hero } from "../../src/components/organisations/Hero";
import randdIamge from "../../public/static/images/randd.jpeg";
import { Header } from "../../src/components/organisations/Header";
import { Footer } from "../../src/components/organisations/Footer";
import { Meta } from "../../src/components/moclules/Meta";

export default function Randd() {
  return (
    <Box>
      <Meta
        pageTitle="研究開発"
        pageDescription="ゼットレックでは新しいテクノロジーの社会実装に向けた研究開発を行なっています。"
      />
      <Header />
      <Hero title="研究開発" />
      <Box
        as="main"
        w="80%"
        mx="auto"
        h={{ sm: "30vh", md: "40vh", lg: "auto" }}
        my={20}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={20}
          mb={8}
        >
          <Box w={{ sm: "100%", lg: "50%" }}>
            <SectionTitle SectionTitle="新たなテクノロジーの社会実装" />
            <Text>
              私たちは、ブロックチェーンやディープラーニングなど新しいテクノロジーを活用し、革新的なプロダクトを生み出すための研究開発を行っています。システムという全体の構造を俯瞰して捉えながら、どのようにしてサービスに組み込んでいくのかを積極的に検討し、実装につなげていきます。
            </Text>
          </Box>
          <Box display={{ sm: "none", lg: "block" }} w="50%">
            <Image src={randdIamge.src} w="75%" mx="auto" alt="研究開発" />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
