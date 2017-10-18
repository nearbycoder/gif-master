import React, { Component } from 'react';
import GifItem from './GifItem';
import styled from 'styled-components';

const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default class GifList extends Component {
  render() {
    return (
      <UL>
        {this.props.gifs.map((gif, index) => <GifItem key={index} gif={gif} />)}
      </UL>
    );
  }
}
