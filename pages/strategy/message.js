import { Box, Text } from "@chakra-ui/layout"
import { Hero } from "../../src/components/organisations/Hero"
import { Header } from '../src/components/organisations/Header'

export default function Message() {
  return (
    <Box>
      <Header />
      <Hero title="トップメッセージ" />
      <Box as="main" w="60%" mx="auto">
        <Box w="100%">
          <Box mt={12} mb={20}>
            <Text>
              未来はいつの間にかやってくる。
              <br />
              だけど、良い未来は決して勝手にやってくることはない。
              <br />
              したがって、良い未来は自分たちで創るしかない。
              <br />
              理想の世界を実現させるためには、手段を模索しながら、ベストを尽くして前進しなければならない。
              <br />
              基本的な世界の原理を理解し、本質を見極め、時代に合わせて、臨機応変に対応できなければならない。
              <br />
              優れたアイデア、良き戦略、偉大なチーム、純粋な志、誰にも渡せない自分自身の生きるスジが必要だ。
              <br />
              それは挑戦的で何か特別な道に見えるかもしれないが、これこそが人間らしく生きる道なのだ。
              <br />
              私たちは己をもって、本気で向き合えば、誰にでも可能性があるということを証明する。
              <br />
              自分たちに今できることを行い、とんでもないスピードで前に突き進む。
              <br />
              私たちのことを今か今かと待っている人たちは必ずいる。
              <br />
              だから、上手くいくまで手を止めるわけにはいかない。
              <br />
              最高のものを創り、世の中に表現していく。
            </Text>
          </Box>
          <Box textAlign="right">
            <Text>2021年10月7日</Text>
            <Text>株式会社Zrek</Text>
            <Text>代表取締役CEO 今村優希</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}