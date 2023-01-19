import React from 'react';
import {DrawerBody, DrawerHeader, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {CgMenuRight} from 'react-icons/cg';

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
    <Button 
    zIndex={'overlay'}
    pos={"fixed"}
    top={"4"}
    left={"4"} 
    colorScheme='yellow'
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius = {'full'}
    onClick = {onOpen}
     >
    <CgMenuRight size={"25"} />
    </Button>





    <Drawer isOpen={isOpen}  placement = "right" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
           <DrawerCloseButton />
           <DrawerHeader>Gamers Zone</DrawerHeader>
           <DrawerBody>


        <VStack alignItems={'flex-start'}>
          <Button onClick={'onclose'} variant={'ghost'} colorScheme={'yellow'}>
            <Link to={"/"}>Home</Link>
          </Button>


          <Button onClick={'onclose'}variant={'ghost'} colorScheme={'yellow'}>
            <Link to={"/videos"}>Videos</Link>
          </Button>


          <Button onClick={'onclose'} variant={'ghost'} colorScheme={'yellow'}>
            <Link to={"/videos?category=free"}>Free Videos</Link>
          </Button>


          <Button onClick={'onclose'}variant={'ghost'} colorScheme={'yellow'}>
            <Link to={"/upload"}>Upload Video</Link>
          </Button>

        </VStack>

        <HStack 
        pos={'absolute'}
        left={'0'}
        w={'full'}
        justifyContent = {'space-evenly'}>
          
          <Button  onClick={'onclose'} colorScheme={'yellow'}>
            <Link to = {'/login'}>Log In</Link>
          </Button>
          <Button   onClick={'onclose'} colorScheme={'yellow'} variant = {'outline'}>
            <Link to = {'/signup'} >Sign up </Link>
          </Button>
        </HStack>



           </DrawerBody>
        </DrawerContent>
    </Drawer>
    </>
  )
}


export default Header
