import { Box,Heading } from "@chakra-ui/layout";
import { Hero } from "../../src/components/organisations/Hero";
import { Header } from '../../src/components/organisations/Header'
import { Footer } from '../../src/components/organisations/Footer'
import { Meta } from "../../src/components/moclules/Meta"

export default function Identity() {
  return (
    <Box>
      <Meta pageTitle="経営理念" pageDescription="ゼレックの経営理念です。" />
      <Header />
      <Hero title="経営理念" />
      <Box as="main" w={{ sm: '80%', lg: "60%" }} h={{ sm: '40vh', md: '50vh', lg: 'auto' }} mx="auto">
        <Box display="flex" alignItems="center" justifyContent="center" w="100%" h={40} my={16} bgColor="primary.100">
          <Heading as="h1" size="lg">人間尊重</Heading>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
