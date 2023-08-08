import ShowTaskList from "./ShowTaskList";
import Modal from "react-modal";
import Formulario from "./Formulario";
import useModal from "./useModal";
import {
  Box,
  Button,
  Stack,
  Grid,
  GridItem,
  Image,
  useColorModeValue,
  Img,
  Flex,
} from "@chakra-ui/react";

function Task(props) {
  const {
    taskData,
    addTask,
    deleteTask,
    selectTaskUpdate,
    updateTask,
    completeTask,
  } = props;
  const { modalAbierto, handleAbrirModal, handleCerrarModal } = useModal();

  const handleClickComplete = (id) => {
    completeTask(id);
  };

  const handleClickDelete = (id) => {
    deleteTask(id);
  };

  const handleClickUpdate = (id) => {
    handleAbrirModal();
    selectTaskUpdate(id);
  };

  return (
    <>
      <Stack>
        <Modal
          isOpen={modalAbierto}
          onRequestClose={handleCerrarModal}
          ariaHideApp={false}
        >
          <Stack bg={useColorModeValue("pink.50", "gray.800")}>
            <Stack align={"end"} mx={"auto"} maxW={"auto"}>
              <Button onClick={handleCerrarModal} id="Close" variant="outline">
                Cerrar
              </Button>
            </Stack>

            <Stack>
              <Formulario
                onCloseModal={handleCerrarModal}
                taskData={taskData}
                updateTask={updateTask}
                addTask={addTask}
              />
            </Stack>
          </Stack>
        </Modal>
      </Stack>
      <Grid
        gridAutoFlow="dense"
        justifyContent="center"
        align="center"
        gap={3}
        width="92%"
        margin="0 auto"
        templateColumns={{
          base: "1fr",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
      >
        {/* <div className="CardActivity"> */}
        {taskData.map((data) => {
          return (
            <Box
              key={data.id}
              rounded={"lg"}
              bg={useColorModeValue("pink.50", "gray.700")}
              boxShadow={"lg"}
              p={3}
            >
              <GridItem w="100%" p={1} shadow="lg">
                <Image
                  alt={"lista de tareas"}
                  fit={"cover"}
                  w={{ base: "80px", sm: "60px" }}
                  h={{ base: "100px", sm: "80px" }}
                  src={"./../src/images/ListaTareas2.png"}
                />
                <Flex alignItems={"center"} p={2} justifyContent={"center"}>
                  {data.status !== "Completado" && (
                    <>
                      <Img
                        src="./../src/images/completed.png"
                        alt="Completar tarea"
                        onClick={() => handleClickComplete(data.id)}
                        cursor={"pointer"}
                      />
                      <Img
                        alt={"Eliminar"}
                        src={"./../src/images/editTasks.png"}
                        h={{ base: "32px", sm: "32px" }}
                        onClick={() => handleClickUpdate(data.id)}
                        cursor={"pointer"}
                      />
                    </>
                  )}
                  <Img
                    alt={"Eliminar"}
                    src={"./../src/images/deleted.png"}
                    h={{ base: "32px", sm: "32px" }}
                    onClick={() => handleClickDelete(data.id)}
                    cursor={"pointer"}
                  />
                </Flex>
                <ShowTaskList
                  Key={data.id}
                  names={data.names}
                  date={data.date.replace(
                    /(\d{2})\/(\d{2})\/(\d{4})/,
                    "$3-$2-$1"
                  )}
                  status={data.status}
                  hour={data.hour}
                />
              </GridItem>
            </Box>
          );
        })}
        {/* </div> */}
      </Grid>
    </>
  );
}

export default Task;
