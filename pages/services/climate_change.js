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
        pageTitle="クリエイター支援"
        pageDescription="ゼットレックはクリエイター支援事業を展開しています。"
      />
      <Header />
      <Hero title="クリエイター支援" />
      <Box as="main" w="80%" mx="auto">
        <Box display="flex" alignItems="center" justifyContent="center" my={20}>
          <Box w={{ sm: "100%", lg: "50%" }}>
            <SectionTitle SectionTitle="クリエイターのインフラ構築" />
            <Text>
              私たちは、デジタルテクノロジーを活用して世界中のクリエイターの生活に欠かせないサービスを提供していきます。大好きなクリエイターがいる方、推しがいる方、創ることが大好きなクリエイターの皆様、ぜひ一度お話をしたいです。困っていることや悩みごとを聞かせてください。
            </Text>
//             <Text my={6}>
//              （追加文章）
//             </Text>
          </Box>
          <Box display={{ sm: "none", lg: "block" }} w="50%">
            <Image
              src={climateChangeImage.src}
              w="75%"
              mx="auto"
              alt="クリエイター支援"
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
