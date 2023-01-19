import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return <Box bgColor={'blackAlpha.800'} minH={'40'} p='16' color={'white'} borderTop={'2.5px solid yellow'}>
    <Stack direction={['column', 'row']}>

        <VStack alignItems={'stretch'}
        w={'full'}
        px={'4'}
        >
            <Heading size={'md'} textTransform={'upperCase'} color = {'yellow'}>
                Subscribe to our newsletter
            </Heading>
            <HStack
            borderBottom={'2.5px solid yellow'}
            paddingY={'2.4px'}
            >
                <Input placeholder='E-mail..' 
                border={'none'}
                borderRadius = {'none'}
                outline = {'none'}
                focusBorderColor = {"none"}
                />
                <Button
                p={'0'}
                colorScheme ={'yellow'}
                variant ={'ghost'} 
                borderRadius={'0 20px 20px 2px'}
                >
                    <AiOutlineSend  size={'22'}/>
                </Button>
            </HStack>
        </VStack>

        <VStack w={'full'}
        borderLeft={['none','2px solid yellow']}
        borderRight={['none','2px solid yellow']}
        >
<Heading textAlign={'center'} textTransform={'uppercase'} color = {'yellow'}>
    gaMeRs
</Heading>
<Text color={'yellow'}>All right reserved</Text>
        </VStack>
        <VStack w={'full'}>
            <Heading size={'md'} textTransform = {'uppercase'} color={'yellow'}>
                Social media
            </Heading>
            <Button   colorScheme={'yellow'} variant={'link'}>
                <a   target={'blank'}  href="mailto:xyz@gmail.com">E-mail</a>
            </Button>
            <Button   colorScheme={'yellow'} variant={'link'}>
                <a   target={'blank'} href="mailto:xyz@gmail.com">Whatsapp</a>
            </Button>
            <Button   colorScheme={'yellow'} variant={'link'}>
                <a  target={'blank'}  href="mailto:xyz@gmail.com">instagram</a>
            </Button>
        </VStack>

    </Stack>

  </Box>
}

export default Footer
