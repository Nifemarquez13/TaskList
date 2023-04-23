function ShowTaskList(props) {
  const { name, date, status, hour } = props;
  return (
    <div className="CardTaskList">
      <p>name:{name}</p>
      <p>date:{date}</p>
      <p>status:{status}</p>
      <p>hour:{hour}</p>
    </div>
  );
}

export default ShowTaskList;