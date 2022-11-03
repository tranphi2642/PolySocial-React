import Axios from "../../Axios";

class Accounts {
  static getAll = async () => Axios.get("https://reqres.in/api/users?page=2");

  //API get all groups
  static get_all_groups = async ({ page, limit }) =>
    Axios.get("localhost:8113/api/get/all", {
      page,
      limit,
    });

  //API get one group of list groups
  static get_one_group = async ({ groupId }) =>
    Axios.get("localhost:8113/api/get/class", { groupId });

  //API create new group
  static create_group = async (data) =>
    Axios.post("localhost:8113/api/create-group", data);

  //API create new group by excel
  static create_group_excel = async (file) =>
    Axios.post("localhost:8113/api/create-file", { file });

  //API update group
  static update_group = async (data) =>
    Axios.put("localhost:8113/api/update-group", data);

  //API delete group
  static delete_group = async (groupId) =>
    Axios.delete("localhost:8113/api/delete-group", { groupId });

  //API get teacher of group
  static get_teacher_group = async ({ groupId }) =>
    Axios.get("localhost:8113/api/get-teacher", { groupId });

  //API get all student of group
  static get_all_student_group = async ({ groupId }) =>
    Axios.get("localhost:8113/api/get/all-student", { groupId });

  //API get one student of group
  static get_one_student_group = async ({ email, groupId }) =>
    Axios.get("localhost:8113/api/get-student", { email, groupId });

  //API create student in group
  static create_student_group = async (userId, groupId) =>
    Axios.post("localhost:8113/api/create-student", { userId, groupId });

  //API delete student in group
  static delete_student_group = async (userId, groupId) =>
    Axios.delete("localhost:8113/api/remove-student", { userId, groupId });

  //API get all group by student
  static get_all_group_student = async ({ userId }) =>
    Axios.get("localhost:8113/api/get-all/group/student", { userId });

  //API get all group by teacher
  static get_all_group_teacher = async ({ userId }) =>
    Axios.get("localhost:8113/api/get-all/group/teacher", { userId });

  //API find group by keywork
  static find_group = async ({ keyword }) =>
    Axios.get("localhost:8113/api/find-group", { keyword });
}

export default Accounts;
