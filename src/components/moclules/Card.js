import { Box, Divider, Text, Heading } from "@chakra-ui/layout"
import { ChevronRightIcon } from "@chakra-ui/icons"

export const Card = (props) => {
  const { title, width, explain, onClick } = props

  return (
    <Box
      w={width}
      my={6}
      p={[4, 6]}
      border="1px"
      borderColor="primary.150"
      borderRadius="2xl"
      onClick={onClick}
      _hover={{ cursor: "pointer" }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between" color="primary.200">
        {/* カードタイトルとアイコン */}
        <Heading as="h3" size="sm">{title}</Heading>
        <ChevronRightIcon fontSize="2xl" />
      </Box>
      <Divider my={6} />
      <Box>
      <Text>{explain}</Text>
      </Box>
    </Box>
  )
}