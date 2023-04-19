import ShowTaskList from "./ShowTaskList";

function TaskList(props) {
  const { List } = props;

  return (
    <div className="CardActivity">
      {List.map((data) => {
        return (
          <ShowTaskList
            name={data.name}
            date={data.date}
            status={
              data.status ? (
                <strong>Realizado</strong>
              ) : (
                <strong>No Realizado</strong>
              )
            }
          />
        );
      })}
    </div>
  );
}

export default TaskList;