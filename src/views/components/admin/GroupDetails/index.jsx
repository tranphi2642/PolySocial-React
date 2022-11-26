import React, { useState, useEffect, useRef } from "react";
import CreateUser from "./CreateUserModal";
import DeleteUser from "./DeleteUserModal";
import { Link, useParams } from "react-router-dom";
import NavAdmin from "../../general/NavAdmin/index";
import Asios from "./../../../../api/index";
import useLogin from "../../../utils/useLogin/useLogin";
import {
  UilBars,
  UilPlus,
  UilTachometerFastAlt,
  UilSearch,
  UilEdit,
} from "@iconscout/react-unicons";

export default function GroupDetails() {
  const { account } = useLogin();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [students, setStudent] = useState([]);
  const { id } = useParams();
  const userId = useRef(0);

  useEffect(() => {
    getAllData();
  }, []);

  const handleShowEdit = (id) => {
    userId.current = id;
    setShowEdit(true);
  };

  const getAllData = async () => {
    const response = await Asios.Groups.getAllStudentGroup(id);
    console.log(response);
    setStudent(response);
  };

  return (
    <React.Fragment>
      <NavAdmin />
      <section className="dashboard">
        <div className="top">
          <i>
            <UilBars />
          </i>

          <div className="info">
            <span>{account.fullName}</span>
            <img src={account.avatar} alt="" />
          </div>
        </div>

        <div className="dash-content">
          <div className="title-1">
            <span>
              <i>
                <UilTachometerFastAlt />
              </i>{" "}
              Thống kê sinh viên có trong nhóm đã tạo
            </span>
            <Link id="createUser" onClick={() => setShow(true)}>
              <i>
                <UilPlus />
              </i>{" "}
              Tạo sinh viên viên
            </Link>
          </div>

          <form action="#">
            <div className="search-box">
              <i>
                <UilSearch />
              </i>
              <input type="text" placeholder="Tìm kiếm ở đây" />
            </div>
            <div className="select-box">
              <select className="select">
                <option defaultValue="" defaultChecked>
                  Lọc theo
                </option>
                <option defaultValue="1">Họ và tên</option>
                <option defaultValue="2">Email</option>
                <option defaultValue="3">Tên nhóm</option>
              </select>
            </div>
          </form>

          <table className="styled-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã số sinh viên</th>
                <th>Họ và tên</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="body">
              {students?.map((st, index) => (
                <tr className="active-row" key={index}>
                  <td>{index + 1}</td>
                  <td>{st.studentCode}</td>
                  <td>{st.fullName}</td>
                  <td>{st.email}</td>
                  <td>
                    <Link
                      className="deleteUser"
                      onClick={() => handleShowEdit(st.userId)}
                    >
                      <i>
                        <UilEdit />
                      </i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <CreateUser onClose={() => setShow(false)} show={show} />
      <DeleteUser showEdit={showEdit} userId={userId} />
    </React.Fragment>
  );
}
