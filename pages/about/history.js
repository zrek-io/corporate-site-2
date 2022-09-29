import { Box, Text } from "@chakra-ui/layout";
import { Hero } from "../../src/components/organisations/Hero";
import { Header } from '../../src/components/organisations/Header'
import { Footer } from '../../src/components/organisations/Footer'
import { Meta } from "../../src/components/moclules/Meta"

export default function History() {
  return (
    <Box>
      <Meta pageTitle="沿革" pageDescription="ゼレックの歩みを記載しています。" />
      <Header />
      <Hero title="沿革" />
      <Box w={{ sm: '90%', md: '80%', lg: "60%" }} h={{ md: '50vh', lg: 'auto' }} mx="auto" my={{ sm: 8, lg: 16 }}>
        <Box display="flex">
          <Box
            pos="relative"
            w={{ sm: '25%', lg: "15%" }}
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
                zIndex: "70"
              }}
            >
              2022年7月
            </Text>
          </Box>
          <Box w={{ sm: '65%', lg: "85%" }} py={8}>
            <Text px={12}>NFT事業を開始</Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box
            pos="relative"
            w={{ sm: '25%', lg: "15%" }}
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
                zIndex: "70"
              }}
            >
              2022年3月
            </Text>
          </Box>
          <Box w={{ sm: '65%', lg: "85%" }} py={8}>
            <Text px={12}>本店の移転</Text>
          </Box>
        </Box>
        <Box display="flex">
          <Box
            pos="relative"
            w={{ sm: '25%', lg: "15%" }}
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
                zIndex: "70"
              }}
            >
              2021年4月
            </Text>
          </Box>
          <Box w={{ sm: '65%', lg: "85%" }} py={8}>
            <Text px={12}>神奈川県鎌倉市に、ソフトウェア開発を主目的として株式会社Zrekを創業</Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
