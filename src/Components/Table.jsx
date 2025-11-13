function Table({ data,Increment,Decrement,theme}) {
  return (
    <>
      <tr>
        <td>{data.ProductName}</td>
        <td>{data.PId}</td>
        <td>{data.Price}</td>
        <td>
          <button className="btn btn-sm" onClick={() => Decrement(data.PId)}>
            <i className="bi bi-dash-circle" style={{ color: theme ? "white" : "black" }}></i>
          </button>
           <span>{data.qty}</span>
          <button className="btn btn-sm" onClick={() => Increment(data.PId)}>
            <i className="bi bi-plus-circle" style={{ color: theme ? "white" : "black" }}></i>
          </button>
        </td>
      </tr>
    </>
  );
}
export default Table;
