import './ChartModal.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './chart';

const ChartModal = props => {
    const tempTitle = 'Temperatura w \u2103';
    const humTitle = 'Wilgotność w %';
    console.log(props);

    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">Wykres - ostatnie 24h</div>
                <div className="content">
                    <div className="chart-title">
                        <h4>{props.type === 'temp' ? tempTitle : humTitle}</h4>
                    </div>
                    <Chart temp={props.yData} time={props.xData} />
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default ChartModal;