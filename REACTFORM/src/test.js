import React from 'react';
import { Container, Row, Col } from '.';

export default function App() {
    return (
        <Container fluid>
        <Row debug>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
          <Col md={1} debug>md=1</Col>
        </Row>
        <br />
        <Row debug>
          <Col md={8} debug>md=8</Col>
          <Col md={4} debug>md=4</Col>
        </Row>
        <br />
        <Row debug>
          <Col md={4} debug>md=4</Col>
          <Col md={4} debug>md=4</Col>
          <Col md={4} debug>md=4</Col>
        </Row>
        <br />
        <Row debug>
          <Col md={6} debug>md=6</Col>
          <Col md={6} debug>md=6</Col>
        </Row>
      </Container>
    );
  }