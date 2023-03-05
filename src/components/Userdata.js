import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Userdata() {
  const url = `http://localhost:3009/userdata`;

  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(url).then((result) => setData(result.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm(`Delete record no {id}`)) {
      axios.delete(`${url}/${id}`);
      getData();
    }
  };

  return (
    <div>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th colSpan="3">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res, i) => (
            <tr key={i}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.email}</td>
              <td>{res.phone}</td>
              <td>
                <button className="btn btn-primary">
                  <Link
                    className="text-white"
                    style={{ textDecoration: "none" }}
                    to={`/view/${res.id}`}
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
                    to={`/edit/${res.id}`}
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
