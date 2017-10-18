import React, { Component } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const LI = styled.li`
  list-style: none;
  img {
    width: 300px;
    object-fit: contain;
  }
`;

export default class GifItem extends Component {
  state = {
    hovering: false
  };

  setHovering = isHovering => {
    this.setState({ hovering: isHovering });
  };

  render() {
    const { gif } = this.props;
    const { hovering } = this.state;
    console.log(gif);
    return (
      <CopyToClipboard text={gif.images.original.url}>
        <LI>
          <img
            onMouseEnter={() => this.setHovering(true)}
            onMouseLeave={() => this.setHovering(false)}
            src={
              hovering
                ? gif.images.downsized.url
                : gif.images.downsized_still.url
            }
          />
        </LI>
      </CopyToClipboard>
    );
  }
}
