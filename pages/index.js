import { Box, Image } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/layout'
import { PrimaryButton } from '../src/components/atoms/PrimaryButton'
import HomeServiceImage from '../src/static/home_service.png'
import HomeHeroMessage from '../src/static/hero_message.png'
import HeroBackgroundImage from '../src/static/home.jpeg'
import { BorderButton } from '../src/components/atoms/BorderButton'
// import { Header } from '../src/components/organisations/Header'

export default function Home() {
  return (
    <Box>
      {/* <Header /> */}
      <Box
        pos="relative"
        w="100%"
        h="100vh"
        bgImage={HeroBackgroundImage.src}
        bgSize="cover"
      >
        <Image
          src={HomeHeroMessage.src}
          pos="absolute"
          top="50%"
          left="5%"
          w="50%"
        />
      </Box>
      <Box as="main" w="100%">
        <Box as="section" w="60%" mx="auto" my={12} backgroundColor="gray.100" textAlign="center">
          <Box py={[8, 12]}>
            <Heading fontWeight="normal" fontSize="4xl">ゼットレックとは</Heading>
            <Text as="h2" fontSize="3xl">About us</Text>
          </Box>
          <Box>
            <Text py={[0, 8]}>ゼットレックは、デジタルテクノロジーを駆使して、持続可能な社会の実現を目指すスタートアップです。優しくて強い意志をもった人や企業と共に、良い未来を本気で創っていきたい。私たちはそんな純粋な想いを原動力に、活動しています。画期的なシステムを構築し、あらゆる人が人間らしく生きることができる世界を創っていきます。</Text>
          </Box>
          <PrimaryButton title="ビジョン" width="15%" />
        </Box>
        <Box as="section" w="60%" mx="auto" my={12} backgroundColor="gray.100" textAlign="center">
          <Box py={[8, 12]}>
            <Heading fontWeight="normal" fontSize="4xl">サービス</Heading>
            <Text as="h2" fontSize="3xl">Service</Text>
          </Box>
          <Box display="flex">
            <Box textAlign="left" w="55%">
              <Text as="h3" fontSize="3xl">流れを敏感に捉え、地球を支える</Text>
              <Text as="h3" fontSize="3xl">Everyday Action for the Earth.</Text>
              <Text py={8}>後世まで綺麗な地球を残すため、勇気を振り絞って、それぞれが小さなアクションを起こすことが大切です。それが私たちの責任であり、良い未来を築くために必要不可欠なことです。ゼットレっくは、そんな勇気ある人々を支援するために全力を尽くして、共に世界を前進させていきます。</Text>
              <Box display="flex" w="100%" justifyContent="space-evenly">
                <PrimaryButton title='事業内容' width="35%" />
                <BorderButton title='もっと詳しく'　width="35%" />
              </Box>
            </Box>
            <Box w="45%">
              <Image src={HomeServiceImage.src} />
            </Box>
          </Box>
        </Box>
        <Box as="section" w="60%" mx="auto" my={12} backgroundColor="gray.100" textAlign="center">
          <Box py={[8, 12]}>
            <Heading fontWeight="normal" fontSize="4xl">ニュース</Heading>
            <Text as="h2" fontSize="3xl">News</Text>
            <PrimaryButton title='ニュース一覧' width="15%"  />
          </Box>
        </Box>
      </Box>
      {/* footerはここ */}
    </Box>
  )
}
