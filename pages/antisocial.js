import { Box, Text, Heading, OrderedList, ListItem } from "@chakra-ui/layout";
import { Hero } from "../src/components/organisations/Hero";
import { Header } from '../src/components/organisations/Header'
import { Footer } from '../src/components/organisations/Footer'
import { Meta } from "../src/components/moclules/Meta"

export default function Antisocial() {
  return (
    <Box>
      <Meta pageTitle="反社会的勢力に対する基本方針" />
      <Header />
      <Hero title="反社会的勢力に対する基本方針" />
      <Box as="main" w={{ sm: '85%', md: '80%', lg: "60%" }} h={{ md: '60vh', lg: 'auto' }} mx="auto" my={{ sm: 10, lg: 20 }}>
        <Box mt={{ sm: 6, lg: 12 }} mb={{ sm: 10, lg: 20 }}>
          <Text>当社は、反社会的勢力に対する基本方針を以下の通り定め、組織が一体となって対応し、健全な企業活動に努めます。社会的秩序や、企業活動に悪影響を与える反社会的勢力である、あらゆる個人・団体とは一切関わりません。反社会的勢力との取引の未然防止に努めるとともに、取引開始後に相手方が反社会的勢力であることが判明した場合には、外部専門機関と連携の上、適切に対応します。</Text>
        </Box>
        <Box>
          <Heading as="h2" size={{ sm: 'xs', lg: 'md' }}>基本方針</Heading>
          <OrderedList>
            <ListItem my={8} fontSize={{ sm: 'xs', lg: 'md' }}>
              <Text>当社は、反社会的勢力に対し、一切の関係を遮断します。</Text>
            </ListItem>
            <ListItem my={8} fontSize={{ sm: 'xs', lg: 'md' }}>
              <Text>当社は、反社会的勢力からの不当要求を拒絶し、裏取引や資金提供を一切行いません。また、必要に応じて民事および刑事の両面から法的対応を行います。</Text>
            </ListItem>
            <ListItem my={8} fontSize={{ sm: 'xs', lg: 'md' }}>
              <Text>当社は、反社会的勢力への対応は、弁護士、警察等の外部専門機関と緊密に連携して取り組みます。</Text>
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