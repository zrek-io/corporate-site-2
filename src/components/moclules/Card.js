import { Box, Divider, Text } from "@chakra-ui/layout"
import { ChevronRightIcon } from "@chakra-ui/icons"

export const Card = (props) => {
  const { title, width, explain } = props

  return (
    <Box
      w={width}
      my={6}
      p={[4, 6]}
      border="1px"
      borderColor="#808080"
      borderRadius="2xl"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between" color="#32a9da">
        {/* カードタイトルとアイコン */}
        <Text fontSize="2xl">{title}</Text>
        <ChevronRightIcon fontSize="2xl" />
      </Box>
      <Divider my={6} />
      <Box>
      <Text fontSize="xl">{explain}</Text>
      </Box>
    </Box>
  )
}