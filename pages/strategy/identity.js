import { Box,Heading } from "@chakra-ui/layout";
import { Hero } from "../../src/components/organisations/Hero";

export default function Identity() {
  return (
    <Box>
      <Hero title="経営理念" />
      <Box as="main" w="60%" mx="auto">
        <Box display="flex" alignItems="center" justifyContent="center" w="100%" h={40} my={16} bgColor="primary.100">
          <Heading as="h1" size="lg">士魂商才、人間尊重</Heading>
        </Box>
      </Box>
    </Box>
  )
}