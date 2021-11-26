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
        <Image
          src={HomeHeroMessage.src}
          pos="absolute"
          top="50%"
          left="5%"
          w={{ sm: "90%", md: "60%", lg: "50%" }}
          alt="スローガン"
        />
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
              ゼットレックとは
            </Heading>
            <Heading as="h2" size="md" pt={4}>
              About us
            </Heading>
          </Box>
          <Box>
            <Text>
              ゼットレックは、デジタルテクノロジーを駆使して、持続可能な社会の実現を目指すスタートアップです。優しくて強い意志をもった人や企業と共に、良い未来を本気で創っていきたい。私たちはそんな純粋な想いを原動力に、活動しています。画期的なシステムを構築し、あらゆる人が人間らしく生きることができる世界を創っていきます。
            </Text>
          </Box>
          <PrimaryButton
            title="ビジョン"
            width={{ sm: "60%", md: "30%", lg: "15%" }}
            margin="8"
            onClick={onClickToVision}
          />
        </Box>
{/*
        <Box
          as="section"
          w={{ sm: "90%", lg: "60%" }}
          mx="auto"
          my={16}
          textAlign="center"
        >
          <Box py={[8, 12]}>
            <Heading as="h1" size="xl">
              サービス
            </Heading>
            <Heading as="h2" size="md" py={4}>
              Service
            </Heading>
          </Box>
          <Box
            display="flex"
            flexWrap="wrap-reverse"
            alignItems="center"
            justifyContent="center"
          >
            <Box textAlign="left" w={{ sm: "90%", md: "70%", lg: "55%" }}>
              <Heading
                as="h3"
                size="sm"
                textAlign={{ sm: "center", lg: "left" }}
              >
                流れを敏感に捉え、地球を支える
              </Heading>
              <Heading
                as="h3"
                size="sm"
                textAlign={{ sm: "center", lg: "left" }}
                pt={4}
              >
                Everyday Action for the Earth.
              </Heading>
              <Text py={8}>
                後世まで綺麗な地球を残すため、勇気を振り絞って、それぞれが小さなアクションを起こすことが大切です。それが私たちの責任であり、良い未来を築くために必要不可欠なことです。ゼットレっくは、そんな勇気ある人々を支援するために全力を尽くして、共に世界を前進させていきます。
              </Text>
              <Box
                display="flex"
                w="100%"
                justifyContent="space-evenly"
                flexWrap="wrap"
              >
                <PrimaryButton
                  title="事業内容"
                  width={{ sm: "60%", md: "45%", lg: "35%" }}
                  margin={{ sm: 4, md: "0", lg: 0 }}
                  onClick={onClickToServices}
                />
                <BorderButton
                  title="もっと詳しく"
                  width={{ sm: "60%", md: "45%", lg: "35%" }}
                  onClick={onClickMore}
                />
              </Box>
            </Box>
            <Box w={{ sm: "90%", md: "70%", lg: "45%" }}>
              <Image src={HomeServiceImage.src} alt="Zrekの提供サービス" />
            </Box>
          </Box>
        </Box>
*/}
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
                date="2021.11.9"
                tag="コーポレート"
                title="クリエイター支援事業を開始しました"
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
              <NewsItem
                date="2021.8.23"
                tag="サービス"
                title="カーボンカードのランディングページを公開しました"
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
