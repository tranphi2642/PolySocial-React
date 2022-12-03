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
  const [userName, setUserName] = useState([]);
  const [avatar, setAvatar] = useState([]);
  const [avatarGroup, setAvatarGroup] = useState([]);
  const [status, setStatus] = useState([false]);
  const [listcontactId, setListcontactId] = useState([]);


  const ref = useRef(null);

  // useEffect(()=>{
  //   socket = io(CONNECTTION_PORT);
  // })

    useEffect(() => {
    for (let index = 0; index < listContacts.length; index++) {
      const element = listContacts[index];
      if (element[1] === account.studentCode) {
        setcontactId(element[0]);
        break;
      } else {
        // arr.push(element[0]);
        // setUserName(element[3].fullName);
        // setAvatar(element[2].avatar);
      }
    }
  });

  useEffect(() => {
    getNameGroupDESC();
  }, []);

  useEffect(() => {
    try {
      socket = io(CONNECTTION_PORT);

      const { from } = location.state;
      // console.log("--from 111", from);
      setRoom(from.roomId);
      getMessageUser(from.roomId);
      setUserName(from.friendName)
      setAvatar(from.friendAvatar)
      setListContacts(from.listContact);
      //

      for (let index = 0; index < from.listContact.length; index++) {
        const element = from.listContact[index];
        if (element.studentCode === account.studentCode) {
          setcontactId(element.contactId);
          break;
        } else {
        }
      }

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
      setRoom(from.roomId);
      setNameGroup(from.groupName);
      setotalMember(from.totalMember);
      connectGroup(from.roomId);
      setAvatarGroup(from.avatarGroup);
    } catch (error) {}
  }, []);

  useEffect(() => {
    socket.emit("join_room", room);
  }, [room]);
  //
  useEffect(() => {
    socket.on("get_one_message", function () {
      for (let index = 0; index < 4; index++) {
        getNameGroupDESC();
      }
    });
  }, [status]);

  //
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

  const handleClick = () => {
    ref.current.focus();
    socket.emit("I'm typing", room, account);
  };
  const handleClickOut = () => {
    socket.emit("I stopped typing", room);
  };




  const getNameGroupDESC = async () => {
    const data = {
      userId: 1,
    };
    const response = await Asios.Groups.getNameGroupDESC(data);
    // console.log("data--", response.data);
    const arr = [];
    for (let index = 0; index < response.data.length; index++) {
      const listNameGr = {};
      const element = response.data[index];
      // console.log("data-element-", element);
      const names = element.name.split(",");
      const n = account.fullName;
      const getName = names.filter((name) => name !== n);
      
     try {
      const Avatar = element.avatar.split(",");
      const ns = account.avatar;
      const getAvatar = Avatar.filter((name) => name !== ns);
      
      if(getAvatar[0]===account.avatar){
          listNameGr.avatar = element.avatar
      }else{
        listNameGr.avatar = getAvatar[0];
      }
     } catch (error) {
      
     }

      listNameGr.roomId = element.roomId;
      listNameGr.lastMessage = element.lastMessage;
      
      listNameGr.totalMember = element.totalMember;
      listNameGr.status = element.status;
      if (getName[0] === account.fullName) {
        listNameGr.name = element.name;
      } else {
        
        listNameGr.name = getName[0];
      }
      listNameGr.listContacts = element.listContacts;
      listNameGr.lastUpDateDate = element.lastUpDateDate
      arr.push(listNameGr);
    }
    console.log("arrr----", arr);
    setGroupList(arr);
    setStatus(true);
  };
  
  

  const createMessage = async () => {
    const data = {
      content: message,
      contactId: contactId,
      roomId: room,
      listcontactId:listcontactId,  
    };
    const response = await Asios.Messages.createMessage(data);
    if (response) {
      await getNameGroupDESC();
    }
  };

  const connectGroup = async (roomId) => {
    const response = await Asios.Messages.getMessage(roomId);
    setMessageList(response.data);
  };

  const getMessageUser = async (roomId) => {
  
    try {
      // console.log("roomId,,,,", roomId);
      socket.emit("join_room", roomId);
      const response = await Asios.Messages.getMessage(roomId);
      // console.log("rrrr", response);
      try {
        setMessageList(response.data);
      } catch (error) {}
      console.log("resp", response);
    } catch (error) {
      console.log("Failed to fetch post list: ", error);
    }
  };
  
  // const updateViewedStatus=(data)=>{
  //   console.log("data",data)
  // }

  const getMessage = async (
    e,
    roomId,
    groupName,
    totalMember,
    avatar,
    group
  ) => {
    try {
      console.log("roomId,,,,", roomId);
      console.log("group--", group);
      setAvatarGroup(avatar);
      setRoom(roomId);
      socket.emit("join_room", roomId);
      const response = await Asios.Messages.getMessage(roomId);
      setRoom(roomId);
      setNameGroup(groupName);
      setotalMember(totalMember);
      setListContacts(group.listContacts);
      const arr=[];
      for (let index = 0; index < group.listContacts.length; index++) {
        const element = group.listContacts[index];
        if (element[1] === account.studentCode) {
          const data = {
            contactId: element[0],
          };
          const responseUpdateviewed=await Asios.Messages.updateviewedStatus(data);
          if(responseUpdateviewed){
            console.log("update trueeeee")
            getNameGroupDESC();
          }
          // break;
        } else {
          arr.push(element[0]);
        }
      }
      setListcontactId(arr);
      console.log("listtttt",arr);

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
          avatar:account.avatar,
          fullName:account.fullName
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
                      group.roomId,
                      group.name,
                      group.totalMember,
                      group.avatar,
                      group
                    )
                  }
                >
                  <img src={group.avatar} alt="" />
                  <div className="userChatInfo">
                    <p style={{color:"green"}}>{group.status?'đã xem':'Chưa xem'}</p>
                    <span>{group.name}</span>
                    <p>{group.lastMessage}</p>
                    <p style={{color: "red"}}>{new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(new Date(group.lastUpDateDate))}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="messages-right">
            <div className="sidebar-message">
              <div className="sidebar-img">
                <img src={avatarGroup ? avatarGroup : avatar} alt="" />
                <div className="active"></div>
              </div>
              <div className="sidebarInfo">
                <span>{nameGroup ? nameGroup : userName}</span>
                <h6>{totalMember ? totalMember + " thành viên" : ""}</h6>
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
                      value.studentCode === account.studentCode
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
                value={message}
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
