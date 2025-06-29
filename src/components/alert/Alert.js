/* import:
  React -> Framework

  Package || Framework:
  React
*/

import React, { Component } from "react";

class Alert extends Component {
  state = {
    showModal: false,
  };
  componentRender = () => {
    const local = localStorage.getItem("sb_wiz.zpc.__ag");
    if (local !== "cl__ag") {
      return (
        <>
          {/* What will return in case of first sight */}
          {this.state.showModal !== true && (
            <>
              <div className="alert">
                {/* Svg (web-cookie icon) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  style={{ position: "absolute", left: "15px", top: "15px" }}
                  viewBox="0 0 36 36"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      fill="#E49025"
                      d="M34.793 12.227C32.195 4.638 24.799-.326 16.796.171c-1.598.099-3.18.413-4.703.935a1.099 1.099 0 0 0 .711 2.078 15.736 15.736 0 0 1 4.127-.82c7.016-.428 13.505 3.918 15.784 10.575a15.577 15.577 0 0 1-.754 11.976 15.576 15.576 0 0 1-9 7.935c-8.18 2.798-17.112-1.576-19.911-9.755a15.594 15.594 0 0 1-.744-6.884 4.116 4.116 0 0 0 3.928.692 4.104 4.104 0 0 0 2.52-2.437c.565.27 1.17.409 1.78.409.45 0 .902-.075 1.34-.225a4.1 4.1 0 0 0 2.373-2.092 4.103 4.103 0 0 0 .199-3.156c-.038-.111-.09-.215-.137-.321l.016-.005a4.135 4.135 0 0 0 2.78-3.557 1.098 1.098 0 1 0-2.189-.188 1.937 1.937 0 0 1-2.78 1.573 1.099 1.099 0 0 0-.966 1.973c.118.058.239.106.36.152.052.061.11.118.175.168.308.232.537.549.662.916a1.92 1.92 0 0 1-.093 1.478 1.923 1.923 0 0 1-1.111.98 1.918 1.918 0 0 1-1.478-.093 1.925 1.925 0 0 1-.98-1.111 1.099 1.099 0 0 0-2.078.711c.022.066.05.128.076.19.008.033.012.066.023.098.167.489.134 1.014-.094 1.478a1.92 1.92 0 0 1-1.111.979 1.918 1.918 0 0 1-1.478-.092 1.92 1.92 0 0 1-.98-1.11 1.091 1.091 0 0 0-.164-.302 1.099 1.099 0 0 0-2.145-.424c-1.074 3.585-1 7.358.217 10.912 2.539 7.414 9.495 12.087 16.926 12.087 1.916 0 3.863-.31 5.774-.965a17.76 17.76 0 0 0 10.263-9.048 17.758 17.758 0 0 0 .859-13.654"
                    ></path>
                    <path
                      fill="#583D29"
                      d="M25.028 23.722a1.777 1.777 0 1 1 0 3.555 1.777 1.777 0 0 1 0-3.555M29.146 15.35a1.777 1.777 0 1 1 0 3.555 1.777 1.777 0 0 1 0-3.554M21.831 8.523a1.777 1.777 0 1 0 1.152 3.363 1.777 1.777 0 0 0-1.152-3.363M18.466 16.72a1.777 1.777 0 1 1 0 3.554 1.777 1.777 0 0 1 0-3.554M14.553 25.892a1.778 1.778 0 1 1 0 3.556 1.778 1.778 0 0 1 0-3.556M8.174 20.02a1.778 1.778 0 1 1 0 3.556 1.778 1.778 0 0 1 0-3.555"
                    ></path>
                  </g>
                </svg>
                {/* Text Message */}
                <div className="alert-title">
                  {this.props.language === "English" ||
                  this.props.language === "Choose Language"
                    ? "The web uses a hook"
                    : "Интернет использует крючок"}
                </div>
                <div className="alert-text">
                  {this.props.language === "English" ||
                  this.props.language === "Choose Language"
                    ? 'Click the "Agree" button to agree. If you refuse consent will be sent automatically. Because it is needed'
                    : "Нажмите кнопку «Согласен», чтобы согласиться. Если вы откажетесь, согласие будет отправлено автоматически. Потому что это нужно"}
                </div>
                <div className="alert-button-container">
                  {/* Local transfer */}
                  <div
                    className="alert-btn-not"
                    onClick={() => {
                      localStorage.setItem("sb_wiz.zpc.__ag", "cl__ag");
                      this.setState((state) => {
                        return { showModal: (state.showModal = true) };
                      });
                    }}
                  >
                    {this.props.language === "English" ||
                    this.props.language === "Choose Language"
                      ? "Don't Agree"
                      : "Не согласен"}
                  </div>
                  {/* Local transfer */}
                  <div
                    className="alert-btn-agree"
                    onClick={() => {
                      localStorage.setItem("sb_wiz.zpc.__ag", "cl__ag");
                      this.setState((state) => {
                        return { showModal: (state.showModal = true) };
                      });
                    }}
                  >
                    {this.props.language === "English" ||
                    this.props.language === "Choose Language"
                      ? "Agree"
                      : "согласен"}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      );
    }
  };
  render() {
    return <>{this.componentRender()}</>;
  }
}

export default Alert;
