import { Box, Center, Text } from "@chakra-ui/layout"
import { Hero } from "../src/components/organisations/Hero"
import { SectionTitle } from '../src/components/moclules/SectionTitle';
import { PrimaryButton } from '../src/components/atoms/PrimaryButton';
import { Header } from '../src/components/organisations/Header'
import { Footer } from '../src/components/organisations/Footer'
import { useRouter } from 'next/router'
import { Meta } from "../src/components/moclules/Meta"

export default function Recruit() {
  const router = useRouter()
  const onClickContact = () => router.push('/contact')

  return (
    <Box>
      <Meta pageTitle="採用情報" />
      <Header />
      <Hero title="採用情報" />
      <Box as="main" w="73%" mx="auto" my={32}>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="求める人材" />
          <Text>主体的に行動、自分なりのこだわりがある人</Text>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="求めること" />
          <Text>コミットメントと成果</Text>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="採用基準" />
          <Text>一緒に働きたいと思うか、否か</Text>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="募集職種" />
          <Text>エンジニア、デザイナー、営業、その他</Text>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="雇用形態" />
          <Text>インターン</Text>
        </Box>
        <Center>
          <PrimaryButton title="少し興味がある" width="15%" margin="8" onClick={onClickContact} />
        </Center>
      </Box>
      <Footer />
    </Box>
  )
}