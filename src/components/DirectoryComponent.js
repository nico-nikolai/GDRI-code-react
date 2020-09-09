import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

        render() {
        const directory = this.props.homepage.map(homepage => {
            return (
                <div key={homepage.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={homepage.image} alt={homepage.name} />
                        <CardImgOverlay>
                            <CardTitle>{homepage.name}</CardTitle>
                        </CardImgOverlay>
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