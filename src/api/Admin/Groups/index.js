import Axios from "../../Axios";

class Groups {
  //API get all groups
  static getAllGroups = async () =>
    Axios.get("/group/api/get/all?page=0&limit=10");

  //API get all groups false
  static getAllGroupsFalse = async () =>
    Axios.get("/group/api/get/all/false?page=0&limit=10");

  //API get one group of list groups
  static getOneGroup = async (groupId) =>
    Axios.get(`/group/api/get/class?groupId=${groupId}`);

  //API create new group
  static createGroup = async (data) =>
    Axios.post("/group/api/create-group", data);

  //API create new group by excel
  static createGroupExcel = async (file) =>
    Axios.post(
      "/group/api/create-file",
      { data: file },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

  //API update group
  static updateGroup = async (data) =>
    Axios.put("/group/api/update-group", data);

  //API delete group
  static deleteGroup = async (groupId) =>
    Axios.delete(`/group/api/delete-group?groupId=${groupId}`);

  //API get teacher of group
  static getTeacherGroup = async (groupId) =>
    Axios.get(`/group/api/get-teacher?groupId=${groupId}`);

  //API get all student of group
  static getAllStudentGroup = async (groupId) =>
    Axios.get(`/group/api/get/all-student?groupId=${groupId}`);

  //API get one student of group
  static get_one_student_group = async (email, groupId) =>
    Axios.get(`/group/api/get-student?email=${email}&groupId=${groupId}`);

  //API create student in group
  static createStudentGroup = async (data) =>
    Axios.post("/group/api/create-student", data);

  //API delete student in group
  static deleteStudentGroup = async (userId, groupId) =>
    Axios.delete(
      `/group/api/remove-student?userId=${userId}&groupId=${groupId}`
    );

  //API get all group by student
  static get_all_group_student = async (userId) =>
    Axios.get(`/group/api/get-all/group/student?userId=${userId}`);

  //API get all group by teacher
  static get_all_group_teacher = async ({ userId }) =>
    Axios.get(`/group/api/get-all/group/teacher?userId=${userId}`);

  //API find group by keywork
  static find_group = async (keyword) =>
    Axios.get(`/group/api/find-group?keywork=${keyword}`);
}

export default Groups;
