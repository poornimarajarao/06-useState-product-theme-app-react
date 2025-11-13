function Section({ theme }) {
  return (
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <div className={`card ${theme ? "bg-dark text-white" : ""}`}>
          <div className="card-header text-center" style={{ color: theme ? "white" : "black" }}>
            <h4>{theme ? "Dark Mode" : "Light Mode"}</h4>
          </div>

          <div className={`card-body ${theme ? "bg-light text-black" : ""}`}>
            <p style={{ padding: "14px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id perferendis nostrum aliquam libero rerum optio minima labore eum,laudantium quisquam saepe, illum hic ut! Nesciunt eos nemo iure incidunt, in cum esse asperiores maiores mollitia aliquam sequi praesentium vel omnis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section;


