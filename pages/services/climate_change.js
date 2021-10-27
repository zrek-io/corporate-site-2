import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { PrimaryButton } from "../../src/components/atoms/PrimaryButton";
import { SectionTitle } from "../../src/components/moclules/SectionTitle";
import { Hero } from "../../src/components/organisations/Hero";
import climateChangeImage from "../../src/static/climate-change.jpeg"
import HomeServiceImage from '../../src/static/home_service.png'
import { BorderButton } from '../../src/components/atoms/BorderButton';
import { Header } from '../src/components/organisations/Header'

export default function ClimateChange() {
  return (
    <Box>
      <Header />
      <Hero title="気候変動対策" />
      <Box as="main" w="80%" mx="auto">
        <Box display="flex" alignItems="center" justifyContent="center" my={20}>
          <Box w="50%">
            <SectionTitle SectionTitle="気候変動に対する意識改革" />
            <Text>私たちは、気候変動対策に関するサービスを提供しています。気候変動対策の第一歩として必要なのはCO2排出量の可視化です。そこで、私たちはデジタル上の企業活動や個人の活動における毎月のCO2排出量を算出し、情報開示のためのデジタルカードを発行しています。</Text>
            <Text my={6}>デジタルカードは、ホームページなどのサイトに掲載でき、クラウド上でCO2排出量の管理が可能です。また、カード本体はブロックチェーンを活用した唯一性があるカードになっています。従来の情報開示に比べ、サイトの訪問者にとってはシンプルで理解しやすく、取り組む側にとっては運用のハードルが非常に低い情報開示システムになっています。環境への取り組みを正しく情報開示することで、企業や個人の価値向上を支援していきます。</Text>
          </Box>
          <Box w="50%">
            <Image src={climateChangeImage.src} w="75%" mx="auto" />
          </Box>
        </Box>
        <Box w="100%">
          <Image src={HomeServiceImage.src} w="45%" mx="auto" />
        </Box>
        <Box p={12} textAlign="center">
          <PrimaryButton title="問い合わせ" width="17%" margin="8" />
          <BorderButton title="もっと詳しく" width="17%" />
        </Box>
      </Box>
    </Box>
  )
}