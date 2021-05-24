import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Slider from "react-slick";
import { SLICK_SLIDER_CONFIG } from "../../Configurations/SlickSliderConfig";

export default class AutoSwipe extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    SLICK_SLIDER_CONFIG["infinite"] = this.props.listLength > 4 ? true : false;
    return <Slider {...SLICK_SLIDER_CONFIG}>{this.props.children}</Slider>;
  }
}
