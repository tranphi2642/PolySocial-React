import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "../../general/Post";
import { UilSearch, UilSignOutAlt } from "@iconscout/react-unicons";
import Nav from "../../general/Nav/index";
import Asios from "./../../../../api/index";

import "./index.scss";

export default function Page() {
  const [groups, setGroup] = useState([]);
  const [listPosts, setListPost] = useState([]);

  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(0);
  const [prevPage, setPrevPage] = useState(0);
  const [lastList, setLastList] = useState(false);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    getAllData();
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await Asios.Posts.getAllByAllPost(currPage, limit);
    console.log("currPage----> " + currPage);
    if (!response.listPostDTO.length) {
      setLastList(true);
      return;
    }
    setPrevPage(currPage);
    setListPost([...listPosts, ...response.listPostDTO]);
  };


  if (!lastList && prevPage !== currPage) {
    fetchData();
  }
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  };

  const getAllData = async () => {
    const response = await Asios.Groups.getAllGroupStudent();
    setGroup(response);
  };

  console.log(groups);

  return (
    <React.Fragment>
      <Nav />
      <main className="pages">
        <div className="container-page">
          <div className="left">
            <div className="page-search">
              <h3>Nhóm</h3>
              <div className="search">
                <input type="text" placeholder="Tìm kiếm nhóm" />
                <button>
                  <i>
                    <UilSearch />
                  </i>
                </button>
              </div>
              <hr />
              <div className="page-search-join">
                <h4>Nhóm bạn đã tìm kiếm</h4>
                <Link className="page">
                  <div className="page-photo">
                    <img
                      src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                      alt=""
                    />
                  </div>
                  <div className="handle">
                    <h4>SYB.IT16307_3.B2.2022</h4>
                    <p className="text-muted">Nhóm Công khai - 31 thành viên</p>
                  </div>
                  <button>
                    <UilSignOutAlt />
                  </button>
                </Link>
              </div>
              <hr />
              <div className="page-join">
                <h4>Nhóm bạn đã tham gia</h4>
                {groups.map((group, index) => (
                  <Link
                    to={`/pageDetail/${group.groupId}`}
                    state={{ from: group }}
                    className="page"
                    key={index}
                  >
                    <div className="page-photo">
                      <img
                        src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                        alt=""
                      />
                    </div>
                    <div className="handle">
                      <h4>{group.groupName}</h4>
                      <p className="text-muted">
                        Lần hoạt động gần nhất: 1 tháng trước
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="middle">
            {/* <!------------------------------- Feeds ----------------------------> */}
            <div className="feeds">
            <div>
                <div
                  onScroll={onScroll}
                  ref={listInnerRef}
                  style={{ height: "100vh", overflowY: "auto" }}
                >
                  {listPosts.map((post, index) => (
                    <Post {...post} key={index}/>
                  ))}
                </div>
              </div>
            </div>
            {/* <!------------------------------- End Feeds ----------------------------> */}
          </div>
          {/* <!------------------------------- End Middle ----------------------------> */}
        </div>
      </main>
    </React.Fragment>
  );
}
