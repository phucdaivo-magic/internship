import React, { Component, Ref } from "react";
import Area from "./Area";
import Items from "./Items";
import Header from "../Components/header";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [
        {
          itemName: "Bàn",
          ListItems: [
            { id: 1, soGhe: 1 ,defaultPosition:{ x: 0,y:0}},
            { id: 2, soGhe: 2 ,defaultPosition:{ x: 0,y:0}},
            { id: 3, soGhe: 3 ,defaultPosition:{ x: 0,y:0}},
            { id: 4, soGhe: 4 ,defaultPosition:{ x: 0,y:0}},
            { id: 5, soGhe: 5 ,defaultPosition:{ x: 0,y:0}},
            { id: 6, soGhe: 6 ,defaultPosition:{ x: 0,y:0}},
            { id: 7, soGhe: 7 ,defaultPosition:{ x: 0,y:0}},
            { id: 8, soGhe: 8 ,defaultPosition:{ x: 0,y:0}},
            { id: 9, soGhe: 9 ,defaultPosition:{ x: 0,y:0}},
          ],
        },
        {
          itemName: "Bếp",
          ListItems: [],
        },
        {
          itemName: "Thanh Toán",
          ListItems: [],
        },
        {
          itemName: "Mang về",
          ListItems: [],
        },
        {
          itemName: "Đặt Bàn",
          ListItems: [],
        },
        {
          itemName: "Quản lí",
          ListItems: [],
        },
      ],
      listItemSelect:[],
      ListTemp: [],
      Category: '',
    };
  }

  transferListItem = (data) => {
    this.setState({
      listItemSelect: data.ListItems,
      Category : data.itemName
    });
  };

 handleStop = (e,data,dragItem) => {
    const [...listItemSelect] = this.state.listItemSelect;
      let {x,y} = data;
      let position= {x ,y};
      listItemSelect.map((item,index)=>{
       if(dragItem.id === item.id ){
         item.defaultPosition = position;
       }
     })
     console.log(this.state);
  };
  // handleSave = ()=>{
  //   let list = [...this.state.listItemSelect];
  //   list.map((item,index)=>{
  //     if()
  //      item.defaultPosition = position;
  //  })
  //  console.log(this.state.Items[0].ListItems); 
  //  console.log(list)

  // }
  render() {
    return (
      <div className="Main">
        <Header
          listItems={this.state.Items}
          transferListItem={this.transferListItem}
        />
        <div className="MainMenu">
          <div className="left bg-dark">


            <button className="btn-primary btn__save" onClick={this.handleSave}>Save</button>
          </div>
          <div className="right bg-secondary">
            <ul className="Navbar_List">
              {this.state.listItemSelect.map((item, index) => {
                return (
                  <Draggable
                    ref={this.wrapper}
                    axis="both"
                    bounds=".MainMenu"
                    grid={[ 20, 20]}
                    key={index}
                    scale={1}
                    onStart={this.handleStart}
                    onStop={(e,data)=>{
                      this.handleStop(e,data,item);
                    }}
                    defaultPosition={item.defaultPosition}
                  >
                    <li key={index} className="List__items">
                      <Items item={item} />
                    </li>
                  </Draggable>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="clear" style={{ clear: "both" }}></div>
      </div>
    );
  }
}

export default Main;
