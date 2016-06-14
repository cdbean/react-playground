import React, { Component } from 'react';
import CommentList from './CommentList.jsx'
import CommentForm from './CommentForm.jsx'

export default class CommentBox extends Component {
	render() {
		return (
			<div>
				<CommentList comments={this.props.comments} />
				<CommentForm />
			</div>
		);
	}
}
