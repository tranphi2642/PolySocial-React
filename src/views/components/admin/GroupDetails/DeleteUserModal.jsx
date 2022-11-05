import React from "react";
import { UilCheckCircle } from "@iconscout/react-unicons";
import Axios from "../../../../api/index";
import { useParams } from "react-router-dom";

const EditContentModal = (props) => {
  const { id } = useParams();

  const deleteUser = async () => {
    const response = await Axios.Groups.delete_student_group(
      props.userId.current,
      id
    );
    if (!response) {
      alert("Delete student successfully!");
      props.onClose();
      window.location.reload();
    }
  };

  if (!props.showEdit) {
    return null;
  }

  return (
    <div className="modal-delete-user">
      <div className="cart-delete">
        <div className="model-delete">
          <i>
            <UilCheckCircle />
          </i>
          <h2>Hoàn thành</h2>
          <h3>Bạn có muốn xoá sinh viên này không?</h3>
          <div className="buttons-delete">
            <button onClick={() => deleteUser()}>
              <i className="uil uil-trash"></i> Xoá
            </button>
            <form>
              <button onClick={props.onClose}>
                <i className="uil uil-times"></i>Huỷ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContentModal;