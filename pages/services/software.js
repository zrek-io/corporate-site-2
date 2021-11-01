import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { PrimaryButton } from "../../src/components/atoms/PrimaryButton";
import { SectionTitle } from "../../src/components/moclules/SectionTitle";
import { Hero } from "../../src/components/organisations/Hero";
import softwareImage from "../../src/static/software.jpeg"
import { Header } from '../../src/components/organisations/Header'
import { Footer } from '../../src/components/organisations/Footer'
import { Meta } from "../../src/components/moclules/Meta"
import { useRouter } from 'next/router'

export default function Software() {
  const router = useRouter()
  const onClickContact = () => router.push('/contact')

  return (
    <Box>
      <Meta pageTitle="ソフトウェア開発" pageDescription="ゼットレックはソフトウェアの受託開発を行なっています。" />
      <Header />
      <Hero title="ソフトウェア開発" />
      <Box as="main" w="80%" mx="auto">
        <Box display="flex" alignItems="center" justifyContent="center" mt={20} mb={8}>
          <Box w="50%">
            <SectionTitle SectionTitle="開発に対して真摯に向き合う" />
            <Text>私たちは、中小企業様に向けて、ソフトウェア受託開発を行っています。企画から開発、保守運用まですべて一括したサービスを提供しています。特徴はお客様との「対話」にあります。並走していくことを最も重要視し、お客様の要望に応え、最高の製品を創ることが私たちの仕事です。私たちの「創る」ことへのこだわりは、エンジニアやデザイナー視点からの改善提案として表れます。作業効率を向上させる自動化システムや支援システムの開発、データ分析のアルゴリズムなど企画の段階から参加し、ニーズに合ったソフトウェアを独自に開発します。</Text>
          </Box>
          <Box w="50%">
            <Image src={softwareImage.src} w="75%" mx="auto" alt="ソフトウェア開発" />
          </Box>
        </Box>
        <Box p={12} textAlign="center">
          <PrimaryButton title="問い合わせ" width="17%" margin="8" onClick={onClickContact} />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}