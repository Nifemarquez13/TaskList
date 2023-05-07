//Se crea el componente reusable que recibe propiedades y retorna los datos.
function ShowTaskList(props) {
  const { name, date, status, hour } = props;
  return (
    <div className="CardTaskList">
      <p><strong>ACTIVITY:</strong><br/>{name}</p>
      <p><strong>DATE:</strong>{date}</p>
      <p><strong>STATUS:</strong>{status}</p>
      <p><strong>HOUR:</strong>{hour}</p>
    </div>
  );
}

export default ShowTaskList;