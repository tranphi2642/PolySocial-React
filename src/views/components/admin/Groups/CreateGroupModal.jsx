import axios from "axios";
import React, { useState } from "react";
import Axios from "../../../../api/index";

const GroupModal = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const createGroupByExcel = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    const response = await axios.post(
      "http://localhost:8080/group/api/create-file",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjY4NDM5NjczLCJleHAiOjE2NjkwNDQ0NzN9.0GCQPuGQWTzHnf6TfxeINV5bZfNVnW0N_N3npQKUUyxI1vpzeNZ0NW3lUgwURk3A13Ahz1V8iFimjuQ5pizVag",
        },
      }
    );
    // const response = await Axios.Groups.create_group_by_excel(formData);
    console.log(response);
    if (response) {
      alert("Create group successfully!");
      props.onClose();
      window.location.reload();
    } else {
      alert("Create group failed!");
    }
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
