import { Box } from "@chakra-ui/layout"
import { Card } from "../src/components/moclules/Card"
import { Hero } from "../src/components/organisations/Hero"

export default function News() {
  return (
    <Box>
      <Hero title="ニュース" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w="73%" mx="auto" mt={32}>
      </Box>
    </Box>
  )
}