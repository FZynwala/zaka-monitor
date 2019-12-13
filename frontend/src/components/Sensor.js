import React from 'react';
import { connect } from 'react-redux';

class Sensor extends React.Component {
    

    render() {
        console.log(`SENSOR${this.props.title}`);
        return (
            <React.Fragment>
            <div className="item-box item" style={{marginBottom: '0px'}}>
                <div className="content">
                    {this.props.title}: {this.props.data}
                </div>
            </div>
            </React.Fragment>
        );
    };
}


export default connect(null)(Sensor);
