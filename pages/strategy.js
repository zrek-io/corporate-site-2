import { Box } from "@chakra-ui/layout"
import { Card } from "../src/components/moclules/Card"
import { Hero } from "../src/components/organisations/Hero"
import { Header } from '../src/components/organisations/Header'
import { Footer } from '../src/components/organisations/Footer'
import { useRouter } from 'next/router'
import { Meta } from "../src/components/moclules/Meta"

export default function Strategy() {
  const router = useRouter()
  const onClickVision = () => router.push('/strategy/vision')
  const onClickMessage = () => router.push('/strategy/message')
  const onClickIdentity = () => router.push('/strategy/identity')

  return (
    <Box>
      <Meta pageTitle="経営方針" />
      <Header />
      <Hero title="経営方針" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w="73%" mx="auto" my={32}>
        <Card title="ビジョン" explain="ゼットレックのバリュー、パーパス、ミッションについて記載しています。" width="30%" onClick={onClickVision} />
        <Card title="トップメッセージ" explain="ゼットレックのトップメッセージです。" width="30%" onClick={onClickMessage} />
        <Card title="経営理念" explain="ゼットレックの経営理念です。" width="30%" onClick={onClickIdentity} />
      </Box>
      <Footer />
    </Box>
  )
}