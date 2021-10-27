import { Box } from "@chakra-ui/layout"
import { NewsItem } from "../src/components/moclules/NewsItem"
import { Hero } from "../src/components/organisations/Hero"
import { Header } from '../src/components/organisations/Header'

export default function News() {
  return (
    <Box>
      <Header />
      <Hero title="ニュース" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w="73%" mx="auto" mt={32}>
        <NewsItem date="2021.9.18" tag="お知らせ" title="代表の今村がHATSUFESで成果発表会を行いました" />
        <NewsItem date="2021.8.23" tag="サービス" title="カーボンカードのランディングページを公開しました lp.z-rek.com/" />
        <NewsItem date="2021.7.3" tag="サービス" title="地域コミュニティサービス『vivicom』実証実験α版リリースしました" />
        <NewsItem date="2021.7.2" tag="コーポレート" title="Accelerate Membership Programに採択されました" />
        <NewsItem date="2021.6.13" tag="コーポレート" title="鈴木隆道氏が顧問に就任しました" />
        <NewsItem date="2021.6.9" tag="お知らせ" title="コーポレートサイトをリニューアルしました" />
        <NewsItem date="2021.5.1" tag="お知らせ" title="神奈川県庁の起業支援プログラムに代表の今村が採択されました" />
        <NewsItem date="2021.4.1" tag="コーポレート" title="株式会社Zrek（本社：神奈川県鎌倉市）を設立しました" />
      </Box>
    </Box>
  )
}