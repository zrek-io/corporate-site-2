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
import { PrimaryButton } from "../src/components/atoms/PrimaryButton"
import { Header } from '../src/components/organisations/Header'
import { Footer } from '../src/components/organisations/Footer'
import { Meta } from "../src/components/moclules/Meta"

export default function Contact() {
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
        <Box py={4}>
          <FormControl id="type" isRequired py={2}>
            <FormLabel>お問い合わせ種別</FormLabel>
            <Select placeholder="1つお選びください" variant="filled">
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
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="name-kana" isRequired py={2}>
            <FormLabel>お名前（カナ）</FormLabel>
            <Input
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="email" isRequired py={2}>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              type="email"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="phone" isRequired py={2}>
            <FormLabel>電話番号</FormLabel>
            <Input
              type="phone"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="company" isRequired py={2}>
            <FormLabel>会社名・団体名</FormLabel>
            <Input
              type="text"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="context" isRequired py={2}>
            <FormLabel>問い合わせ内容</FormLabel>
            <Textarea
              variant="filled"
              errorBorderColor="red.500"
              cols="40"
              rows="6"
              resize="none"
              _focus={{ focus: "none" }}
            />
          </FormControl>
        </Box>
        <Box textAlign="center">
          <Text>
            お問い合わせには、{" "}
            <NextLink href="/privacy_policy" passHref>
              <Link textDecoration="underline">個人情報保護方針</Link>
            </NextLink>
            への同意が必要です。
          </Text>
          <PrimaryButton title="同意の上、入力内容を送信" width="30%" margin="8" />
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}