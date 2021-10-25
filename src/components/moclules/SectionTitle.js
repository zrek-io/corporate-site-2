import { Box, Divider, Heading } from "@chakra-ui/layout"

export const SectionTitle = (props) => {
  const { SectionTitle } = props

  return (
    <Box w="100%">
      <Box>
        <Heading as="h3" size="sm" color="primary.200">{SectionTitle}</Heading>
      </Box>
      <Divider mt={4} mb={8} borderColor="primary.150" />
    </Box>
  )
}