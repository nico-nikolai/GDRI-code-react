import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderDirectoryItem({item}) {
    return (
        <Card>
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardImgOverlay>
                <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
function Directory(props) {
    const directory = props.item.map(item => {
        return (
            <div key={item.id} className="col-md-5 m-1">
                <RenderDirectoryItem item={item} />
            </div>
        );
    });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }






/*class Directory extends Component {

        render() {
        const directory = this.props.index.map(item => {
            return (
                <div key={item.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(item.id)}>
                        <CardImg width="100%" src={item.image} alt={item.name} />
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
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
} */

export default Directory;