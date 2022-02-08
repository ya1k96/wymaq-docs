import React from 'react';
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Image,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Stack,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps    
  } from '@chakra-ui/react'; 
  import {
    FiHome,    
    FiMenu,
    FiArchive,
  } from 'react-icons/fi'; 
  import { IconType } from 'react-icons';
  import { ReactText } from 'react';
import Logo from '../../images/logo_blanco.png'
const LinkItems = [
  // { name: 'Inicio', icon: FiHome },
];
const SidebarContent = ({ onClose, ...rest }) => {
return (
    <Box
    bg={useColorModeValue('gray.900', 'white')}
    borderRight="1px"
    borderRightColor={useColorModeValue('white', 'gray.700')}
    w={{ base: 'full', md: 60 }}
    pos="fixed"
    h="full"
    {...rest}>
    <Stack h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image
            rounded={'md'}
            src={Logo}
            mt="10"
            align={'center'}           
          />
        <Text fontSize="lg" fontFamily="monospace" fontWeight="bold" color='white'>
          docs
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    </Stack>
    <Box mt="10" pt="5">
    {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
        {link.name}
        </NavItem>
    ))}
    </Box>
    </Box>
);
};

export default function SimpleSidebar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box minH="100vh" bg={useColorModeValue('white', 'gray.900')}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full">
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {children}
        </Box>
      </Box>
    );
}

const NavItem = ({ icon, children, ...rest }) => {
return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
    <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
        bg: 'green.400',
        color: 'black',
        }}
        {...rest}>
        {icon && (
        <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
            color: 'white',
            }}
            as={icon}
        />
        )}
        <Text color='white'>
          {children}
        </Text>
          
    </Flex>
    </Link>
);
};
    
const MobileNav = ({ onOpen, ...rest }) => {
return (
    <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 24 }}
    height="20"
    alignItems="center"
    bg={useColorModeValue('white', 'gray.900')}
    borderBottomWidth="1px"
    borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
    justifyContent="flex-start"
    {...rest}>
    <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
    />

    <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Wymaq docs
    </Text>
    </Flex>
);
};