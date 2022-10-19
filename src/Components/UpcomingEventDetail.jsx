import React, { Component } from "react";
import { secondaryColor } from "../Utils/colors";

export class UpcomingEventDetail extends Component {
  render() {
    return (
      <div className="grid pd-v-max" style={{ minHeight: '75px', gridTemplateColumns: 'auto 1fr', gridTemplateRows: '19px auto', gridGap: '10.5px'}}>
        <span className="material-symbols-outlined" style={{color: '#9B9B9B'}}>{this.props.icon}</span>
        <div className=" grid" style={{gridTemplateColumns: '100px', gridAutoColumns: '100px', gridAutoFlow: 'column', alignItems: 'center', color: '#3C3C3C' }}>
            <h4 style={{fontSize: '14px'}}>{this.props.detailTitleOne}</h4>
            <h4 style={{fontSize: '14px'}}>{this.props.detailTitleTwo}</h4>
        </div>

        <div className=" grid" style={{gridTemplateColumns: '100px', gridAutoColumns: '100px', gridAutoFlow: 'column', alignItems: 'center', gridColumn: '2/3', color: secondaryColor }}>
            <h4 style={{fontSize: '14px', color: secondaryColor}}>{this.props.detailOne}</h4>
            <h4 style={{fontSize: '14px'}}>{this.props.detailTwo}</h4>
        </div>
      </div>
    );
  }
}

export default UpcomingEventDetail;
