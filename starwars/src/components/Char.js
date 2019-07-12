import React from "react";
import styled from "styled-components";

const CharCard = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 18%;
  text-align: left;
  margin: 4px 0px 30px;
  padding-left: 8px;
`;


class Char extends React.Component {
  render() {
    return (
      <CharCard>
        <h3>{this.props.charOnProps.name}</h3>
        <p>
          <strong>Gender:</strong> {this.props.charOnProps.gender}
        </p>
        <p>
          <strong>Born:</strong> {this.props.charOnProps.birth_year}
        </p>
        <p>
          <strong>Hair Color:</strong>
          {this.props.charOnProps.hair_color}
        </p>
        <p>
          <strong>Eye Color:</strong>
          {this.props.charOnProps.eye_color}
        </p>
        <p>
          <strong>Skin Color:</strong>
          {this.props.charOnProps.skin_color}
        </p>
        <p>
          <strong>Height:</strong>
          {this.props.charOnProps.height}
        </p>
        <p>
          <strong>Mass:</strong>
          {this.props.charOnProps.mass}
        </p>
      </CharCard>
    );
  }
}

export default Char;
