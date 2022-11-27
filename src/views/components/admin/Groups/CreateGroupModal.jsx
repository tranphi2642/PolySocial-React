import React, { useState } from "react";
import Asios from "./../../../../api/index";

const GroupModal = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [groupId, setGroupId] = useState("");

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const createGroupByExcel = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    const response = await Asios.Groups.createGroupExcel(formData, groupId);
    console.log(response);
    if (response) {
      alert("Create group successfully!");
      props.onClose();
      // window.location.reload();
    } else {
      alert("Create group failed!");
    }
  };

  const handleChange = (e) => {
    setGroupId(e.target.value);
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-create-group" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <form className="form-create" onSubmit={createGroupByExcel}>
          <h3>Tạo nhóm học tập</h3>

          <div className="form-input">
            <label htmlFor="groupId">Mã nhóm học tập</label>
            <div className="select-box">
              <select className="select" onChange={handleChange}>
                <option defaultValue="" defaultChecked>
                  Chọn mã nhóm học tập
                </option>
                {props.groups.map((group) => (
                  <option key={group.groupId} value={group.groupId}>
                    {group.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-input">
            <label htmlFor="upload">Tải tệp excel</label>
            <input
              type="file"
              id="upload"
              name="upload"
              onChange={changeHandler}
            />
            {isSelected ? (
              <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                  lastModifiedDate:{" "}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
          </div>
          <button> Tạo </button>
        </form>
      </div>
    </div>
  );
};

export default GroupModal;
