import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Edit(props) {
  const url = `http://localhost:3009/userdata`;

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  let { idno } = useParams();

  let { id, name, email, phone } = data;

  useEffect(() => {
    axios.get(`${url}/${idno}`).then((result) => setData(result.data));
  }, [idno, url]);

  let formHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let submitHandler = (e) => {
    e.preventDefault();

    let formData = {
      name: `${data.name}`,
      email: `${data.email}`,
      phone: `${data.phone}`,
    };
    alert(JSON.stringify(formData));

    axios
      .put(`${url}/${idno}`, formData)
      .then(() => props.history.push(`/Userdata`));
  };

  return (
    <div className="container p-5">
      <h4>Please Edit your details here</h4>
      <form onSubmit={submitHandler.bind(this)}>
        <div>
          <lable>ID :</lable>
          <input TYPE="text" value={id} className="form-control" />
        </div>
        <div className="mb-3">
          <lable className="form-label">NAME :</lable>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={formHandler.bind(this)}
          />
        </div>
        <div>
          <lable>EMAIL :</lable>
          <input
            type="text"
            className="form-control"
            value={email}
            name="email"
            onChange={formHandler.bind(this)}
          />
        </div>
        <div>
          <lable>PHONE :</lable>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={phone}
            onChange={formHandler.bind(this)}
          />
        </div>
        <div  className="mb-3" >
          <button className="btn btn-success mx-2 ">
            <Link
              style={{ textDecoration: "none" }}
              className="text-white"
              to="/Userdata"
            >
              GOTO BACK
            </Link>
          </button>
          <button
            className="btn btn-secondary text-white"
            value="update"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
