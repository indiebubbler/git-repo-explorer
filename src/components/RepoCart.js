import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class RepoCart extends Component {
    render() {
        return (
                <Container className='RepoCart'>
                    <Row>
                        <Col>
                            <div className='header title'>{this.props.repo.name}</div>
                        </Col>
                        <Col>
                            <div className='header stars'>{this.props.repo.stargazersCount} ★</div>
                        </Col>
                    </Row>
                    <Row>
                        <Container className='description'>{this.props.repo.description}</Container>
                    </Row>
                </Container>
        );
    }
}

export default RepoCart