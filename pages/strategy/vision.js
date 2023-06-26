import { Box, Heading, Text } from "@chakra-ui/layout"
import { Hero } from "../../src/components/organisations/Hero"
import { Header } from '../../src/components/organisations/Header'
import { Footer } from '../../src/components/organisations/Footer'
import { Meta } from "../../src/components/moclules/Meta"

export default function Vision() {
  return (
    <Box>
      <Meta pageTitle="ビジョン" pageDescription="ゼレックのバリュー、パーパス、ミッションについて記載しています。" />
      <Header />
      <Hero title="ビジョン" />
      <Box as="main" w={{ sm: '90%', md: '80%', lg: "60%" }} mx="auto">
        <Box my={20}>
          <Heading as="h1" size="lg">Value Statement</Heading>
          <Text my={4}>
            我々の仕事は、最高のものを創ることだ。
            <br />
            「最高だ！」と人に喜ばれるものを創り、身近な社会から世界へ還元する。
            <br />
            我々は、仲間、友人、家族、ファン、先祖、将来の子孫に胸を張って誇れる生き方を選ぶ。
            <br />
            同じ志を持つ仲間と共に、全身全霊で人間らしく生きることができる世の中を実現する。
          </Text>
        </Box>
        <Box my={12}>
          <Heading as="h1" size="lg">Purpose</Heading>
          <Text my={4}>我々は最高のものを創り、世の中を前進させるために存在している。</Text>
        </Box>
        {/* <Box my={12}>
          <Heading as="h1" size="lg">Mission</Heading>
          <Text my={4}>NFTを大衆化させる</Text>
        </Box> */}
      </Box>
      <Footer />
    </Box>
  )
}
