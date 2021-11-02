import NextLink from "next/link"
import { Box, Link, Text } from "@chakra-ui/layout"
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea
} from "@chakra-ui/react"
import { Hero } from "../src/components/organisations/Hero"
import { Header } from '../src/components/organisations/Header'
import { Footer } from '../src/components/organisations/Footer'
import { Meta } from "../src/components/moclules/Meta"
import { Button } from '@chakra-ui/button';
import { useRouter } from "next/router"

export default function Contact() {
  const onSubmitForm = () => {
    alert('送信しました。')
    window.location.reload()
  }

  return (
    <Box>
      <Meta pageTitle="問い合わせ" />
      <Header />
      <Hero title="問い合わせ" />
      <Box as="main" w="60%" mx="auto" my={20}>
        <Box>
          <Text>
            ご相談・ご依頼・各種お問い合わせは下記のフォームよりお送りください。
            <br />
            お問い合わせいただいた内容によって、返信には数日かかる場合もございますので、あらかじめご了承くださいませ。
          </Text>
        </Box>
        <Box py={4} as="form" name="contactform" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSci7ih0xLI7aVu1urU_-X-SWI-5u-qyeufWQIwAypoKBQ801Q/formResponse" target="dummyIframe" onSubmit={onSubmitForm}>
          <FormControl id="type" isRequired py={2}>
            <FormLabel>お問い合わせ種別</FormLabel>
            <Select placeholder="1つお選びください" variant="filled" name="entry.446316329">
              <option>事業内容・サービスについてのお問い合わせ</option>
              <option>採用情報についてのお問い合わせ</option>
              <option>サステナビリティについてのお問い合わせ</option>
              <option>業務提携に関するご相談</option>
              <option>貴社サービスのご提案</option>
              <option>その他</option>
            </Select>
          </FormControl>
          <FormControl id="name-kanji" isRequired py={2}>
            <FormLabel>お名前（漢字）</FormLabel>
            <Input
              name="entry.399413497"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="name-kana" isRequired py={2}>
            <FormLabel>お名前（カナ）</FormLabel>
            <Input
              name="entry.1711186480"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="email" isRequired py={2}>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              name="entry.1630289434"
              type="email"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="phone" isRequired py={2}>
            <FormLabel>電話番号</FormLabel>
            <Input
              name="entry.216660970"
              type="phone"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="company" isRequired py={2}>
            <FormLabel>会社名・団体名</FormLabel>
            <Input
              name="entry.1445351951"
              type="text"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="context" isRequired py={2}>
            <FormLabel>問い合わせ内容</FormLabel>
            <Textarea
              name="entry.1278316719"
              variant="filled"
              errorBorderColor="red.500"
              cols="40"
              rows="6"
              resize="none"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <Box textAlign="center">
            <Text>
              お問い合わせには、{" "}
              <NextLink href="/privacy_policy" passHref>
                <Link textDecoration="underline">個人情報保護方針</Link>
              </NextLink>
              への同意が必要です。
            </Text>
            <Button
              w="30%"
              m={8}
              borderRadius="3xl"
              bg="primary.200"
              color="primary.50"
              fontWeight="normal"
              type="submit"
              _hover={{ bg: "primary.400", transition: ".5s" }}
              _focus={{ focus: "none" }}
            >
              同意の上、入力内容を送信
            </Button>
          </Box>
          <Box display="none">
            <iframe name="dummyIframe"></iframe>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}