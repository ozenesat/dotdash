import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ShowBookReview = ({ author, title, image }) => {
    return (
        <Fragment>
        <Card style={{ margin: '1em', border: '0.2em outset' }}>
            <a href={image} rel="noreferrer noopener" target="_blank">
                <Card.Img src={image} style={{ padding: "1em"}}/>
            </a>
            <Card.Body>
                <Col className="text-center">
                    {title}
                <hr />
                    By {author}
                </Col>
          </Card.Body>
        </Card>
      </Fragment>
    )
}

export default ShowBookReview;