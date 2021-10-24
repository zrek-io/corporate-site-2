import { Box, Heading } from '@chakra-ui/react';

export const Hero = (props) => {
  const { title } = props

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      h={60}
      bgGradient="linear(to-b, #1862ac, #1E9CD7)"
      textAlign="center"
    >
      <Heading fontWeight="normal" color="#fff" fontSize="5xl">{title}</Heading>
    </Box>
  )
}