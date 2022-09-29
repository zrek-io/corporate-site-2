import { Box, Text } from "@chakra-ui/layout"
import { Hero } from "../../src/components/organisations/Hero"
import { Header } from '../../src/components/organisations/Header'
import { Footer } from '../../src/components/organisations/Footer'
import { Meta } from "../../src/components/moclules/Meta"

export default function Message() {
  return (
    <Box>
      <Meta pageTitle="トップメッセージ" pageDescription="ゼットレックのトップメッセージです。" />
      <Header />
      <Hero title="トップメッセージ" />
      <Box as="main" w={{ sm: '90%', md: '80%', lg: "60%" }} h={{ md: '50vh', lg: 'auto' }} mx="auto" my={{ sm: 10, lg: 20 }}>
        <Box w="100%">
          <Box mt={12} mb={20}>
            <Text>
              未来はいつの間にかやってくる。
              <br />
              だけど、望む未来は決して勝手にやってくることはない。
              <br />
              したがって、私たちの望む未来は自分たちで創るしかないのである。
              <br />
              理想の世界を実現させるためには、とにかくベストを尽くして前進しなければならない。
              <br />
              優れたアイデア、良き戦略、偉大なチーム、純粋な志、誰にも渡せない自分自身の生きるスジが必要だ。
              <br />
              私たちは己をもって、本気で社会に向き合えば、誰にでも世界は変えられるということを証明する。
              <br />
              私たちはWeb3という武器を手に、大勝負に出るしか道はない。
              <br />
              日本を「世界をリードする日本」へと再建していこう。
              <br />
              貧困化し続ける社会を私たちの下の世代に残すわけにはいかない。
              <br />
              だから、上手くいくまで手は止められない。
              <br />
              最高のものを創り、世の中に表現していく。
            </Text>
          </Box>
          <Box textAlign="right">
            <Text>2022年</Text>
            <Text>株式会社Zrek</Text>
            <Text>代表 今村優希</Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
