import { Box, Divider, Text } from "@chakra-ui/layout";

export const NewsItem = (props) => {
  const { date, tag, title } = props;

  return (
    <Box w="80%" mx="auto">
      <Box display="flex" alignItem="center" justifyContent="space-between" w="100%">
        <Box w="10%">
          <Text>{date}</Text>
        </Box>
        <Box w="17%" bgColor="primary.200" textAlign="center" color="primary.50">
          <Text>{tag}</Text>
        </Box>
        <Box w="65%">
          <Text>{title}</Text>
        </Box>
      </Box>
      <Divider my={4} borderColor="primary.150" />
    </Box>
  )
}