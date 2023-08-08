import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

export default function SobreNosotros() {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">¡Aprende de nosotros!</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              ¿Qué es TaskClicks?
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Nos complace presentarte la herramienta perfecta para mantenerte
            organizado y productivo en tu día a día. Nuestra aplicación de lista
            de tareas es intuitiva, fácil de usar y está diseñada para
            simplificar la gestión de tus actividades, sin importar cuán ocupado
            estés. Con nuestra aplicación, podrás crear listas de tareas y
            agregar fácilmente nuevas tareas con solo unos pocos toques. Ya sea
            que estés planificando tu lista de compras, preparando un proyecto
            importante o simplemente recordando las tareas diarias, nuestra
            aplicación te ayudará a mantenerlo todo bajo control.
            <br />
          </Text>
        </Box>
      </Box>
      <Divider marginTop="5" />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2"></Heading>
        <Text as="p" fontSize="lg">
          Nuestra interfaz limpia y moderna te permitirá navegar por tus listas
          de tareas de manera rápida y sencilla, y gracias a la sincronización
          en la nube, podrás acceder a tus tareas desde cualquier dispositivo en
          cualquier momento. No pierdas más tiempo tratando de recordar tus
          pendientes.
        </Text>
        <Text as="p" fontSize="lg">
          <Text>
            A través de la siguiente aplicación tendrás la oportunidad de
            gestionar el tiempo de tus colaboradores, alumnos o cualquier
            persona que tengas dentro de un flujograma organizacional. Esta
            aplicación Task Clicks permite que puedas llenar, modificar o
            eliminar diferentes tareas de acuerdo al estado en que se encuentre
            una actividad, y con esto, lograrás tener un control de las tareas
            planificadas y desarrolladas. Con su diseño fresco, minimalista y
            moderno, las personas que lo usen lograrán sentirse en armonía al
            momento de organizar todas sus actividades, haciendo que sea más
            dinámico y rápido ver el día a día de sus actividades.
          </Text>
          <br />
          <Text as="p" fontSize="lg">
            ¡Esperamos que puedas experimentar con nuestra Task Clicks y que con
            ella las ideas no queden solo en tu mente, sino que también las
            puedas llevar en tus dispositivos!
          </Text>
          <br />
          <Text as="p" fontSize="lg">
            ¡Comienza a hacer más y a sentirte más organizado ahora!
          </Text>
          <br />
          <Text as="p" fontSize="lg" align="center">
            <strong>
              Desarrolladoras: Yessica Sotomayor Castro & Yenifer Marquez
              Ospina.
            </strong>
          </Text>
        </Text>
      </VStack>
    </Container>
  );
}
