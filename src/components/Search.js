import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 22px;
  }
`;

export default ({ getGifs }) => {
  const search = e => {
    if (e.key === 'Enter') {
      getGifs(e.target.value);
    }
  };

  return (
    <SearchWrapper>
      <input type="text" onKeyPress={search} />
    </SearchWrapper>
  );
};
