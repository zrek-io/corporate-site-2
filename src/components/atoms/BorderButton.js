import { Button } from "@chakra-ui/button"
import { Link } from "@chakra-ui/layout";
import { NextLink } from 'next/link';

export const BorderButton = (props) => {
  const { title, width, onClick } = props

  return (
    // <NextLink href="/" passHref>
    //   <Link w={width}>{title}</Link>
    // </NextLink>
    <Button
      w={width}
      border="1px"
      borderColor="primary.200"
      borderRadius="3xl"
      bg="none"
      color="primary.400"
      fontWeight="normal"
      _hover={{ 
        bg: "primary.400",
        border: "none",
        color: "primary.50",
        transition: ".5s"
      }}
      _focus={{ focus: "none" }}
      onClick={onClick}
    >
      {title}
    </Button>
  )
}