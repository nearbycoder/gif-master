import React, { Component } from 'react';
import Search from '../../components/Search';
import GifList from '../../components/GifList';
import Pagination from '../../components/Pagination';

export default class App extends Component {
  state = {
    search: '',
    gifs: [],
    pagination: { total_count: 0, count: 0 }
  };

  getGifs = searchValue => {
    this.queryForGifs(searchValue);
  };

  queryForGifs = (q, offset = 0) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env
        .REACT_APP_API_KEY}&q=${q}&offset=${offset}`
    )
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          search: q,
          gifs: result.data,
          pagination: result.pagination
        });
      });
  };

  setPagination = offset => {
    console.log('made it', offset);
    this.queryForGifs(this.state.search, offset);
  };

  render() {
    return (
      <div>
        <Search getGifs={this.getGifs} />
        <Pagination
          setPagination={this.setPagination}
          pagination={this.state.pagination}
        />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
