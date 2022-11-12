import Axios from "../../Axios";

class Groups {
  //API get all groups
  static get_all_groups = async () =>
    Axios.get("http://localhost:8113/group/api/get/all?page=0&limit=10");

  //API get one group of list groups
  static get_one_group = async (groupId) =>
    Axios.get(`http://localhost:8113/group/api/get/class?groupId=${groupId}`);

  //API create new group
  static create_group = async (data) =>
    Axios.post("http://localhost:8113/group/api/create-group", data);

  //API create new group by excel
  static create_group_excel = async (file) =>
    Axios.post("http://localhost:8113/group/api/create-file", file);

  //API update group
  static update_group = async (data) =>
    Axios.put("http://localhost:8113/group/api/update-group", data);

  //API delete group
  static delete_group = async (groupId) =>
    Axios.delete(
      `http://localhost:8113/group/api/delete-group?groupId=${groupId}`
    );

  //API get teacher of group
  static get_teacher_group = async (groupId) =>
    Axios.get(`http://localhost:8113/group/api/get-teacher?groupId=${groupId}`);

  //API get all student of group
  static get_all_student_group = async (groupId) =>
    Axios.get(
      `http://localhost:8113/group/api/get/all-student?groupId=${groupId}`
    );

  //API get one student of group
  static get_one_student_group = async (email, groupId) =>
    Axios.get(
      `http://localhost:8113/group/api/get-student?email=${email}&groupId=${groupId}`
    );

  //API create student in group
  static create_student_group = async (userId, groupId) =>
    Axios.post(
      `http://localhost:8113/group/api/create-student?userId=${userId}&groupId=${groupId}`
    );

  //API delete student in group
  static delete_student_group = async (userId, groupId) =>
    Axios.delete(
      `http://localhost:8113/group/api/remove-student?userId=${userId}&groupId=${groupId}`
    );

  //API get all group by student
  static get_all_group_student = async (userId) =>
    Axios.get(
      `http://localhost:8113/group/api/get-all/group/student?userId=${userId}`
    );

  //API get all group by teacher
  static get_all_group_teacher = async ({ userId }) =>
    Axios.get(
      `http://localhost:8113/group/api/get-all/group/teacher?userId=${userId}`
    );

  //API find group by keywork
  static find_group = async (keyword) =>
    Axios.get(`http://localhost:8113/group/api/find-group?keywork=${keyword}`);
}

export default Groups;
