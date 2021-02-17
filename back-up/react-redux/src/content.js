import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeSwitch from "./themeSwitch";
import { connect } from "react-redux";

class Content extends Component {
  render() {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    );
  }
}

Content.propTypes = {
  themeColor: PropTypes.string
};

const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  };
};
Content = connect(mapStateToProps)(Content);

export default Content;
