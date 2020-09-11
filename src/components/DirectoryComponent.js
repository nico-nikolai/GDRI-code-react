import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button, CardFooter } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

        render() {
        const directory = this.props.index.map(item => {
            return (
                <div key={item.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={item.image} alt={item.name} />
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                            <CardTitle>{item.description}</CardTitle>
                        </CardImgOverlay>
                        <CardFooter>
                        <Button color='secondary' block>{item.name}</Button>
                        </CardFooter>
                    </Card>
                </div> 
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;