import { Box } from "@chakra-ui/layout"
import { Card } from "../src/components/moclules/Card"
import { Hero } from "../src/components/organisations/Hero"
import { Header } from '../src/components/organisations/Header'
import { Footer } from '../src/components/organisations/Footer'
import { useRouter } from 'next/router'
import { Meta } from "../src/components/moclules/Meta"

export default function Service() {
  const router = useRouter()
  const onClickClimateChange = () => router.push('/services/climate_change')
  const onClickSoftware = () => router.push('/services/software')
  const onClickResearchAndDevelopment = () => router.push('/services/research_and_development')

  return (
    <Box>
      <Meta pageTitle="事業内容" />
      <Header />
      <Hero title="事業内容" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent={{ sm: 'center', md: 'space-between', lg: "space-between" }} w="73%" mx="auto" my={{ sm: 16, lg: 32 }}>
        <Card title="気候変動対策" explain="ゼットレックは気候変動に対する対策事業を展開しています。" width={{ sm: '100%', md: '45%', lg: "30%" }} onClick={onClickClimateChange} />
        <Card title="ソフトウェア開発" explain="ゼットレックはソフトウェアの受託開発を行なっています。" width={{ sm: '100%', md: '45%', lg: "30%" }} onClick={onClickSoftware} />
        <Card title="研究開発" explain="ゼットレックでは新しいテクノロジーの社会実装に向けた研究開発を行なっています。" width={{ sm: '100%', md: '45%', lg: "30%" }} onClick={onClickResearchAndDevelopment} />
      </Box>
      <Footer />
    </Box>
  )
}