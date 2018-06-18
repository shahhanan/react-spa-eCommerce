import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.products !== undefined) {
      let  products  = this.props.products;
      let populate = []; 
      populate = products.map((products, index) => {
        let image = null;
        if (products.category == "Mobile") {
          image = "mobile.jpg";
        } else {
          image = "laptop.png";
        }
        return (
          <li className="item" key={index}>
            <div className="front">
              <div className="frontimage">
                <img className="img-fluid" src={"./assets/images/" + image} />
              </div>
              <div className="info">
                <header
                  style={{
                    backgroundImage: "url(./assets/images/still01.jpg)"
                  }}
                >
                  <h1 className="itemname" key={products.id}>
                    {" "}
                    {products.company}{" "}
                  </h1>
                  <span className="date">{}</span>
                  <span className="companyinitials">{products.model}</span>
                  <span className="more">Price Rs->{products.price}</span>
                </header>
                <p>Description: {products.category}</p>
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
      return <div> {populate} </div>;
    } else {
      return <div />;
    }
  }
}

class RightSide extends Component {
  render() {
    let { products } = this.props;
    if(this.props.categoryName != undefined){
      var Name = this.props.categoryName;
    }
    
    return (
      <div className="col-md-10 order-md-2">
        <div className="g-pl-15--lg">
          <div className="g-brd-bottom g-brd-gray-light-v4">
            <ul className="group clearfix g-bg-custom">
              <span className="row justify-content-center c-white"> </span>
              <div className="col "style={{ color:'black'}} align="center"> {Name} </div>
              <ListItem products={products} />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RightSide;
