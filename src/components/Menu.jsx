import {Link as RouterLink} from "react-router-dom"
import {
    Box,
    Flex,
    HStack,
    Link,
    useColorModeValue,
    useDisclosure,
    IconButton,
    Stack,
  } from '@chakra-ui/react';

  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
     <Box bg={useColorModeValue('purple.100', 'purple.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Task clicks</Box>
    <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <Link as={RouterLink}
                    variant='menu'
                    to="/">Inicio
              </Link>
              <Link as={RouterLink}
                    variant='menu'
                    to="/task">Tareas
              </Link>
              <Link as={RouterLink}
                    variant='menu'
                    to="/aboutUs">Sobre Nosotros
              </Link>
            </HStack>
            </HStack>
            </Flex>
            {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}> 
            <Link as={RouterLink}
                    variant='menu'
                    to="/">Inicio
              </Link>
              <Link as={RouterLink}
                    variant='menu'
                    to="/task">Tareas
              </Link>
              <Link as={RouterLink}
                    variant='menu'
                    to="/aboutUs">Sobre Nosotros
              </Link>
            
            </Stack>
            </Box>
        ) : null}
             </Box>
    </>
  );
}