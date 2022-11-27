import React, { useState, useEffect, useRef } from "react";
import Asios from "./../../../../api/index";
import ContentModal from "./CreateContentModal";
import EditContentModal from "./EditContentModal";
import { Link } from "react-router-dom";
import NavAdmin from "../../general/NavAdmin/index";
import useLogin from "../../../utils/useLogin/useLogin";
import {
  UilBars,
  UilPlus,
  UilTachometerFastAlt,
  UilSearch,
  UilEdit,
} from "@iconscout/react-unicons";

export default function Contents() {
  const { account } = useLogin();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [posts, setPost] = useState([]);
  const postId = useRef(0);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const response = await Asios.Content.getAllByAllPost();
    setPost(response.listPostDTO);
  };

  const handleShowEdit = (id) => {
    postId.current = id;
    setShowEdit(true);
  };

  return (
    <React.Fragment>
      <NavAdmin />
      <section className="dashboard">
        <div className="top">
          <i>
            <UilBars />
          </i>

          <div className="info">
            <span>{account.fullName}</span>
            <img src={account.avatar} alt="" />
          </div>
        </div>

        <div className="dash-content">
          <div className="title-1">
            <span>
              <i>
                <UilTachometerFastAlt />
              </i>{" "}
              Thống kê bài viết
            </span>
            <Link id="createContent" onClick={() => setShow(true)}>
              <i>
                <UilPlus />
              </i>{" "}
              Tạo bài viết
            </Link>
          </div>

          <form action="#">
            <div className="search-box">
              <i>
                <UilSearch />
              </i>
              <input type="text" placeholder="Tìm kiếm ở đây" />
            </div>
            <div className="select-box">
              <select className="select">
                <option defaultValue="" defaultChecked>
                  Lọc theo
                </option>
                <option defaultValue="1">Họ và tên</option>
                <option defaultValue="2">Email</option>
                <option defaultValue="3">Tên bài viết</option>
              </select>
            </div>
          </form>

          <table className="styled-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Người tạo</th>
                <th>Nội dung</th>
                <th>Nhóm</th>
                <th>Số lượt bình luận</th>
                <th>Số lượt yêu thích</th>
                <th>Ngày tạo</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="body">
              {posts.map((post, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{post.user.fullName}</td>
                  <td>{post.content}</td>
                  <td>{post.groupId}</td>
                  <td>{post.countComment}</td>
                  <td>{post.countLike}</td>
                  <td>{post.createdDate}</td>
                  <td>
                    <Link
                      className="updateContent"
                      onClick={() => handleShowEdit(post.postId)}
                    >
                      <i>
                        <UilEdit />
                      </i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <ContentModal onClose={() => setShow(false)} show={show} />
      <EditContentModal
        onClose={() => setShowEdit(false)}
        showEdit={showEdit}
        postId={postId}
      />
    </React.Fragment>
  );
}
