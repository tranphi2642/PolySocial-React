import React, { useState, useEffect, useRef } from "react";
import GroupModal from "./CreateGroupModal";
import EditGroupModal from "./EditGroupModal";
import { Link } from "react-router-dom";
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

export default function Groups() {
  const { account } = useLogin();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [groups, setGroup] = useState([]);
  const groupId = useRef(0);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const response = await Asios.Groups.get_all_groups();
    setGroup(response.content);
  };

  const handleShowEdit = (id) => {
    groupId.current = id;
    setShowEdit(true);
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
              {groups.map((group, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/admin/groupDetails/${group.groupId}`}>
                      {group.name}{" "}
                    </Link>
                  </td>
                  <td>{group.totalMember}</td>
                  <td>{group.status ? "Đã tạo" : "Chưa tạo"}</td>
                  <td>{group.description}</td>
                  <td>{group.createdDate}</td>
                  <td>
                    <Link
                      className="updateGroup"
                      onClick={() => handleShowEdit(group.groupId)}
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
      <GroupModal onClose={() => setShow(false)} show={show} />
      <EditGroupModal
        onClose={() => setShowEdit(false)}
        showEdit={showEdit}
        groupId={groupId}
      />
    </React.Fragment>
  );
}
