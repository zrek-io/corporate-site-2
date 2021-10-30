import { Box, Text } from "@chakra-ui/layout";
import { Hero } from "../../src/components/organisations/Hero";
import { Header } from '../../src/components/organisations/Header'

export default function History() {
  return (
    <Box>
      <Header />
      <Hero title="沿革" />
      <Box w="60%" mx="auto" my={16}>
        <Box display="flex">
          <Box
            pos="relative"
            w="15%"
            py={8}
            _after={{
              content: '""',
              display: "block",
              position: "absolute",
              top: "0",
              right: "0",
              width: "1px",
              height: "100%",
              backgroundColor: "primary.150"
            }}
          >
            <Text
              pos="relative"
              _before={{ 
                content: '""',
                display: "block",
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translate(50%, -50%)",
                width: "1rem",
                height: "1rem",
                backgroundColor: "primary.200",
                borderRadius: "50%",
                zIndex: "100"
              }}
            >
              2021年9月
            </Text>
          </Box>
          <Box w="85%" py={8}>
            <Text px={12}>気候変動対策事業として、カーボンカードの提供を開始。</Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box
            pos="relative"
            w="15%"
            py={8}
            _after={{
              content: '""',
              display: "block",
              position: "absolute",
              top: "0",
              right: "0",
              width: "1px",
              height: "100%",
              backgroundColor: "primary.150"
            }}
          >
            <Text
              pos="relative"
              _before={{ 
                content: '""',
                display: "block",
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translate(50%, -50%)",
                width: "1rem",
                height: "1rem",
                backgroundColor: "primary.200",
                borderRadius: "50%",
                zIndex: "100"
              }}
            >
              2021年6月
            </Text>
          </Box>
          <Box w="85%" py={8}>
            <Text px={12}>鈴木隆道氏が顧問に就任。</Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box
            pos="relative"
            w="15%"
            py={8}
            _after={{
              content: '""',
              display: "block",
              position: "absolute",
              top: "0",
              right: "0",
              width: "1px",
              height: "100%",
              backgroundColor: "primary.150"
            }}
          >
            <Text
              pos="relative"
              _before={{ 
                content: '""',
                display: "block",
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translate(50%, -50%)",
                width: "1rem",
                height: "1rem",
                backgroundColor: "primary.200",
                borderRadius: "50%",
                zIndex: "100"
              }}
            >
              2021年4月
            </Text>
          </Box>
          <Box w="85%" py={8}>
            <Text px={12}>神奈川県鎌倉市に、ソフトウェア開発を主目的として株式会社Zrekを創業。</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}