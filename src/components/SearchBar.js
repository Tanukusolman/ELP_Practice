import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="row filter-row">
      <div className="col-sm-6 col-md-4">
        <div className="top-nav-search position-relative form-focus">
          <input
            className="form-control floating"
            placeholder="&nbsp;"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* placeholder="Search Employee by ID.." */}
          <button className="btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <label className="focus-label">Employee ID</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <div className="top-nav-search position-relative form-focus">
          <input
            className="form-control floating"
            type="text"
            placeholder="&nbsp;"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* placeholder="Search Employee by Name.." */}
          <button className="btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <label className="focus-label">Employee Name</label>
        </div>
      </div>
      <div className="col-sm-6 col-md-4">
        <Link to href="#" className="btn btn-success btn-block">
          {" "}
          Search{" "}
        </Link>
      </div>
    </div>
  );
}

export default SearchBar;
