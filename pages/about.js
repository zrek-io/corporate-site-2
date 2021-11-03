import { Box } from "@chakra-ui/layout"
import { Card } from "../src/components/moclules/Card"
import { Hero } from "../src/components/organisations/Hero"
import { Header } from "../src/components/organisations/Header"
import { Footer } from "../src/components/organisations/Footer"
import { useRouter } from 'next/router'
import { Meta } from "../src/components/moclules/Meta"

export default function About() {
  const router = useRouter()
  const onClickCompany = () => router.push('/about/company')
  const onClickHistory = () => router.push('/about/history')
  const onClickAccess = () => router.push('/about/access')
  const onClickBrand = () => router.push('/about/brand')

  return (
    <Box pos="relative">
      <Meta pageTitle="企業情報" />
      <Header />
      <Hero title="企業情報" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent={{ sm: 'center', lg: "space-between" }} w="73%" mx="auto" my={{ sm: 16, lg: 32 }}>
        <Card title="会社概要" explain="ゼットレックについての基本情報です。" width={{ sm: '100%', lg: "30%" }} onClick={onClickCompany} />
        <Card title="沿革" explain="ゼットレックの歩みを記載しています。" width={{ sm: '100%', lg: "30%" }} onClick={onClickHistory} />
        <Card title="アクセス" explain="本社までのアクセス情報を記載しています。" width={{ sm: '100%', lg: "30%" }} onClick={onClickAccess} />
        <Card title="ブランド" explain="ゼットレックの社名由来、ロゴ、カラーについて記載しています。" width={{ sm: '100%', lg: "30%" }} onClick={onClickBrand} />
      </Box>
      <Footer />
    </Box>
  )
}