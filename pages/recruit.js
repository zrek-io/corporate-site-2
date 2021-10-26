import { Box, Center, Text } from "@chakra-ui/layout"
import { Hero } from "../src/components/organisations/Hero"
import { SectionTitle } from '../src/components/moclules/SectionTitle';
import { PrimaryButton } from '../src/components/atoms/PrimaryButton';

export default function Recruit() {
  return (
    <Box>
      <Hero title="採用情報" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w="73%" mx="auto" mt={32}>
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
      </Box>
      <Center>
        <PrimaryButton title="少し興味がある" width="13%" margin="8" />
      </Center>
    </Box>
  )
}