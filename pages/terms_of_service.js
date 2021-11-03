import { Box, Text, Heading, OrderedList, ListItem } from "@chakra-ui/layout";
import { Hero } from "../src/components/organisations/Hero";
import { Header } from '../src/components/organisations/Header'
import { Footer } from '../src/components/organisations/Footer'
import { Meta } from "../src/components/moclules/Meta"

export default function TermsOfService() {
  return (
    <Box>
      <Meta pageTitle="サイト利用規約" />
      <Header />
      <Hero title="サイト利用規約" />
      <Box as="main" w={{ sm: '85%', md: '80%', lg: "60%" }} mx="auto" my={{ sm: 10, lg: 20 }}>
        <Box mt={{ sm: 6, lg: 12 }} mb={{ sm: 10, lg: 20 }}>
          <Text>本ウェブサイトは、株式会社Zrek（以下「当社」といいます）が運営しています。本ウェブサイトを利用する場合、サイト利用規約（以下、本規約）が適用されますので、本規約に同意した上で、ご利用ください。なお、予告なく本規約が変更されることがあります。</Text>
        </Box>
        <Box>
          <OrderedList>
            <ListItem my={12} fontSize={{ sm: 'lg', lg: '2xl'}}>
              <Heading as="h3" size="sm" py={6}>著作権、商標権、知的財産権</Heading>
              <Text>本ウェブサイトのコンテンツ(情報、資料、画像、音声等) の著作権は当社が保有します。 コンテンツは、各国の著作権法、各種条約及びその他の法律で保護されています。著作権法等により認められる場合を除き、複製、転用、販売などの二次利用することは禁じます。</Text>
            </ListItem>
            <ListItem my={12} fontSize={{ sm: 'lg', lg: '2xl'}}>
              <Heading as="h3" size="sm" py={6}>免責事項</Heading>
              <Text>本ウェブサイトの情報は、技術上不正確な記載や誤植を含む場合があり、妥当性や正確性について保証するものではなく、一切の責任を負い兼ねます。 また、この情報は、通知なしに変更または更新される場合があります。当社は、この情報に記載された製品やプログラムを予告なしに何時でも改良、変更することがあります。 本ウェブサイトにおける情報や資料について、当社、その従業員は、責任を負わないものとします。</Text>
            </ListItem>
            <ListItem my={12} fontSize={{ sm: 'lg', lg: '2xl'}}>
              <Heading as="h3" size="sm" py={6}>動作環境</Heading>
              <Text>本ウェブサイトは、パソコン、スマートフォンの各ブラウザ向けに最適化された表示でご覧いただくことができます。お使いの端末やブラウザのバージョンによっては、利用できない場合がありますので、予めご了承ください。</Text>
              <Text py={6}>
                推奨ブラウザ
                <br />
                Google Chrome（最新版）
                <br />
                Mozilla Firefox（最新版）
                <br />
                Microsoft Edge（最新版）
                <br />
                Safari（最新版）
              </Text>
            </ListItem>
          </OrderedList>
          <Box textAlign="right">
            <Text>2021年10月4日制定</Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}