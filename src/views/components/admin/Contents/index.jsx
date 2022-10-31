import React, { useState } from "react";
import ContentModal from "./CreateContentModal";
import EditContentModal from "./EditContentModal";
import { Link } from "react-router-dom";
import NavAdmin from "../../general/NavAdmin/index";
import {
  UilBars,
  UilPlus,
  UilTachometerFastAlt,
  UilSearch,
  UilEdit,
} from "@iconscout/react-unicons";

import avatar from "../../../../assets/images/1.jpg";
// import EditAccountModal from "../Accounts/EditAccountModal";

export default function Contents() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <React.Fragment>
      <NavAdmin />
      <section className="dashboard">
        <div className="top">
          <i>
            <UilBars />
          </i>

          <div className="info">
            <span>Trần Phi</span>
            <img src={avatar} alt="" />
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
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="body">
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>FPT Polytechnic</td>
                <td>2</td>
                <td>Hiển thị</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateContent"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>FPT Polytechnic</td>
                <td>2</td>
                <td>Hiển thị</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateContent"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>FPT Polytechnic</td>
                <td>2</td>
                <td>Hiển thị</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateContent"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>FPT Polytechnic</td>
                <td>2</td>
                <td>Hiển thị</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateContent"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>FPT Polytechnic</td>
                <td>2</td>
                <td>Hiển thị</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateContent"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>FPT Polytechnic</td>
                <td>2</td>
                <td>Hiển thị</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateContent"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>FPT Polytechnic</td>
                <td>2</td>
                <td>Hiển thị</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateContent"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Trần Mậu Phi</td>
                <td>FPT Polytechnic</td>
                <td>2</td>
                <td>Hiển thị</td>
                <td>2022/10/26</td>
                <td>
                  <Link
                    className="updateContent"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <ContentModal onClose={() => setShow(false)} show={show} />
      <EditContentModal
        onClose={() => setShowEdit(false)}
        showEdit={showEdit}
      />
    </React.Fragment>
  );
}
