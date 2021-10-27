import { Box } from "@chakra-ui/layout"
import { Card } from "../src/components/moclules/Card"
import { Hero } from "../src/components/organisations/Hero"
import { Header } from '../src/components/organisations/Header'

export default function Service() {
  return (
    <Box>
      <Header />
      <Hero title="事業内容" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w="73%" mx="auto" mt={32}>
        <Card title="気候変動対策" explain="ゼットレックは気候変動に対する対策事業を展開しています。" width="30%" />
        <Card title="ソフトウェア開発" explain="ゼットレックはソフトウェアの受託開発を行なっています。" width="30%" />
        <Card title="研究開発" explain="ゼットレックでは新しいテクノロジーの社会実装に向けた研究開発を行なっています。" width="30%" />
      </Box>
    </Box>
  )
}