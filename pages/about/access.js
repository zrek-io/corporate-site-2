import { Box, Text } from '@chakra-ui/react';
import { SectionTitle } from '../../src/components/moclules/SectionTitle';
import { Hero } from '../../src/components/organisations/Hero';
// import GoogleMapReact from 'google-map-react';

export default function Access() {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };

  return (
    <Box>
      <Hero title="アクセス" />
      <Box as="main" display="flex" flexWrap="wrap" justifyContent="space-between" w="60%" mx="auto" mt={32}>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="所在地" />
          <Text>〒248-0007 神奈川県鎌倉市大町1丁目1-14 HATSU鎌倉</Text>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="交通手段" />
          <Text>JR鎌倉駅東口 徒歩5分</Text>
        </Box>
        <Box w="100%" mb={20}>
          <SectionTitle SectionTitle="アクセス" />
          <Text>ここに地図</Text>
        </Box>
        {/* <Box h="100%">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          />
        </Box> */}
      </Box>
    </Box>
  )
}