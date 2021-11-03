import { Box, Heading, Text } from "@chakra-ui/layout"
import { Hero } from "../../src/components/organisations/Hero"
import { Header } from '../../src/components/organisations/Header'
import { Footer } from '../../src/components/organisations/Footer'
import { Meta } from "../../src/components/moclules/Meta"

export default function Vision() {
  return (
    <Box>
      <Meta pageTitle="ビジョン" pageDescription="ゼットレックのバリュー、パーパス、ミッションについて記載しています。" />
      <Header />
      <Hero title="ビジョン" />
      <Box as="main" w={{ sm: '90%', md: '80%', lg: "60%" }} mx="auto">
        <Box my={20}>
          <Heading as="h1" size="lg">Value Statement</Heading>
          <Text my={4}>
            我々の仕事は、最高のものを創ることだ。
            <br />
            未だ誰も見たことがない画期的なサービスを生み出すことである。
            <br />
            そして、我々だけが満足するものではなく、「最高だ！」と人に喜ばれるものを創る。
            <br />
            我々は、顧客、仲間、友人、家族、先祖、大切な人に胸を張って誇れる生き方を選ぶ。
            <br />
            同じ志を持つ仲間と共に、全身全霊で「最高」を追求すること。
            <br />
            最高の追求に終わりはない。
            <br />
            そこに生きる喜びがあると信じている。
          </Text>
        </Box>
        <Box my={12}>
          <Heading as="h1" size="lg">Purpose</Heading>
          <Text my={4}>我々は最高のものを創り、世の中に感動を与えるために存在している。</Text>
        </Box>
        <Box my={12}>
          <Heading as="h1" size="lg">Mission</Heading>
          <Text my={4}>2024年までに優れたシステムを確立させ、Sustainability × Digital分野のニッチ市場において唯一無二の存在となる。</Text>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}