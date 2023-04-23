import ShowTaskList from "./ShowTaskList";

function Task(props) {
  const { List } = props;

  return (
    <div className="CardActivity">
      {List.map((data) => {
        return (
          <ShowTaskList
          key = {data.id}
            name={data.name}
            date={data.date}
            status={
              data.status ? (
                <strong>Realizado</strong>
              ) : (
                <strong>No Realizado</strong>
              )
            }
            hour = {data.hour}
          />
        );
      })}
    </div>
  );
}

export default Task;