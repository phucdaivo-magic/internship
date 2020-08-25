import React, { Component } from 'react';

class Header extends Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
    }
    renderListItems = () =>{
        let ListItem = this.props.listItems;
        return ListItem.map((item, index) => {
          return (
            <li key={index} className="List__items">
              <a onClick={()=>{
                  this.props.transferListItem(item);
              }}>{item.itemName}</a>    
            </li>
          );
        });
    }


    render() {
        return (
            <div className="Header">
                <ul className="Navbar_List">
                    {this.renderListItems()}
                </ul>
            </div>
        );
    }
}

export default Header;