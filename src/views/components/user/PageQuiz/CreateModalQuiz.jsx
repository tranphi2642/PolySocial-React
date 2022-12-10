import React, { useState } from "react";
import { UilPlus } from "@iconscout/react-unicons";
import Asios from "../../../../api/index";

const CreateModalQuiz = (props) => {
  const [inputValues, setInputValues] = useState({
    content: "",
    endDate: "",
  });

  const handleCreateQuiz = async () => {
    console.log(inputValues);
    const response = await Asios.Exercises.createExercises(inputValues);
    console.log(response);
  };

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-create-quiz" onClick={props.onClose}>
      <div className="cart-create" onClick={(e) => e.stopPropagation()}>
        <div className="form-create">
          <h3>Tạo bài tập (Quiz)</h3>

          <div className="form-input">
            <label htmlFor="content">Nội dung</label>
            <input
              type="text"
              id="content"
              placeholder="Hãy nhập nội dung"
              onChange={(e) =>
                setInputValues({ ...inputValues, content: e.target.value })
              }
            />
          </div>

          <div className="form-input">
            <label htmlFor="deline">Hạn nộp</label>
            <input
              type="datetime-local"
              id="deline"
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  deadline: e.target.value.replace("T", " "),
                })
              }
            />
          </div>

          <button type="submit" onClick={handleCreateQuiz}>
            <i>
              <UilPlus />
            </i>{" "}
            Tạo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModalQuiz;
