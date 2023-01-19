import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
// import React, { useState } from 'react'

const Videos = () => {


    // const videosArr = ['https://vimeo.com/384797459']

// const [videoSrc, setVideoSrc] = useState(videosArr[0])

  return <Stack direction={['column', 'row']} h={'100vh'} >
    <VStack w={'full'}>

<video
controls
controlsList='nodownload'
src='https://vimeo.com/384797459'

style={{
    width: '100%',

}}></video>

<VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowX={'auto'}>
    <Heading>Vid 1</Heading>
    <Text>
        This is discription
    </Text>
</VStack>
    </VStack>

    <VStack width={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>

        <Button variant={'ghost'} colorScheme={'yellow'}>Vid 1</Button>

    </VStack>
  </Stack>
}

export default Videos
