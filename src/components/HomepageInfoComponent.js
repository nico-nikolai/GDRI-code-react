import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

function RenderIndex({index}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={index.image} alt={index.name} />
                <CardBody>
                    <CardTitle>{index.name}</CardTitle>
                    <CardText>{index.description}</CardText>
            </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <p>{comment.function}</p>
                        <p>{comment.author}</p>
                    </div>
                    )
                )}
            </div>
        )
    }
}

function HomepageInfo(props) {
    if(props.index) {
        return (
            <div className="container">
                <div className="row">
                    <RenderIndex index={props.index} />
                    <RenderComments comments={props.index.comments} />
                </div>
            </div>
        );
    } else {
        return <div />
    }
}

export default HomepageInfo;