import { Button } from "@chakra-ui/button"

export const BorderButton = (props) => {
  const { title, width } = props

  return (
    <Button
      w={width}
      border="1px"
      borderColor="#32a9da"
      borderRadius="3xl"
      bg="none"
      color="#000000"
      fontWeight="normal"
      _hover={{ 
        bg: "#000000",
        border: "none",
        color: "#ffffff"
      }}
    >
      {title}
    </Button>
  )
}