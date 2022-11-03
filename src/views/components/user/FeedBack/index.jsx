import React from "react";
import Nav from "../../general/Nav/index";
import {
  UilMapMarkerAlt,
  UilPhoneAlt,
  UilEnvelope,
} from "@iconscout/react-unicons";

import "./index.scss";

export default function FeedBack() {
  return (
    <React.Fragment>
      <Nav />
      <main>
        <div className="feedback">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i>
                  <UilMapMarkerAlt />
                </i>
                <div className="topic">Địa chỉ</div>
                <div className="text-one"> 778/B1 Nguyễn Kiệm, P.4</div>
                <div className="text-two">Q. Phú Nhuận, TP. Hồ Chí Minh.</div>
              </div>
              <div className="phone details">
                <i>
                  <UilPhoneAlt />
                </i>
                <div className="topic">Liên hệ</div>
                <div className="text-one">02873088800</div>
                <div className="text-two">02873088800</div>
              </div>
              <div className="email details">
                <i>
                  <UilEnvelope />
                </i>
                <div className="topic">Email</div>
                <div className="text-one">dvsvpoly.hcm@poly.edu.vn</div>
                <div className="text-two">daotaofpoly.hcm@fe.edu.vn</div>
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Gửi tin nhắn cho chúng tôi</div>
              <p>
                Nếu bạn có bất kỳ công việc nào từ tôi hoặc bất kỳ loại câu hỏi
                nào liên quan đến hướng dẫn của tôi, bạn có thể gửi tin nhắn cho
                tôi từ đây.
              </p>
              <form action="#">
                <div className="input-box">
                  <input type="text" placeholder="Nhập tên của bạn" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Nhập email của bạn" />
                </div>
                <div className="input-box message-box">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Nhập lời nhắn của bạn"
                  ></textarea>
                </div>
                <div className="button">
                  <input type="button" defaultValue="Gửi ngay" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
