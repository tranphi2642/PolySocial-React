import React from "react";

const GroupModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-create-group" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <form className="form-create">
          <h3>Tạo nhóm học tập</h3>
          <div className="form-input">
            <label htmlFor="upload">Tải tệp excel</label>
            <input type="file" id="upload" name="upload" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupModal;
