import { Box } from "@chakra-ui/layout"
import { Card } from "../src/components/moclules/Card"
import { Hero } from "../src/components/organisations/Hero"
import { Header } from '../src/components/organisations/Header'

export default function Strategy() {
  return (
    <Box>
      <Header />
      <Hero title="経営方針" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w="73%" mx="auto" mt={32}>
        <Card title="ビジョン" explain="ゼットレックのバリュー、パーパス、ミッションについて記載しています。" width="30%" />
        <Card title="トップメッセージ" explain="ゼットレックのトップメッセージです。" width="30%" />
        <Card title="経営理念" explain="ゼットレックの経営理念です。" width="30%" />
      </Box>
    </Box>
  )
}