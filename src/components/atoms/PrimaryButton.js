import { Button } from "@chakra-ui/button"

export const PrimaryButton = (props) => {
  const { title, width} = props

  return (
    <Button
      w={width}
      borderRadius="3xl"
      bg="#32A9DA"
      color="#ffffff"
      fontWeight="normal"
      _hover={{ bg: "#000000" }}
    >
      {title}
    </Button>
  )
}