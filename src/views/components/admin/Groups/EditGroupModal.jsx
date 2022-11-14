import React, { useState, useEffect } from "react";
import Axios from "../../../../api/index";

const EditContentModal = (props) => {
  const [group, setGroup] = useState({
    groupId: props.groupId.current,
    name: "",
    totalMember: "",
    description: "",
    status: true,
    createdDate: "",
  });

  useEffect(() => {
    getOneData();
  }, [props.groupId.current]);

  const getOneData = async () => {
    const response = await Axios.Groups.get_one_group(props.groupId.current);
    if (response) {
      setGroup(response);
    }
  };

  const updateGroup = async () => {
    const response = await Axios.Groups.update_group(group);
    if (response) {
      alert("Update group successfully!");
      props.onClose();
      window.location.reload();
    } else {
      alert("Update group failed!");
    }
  };

  const deleteGroup = async () => {
    const response = await Axios.Groups.delete_group(props.groupId.current);
    if (!response) {
      alert("Delete group successfully!");
      props.onClose();
      window.location.reload();
    } else {
      alert("Delete group failed!");
    }
  };

  const resetGroup = async () => {
    setGroup({
      groupId: props.groupId.current,
      name: "",
      totalMember: "",
      description: "",
      status: true,
      createdDate: "",
    });
  };

  if (!props.showEdit) {
    return null;
  }

  return (
    <div className="modal-edit-group" onClick={props.onClose}>
      <div className="cart-update" onClick={(e) => e.stopPropagation()}>
        <div className="form-create">
          <h3>Chỉnh sửa hoặc xoá nhóm</h3>

          <div className="form-input">
            <label htmlFor="group">Tên nhóm</label>
            <input
              type="text"
              id="group"
              name="name"
              placeholder="Hãy nhập tên nhóm"
              value={group.name}
              onChange={(e) => setGroup({ ...group, name: e.target.value })}
            />
          </div>

          <div className="form-input">
            <label htmlFor="member">Tổng thành viên</label>
            <input
              type="number"
              id="member"
              name="totalMember"
              placeholder="Hãy nhập số lượng thành viên"
              value={group.totalMember}
              onChange={(e) =>
                setGroup({ ...group, totalMember: e.target.value })
              }
            />
          </div>

          <div className="form-input">
            <label htmlFor="description">Mô tả</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Hãy nhập mô tả"
              value={group.description}
              onChange={(e) =>
                setGroup({ ...group, description: e.target.value })
              }
            />
          </div>

          <div className="form-input">
            <label htmlFor="">Ngày tạo</label>
            <input
              type="datetime"
              id="createdDate"
              name="createdDate"
              placeholder="Hãy nhập ngày tạo"
              value={group.createdDate}
              onChange={(e) =>
                setGroup({ ...group, createdDate: e.target.value })
              }
            />
          </div>

          <div className="buttons-update">
            <button onClick={() => updateGroup()}>
              <i className="uil uil-plus"></i> Cập nhật
            </button>
            <button onClick={() => deleteGroup(props.groupId.current)}>
              <i className="uil uil-trash"></i> Xoá
            </button>
            <button onClick={() => resetGroup()}>
              <i className="uil uil-redo"></i> Làm mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContentModal;
