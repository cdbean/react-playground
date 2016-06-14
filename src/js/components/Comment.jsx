import React, { Component } from 'react';


class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="commentContent">{this.props.comment}</p>
        <span className="commentAuthor">{this.props.author}</span>
        <span className="commentDate">{this.props.date}</span>
      </div>
    );
  }
}

export default Comment