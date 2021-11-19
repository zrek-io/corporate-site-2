import { Box } from "@chakra-ui/layout"
import { Table, Tbody, Tr, Td } from "@chakra-ui/table";
import { Hero } from '../../src/components/organisations/Hero';
import { Header } from '../../src/components/organisations/Header'
import { Footer } from '../../src/components/organisations/Footer'
import { Meta } from "../../src/components/moclules/Meta"

export default function Company() {
  return (
    <Box>
      <Meta pageTitle="会社概要" pageDescription="ゼットレックについての基本情報です。" />
      <Header />
      <Hero title="会社概要" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w={{ sm: '95%', md: '80%', lg: "60%" }} mx="auto" my={{ sm: 16, lg: 32 }}>
        <Table variant="simple" size="lg">
          <Tbody>
            <Tr>
              <Td textAlign="center">会社名</Td>
              <Td lineHeight={8}>
                株式会社Zrek
                <br />
                Zrek Inc.
              </Td>
            </Tr>
            <Tr>
              <Td w="45%" textAlign="center">本社</Td>
              <Td lineHeight={8}>
                〒248-0007
                <br />
                神奈川県鎌倉市大町1丁目1-14 HATSU鎌倉
              </Td>
            </Tr>
            <Tr>
              <Td w="45%" textAlign="center">設立日</Td>
              <Td>2021年4月1日</Td>
            </Tr>
            <Tr>
              <Td w="45%" textAlign="center">顧問</Td>
              <Td>鈴木隆道</Td>
            </Tr>
            <Tr>
              <Td w="45%" textAlign="center">役員</Td>
              <Td>代表取締役CEO 今村優希</Td>
            </Tr>
            <Tr>
              <Td w="45%" textAlign="center">従業員数</Td>
              <Td>8名</Td>
            </Tr>
            <Tr>
              <Td w="45%" textAlign="center">事業内容</Td>
              <Td>クリエイターを支援するソフトウェアの企画・開発・運用</Td>
            </Tr>
            <Tr>
              <Td w="45%" textAlign="center">主要取引銀行</Td>
              <Td>みずほ銀行 大船支店</Td>
            </Tr>
            <Tr>
              <Td w="45%" textAlign="center">加盟団体</Td>
              <Td>ベンチャー稲門会</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Footer />
    </Box>
  )
}
