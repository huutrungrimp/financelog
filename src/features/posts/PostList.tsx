import React, { useContext } from 'react'
import { dataContext } from '../assets/data/dataProvider'
import Typography from '@mui/material/Typography'
import { Box, TextareaAutosize } from '@mui/material'
import parse from 'html-react-parser';
import { Post } from '../../interface';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PostList() {
    const posts = useContext(dataContext)?.posts
    const username = useContext(dataContext)?.username
    console.log(Object.keys(posts).length)
    return (
        <div className='posts'>
            {(Object.keys(posts).length === 0) ? ('') : (posts.map((post: any) => (
                <Row key={post.id} className=''>
                    <Col>
                        <h4>
                            <Link to={'/'+username+'/posts/'+post.id}>{post.title}</Link>
                        </h4>
                    </Col>
                    <Col>
                        <p>Posted by {post.user.username} on {post.dated_on.toString().slice(0, 10)}</p>
                    </Col>
                </Row>
            )))}
        </div>
    )
}
