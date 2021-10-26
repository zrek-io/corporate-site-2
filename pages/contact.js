import { Box, Text } from "@chakra-ui/layout"
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea
} from "@chakra-ui/react"
import { Hero } from "../src/components/organisations/Hero"
import { PrimaryButton } from "../src/components/atoms/PrimaryButton"

export default function Contact() {
  return (
    <Box>
      <Hero title="問い合わせ" />
      <Box as="main" w="60%" mx="auto" mt={32}>
        <Box>
          <Text>
            ご相談・ご依頼・各種お問い合わせは下記のフォームよりお送りください。
            <br />
            お問い合わせいただいた内容によって、返信には数日かかる場合もございますので、あらかじめご了承くださいませ。
          </Text>
        </Box>
        <Box>
          <FormControl id="type" isRequired>
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
          <FormControl id="name-kanji" isRequired>
            <FormLabel>お名前（漢字）</FormLabel>
            <Input
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="name-kana" isRequired>
            <FormLabel>お名前（カナ）</FormLabel>
            <Input
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              type="email"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>電話番号</FormLabel>
            <Input
              type="phone"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="company" isRequired>
            <FormLabel>会社名・団体名</FormLabel>
            <Input
              type="text"
              variant="filled"
              errorBorderColor="red.500"
              _focus={{ focus: "none" }}
            />
          </FormControl>
          <FormControl id="context" isRequired>
            <FormLabel>問い合わせ内容</FormLabel>
            <Textarea
              variant="filled"
              errorBorderColor="red.500"
              resize="none"
              _focus={{ focus: "none" }}
            />
          </FormControl>
        </Box>
        <Box py={12} textAlign="center">
          <Text>
            お問い合わせには、個人情報保護方針への同意が必要です。
          </Text>
          <PrimaryButton title="同意の上、入力内容を送信" width="30%" margin="8" />
        </Box>
      </Box>
    </Box>
  )
}