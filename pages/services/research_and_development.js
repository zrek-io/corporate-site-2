import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { SectionTitle } from "../../src/components/moclules/SectionTitle";
import { Hero } from "../../src/components/organisations/Hero";
import randdIamge from "../../src/static/randd.jpeg"
import { Header } from '../src/components/organisations/Header'

export default function Randd() {
  return (
    <Box>
      <Header />
      <Hero title="研究開発" />
      <Box as="main" w="80%" mx="auto">
        <Box display="flex" alignItems="center" justifyContent="center" mt={20} mb={8}>
          <Box w="50%">
            <SectionTitle SectionTitle="新たなテクノロジーの社会実装" />
            <Text>私たちは、新しいテクノロジーを活用し、革新的な産業を生み出すために研究開発を行っています。常に原点に立ち返り、システムという全体の構造を俯瞰して捉えながら積極的に取り組んでいます。</Text>
          </Box>
          <Box w="50%">
            <Image src={randdIamge.src} w="75%" mx="auto" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}