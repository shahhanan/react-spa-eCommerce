import React, { Component } from "react";
import ReactBootstrapSlider from "react-bootstrap-slider";

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
  
changeValue = (e) =>{
this.props.handleClickFilterChangevalue(e.target.value[0], e.target.value[1]);

}
  render() {
    let filterData = this.props.filterData;
    return (
      <div className="g-mb-30 g-color-white">
      <h3 className="h5 mb-3">Pricing</h3>
        
        <div className="text-center">
        <ReactBootstrapSlider
        value={filterData.currentValue}
        
        slideStop={this.changeValue}
        step={filterData.step}
        max={filterData.max}
        min={filterData.min}
        orientation="horizontal"
        reversed={false}
        range={true}
        />
        <div className="row"> 
        <ShowMinValue  value={filterData.currentValue[0]} />
        <ShowMaxValue  value={filterData.currentValue[1]} />
        </div>
        </div>
      </div>
    );
  }
}
export default Pricing;
