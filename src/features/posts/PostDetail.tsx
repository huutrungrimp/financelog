import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Post } from '../../interface';
import { dataContext } from '../assets/data/dataProvider';
import { postObject, variables } from '../assets/data/variables';
import parse from 'html-react-parser';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'

import ReactMarkdown from 'react-markdown'
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeProvider } from 'react-bootstrap';
import { topPanelTheme } from '../assets/styles/mui/styles';


export default function PostDetail() {
  const navigate = useNavigate()
  const username = useContext(dataContext)?.username
  const id = useParams().id;
  const postID = (id === undefined) ? ('') : (parseInt(id))

  const url = `${variables.urlbase}accounts/posts`
  const [post, setPost] = React.useState<any>('')

  React.useEffect(() => {
    fetch(url + '/' + postID, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(res => {
        setPost(res)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className='posts'>
      {(Object.keys(post).length === 0) ? ('') : (
        <ThemeProvider theme={topPanelTheme}>
          <div>
            <div className='d-flex justify-content-between'>
              <h4></h4>
              <div>
                <Button
                  variant="text"                  
                  sx={{ textTransform: 'none' }}
                  startIcon={<DeleteOutlineIcon color="secondary"  />}
                  onClick={() => { navigate(`/${username}/posts/${id}/delete`) }}
                >
                  Delete
                </Button>
                <Button
                  variant="text"
                  color="primary"
                  sx={{ textTransform: 'none' }}
                  endIcon={<UpdateIcon />}
                  onClick={() => { navigate(`/${username}/posts/${id}/update`) }}
                >
                  Update
                </Button>
              </div>
            </div>
            <div>
              <ReactMarkdown
                children={post.content}
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
          </div>
        </ThemeProvider>
      )}
    </div>
  )
}
