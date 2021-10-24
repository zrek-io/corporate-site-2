import { Flex, Box, Image } from '@chakra-ui/react';
import Logo from '../../static/header_logo.png'
// import { PrimaryButton } from '../atoms/PrimaryButton';

export const Header = () => {
  return (
    <Flex w="100%" h={28} pos="fixed" zIndex="100">
      <Box w="20%">
        <Image src={Logo.src} alt="Logo" />
      </Box>
      <Box w="80%" bg="gray">
      </Box>
    </Flex>
  )
}