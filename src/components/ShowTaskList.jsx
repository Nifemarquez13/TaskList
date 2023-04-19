function ShowTaskList(props) {
  const { name, date, status } = props;
  return (
    <div className="CardTaskList">
      <p>name:{name}</p>
      <p>name: {date}</p>
      <p>status:{status}</p>
    </div>
  );
}

export default ShowTaskList;