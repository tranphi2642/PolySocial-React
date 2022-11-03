import React, { useState } from "react";
import GroupModal from "./CreateGroupModal";
import EditGroupModal from "./EditGroupModal";
import { Link } from "react-router-dom";
import NavAdmin from "../../general/NavAdmin/index";
import {
  UilBars,
  UilPlus,
  UilTachometerFastAlt,
  UilSearch,
  UilEdit,
} from "@iconscout/react-unicons";

import avatar from "../../../../assets/images/1.jpg";

export default function Groups() {
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
              Thống kê nhóm đã tạo
            </span>
            <Link id="createGroup" onClick={() => setShow(true)}>
              <i>
                <UilPlus />
              </i>{" "}
              Tạo nhóm
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
                <th>Tên Nhóm</th>
                <th>Số lượng TV</th>
                <th>Trạng thái</th>
                <th>Khoá</th>
                <th>Ngày tạo</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="body">
              <tr className="active-row">
                <td>1</td>
                <td>
                  <Link to={"/admin/groupDetails"}>Web </Link>
                </td>
                <td>31</td>
                <td>Đã tạo</td>
                <td>Khoá 17</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateGroup"
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
                <td>
                  <Link to={"/admin/groupDetails"}>Web </Link>
                </td>
                <td>31</td>
                <td>Đã tạo</td>
                <td>Khoá 17</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateGroup"
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
                <td>
                  <Link to={"/admin/groupDetails"}>Web </Link>
                </td>
                <td>31</td>
                <td>Đã tạo</td>
                <td>Khoá 17</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateGroup"
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
                <td>
                  <Link to={"/admin/groupDetails"}>Web </Link>
                </td>
                <td>31</td>
                <td>Đã tạo</td>
                <td>Khoá 17</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateGroup"
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
                <td>
                  <Link to={"/admin/groupDetails"}>Web </Link>
                </td>
                <td>31</td>
                <td>Đã tạo</td>
                <td>Khoá 17</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateGroup"
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
                <td>
                  <Link to={"/admin/groupDetails"}>Web </Link>
                </td>
                <td>31</td>
                <td>Đã tạo</td>
                <td>Khoá 17</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateGroup"
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
      <GroupModal onClose={() => setShow(false)} show={show} />
      <EditGroupModal onClose={() => setShowEdit(false)} showEdit={showEdit} />
    </React.Fragment>
  );
}