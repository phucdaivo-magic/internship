import React from "react";
import "./style.scss";
import dataTab from "../../data/tab";
import Dragable from "../../components/Dragable/index";
import Draggable from "react-draggable";
import ReactDOM from "react-dom";

const Navbar = () => {
  const [state, setstate] = React.useState([]);

  const handleData = (e) => {
    setstate(e);
  };

  const renderItems = () => {
    if (state.length) {
      const saveArea = <div>{state.map((item, index) => {})}</div>;

      ReactDOM.render(saveArea, document.getElementById("description"));
    }
  };

  const renderTab = () =>
    dataTab.map((item, index) => (
      <li className="nav-item" key={index}>
        <a
          className={index === 0 ? "nav-link active" : "nav-link"}
          id={`pills-${item.id}-tab-fill`}
          data-toggle="pill"
          href={`#pills-${item.id}-fill`}
          role="tab"
        >
          {item.name}
        </a>
      </li>
    ));

  const renderContentTab = () =>
    dataTab.map((item, index) => (
      <div
        className={index === 0 ? "tab-pane fade show active" : "tab-pane fade"}
        id={`pills-${item.id}-fill`}
        role="tabpanel"
        key={index}
      >
        <div className="container-fluid area">
          {item.id == "ban" ? (
            <div className="row area-table">
              <div className="area-left">
                <div className="area-content">
                  <div className="title">
                    <h4>Khu vực 1</h4>
                    <i className="far fa-calendar-alt"></i>
                  </div>
                  <div className="description" id="description"></div>
                  <div className="bottom-btn">
                    <button type="text">Trở về</button>
                    <button type="text" onClick={() => renderItems()}>
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
              <div className="area-right">
                <div className="searchbox">
                  <div className="input-group p-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập tên bàn hoặc số ghế"
                    />
                    <div className="input-group-append">
                      <button type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                  <div className="furniture">
                    <div
                      style={{
                        width: "350px",
                        float: "right",
                        padding: "0 35px",
                      }}
                    >
                      <Dragable getData={handleData} />
                    </div>
                  </div>
                  <div className="infor text-white d-inline-block">
                    <button type="text">Bàn</button>
                    <button type="text">Thông tin phụ</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="box"
              style={{
                height: "500px",
                width: "500px",
                float: "right",
              }}
            >
              <div
                style={{
                  height: "1000px",
                  width: "1349px",
                  padding: "10px",
                  position: "absolute",
                  left: 0,
                }}
              >
                <Draggable bounds="parent">
                  <div className="box">
                    I can only be moved within my offsetParent.
                    <br />
                    <br />
                    Both parent padding and child margin work properly.
                  </div>
                </Draggable>
                <Draggable bounds="parent">
                  <div className="box">
                    I also can only be moved within my offsetParent.
                    <br />
                    <br />
                    Both parent padding and child margin work properly.
                  </div>
                </Draggable>
              </div>
            </div>
          )}
        </div>
      </div>
    ));

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  return (
    <div className="myDemo">
      <div className="navbar">
        <div className="trademark">
          <i className="fas fa-hard-hat"></i>
          <h3>Nhà hàng nhật bản</h3>
        </div>
        <ul
          className="nav nav-pills mb-3 nav-fill"
          id="pills-tab-1"
          role="tablist"
        >
          {renderTab()}
        </ul>
        <div className="func">
          Ngày {today}
          <div>
            <i className="fa fa-stopwatch"></i>
          </div>
          <div>
            <i className="fa fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent-1">
        {renderContentTab()}
      </div>
    </div>
  );
};

export default Navbar;
