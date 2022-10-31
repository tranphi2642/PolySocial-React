import React from "react";

const CustomModal = (props) => {
  if (!props.showCustom) {
    return null;
  }

  return (
    <div className="customize-theme" onClick={props.onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <h2>Giao điện custom</h2>
        <p className="text-muted">
          Quản lý cỡ chữ, màu sắc và màu nền tuỳ theo ý của bạn
        </p>

        <div className="font-size">
          <h4>Cỡ chữ</h4>
          <div>
            <h6>Aa</h6>
            <div className="choose-size">
              <span className="font-size-1"></span>
              <span className="font-size-2"></span>
              <span className="font-size-3 active"></span>
              <span className="font-size-4"></span>
              <span className="font-size-5"></span>
            </div>
            <h3>Aa</h3>
          </div>
        </div>

        <div className="color">
          <h4>Màu sắc</h4>
          <div className="choose-color">
            <span className="color-1"></span>
            <span className="color-2"></span>
            <span className="color-3 active"></span>
            <span className="color-4"></span>
            <span className="color-5"></span>
          </div>
        </div>

        <div className="background">
          <h4>Màu nền</h4>
          <div className="choose-bg">
            <div className="bg-1 active">
              <span></span>
              <h5 htmlFor="bg-1">Trắng</h5>
            </div>

            <div className="bg-2">
              <span></span>
              <h5 htmlFor="bg-2">Sầm</h5>
            </div>

            <div className="bg-3">
              <span></span>
              <h5 htmlFor="bg-3">Đêm</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
