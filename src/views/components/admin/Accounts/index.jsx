import React, { useState } from "react";
import AccountModal from "./CreateAccountModal";
import EditAccountModal from "./EditAccountModal";
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
import "./index.scss";

export default function Accounts() {
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
              Thống kê tài khoản
            </span>
            <Link id="createAccount" onClick={() => setShow(true)}>
              <i>
                <UilPlus />
              </i>{" "}
              Tạo tài khoản
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
                <option defaultValue="1">MSSV</option>
                <option defaultValue="2">Họ và tên</option>
                <option defaultValue="3">Email</option>
              </select>
            </div>
          </form>

          <table className="styled-table">
            <thead>
              <tr>
                <th>MSSV</th>
                <th>Họ và tên</th>
                <th>Email</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="body">
              <tr className="active-row">
                <td>PS16509</td>
                <td>Trần Mậu Phi</td>
                <td>phitmps16509@fpt.edu.vn</td>
                <td>HDI</td>
                <td>30/09/2022</td>
                <td>
                  <Link
                    className="updateAccount"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>PS16501</td>
                <td>Phan Nguyễn Đăng Trường</td>
                <td>truongpndps16501@fpt.edu.vn</td>
                <td>HDI</td>
                <td>30/09/2022</td>
                <td>
                  <Link
                    className="updateAccount"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>PS14579</td>
                <td>Nguyễn Nhật Cao Thăng</td>
                <td>thangnncps14579@fpt.edu.vn</td>
                <td>HDI</td>
                <td>30/09/2022</td>
                <td>
                  <Link
                    className="updateAccount"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>PS16500</td>
                <td>Võ Thanh Nhã</td>
                <td>nhavtps16500@fpt.edu.vn</td>
                <td>HDI</td>
                <td>30/09/2022</td>
                <td>
                  <Link
                    className="updateAccount"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>PS16590</td>
                <td>Lê Duy Tiến</td>
                <td>tienldps16590@fpt.edu.vn</td>
                <td>HDI</td>
                <td>23/09/2022</td>
                <td>
                  <Link
                    className="updateAccount"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>PS16501</td>
                <td>Phan Nguyễn Đăng Trường</td>
                <td>truongpndps16501@fpt.edu.vn</td>
                <td>HDI</td>
                <td>30/09/2022</td>
                <td>
                  <Link
                    className="updateAccount"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>PS16445</td>
                <td>Đặng Hoàng DUy</td>
                <td>duyhdps16445@fpt.edu.vn</td>
                <td>HDI</td>
                <td>30/09/2022</td>
                <td>
                  <Link
                    className="updateAccount"
                    onClick={() => setShowEdit(true)}
                  >
                    <i>
                      <UilEdit />
                    </i>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>PS14579</td>
                <td>Nguyễn Nhật Cao Thăng</td>
                <td>thangnncps14579@fpt.edu.vn</td>
                <td>HDI</td>
                <td>30/09/2022</td>
                <td>
                  <Link
                    className="updateAccount"
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

      <AccountModal onClose={() => setShow(false)} show={show} />
      <EditAccountModal
        onClose={() => setShowEdit(false)}
        showEdit={showEdit}
      />
    </React.Fragment>
  );
}
