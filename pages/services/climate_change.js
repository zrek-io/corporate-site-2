import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { PrimaryButton } from "../../src/components/atoms/PrimaryButton";
import { SectionTitle } from "../../src/components/moclules/SectionTitle";
import { Hero } from "../../src/components/organisations/Hero";
import climateChangeImage from "../../public/static/images/climate_change.jpeg";
import HomeServiceImage from "../../public/static/images/home_service.png";
import { BorderButton } from "../../src/components/atoms/BorderButton";
import { Header } from "../../src/components/organisations/Header";
import { Footer } from "../../src/components/organisations/Footer";
import { Meta } from "../../src/components/moclules/Meta";
import { useRouter } from "next/router";

export default function ClimateChange() {
  const router = useRouter();
  const onClickContact = () => router.push("/contact");
  const onClickMore = () => router.push("http://lp.z-rek.com/");

  return (
    <Box>
      <Meta
        pageTitle="気候変動対策"
        pageDescription="ゼットレックは気候変動に対する対策事業を展開しています。"
      />
      <Header />
      <Hero title="気候変動対策" />
      <Box as="main" w="80%" mx="auto">
        <Box display="flex" alignItems="center" justifyContent="center" my={20}>
          <Box w={{ sm: "100%", lg: "50%" }}>
            <SectionTitle SectionTitle="気候変動に対する意識改革" />
            <Text>
              私たちは、気候変動対策に関するサービスを提供しています。気候変動対策の第一歩として必要なのはCO2排出量の可視化です。そこで、私たちはデジタル上の企業活動や個人の活動における毎月のCO2排出量を算出し、情報開示のためのデジタルカードを発行しています。
            </Text>
            <Text my={6}>
              デジタルカードは、ホームページなどのサイトに掲載でき、クラウド上でCO2排出量の管理が可能です。また、カード本体はブロックチェーンを活用した唯一性があるカードになっています。従来の情報開示に比べ、サイトの訪問者にとってはシンプルで理解しやすく、取り組む側にとっては運用のハードルが非常に低い情報開示システムになっています。環境への取り組みを正しく情報開示することで、企業や個人の価値向上を支援していきます。
            </Text>
          </Box>
          <Box display={{ sm: "none", lg: "block" }} w="50%">
            <Image
              src={climateChangeImage.src}
              w="75%"
              mx="auto"
              alt="気候変動対策"
            />
          </Box>
        </Box>
        <Box w="100%">
          <Image
            src={HomeServiceImage.src}
            w={{ sm: "90%", md: "75%", lg: "45%" }}
            mx="auto"
            alt="Zrekの提供サービス"
          />
        </Box>
        <Box p={{ sm: 6, lg: 12 }} textAlign="center">
          <PrimaryButton
            title="問い合わせ"
            width={{ sm: "65%", md: "30%", lg: "17%" }}
            margin={{ sm: "4", lg: "8" }}
            onClick={onClickContact}
          />
          <BorderButton
            title="もっと詳しく"
            width={{ sm: "65%", md: "30%", lg: "17%" }}
            onClick={onClickMore}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
