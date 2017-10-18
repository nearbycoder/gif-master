import React, { Component } from 'react';
import styled from 'styled-components';

const UL = styled.ul`
  margin: 0 auto;
  display: flex;
  max-width: 600px;
`;

const LI = styled.li`
  display: inline-block;
  cursor: pointer;
  padding: 30px;
  font-size: 30px;
  ${props =>
    props.currentPage &&
    `
    color: white;
    background-color: red;
  `};
`;

export default class Pagination extends Component {
  get count() {
    const { count, total_count } = this.props.pagination;
    const totalPages = Math.round(total_count / count);
    return Array(totalPages >= 8 ? 8 : totalPages)
      .fill(0)
      .map((e, i) => i + 1);
  }

  get currentPage() {
    const { count, offset } = this.props.pagination;
    return offset / count + 1;
  }

  setPagination(pageCount) {
    const { count } = this.props.pagination;
    this.props.setPagination(count * pageCount);
  }

  render() {
    if (this.props.pagination.total_count === 0) return null;
    return (
      <UL>
        {this.count.map((count, index) => (
          <LI
            key={index}
            currentPage={count === this.currentPage}
            onClick={() => this.setPagination(index)}>
            {count}
          </LI>
        ))}
      </UL>
    );
  }
}
