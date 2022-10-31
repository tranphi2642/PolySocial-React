import React from "react";
import { UilCheckCircle } from "@iconscout/react-unicons";

const EditContentModal = (props) => {
  if (!props.showEdit) {
    return null;
  }

  return (
    <div className="modal-delete-user">
      <div className="cart-delete">
        <form>
          <div className="model-delete">
            <i>
              <UilCheckCircle />
            </i>
            <h2>Hoàn thành</h2>
            <h3>Bạn có muốn xoá sinh viên này không?</h3>
            <div className="buttons-delete">
              <button>
                <i className="uil uil-trash"></i> Xoá
              </button>
              <button onClick={props.onClose}>
                <i className="uil uil-times"></i>Huỷ
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContentModal;
