import { Box, Image } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/layout";
import { PrimaryButton } from "../src/components/atoms/PrimaryButton";
import HomeServiceImage from "../public/static/images/home_service.png";
import HomeHeroMessage from "../public/static/images/hero_message.png";
import HeroBackgroundImage from "../public/static/images/home.jpeg";
import { BorderButton } from "../src/components/atoms/BorderButton";
import { Header } from "../src/components/organisations/Header";
import { NewsItem } from "../src/components/moclules/NewsItem";
import { useRouter } from "next/router";
import { Footer } from "../src/components/organisations/Footer";
import { Meta } from "../src/components/moclules/Meta";

export default function Home() {
  const router = useRouter();

  const onClickToVision = () => {
    router.push("/strategy/vision");
  };

  const onClickToServices = () => {
    router.push("/service");
  };

  const onClickToNews = () => {
    router.push("/news");
  };

  const onClickMore = () => {
    router.push("http://lp.z-rek.com/");
  };

  return (
    <Box>
      <Meta />
      <Header />
      <Box
        pos="relative"
        w="100%"
        h={{ sm: "80vh", md: "60vh", lg: "100vh" }}
        bgImage={HeroBackgroundImage.src}
        bgSize="cover"
      >
{/*
        <Image
          src={HomeHeroMessage.src}
          pos="absolute"
          top="50%"
          left="5%"
          w={{ sm: "90%", md: "60%", lg: "50%" }}
          alt="スローガン"
        />
*/}
      </Box>
      <Box as="main" w="100%">
        <Box
          as="section"
          w={{ sm: "90%", md: "80%", lg: "60%" }}
          mx="auto"
          my={16}
          textAlign="center"
        >
          <Box py={[8, 12]}>
            <Heading as="h1" size="xl">
              ゼレックとは
            </Heading>
            <Heading as="h2" size="md" pt={4}>
              About us
            </Heading>
          </Box>
          <Box>
            <Text>
                ゼレックは、NFTの社会実装を目指すスタートアップです。強力な志と優しさを兼ね備えた企業と共に、日本の未来、Web3の未来を本気で創っていきたい。私たちはそんな純粋な想いを原動力に活動しています。あらゆる人が人間らしく生きることができるトークンの経済圏を実現します。            </Text>
          </Box>
          <PrimaryButton
            title="ビジョン"
            width={{ sm: "60%", md: "30%", lg: "15%" }}
            margin="8"
            onClick={onClickToVision}
          />
        </Box>
        <Box
          as="section"
          w={{ sm: "90%", md: "80%", lg: "73%" }}
          mx="auto"
          my={16}
          textAlign="center"
        >
          <Box py={[8, 12]}>
            <Heading as="h1" size="xl">
              ニュース
            </Heading>
            <Heading as="h2" size="md" py={4}>
              News
            </Heading>
            <Box py={6} textAlign="left">
              <NewsItem
                date="2022.7.1"
                tag="サービス"
                title="NFT事業を開始しました"
              />
              <NewsItem
                date="2022.03.28"
                tag="コーポレート"
                title="本店を移転しました"
              />
              <NewsItem
                date="2021.11.3"
                tag="お知らせ"
                title="コーポレートサイトをリニューアルしました"
              />                  
              <NewsItem
                date="2021.9.18"
                tag="お知らせ"
                title="代表の今村がHATSUFESで成果発表会を行いました"
              />
            </Box>
            <PrimaryButton
              title="ニュース一覧"
              width={{ sm: "60%", md: "40%", lg: "17%" }}
              onClick={onClickToNews}
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
