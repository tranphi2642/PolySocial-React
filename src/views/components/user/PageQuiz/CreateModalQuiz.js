import React from "react";
import { UilPlus } from "@iconscout/react-unicons";

const CreateModalQuiz = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-create-quiz" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <form className="form-create">
          <h3>Tạo bài tập (Quiz)</h3>

          <div className="form-input">
            <label htmlFor="content">Nội dung</label>
            <input type="text" id="content" placeholder="Hãy nhập nội dung" />
          </div>

          <div className="form-input">
            <label htmlFor="deline">Hạn nộp</label>
            <input type="date" id="deline" />
          </div>

          <button>
            <i>
              <UilPlus />
            </i>{" "}
            Tạo
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateModalQuiz;
