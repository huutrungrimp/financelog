import { Box, TextField, Typography, IconButton, ThemeProvider } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Update from '@mui/icons-material/Update';
import { dataContext } from '../assets/data/dataProvider';
import { variables } from '../assets/data/variables';
import { useAppDispatch } from '../../app/hooks';
import { componentTheme } from '../assets/styles/mui/styles';
import parse from 'html-react-parser';
import { updatePost } from './postSlice';
import { Button, TextareaAutosize } from '@mui/material';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { editorConfiguration } from '../assets/ckeditor';

import ReactMarkdown from 'react-markdown'
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";



export default function UpdatePost() {
    const data = useContext(dataContext)
    const key = useParams().id;
    const postID = (key === undefined) ? ('') : (parseInt(key))
    const navigate = useNavigate()

    const url = `${variables.urlbase}accounts/${data?.username}/posts`
    const dispatch = useAppDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    React.useEffect(() => {
        fetch(url + '/' + postID + '/update', {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                setTitle(res.title);
                setContent(res.content);
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    console.log(title, content)


    const onClick = (e: React.MouseEvent) => {
        const post = {
            id: key,
            title: title,
            content: content
        }
        dispatch(updatePost({
            post
        }));
        navigate(-1)
    }

    return (
        <ThemeProvider theme={componentTheme}>
            <Box className='componentClass posts'>
                <h4>Create Post</h4>
                <Box>
                    <TextField
                        label='Name'
                        name='customerName'
                        value={title}
                        type="text"
                        onChange={e => setTitle(e.target.value)}
                    />
                </Box>
                <CKEditor
                    editor={Editor}
                    config={editorConfiguration}
                    data={content}
                    onChange={(event: any, editor: any) => {
                        const data = editor.getData();
                        setContent(data)
                    }}
                />
                <div className='w-100'>
                    {/* {parse(content)} */}
                </div>
                <div>
                    <ReactMarkdown
                        children={content}
                        remarkPlugins={[gfm]}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || "");
                                console.log(props);
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, "")}
                                        style={a11yDark}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    />
                </div>

                <Button className='btnSubmit' onClick={onClick}>
                    Submit
                </Button>
            </Box>
        </ThemeProvider>

    )
}
