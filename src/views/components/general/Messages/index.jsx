import React, { useEffect, useState, useRef } from "react";
import Nav from "../Nav/index";
import { UilPhoneAlt, UilVideo, UilEllipsisV } from "@iconscout/react-unicons";

import attach from "./../../../../assets/images/attach.png";
import img from "./../../../../assets/images/img.png";
import "./index.scss";
import useLogin from "../../../utils/useLogin/useLogin";
import { io } from "socket.io-client";
import { useLocation } from "react-router-dom";
import Asios from "./../../../../api/index";
import { format } from "timeago.js";

let socket;

const CONNECTTION_PORT = "localhost:3002";

export default function Messages() {
  const location = useLocation();
  const { account } = useLogin();
  const [messageList, setMessageList] = useState([{}]);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [nameGroup, setNameGroup] = useState([]);
  const [totalMember, setotalMember] = useState([]);
  const [contactId, setcontactId] = useState([]);
  const [userTyping, setUserTyping] = useState([]);
  const [listContacts, setListContacts] = useState([]);
  const [stuCode, setStuCode] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    try {
      const { from } = location.state;
      var listStudentCode = [];
      var objectStudentCode = {};
      for (let index = 0; index < from.listContact.length; index++) {
        const element = from.listContact[index];
        var objectStudentCode = element;
        listStudentCode.push(objectStudentCode);
      }
      setListContacts(listStudentCode);
    } catch (error) {}
  }, []);

  useEffect(() => {
    try {
      socket = io(CONNECTTION_PORT);
      const { from } = location.state;
      console.log("----", from);
      setRoom(from.groupId);
      setNameGroup(from.groupName);
      setotalMember(from.totalMember);
      connectGroup(from.groupId);
    } catch (error) {}
  }, []);

  useEffect(() => {
    for (let index = 0; index < listContacts.length; index++) {
      const element = listContacts[index];
      if (element.studentCode == account.studentCode) {
        console.log("true 1",element.studentCode)
        setcontactId(element.contactId);
        break;
      }
    }
  });

  useEffect(() => {
    socket.emit("join_room", room);
  }, [room]);

  useEffect(() => {
    socket.on("recevie_message", (data) => {
      setMessageList([...messageList, data]);
    });
  }, [messageList]);

  useEffect(() => {
    socket.on(room + "user-typing", (stuCode, data) => {
      setStuCode(stuCode);
      setUserTyping(data);
    });
  });

  useEffect(() => {
    socket.on(room + "stop-user-typing", (data) => {
      setUserTyping(data);
    });
  });

  useEffect(() => {
    getAllData();
  }, []);

  const handleClick = () => {
    ref.current.focus();
    socket.emit("I'm typing", room, account);
  };
  const handleClickOut = () => {
    socket.emit("I stopped typing", room);
  };
  
  const clickGroup=()=>{
    for (let index = 0; index < listContacts.length; index++) {
      const element = listContacts[index];
      if (element.studentCode == account.studentCode) {
        console.log("true 2 nhaaa",element.studentCode)
        setcontactId(element.contactId);
        break;
      }
    }
  }

  const getAllData = async () => {
    const response = await Asios.Groups.getAllGroupStudent();
    console.log("res", response);
    setGroupList(response);
  };

  const createMessage = async () => {
    const data = {
      content: message,
      contactId: contactId,
    };
    const response = await Asios.Messages.createMessage(data);
    if (response) {
      console.log("true");
    }
  };

  const connectGroup = async (roomId) => {
    const response = await Asios.Messages.getMessage(roomId);
    setMessageList(response.data);
  };

  const getMessage = async (e, roomId, groupName, totalMember, group) => {
    try {
      var listGroup = [];
      listGroup.push(group);
      setListContacts(listGroup)
      let arr =[];
      arr = listGroup[0].listContact;

      for (let index = 0; index < arr.length; index++) {

        if (arr[index].studentCode == account.studentCode) {
          setcontactId(arr[index].contactId);
          break;
        }
      }

      setRoom(roomId);
      socket.emit("join_room", roomId);
      const response = await Asios.Messages.getMessage(roomId);
      setRoom(roomId);
      setNameGroup(groupName);
      setotalMember(totalMember);
      
      try {
        setMessageList(response.data);
      } catch (error) {}
      console.log("resp", response);
    } catch (error) {
      console.log("Failed to fetch post list: ", error);
    }
  };

  const sendMessgae = async () => {
    try {
      let messageContent = {
        room: room,
        content: {
          studentCode: account.studentCode,
          content: message,
        },
      };
      createMessage();
      await socket.emit("send_message", messageContent);
      setMessageList([...messageList, messageContent.content]);
      setMessage("");
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <Nav />
      <main className="main-message">
        <div className="container-message">
          <div className="chats">
            <div className="sidebar-message-top">
              <span>PolySocial Chat</span>
            </div>
            <div className="search">
              <input type="text" placeholder="Tìm kiếm" />
              <i className="uil uil-search"></i>
            </div>
            <div className="chat">
              {groupList.map((group, index) => (
                <div
                  className="userChat"
                  onClick={(e) =>
                    getMessage(
                      e,
                      group.groupId,
                      group.groupName,
                      group.totalMember,
                      group
                    )
                  }
                >
                  <img
                    src="https://caodang.fpt.edu.vn/wp-content/uploads/PolyBeeXDesign_Chien-Le_Bai2-scaled.jpg"
                    alt=""
                  />
                  <div className="userChatInfo">
                    <span>{group.groupName}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="messages-right">
            <div className="sidebar-message">
              <div className="sidebar-img">
                <img
                  src="https://caodang.fpt.edu.vn/wp-content/uploads/PolyBeeXDesign_Chien-Le_Bai2-scaled.jpg"
                  alt=""
                />
                <div className="active"></div>
              </div>
              <div className="sidebarInfo">
                <span>{nameGroup}</span>
                <h6>{totalMember + " Thành viên"}</h6>
              </div>
              <div className="sidebarIcon">
                <i>
                  <UilPhoneAlt />
                </i>
                <i>
                  <UilVideo />
                </i>
                <i>
                  <UilEllipsisV />
                </i>
              </div>
            </div>

            <div className="message-body-right">
              {messageList.map((value, key) => {
                return (
                  <div
                    className={
                      value.studentCode == account.studentCode
                        ? "message owner"
                        : "message"
                    }
                  >
                    <div className="messageInfo">
                      <img src={value.avatar} alt="" />
                      <span>{value.fullName}</span>
                      <span>
                        {value.isAdmin ? "Quản trị viên" : "Thành viên"}{" "}
                      </span>
                      <span>{format(value.createdDate)}</span>
                    </div>
                    <div className="messageContent">
                      <p>{value.content}</p>
                    </div>
                    {/* <span>{value.studentCode==stuCode?userTyping:''}</span> */}
                  </div>
                );
              })}
            </div>
            {userTyping}
            <div className="input">
              <input
                type="text"
                ref={ref}
                onBlur={handleClickOut}
                onFocus={handleClick}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Hãy nhập tin nhắn ..."
              />
              <div className="send">
                <img src={attach} alt="" />
                <input type="file" id="file" style={{ display: "none" }} />
                <label htmlFor="file">
                  <img src={img} alt="Gửi ảnh" />
                </label>
                <button onClick={sendMessgae}>Gửi</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
