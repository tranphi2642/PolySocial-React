import React, { useState } from "react";
import GroupModal from "./CreateGroupModal";
import { Link } from "react-router-dom";
import NavAdmin from "../../general/NavAdmin/index";
import useLogin from "../../../utils/useLogin/useLogin";
import {
  UilBars,
  UilPlus,
  UilTachometerFastAlt,
  UilSearch,
} from "@iconscout/react-unicons";
import ListGroupActive from "./ListGroupActive";
import ListGroupUNActive from "./ListGroupUnActive";

export default function Groups() {
  const [activeTab, setActiveTab] = useState("tab1");
  const { account } = useLogin();
  const [show, setShow] = useState(false);

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
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
              Thống kê nhóm đã tạo
            </span>
            <Link id="createGroup" onClick={() => setShow(true)}>
              <i>
                <UilPlus />
              </i>{" "}
              Tạo nhóm
            </Link>
          </div>

          <div className="title-1">
            <button
              className={activeTab === "tab1" ? "lively" : ""}
              onClick={handleTab1}
            >
              Danh sách group đã tạo
            </button>
            <button
              className={activeTab === "tab2" ? "lively" : ""}
              onClick={handleTab2}
            >
              Danh sách group đã xoá
            </button>
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
                <option defaultValue="3">Tên nhóm</option>
              </select>
            </div>
          </form>

          <div className="outlet">
            {activeTab === "tab1" ? <ListGroupActive /> : <ListGroupUNActive />}
          </div>
        </div>
      </section>
      <GroupModal onClose={() => setShow(false)} show={show} />
    </React.Fragment>
  );
}
