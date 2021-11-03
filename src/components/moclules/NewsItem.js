import { Box, Divider, Text } from "@chakra-ui/layout";

export const NewsItem = (props) => {
  const { date, tag, title } = props;

  return (
    <Box w={{ sm: '100%', lg: "80%" }} mx="auto">
      <Box display="flex" alignItem="center" justifyContent={{ sm: 'flex-start', lg: "space-between" }} flexWrap='wrap' w="100%">
        <Box w={{ sm: '25%', lg: "10%" }}>
          <Text fontSize={{ sm: 'xs', lg: 'md' }}>{date}</Text>
        </Box>
        <Box w={{ sm: '30%', lg: "17%" }} bgColor="primary.200" textAlign="center" color="primary.50">
          <Text fontSize={{ sm: 'xs', lg: 'md' }}>{tag}</Text>
        </Box>
        <Box w={{ sm: '100%', lg: "65%" }}>
          <Text fontSize={{ sm: 'xs', lg: 'md' }}>{title}</Text>
        </Box>
      </Box>
      <Divider my={4} borderColor="primary.150" />
    </Box>
  )
}