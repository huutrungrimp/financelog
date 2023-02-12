import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Divider, Link } from '@mui/material';
import { dataContext } from '../assets/data/dataProvider';
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ThemeProvider } from 'react-bootstrap';
import { topPanelTheme } from '../assets/styles/mui/styles';
import remarkGfm from "remark-gfm";


export default function Resume() {

    const posts = React.useContext(dataContext)?.posts
    const resume = (Object.keys(posts).length === 0) ? ('') : (posts.filter((post: any) => post.title.toLowerCase() === 'resume'))
    console.log(resume[0]?.content)

    return (
        <div id='resume' className='resume'>
            <div className='resume-header'>
                <h2>Trung Nguyen</h2>
                <div>
                    <p><a href="#">Email: huutrungrimp@gmail.com</a></p>
                    <p>Phone: 613-262-xxxx</p>
                    <p>
                        <Link href='https://github.com/huutrungrimp'><GitHubIcon /></Link> | <Link href='https://www.linkedin.com/in/trung-nguyen-183568245/'><LinkedInIcon /></Link>| Website: https://github.com
                    </p>                   
                </div>                
            </div>
            {/* <div className='resume-devider'></div> */}
            <div className='resume-content'>
                <ReactMarkdown
                    children={resume[0]?.content}
                    remarkPlugins={[remarkGfm]}
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
    );
}