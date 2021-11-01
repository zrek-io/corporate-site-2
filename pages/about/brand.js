import { Box, Text } from "@chakra-ui/layout";
import { Hero } from "../../src/components/organisations/Hero";
import { SectionTitle } from '../../src/components/moclules/SectionTitle';
import { Image } from "@chakra-ui/image";
import LogoCharacter from "../../src/static/logo_character.png"
import LogoImage from "../../src/static/logo.png"
import { Header } from '../../src/components/organisations/Header'
import { Footer } from '../../src/components/organisations/Footer'
import { Meta } from "../../src/components/moclules/Meta"

export default function Brand() {
  return (
    <Box>
      <Meta pageTitle="ブランド" pageDescription="ゼットレックの社名由来、ロゴ、カラーについて記載しています。" />
      <Header />
      <Hero title="ブランド" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w="73%" mx="auto" my={32}>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="社名" />
          <Image src={LogoCharacter.src} w="28%" mx="auto" py={14} alt="Zrek文字ロゴ" />
          <Box w="60%" mx="auto" lineHeight={8}>
            <Text py={5}>「Z」と「Trek」の造語です。</Text>
            <Text py={5}>
              「Z」は、アルファベットの最終文字且つ最も希少で使われない文字とされています。最後まで、最高のといった意味があります。
              <br />
              「Trek」は、骨の折れる長い旅という意味を持っています。映画やドラマで人気の作品『スタートレック』から由来しています。
            </Text>
            <Text py={5}>2つを組み合わせると「Zrek」です。最高の旅をする企業になろうという意味が込められています。</Text>
            <Text py={5}>また、本来であれば「Z」の発音は英語圏で「ゼッド」になります。しかし、日本では「ゼット」と発音する場合が多く、日本人としての精神を忘れないような読み方になっています。</Text>
            <Text py={5}>フォントは『Gotham』を使用しています。デザイナー Tobias Frere-Jones 氏が「力強くて、新しくて新鮮な」文字をコンセプトに作成したフォントです。音楽ストリーミングサービス『Spotify』などにも使用されています。</Text>
          </Box>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="ロゴ" />
          <Image src={LogoImage.src} w="15%" mx="auto" py={14} alt="Zrekロゴ" />
          <Box w="60%" mx="auto" lineHeight={8}>
            <Text py={5}>社名の「ゼットレック」に相応しいロゴとして考えられました。</Text>
            <Text py={5}>ロゴのモチーフとなったのは、地球上で最も長距離の渡りをする鳥の一つとして知られているキョクアジサシです。キョクアジサシは、チドリ目のカモメ科に分類される鳥類の一種で、1年のうちに北極圏と南極圏の間を往き来する鳥です。</Text>
            <Text py={5}>どんな困難があろうとも、誰よりも遠くまで飛ぶことをイメージして、デザインされました。</Text>
            <Text py={5}>中央のうねりは、道中における波を表しています。決して、喜びや楽しさだけではありませんが、最後には必ず超えてゆくことができる波です。</Text>
          </Box>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="カラー" />
          <Box display="flex" alignItem="center" justifyContent="space-evenly" w="100%" my={6}>
            <Box w={72} h={28} bgColor="primary.200"></Box>
            <Box w={72} h={28} bgColor="primary.350"></Box>
          </Box>
          <Box w="60%" mx="auto" lineHeight={8}>
            <Text py={5}>ゼットレックカラーは、青で統一されています。クールさとシンプルさがあるカラーとして選ばれ、ロゴと組み合わせたときのストーリー性を追求したカラーとなっています。</Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}