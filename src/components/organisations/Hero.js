import { Box, Heading } from '@chakra-ui/react';

export const Hero = (props) => {
  const { title } = props

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      h={{ sm: '40', lg: '60' }}
      mt={{ sm: '20', md: '28' }}
      bgGradient="linear(to-b, primary.250, primary.300)"
      textAlign="center"
    >
      <Heading as="h1" size="xl" color="primary.50">{title}</Heading>
    </Box>
  )
}