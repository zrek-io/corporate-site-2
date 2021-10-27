import { Box } from "@chakra-ui/layout"
import { Card } from "../src/components/moclules/Card"
import { Hero } from "../src/components/organisations/Hero"
import { Header } from "../src/components/organisations/Header"

export default function About() {
  return (
    <Box pos="relative">
      <Header />
      <Hero title="企業情報" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w="73%" mx="auto" mt={32}>
        <Card title="会社概要" explain="ゼットレックについての基本情報です。" width="30%" />
        <Card title="沿革" explain="ゼットレックの歩みを記載しています。" width="30%" />
        <Card title="アクセス" explain="本社までのアクセス情報を記載しています。" width="30%" />
        <Card title="ブランド" explain="ゼットレックの社名由来、ロゴ、カラーについて記載しています。" width="30%" />
      </Box>
    </Box>
  )
}