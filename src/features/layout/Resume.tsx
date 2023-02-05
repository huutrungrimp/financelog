import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Divider } from '@mui/material';


export default function Resume() {

    return (
        <Row id='resume' className='resume'>
            <Box className='text-center mb-3 mt-0'>
                <h3 >Trung Nguyen</h3>
                <span className='text-center'>Email: huutrungrimp@gmail.com, Phone: 613-262-xxxx</span> <br />
                <span>
                    <GitHubIcon /> | <LinkedInIcon /> | Website: https://github.com
                </span>
            </Box>
            <Divider sx={{ width: '50%', backgroundColor: 'blue', margin: 'auto'}} />
            <Row id='experiences'>
                <Col sx={12} md lg={2}>
                    <h4>Experience</h4>
                </Col>
                <Col sx={12} md lg={10}>
                    <p style={{ textAlign: 'justify' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, est cumque? Ipsa officia repellat quia provident facere nam atque dolorem, expedita est? Molestias dolor tenetur pariatur dolore reprehenderit? Modi, quidem.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, exercitationem! Quisquam harum nemo quaerat fugit ut rem molestiae illum. Unde fuga in, hic amet minus repellat natus debitis assumenda? Voluptate.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nobis, quod eligendi rerum, modi sunt aperiam quis aut voluptatem voluptatum sed aliquam, quae eos quibusdam perspiciatis perferendis magnam ea doloremque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eius doloribus aspernatur cupiditate maiores iusto repudiandae officia fuga vel obcaecati culpa id commodi, earum molestias laudantium itaque qui harum magni.

                    </p>
                </Col>
            </Row>
            <Row id='skills'>
                <Col sx={12} md lg={2}>
                    <h4>Skills</h4>
                </Col>
                <Col sx={12} md lg={10}>
                    <p style={{ textAlign: 'justify' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, est cumque? Ipsa officia repellat quia provident facere nam atque dolorem, expedita est? Molestias dolor tenetur pariatur dolore reprehenderit? Modi, quidem.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, exercitationem! Quisquam harum nemo quaerat fugit ut rem molestiae illum. Unde fuga in, hic amet minus repellat natus debitis assumenda? Voluptate.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nobis, quod eligendi rerum, modi sunt aperiam quis aut voluptatem voluptatum sed aliquam, quae eos quibusdam perspiciatis perferendis magnam ea doloremque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eius doloribus aspernatur cupiditate maiores iusto repudiandae officia fuga vel obcaecati culpa id commodi, earum molestias laudantium itaque qui harum magni.

                    </p>
                </Col>
            </Row>
            <Row id='education'>
                <Col sx={12} md lg={2}>
                    <h4>Projects</h4>
                </Col>
                <Col sx={12} md lg={10}>
                    <p style={{ textAlign: 'justify' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, est cumque? Ipsa officia repellat quia provident facere nam atque dolorem, expedita est? Molestias dolor tenetur pariatur dolore reprehenderit? Modi, quidem.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, exercitationem! Quisquam harum nemo quaerat fugit ut rem molestiae illum. Unde fuga in, hic amet minus repellat natus debitis assumenda? Voluptate.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nobis, quod eligendi rerum, modi sunt aperiam quis aut voluptatem voluptatum sed aliquam, quae eos quibusdam perspiciatis perferendis magnam ea doloremque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eius doloribus aspernatur cupiditate maiores iusto repudiandae officia fuga vel obcaecati culpa id commodi, earum molestias laudantium itaque qui harum magni.

                    </p>
                </Col>
            </Row>
            <Row id='interests'>
                <Col sx={12} md lg={2}>
                    <h4>Interests</h4>
                </Col>
                <Col sx={12} md lg={10}>
                    <p style={{ textAlign: 'justify' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio, est cumque? Ipsa officia repellat quia provident facere nam atque dolorem, expedita est? Molestias dolor tenetur pariatur dolore reprehenderit? Modi, quidem.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, exercitationem! Quisquam harum nemo quaerat fugit ut rem molestiae illum. Unde fuga in, hic amet minus repellat natus debitis assumenda? Voluptate.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nobis, quod eligendi rerum, modi sunt aperiam quis aut voluptatem voluptatum sed aliquam, quae eos quibusdam perspiciatis perferendis magnam ea doloremque.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eius doloribus aspernatur cupiditate maiores iusto repudiandae officia fuga vel obcaecati culpa id commodi, earum molestias laudantium itaque qui harum magni.

                    </p>
                </Col>
            </Row>            
        </Row>
    );
}