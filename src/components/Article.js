import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Spacer,
  StackDivider,
  Kbd,
  AccordionPanel,
  AccordionButton,
  AccordionItem,
  Accordion,
  AccordionIcon,
  Alert,
  AlertIcon,
  Stack,
} from '@chakra-ui/react';
import SolicitarScreen from '../images/solicitar.JPG';
import SolicitarScreen2 from '../images/solicitar2.JPG';
import SolicitarScreen3 from '../images/solicitar3.JPG';
import SolicitarScreen4 from '../images/solicitar4.JPG';
  const Article = () => {
    return (
      <Container maxW={'7xl'}
        columns={{ base: 1}}
        spacing={{ base: 8 }}
        py={{ base: 10 }} bg='white'>
        <Heading as="h1">Getting Started</Heading>  
        <VStack 
          spacing={2}
          align='stretch'
          pt="10">
          <Box  display='flex' alignItems='baseline'>
            <Heading as='h4' size='md'>
              Creando una solicitud
            </Heading>      
          </Box>
          <Divider/>
          <Text>
            Una solicitud es la forma de publicar tus necesidades para una obra, asi los proveedores podran hacerte llegar ofertas.              
          </Text>                                   

          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'green.400', color: 'white' }}>
                  <Box flex='1' textAlign='left'>
                   <Text fontWeight="bold">Informacion de la solicitud</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              <Text fontSize="lg">En la barra lateral accedemos a <Tag>Solicitudes</Tag> y luego <Tag>Solicitar</Tag> Te pediremos que especifiques el nombre del proyecto, Descripcion, fecha limite de cotizacion (ultimo dia que los proveedores te enviaran una oferta) y el lugar donde se llevara a cabo.</Text>
                <Image
                  rounded={'md'}
                  src={SolicitarScreen}
                  // fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={{ base: '100%', sm: '400px', lg: '400px' }}
                />
                 <Text fontSize="lg">
                  Opcionalmente podras dejarla en <Kbd>borrador</Kbd> para retomarlo luego.
                </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'green.400', color: 'white' }}>
                  <Box flex='1' textAlign='left'>
                  <Text fontWeight="bold">Elegi las maquinas</Text>                   
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
               <Text fontSize="lg">
                Una vez que diste a siguiente, lo que vamos hacer ahora es seleccionar las maquinas que necesitas para la obra.
                Podes buscar por nombre o moverte en el arbol de <Tag>Categorias</Tag>.
              </Text>
              <Image
                rounded={'md'}
                src={SolicitarScreen2}
                // fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '400px', lg: '400px' }}
              />
              <Text fontSize="lg">
                Completa los datos referidos al tiempo de alquiler, cuantas unidades necesitas y las horas de uso diaria.
              </Text>
              <Image
                rounded={'md'}
                src={SolicitarScreen3}
                // fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '200px', lg: '300px' }}
              />
              <Text mt="2" fontSize="lg">Opcionalmente podras seleccionar los servicios </Text>
                <Alert status='warning' variant='top-accent'>
                  <AlertIcon />
                  <Stack>
                    <Text fontWeight="bold">Importante </Text>
                    <Text>Vestibulum euismod quis dui scelerisque posuere. Praesent in magna eu velit blandit ornare. Vivamus tempus ac nisl nec mollis. Vestibulum nec justo pharetra, rhoncus dolor non, ultricies dui. Suspendisse facilisis.</Text>
                  </Stack>
                </Alert>
              <Image
                rounded={'md'}
                src={SolicitarScreen4}
                p="6"
                // fit={'cover'}
                align={'center'}
                w={'100%'}
                h={{ base: '100%', sm: '200px', lg: '300px' }}
              />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
        
      </Container>
    );
  };
  
  export default Article;