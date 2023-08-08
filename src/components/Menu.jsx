import { Link as RouterLink } from "react-router-dom";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
  useDisclosure,
  IconButton,
  Stack,
  useColorMode,
  Button,
  Text,
  Img,
} from "@chakra-ui/react";

export function Menu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("purple.100", "purple.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <Text fontSize="xl" as={"span"} color="purple.500">
              <Link as={RouterLink} to="/">
                <Img
                  src="./../src/images/taskClicks.png"
                  alt="Completar tarea"
                  cursor={"pointer"}
                  h={"60px"}
                />
              </Link>
            </Text>
          </Box>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              alignItems={"start"}
            >
              <Link as={RouterLink} variant="menu" to="/">
                Inicio
              </Link>
              <Link as={RouterLink} variant="menu" to="/task">
                Tareas
              </Link>
              <Link as={RouterLink} variant="menu" to="/aboutUs">
                Sobre Nosotros
              </Link>
            </HStack>
          </HStack>
          <Box alignItems={"end"}>
            <Button
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              _focus={{ boxShadow: "none" }}
              w="fit-content"
              variant="ghost"
            >
              {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
            </Button>
          </Box>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link as={RouterLink} variant="menu" to="/">
                Inicio
              </Link>
              <Link as={RouterLink} variant="menu" to="/task">
                Tareas
              </Link>
              <Link as={RouterLink} variant="menu" to="/aboutUs">
                Sobre Nosotros
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
