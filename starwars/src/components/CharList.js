import React from "react";
import Char from "./components/Char";
import styled from "styled-components";

const CharacterList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: left;
  padding-left: 100px;
  padding-right: 100px;
`;

const CharList = props => {
  console.log(props);
  return (
    <CharacterList>
      {props.starwarsChars.map(character => {
        return <Char name={character} key={character.id} />;
      })}
    </CharacterList>
  );
};

export default CharList;
