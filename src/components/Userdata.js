import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Userdata() {
  const url = `http://localhost:3009/userdata`;

  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  const getData = () => {
    axios.get(url).then((result) => setData(result.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const searchHandler = () => {
    axios.get(`${url}/?id=${search}`).then((result) => setData(result.data));
  };

  const deleteHandler = (id) => {
    if (window.confirm(`Delete record no ${id} ?`)) {
      axios.delete(`${url}/${id}`);
      getData();
    }
  };

  return (
    <div className="container p-5">
      <div className="mb-3">
        <input
          className="mx-2"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "500px" }}
        />
        <button className="btn btn-info" onClick={searchHandler}>
          Search
        </button>
      </div>
      <table className="table table-bordered p-5 ">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th colSpan="3" className="text-center">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((res, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{res.name}</td>
              <td>{res.email}</td>
              <td>{res.phone}</td>
              <td>
                <button className="btn btn-primary">
                  <Link
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    to={`/Userdata/view/${res.id}`}
                  >
                    View
                  </Link>
                </button>
              </td>
              <td>
                <button className="btn btn-warning ">
                  <Link
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    to={`/Userdata/edit/${res.id}`}
                  >
                    Edit
                  </Link>
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteHandler(res.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
