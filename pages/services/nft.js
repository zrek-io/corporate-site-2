import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { PrimaryButton } from "../../src/components/atoms/PrimaryButton";
import { SectionTitle } from "../../src/components/moclules/SectionTitle";
import { Hero } from "../../src/components/organisations/Hero";
import CreatorSupportImage from "../../public/static/images/creatorsupport.jpg";
import HomeServiceImage from "../../public/static/images/home_service.png";
import { BorderButton } from "../../src/components/atoms/BorderButton";
import { Header } from "../../src/components/organisations/Header";
import { Footer } from "../../src/components/organisations/Footer";
import { Meta } from "../../src/components/moclules/Meta";
import { useRouter } from "next/router";

export default function ClimateChange() {
  const router = useRouter();
  const onClickContact = () => router.push("/contact");
  const onClickMore = () => router.push("https://zrek.io/");

  return (
    <Box>
      <Meta
        pageTitle="NFT事業"
        pageDescription="ゼレックはNFT事業を展開しています。"
      />
      <Header />
      <Hero title="NFT事業" />
      <Box as="main" w="80%" mx="auto">
        <Box display="flex" alignItems="center" justifyContent="center" my={20}>
          <Box w={{ sm: "100%", lg: "50%" }}>
            <SectionTitle SectionTitle="NFTの市場拡大へ"/>
            <Text>
              NFTの市場づくりからプロトコル開発まで。私たちは、アーティストやクリエイターのNFTプロジェクトのプロデュース、企業向けのNFT講座・勉強会・ワークショップ、NFTイベントの企画から運営など、NFT領域の事業を幅広く展開しています。NFTに関するご相談は、お気軽にご連絡ください。            </Text>
          </Box>
          <Box display={{ sm: "none", lg: "block" }} w="50%">
            <Image
              src={CreatorSupportImage.src}
              w="75%"
              mx="auto"
              alt="クリエイター支援"
            />
          </Box>
        </Box>
{/*
        <Box w="100%">
          <Image
            src={HomeServiceImage.src}
            w={{ sm: "90%", md: "75%", lg: "45%" }}
            mx="auto"
            alt="Zrekの提供サービス"
          />
        </Box>
*/}
        <Box p={{ sm: 6, lg: 12 }} textAlign="center">
          <PrimaryButton
            title="問い合わせ"
            width={{ sm: "65%", md: "30%", lg: "17%" }}
            margin={{ sm: "4", lg: "8" }}
            onClick={onClickContact}
          />
{/*
          <BorderButton
            title="zrek"
            width={{ sm: "65%", md: "30%", lg: "17%" }}
            onClick={onClickMore}
          />
*/}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
