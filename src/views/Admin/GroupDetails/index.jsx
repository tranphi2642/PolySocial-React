import React, { useState } from "react";
import CreateUser from "./CreateUserModal";
import DeleteUser from "./DeleteUserModal";
import { Link } from "react-router-dom";
import NavAdmin from "../../../components/Admin/Nav/index";
import {
  UilBars,
  UilPlus,
  UilTachometerFastAlt,
  UilSearch,
  UilEdit,
} from "@iconscout/react-unicons";

import avatar from "../../../assets/images/1.jpg";

export default function GroupDetails() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <React.Fragment>
      <NavAdmin />
      <section className="dashboard">
        <div className="top">
          <i>
            <UilBars />
          </i>

          <div className="info">
            <span>Trần Phi</span>
            <img src={avatar} alt="" />
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
                <th>Id</th>
                <th>Họ và tên</th>
                <th>Trạng thái</th>
                <th>Tên nhóm</th>
                <th>Khoá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="body">
              <tr className="active-row">
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>Đã tạo</td>
                <td>2</td>
                <td>Khoá 16</td>
                <td>
                  <Link
                    className="deleteUser"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>Đã tạo</td>
                <td>2</td>
                <td>Khoá 16</td>
                <td>
                  <Link
                    className="deleteUser"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>Đã tạo</td>
                <td>2</td>
                <td>Khoá 16</td>
                <td>
                  <Link
                    className="deleteUser"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>Đã tạo</td>
                <td>2</td>
                <td>Khoá 16</td>
                <td>
                  <Link
                    className="deleteUser"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>Đã tạo</td>
                <td>2</td>
                <td>Khoá 16</td>
                <td>
                  <Link
                    className="deleteUser"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>Đã tạo</td>
                <td>2</td>
                <td>Khoá 16</td>
                <td>
                  <Link
                    className="deleteUser"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <CreateUser onClose={() => setShow(false)} show={show} />
      <DeleteUser showEdit={showEdit} />
    </React.Fragment>
  );
}
