import { Box, Text } from '@chakra-ui/react';
import { SectionTitle } from '../../src/components/moclules/SectionTitle';
import { Hero } from '../../src/components/organisations/Hero';
import { Header } from '../../src/components/organisations/Header'
import { Footer } from '../../src/components/organisations/Footer'
import { Meta } from "../../src/components/moclules/Meta"

export default function Access() {
  return (
    <Box>
      <Meta pageTitle="アクセス" pageDescription="本社までのアクセス情報を記載しています。" />
      <Header />
      <Hero title="アクセス" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w={{ sm: '90%', md: '80%', lg: "60%" }} mx="auto" my={{ sm: 16, lg: 32 }}>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="所在地" />
          <Text>〒248-0007 神奈川県鎌倉市大町1丁目1-14 HATSU鎌倉</Text>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="交通手段" />
          <Text>JR鎌倉駅東口 徒歩5分</Text>
        </Box>
        <Box w="100%" mb={2}>
          <SectionTitle SectionTitle="アクセス" />
        </Box>
        <Box w={{ sm: '90%', lg: "80%" }} h={{ sm: '25vh', md: '40vh', lg: "65vh" }} mx="auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13022.420821146547!2d139.5512588!3d35.31579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeaa39e41935d0a9d!2zSEFUU1XpjozlgIk!5e0!3m2!1sja!2sjp!4v1635839508625!5m2!1sja!2sjp" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}