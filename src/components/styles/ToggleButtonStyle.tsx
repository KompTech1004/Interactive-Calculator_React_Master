import styled from "styled-components";

const ToggleButtonStyle = styled.div`
  .container {
    text-align: center;
  }
  .toggle-switch {
    position: relative;
    width: 110px;
    display: inline-block;
    text-align: left;
    top: 8px;
  }
  .checkbox {
    display: none;
  }
  .label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: 20px;
  }
  .inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
  }
  .inner:before,
  .inner:after {
    float: left;
    width: 50%;
    height: 30px;
    padding: 0;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
    box-sizing: border-box;
  }
  .inner:before {
    content: "Standard";
    padding-left: 10px;
    background-color: #060;
    color: #fff;
  }
  .inner:after {
    content: "Roman";
    padding-right: 10px;
    background-color: #bbb;
    color: #fff;
    text-align: right;
  }
  .switch {
    display: block;
    width: 20px;
    margin: 5px;
    background: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 80px;
    border: 0 solid #bbb;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
  }
  .checkbox:checked + .label .inner {
    margin-left: 0;
  }
  .checkbox:checked + .label .switch {
    right: 0px;
  }
`;

export default ToggleButtonStyle;
