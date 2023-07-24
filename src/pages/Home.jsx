import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

export function Home() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "plum",
                zIndex: -1,
              }}
            >
              ¡Carga tus tareas,
            </Text>
            <br />
            <Text as={"span"} color={"purple.500"}>
              ejecútalas donde vayas!
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize={"25px"}>
            ¡Esperamos que puedas experimentar con nuestra Task Clicks y que con
            ella las ideas no queden solo en tu mente, sino que también las
            puedas llevar en todos tus dispositivos!
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"pink"}
              bg={"blue.300"}
              _hover={{ bg: "pink.500" }}
            >
              REVISA TUS TAREAS
            </Button>
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"pink"}
              bg={"blue.300"}
              _hover={{ bg: "plum" }}
            >
              CONTACTANOS
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"400px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"./../src/images/homePage.png"}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
