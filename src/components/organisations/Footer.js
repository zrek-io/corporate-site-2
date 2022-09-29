import { Box, Heading, Link, Text, Divider } from "@chakra-ui/layout"
import { FaFacebook } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import NextLink from "next/link"

export const Footer = () => {
  return (
    <Box w="100%" bgColor="primary.100">
      <Box display={{ sm: 'none', lg: "flex" }} justifyContent="space-around" flexWrap='wrap' w="80%" mx="auto" py={4}>
        <Box w={{ sm: '70%', lg: "15%" }}>
          <Box py={4}>
            <NextLink href="/" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <Heading as="h3" fontSize="lg" fontWeight="bold" color="primary.200">トップページ</Heading>
                <Divider borderColor="primary.200" my={1} />
              </Link>
            </NextLink>
          </Box>
          <Box>
            <Box>
              <NextLink href="/about" passHref>
                <Link _hover={{ textDecoration: "none" }}>
                  <Heading as="h3" fontSize="lg" fontWeight="bold" color="primary.200">企業情報</Heading>
                  <Divider borderColor="primary.200" my={1} />
                </Link>
              </NextLink>
            </Box>
            <Box py={2}>
              <NextLink href="/about/company" passHref>
                <Link>
                  <Text fontSize="md" lineHeight={10}>会社概要</Text>
                </Link>
              </NextLink>
              <NextLink href="/about/history" passHref>
                <Link>
                  <Text fontSize="md" lineHeight={10}>沿革</Text>
                </Link>
              </NextLink>
              <NextLink href="/about/access" passHref>
                <Link>
                  <Text fontSize="md" lineHeight={10}>アクセス</Text>
                </Link>
              </NextLink>
              <NextLink href="/about/brand" passHref>
                <Link>
                  <Text fontSize="md" lineHeight={10}>ブランド</Text>
                </Link>
              </NextLink>
            </Box>
          </Box>
        </Box>

        <Box w={{ sm: '70%', lg: "15%" }}>
          <Box py={4}>
            <NextLink href="/strategy" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <Heading as="h3" fontSize="lg" fontWeight="bold" color="primary.200">経営方針</Heading>
                <Divider borderColor="primary.200" my={1} />
              </Link>
            </NextLink>
          </Box>
          <Box>
            <NextLink href="/strategy/vision" passHref>
              <Link>
                <Text fontSize="md" lineHeight={10}>ビジョン</Text>
              </Link>
            </NextLink>
            <NextLink href="/strategy/message" passHref>
              <Link>
                <Text fontSize="md" lineHeight={10}>トップメッセージ</Text>
              </Link>
            </NextLink>
            <NextLink href="/strategy/identity" passHref>
              <Link>
                <Text fontSize="md" lineHeight={10}>経営理念</Text>
              </Link>
            </NextLink>
          </Box>
        </Box>

        <Box w={{ sm: '70%', lg: "15%" }}>
          <Box py={4}>
            <NextLink href="/service" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <Heading as="h3" fontSize="lg" fontWeight="bold" color="primary.200">事業内容</Heading>
                <Divider borderColor="primary.200" my={1} />
              </Link>
            </NextLink>
          </Box>
          <Box>
            <NextLink href="/services/nft" passHref>
              <Link>
                <Text fontSize="md" lineHeight={10}>NFT事業</Text>
              </Link>
            </NextLink>
            <NextLink href="/services/software" passHref>
              <Link>
                <Text fontSize="md" lineHeight={10}>ソフトウェア開発</Text>
              </Link>
            </NextLink>
            <NextLink href="/services/research_and_development" passHref>
              <Link>
                <Text fontSize="md" lineHeight={10}>研究開発</Text>
              </Link>
            </NextLink>
          </Box>
        </Box>

        <Box w={{ sm: '70%', lg: "15%" }}>
          <Box py={4}>
            <NextLink href="/news" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <Heading as="h3" fontSize="lg" fontWeight="bold" color="primary.200">ニュース</Heading>
                <Divider borderColor="primary.200" my={1} />
              </Link>
            </NextLink>
          </Box>
          <Box py={4}>
            <NextLink href="/recruit" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <Heading as="h3" fontSize="lg" fontWeight="bold" color="primary.200">採用情報</Heading>
                <Divider borderColor="primary.200" my={1} />
              </Link>
            </NextLink>
          </Box>
          <Box py={4}>
            <NextLink href="/contact" passHref>
              <Link _hover={{ textDecoration: "none" }}>
                <Heading as="h3" fontSize="lg" fontWeight="bold" color="primary.200">問い合わせ</Heading>
                <Divider borderColor="primary.200" my={1} />
              </Link>
            </NextLink>
          </Box>
        </Box>

      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" flexWrap='wrap' w={{ sm: '90%', md: '65%', lg: "40%" }} mx="auto" py={8}>
        <NextLink href="/terms_of_service" passHref>
          <Link　w={{ sm: '100%', lg: '30%' }} py={2} textAlign="center" fontSize="xs">サイト利用規約</Link>
        </NextLink>
        <NextLink href="/privacy_policy" passHref>
          <Link　w={{ sm: '100%', lg: '30%' }} py={2} textAlign="center" fontSize="xs">個人情報保護方針</Link>
        </NextLink>
        <NextLink href="/antisocial" passHref>
          <Link　w={{ sm: '100%', lg: '30%' }} py={2} textAlign="center" fontSize="xs">反社会的勢力に対する基本方針</Link>
        </NextLink>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-around" w={{ sm: '30%', md: '20%', lg: "8%" }} mx="auto" py={2}>
        <Link href="https://www.facebook.com/zrek.inc/?ref=page_internal">
          <FaFacebook size="2rem" cursor="pointer" /> 
        </Link>
        <Link href="https://www.linkedin.com/company/zrek-inc/">
          <BsLinkedin size="2rem" cursor="pointer" />
        </Link>
      </Box>
      <Box textAlign="center" py={4}>
        <Text fontSize="xs">Copyright &copy; 2021 Zrek Inc. 株式会社Zrek</Text>
      </Box>
    </Box>
  )
}
