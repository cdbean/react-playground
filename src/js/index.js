import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentBox from './components/CommentBox.jsx'


var comments = [
{
	author: 'Dong',
	date: '2015-01-01',
	comment: 'right, it is great!'
},
{
	author: 'Ted',
	date: '2015-01-01',
	comment: 'OK, I agree'
}
];

render(
    <CommentBox comments={comments} />,
    document.getElementById('root')
);