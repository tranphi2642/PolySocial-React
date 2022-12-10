import Axios from "../../Axios";

class Exercises {
  // Get all exercise end date
  static getAllExercisesEndDate = async (groupId) =>
    Axios.get(`/api/exercises/get-all-exercises-end-date?groupId=${groupId}`);
  // Create exercise
  static createExercises = async (data) => {
    console.log(data);
    Axios.post("/exercises/create", data);
  };
  // Update exercise
  static updateExercises = async (data) =>
    Axios.put("/api/exercises/update", data);
  // Delete exercise
  static deleteExercises = async (groupId) =>
    Axios.delete(`/api/exercises/delete?groupId=${groupId}`);
}

export default Exercises;
