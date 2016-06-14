import React, { Component } from 'react';
import Comment from './comment.jsx'


export default class commentlist extends Component {
	render() {
		var comments = this.props.comments.map((comment) => {
			return (
				<Comment author={comment.author} date={comment.date} comment={comment.comment} />
			)
		});

		return (
			<div>
				{comments}
			</div>
		);
	}
}
