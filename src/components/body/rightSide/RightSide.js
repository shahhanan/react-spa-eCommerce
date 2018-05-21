import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

         let { data } = this.props  ;
        let populate = data.map((data, index) => {
            let image = null;
            if(data.category == 'Mobile'){
             image = 'mobile.jpg';
            }
            else{
             image = 'laptop.png';
            }
        return (
            <li className="item" key={index}>
            <div className="front">
                <div className="frontimage"> 
                    <img className="img-fluid" src={"./assets/images/"+image} /> 
                </div>
                <div className="info">
                <header  style={{backgroundImage:'url(./assets/images/still01.jpg)'}}>
                    <h1 className="itemname" key={data.id} > {data.company} </h1>
                    <span className="date">{}</span>
                    <span className="companyinitials">{data.model}</span>
                    <span className="more">Price Rs->{data.price}</span>
                </header>
                <p>Description: {data.category}</p>
                <p>
                    <button>View</button>
                    <button>Save</button>
                    <button>Buy Now</button>
                </p>
                </div>
            </div>
            </li>
        );
        }); 
    return(
       <div> {populate} </div>     
    );
  }
}

class RightSide extends Component {
  render() {
    let { data } = this.props;
    return (
      <div className="col-md-10 order-md-2">
        <div className="g-pl-15--lg">
          <div className="g-brd-bottom g-brd-gray-light-v4">
            <ul className="group clearfix g-bg-custom">
          <span className="row justify-content-center c-white" > </span>
              <ListItem data={data} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSide;
