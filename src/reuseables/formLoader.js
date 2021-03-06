import React from "react";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading">
        <PulseLoader
          css={override}
          size={10}
          color={"#FFF"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default AwesomeComponent