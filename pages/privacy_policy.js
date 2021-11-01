import { Box, Text, Heading, OrderedList, ListItem } from "@chakra-ui/layout";
import { Hero } from "../src/components/organisations/Hero";
import { Header } from '../src/components/organisations/Header'
import { Footer } from '../src/components/organisations/Footer'
import { Meta } from "../src/components/moclules/Meta"

export default function PrivacyPolicy() {
  return (
    <Box>
      <Meta pageTitle="個人情報保護方針" />
      <Header />
      <Hero title="個人情報保護方針" />
      <Box as="main" w="60%" mx="auto" my={20}>
        <Box mt={12} mb={20}>
          <Text>当社は、個人情報保護を企業における重要な社会的使命・責務と認識しております。そこで、当社が保有するお客様の個人情報を適切に管理運用するために遵守するべき基本事項として個人情報保護方針（以下「本方針」といいます）を定めます。</Text>
        </Box>
        <Box>
          <OrderedList>
            <ListItem my={12} fontSize="2xl">
              <Heading as="h3" size="sm" py={6}>個人情報の取得及び利用等について</Heading>
              <Text>当社は、利用目的達成に必要な範囲内で、適正且つ公正な方法にて、個人情報の取得を行います。また、ご本人の同意を得た場合や法令等により正当な理由がある場合を除き、その利用目的の達成に必要な範囲内においてのみ利用し、利用目的の達成に必要な範囲を超えた利用（目的外利用）は行いません。</Text>
              <Text pt={6}>当社は、個人情報保護法等の法令により認められる場合を除き、ご本人の同意なく個人情報を第三者に提供することはしません。第三者に個人情報を提供する場合には、個人情報保護法等の法令に則り、厳正な管理の下で行います。</Text>
            </ListItem>
            <ListItem my={12} fontSize="2xl">
              <Heading as="h3" size="sm" py={6}>安全管理の措置について</Heading>
              <Text>
                当社は、個人情報について、不正アクセス、盗難、紛失、滅失、破壊、改ざん、棄損、漏えい等を防止するため、必要かつ適切な予防・是正その他の安全管理措置を講じます。
                <br />
                また、個人情報の処理を第三者に委託する場合は、個人情報保護を規定した契約を締結するとともに、適正な管理が行われるよう管理・監督します。
              </Text>
            </ListItem>
            <ListItem my={12} fontSize="2xl">
              <Heading as="h3" size="sm" py={6}>個人情報に関する法令及びその他の規範の遵守</Heading>
              <Text>当社は、個人情報保護法、関連する法令、国が定める指針その他の規範等を遵守します。</Text>
            </ListItem>
            <ListItem my={12} fontSize="2xl">
              <Heading as="h3" size="sm" py={6}>お問い合わせ先</Heading>
              <Text>当社は、お預かりした個人情報と個人データを正確かつ最新のものに維持するよう努めます。個人情報の開示、訂正、追加、削除、利用の停止、第三者への提供の停止等のご要望がある場合には、ご本人確認の出来るものを同封の上、下記の個人情報相談窓口までご郵送ください。ご本人であることを確認の上で、対応いたします。また、それ以外の個人情報の取扱いに関するご要望（苦情及びご相談）につきましては下記の個人情報相談窓口までご郵送又はＥメールにてご連絡ください。</Text>
              <Text pt={6}>
                株式会社Zrek　個人情報保護相談窓口
                <br />
                Eメール：privacy@z-rek.com
                <br />
                〒248-0007 神奈川県鎌倉市大町1丁目1-14 HATSU鎌倉
              </Text>
            </ListItem>
            <ListItem my={12} fontSize="2xl">
              <Heading as="h3" size="sm" py={6}>本方針の継続的改善</Heading>
              <Text>当社は、当社の事業内容の変化、事業を取り巻く法令・国が定める指針その他の規範等の改正、社会環境・IT環境の変化等に対応し、情報漏えい等を防止するため、個人情報管理体制を継続的に見直し、改善に努めます。</Text>
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