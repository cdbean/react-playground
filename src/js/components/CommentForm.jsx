import React, { Component } from 'react';

export default class CommentForm extends Component {
	render() {
		return (
			<div>
				<form className="commentForm">
					<textarea></textarea>
					<button>Post</button>
				</form>
			</div>
		);
	}
}
