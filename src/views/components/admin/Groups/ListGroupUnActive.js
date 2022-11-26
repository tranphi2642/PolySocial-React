import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Asios from "./../../../../api/index";
import EditGroupModal from "./EditGroupModal";
import { UilEdit } from "@iconscout/react-unicons";

const ListGroupUnActive = () => {
  const [groups, setGroup] = useState([]);
  const groupId = useRef(0);
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const response = await Asios.Groups.getAllGroupsFalse();
    console.log(response);
    setGroup(response.content);
  };

  const handleShowEdit = (id) => {
    groupId.current = id;
    setShowEdit(true);
  };

  return (
    <React.Fragment>
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

      <div className="pages-buttom">
        <button>Đầu</button>
        <button>Lùi</button>
        <button>Tiếp</button>
        <button>Cuối</button>
      </div>

      <EditGroupModal
        onClose={() => setShowEdit(false)}
        showEdit={showEdit}
        groupId={groupId}
      />
    </React.Fragment>
  );
};
export default ListGroupUnActive;
