import { Box, Heading, Text } from "@chakra-ui/layout"
import { Hero } from "../../src/components/organisations/Hero"

export default function Message() {
  return (
    <Box>
      <Hero title="トップメッセージ" />
      <Box as="main" w="60%" mx="auto">
        <Box>
          <Text></Text>
        </Box>
      </Box>
    </Box>
  )
}