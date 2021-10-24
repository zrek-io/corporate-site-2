import { Box, Divider, Heading } from "@chakra-ui/layout"

export const SectionTitle = (props) => {
  const { SectionTitle } = props

  return (
    <Box w="100%">
      <Box>
        <Heading as="h3" fontSize="3xl" fontWeight="normal" color="#32a9da">{SectionTitle}</Heading>
      </Box>
      <Divider mt={4} mb={8} borderColor="#808080" />
    </Box>
  )
}