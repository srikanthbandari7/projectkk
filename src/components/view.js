import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function View() {
  const url = `http://localhost:3009/userdata`;

  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  let { id, name, email, phone } = data;

  let { idno } = useParams();

  useEffect(() => {
    axios.get(`${url}/${idno}`).then((result) => setData(result.data));
  }, [idno, url]);

  
  return (
    <div class="container-fluid">
      <h3>Dvara E-Registary Employee Details</h3>
      <ul >
        <li>{id}</li>
        <li>{name}</li>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
      <button className="btn btn-secondary">
        <Link
          className="text-white"
          style={{ textDecoration: "none" }}
          to="/Userdata"
        >
          GOTO BACK
        </Link>
      </button>
    </div>
  );
};
