import React, { useEffect, useState } from 'react'
import { Box, TextField, Button, ThemeProvider, TextareaAutosize } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { createPost } from './postSlice';
import { componentTheme } from '../assets/styles/mui/styles';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { editorConfiguration } from '../assets/ckeditor';
import parse from 'html-react-parser';
import ReactMarkdown from 'react-markdown'
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from 'remark-gfm';

export default function CreatePost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const onSubmit = (e: React.MouseEvent) => {
        const post = {
            title: title,
            content: content
        }
        dispatch(createPost(post))
        navigate(-1)
    }


    console.log(content)


    return (
        <ThemeProvider theme={componentTheme}>
            <Box className='componentClass posts'>
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
                    onChange={(event: any, editor: any) => {
                        const data = editor.getData();
                        setContent(data)
                    }}
                />
                <div>
                    <ReactMarkdown
                        children={content}
                        remarkPlugins={[gfm]}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || "");
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


                <Button className='btnSubmit' onClick={onSubmit}>
                    Submit
                </Button>
            </Box>
        </ThemeProvider>

    )
}
