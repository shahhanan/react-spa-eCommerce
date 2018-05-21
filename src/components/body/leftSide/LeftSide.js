import React, { Component } from "react";
import ReactBootstrapSlider from 'react-bootstrap-slider';

class Categories extends Component {
    
  render() {
   
    return (
      <div className="g-mb-30 g-color-white">
        <h3 className="h5 mb-3">Categories</h3>

        <ul className="list-unstyled">
          <li className="my-3">
            <a
              className="d-block u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
              href="#" onClick ={() => this.props.handleClickCategorySelection('Laptop')}
            >
              Laptops
              <span className="float-right g-font-size-12">{this.props.laptopCount}</span>
            </a>
          </li>
          <li className="my-3">
            <a
              className="d-block u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
              href="#" onClick ={() => this.props.handleClickCategorySelection('Mobile')}
            >
              Mobile Phones
              <span className="float-right g-font-size-12">{this.props.mobileCount}</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

class ShowMinValue extends Component {
    render(){
        return(
        <div className="col-md-6" >{this.props.value}</div>
    );
    }
}

class ShowMaxValue extends Component {
    render(){
        return(
        <div className="col-md-6" >{this.props.value}</div>
    );
    }
}
class Pricing extends Component {
    constructor(props){
        super(props);
        this.state={   
        currentValue:[1, 1000],   
        step:1,
        min:1,
        max:1000
    };
}

changeValue = (e) =>{
        

let state = JSON.parse(JSON.stringify(this.state));
state.currentValue = [e.target.value[0], e.target.value[1]];
this.setState(state);
this.props.setParams(state.currentValue);

}
  render() {
      console.log(this.state);
    return (
      <div className="g-mb-30 g-color-white">
        <h3 className="h5 mb-3">Pricing</h3>
        
        <div className="text-center">
        <ReactBootstrapSlider
    value={this.state.currentValue}
    
    slideStop={this.changeValue}
    step={this.state.step}
    max={this.state.max}
    min={this.state.min}
    orientation="horizontal"
    reversed={false}
    range={true}
     />
     <div className="row"> 
     <ShowMinValue  value={this.state.currentValue[0]} />
     <ShowMaxValue  value={this.state.currentValue[1]} />
     </div>
        </div>
      </div>
    );
  }
}

class Reset extends Component {
  render() {
    return (
      <div className="g-mb-30">
        <hr />
        <button
          className="btn btn-block u-btn-black g-font-size-12 text-uppercase g-py-12 g-px-25"
          type="button" onClick={() =>this.props.resetClicked()}
        >
          Reset
        </button>
      </div>
    );
  }
}
class LeftSide extends Component {

    resetClick = () =>{
        this.props.setReset();
    }
    
    handleClickCategorySelection = (selection) =>{
        this.props.setCategory(selection);
    }
    setFilterParams = (params) =>{
        this.props.setPricing(params);
    }


  render() {
      
    let { productDetails } = this.props;
    let mobile = 0;
    let laptop = 0;
    let subCat = productDetails.map((data, index) => {
            if(data.category == "Mobile"){
                 mobile = mobile + 1;
            }
            else{
                laptop = laptop + 1;
            }
    });
    return (
      <div className="col-md-2 order-md-1 g-brd-right--lg g-brd-gray-light-v4 g-pt-40">
        <div className="g-pr-15--lg g-pt-60">
          <Categories mobileCount={mobile} laptopCount={laptop} handleClickCategorySelection={this.handleClickCategorySelection}  />
          <Pricing  setParams={this.setFilterParams}/>
          <Reset resetClicked={this.resetClick} />
        </div>
      </div>
    );
  }
}

export default LeftSide;