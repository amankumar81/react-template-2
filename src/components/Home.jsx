import { Box, Container, Heading, Image, Stack, Text ,} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.png';

const headingOptions = {
  pos: 'absolute',
  left: '35%',
  top: '50%',
  transform: 'translate (-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '5xl',
  fontSize:'5xl',
  textAlign: 'centre',
  alignContent: 'centre'
  
  
  
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minW={'fit-content'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          m={'auto'}
          py="2"
          w={'fit-content'}>

          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          align-item={'centre'}
          direction={['column', 'row']}
          alignItems ={'strech'}
          paddingY={'2.4px'}
          w={'full'}
          
        >
          <Image
            h={['40', '400']}
            src={img6}
            filter={'hue-rotate(180deg)'}
            alignContent={'centre'}
          ></Image>
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['0.25', '16']} textAlign = {'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            nostrum assumenda architecto at officiis repellat eaque dignissimos
            iure quidem aliquid corrupti. Laborum eos quaerat provident quos
            numquam consectetur, ipsum consequatur vitae excepturi dolorem optio
            qui esse dignissimos veniam ut dolores ab fugiat accusamus, expedita
            consequuntur! Cumque, ipsum, sequi soluta ab natus unde ea ex
            dignissimos perspiciatis est, esse nisi eaque vitae quae quibusdam

          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2500}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1}   h="full" w={'full'} objectFit={'cover'}  />
      <Heading bg={'blackAlpha.600'} m={'auto'} color={'white'} {...headingOptions}>
        The Game of future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2}  h="full" w={'full'} objectFit={'cover'}  />
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        The Future is Game
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3}   h="full" w={'full'} objectFit={'cover'} />
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        The Future is Game
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4}  h="full" w={'full'} objectFit={'cover'}  />
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        The Future is Game
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img5}   h="full" w={'full'} objectFit={'cover'} />
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        The Future is Game
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
