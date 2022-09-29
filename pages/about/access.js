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
          <Text>〒247-0056 神奈川県鎌倉市大船１丁目１１－２０鎌倉石原ビル５Ｆ</Text>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="交通手段" />
          <Text>JR大船駅 徒歩3分</Text>
        </Box>
        <Box w="100%" mb={2}>
          <SectionTitle SectionTitle="アクセス" />
        </Box>
        <Box w={{ sm: '90%', lg: "80%" }} h={{ sm: '25vh', md: '40vh', lg: "65vh" }} mx="auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.1525647776944!2d139.5316787!3d35.3518599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60184560950297fd%3A0x80cb30232f0f967a!2z44CSMjQ3LTAwNTYg56We5aWI5bed55yM6Y6M5YCJ5biC5aSn6Ii577yR5LiB55uu77yR77yR4oiS77yS77yQIOmOjOWAieefs-WOn-ODk-ODqyA1Zg!5e0!3m2!1sja!2sjp!4v1655596501389!5m2!1sja!2sjp" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}   
