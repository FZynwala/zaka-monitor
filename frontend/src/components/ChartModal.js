import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './chart';
import './ChartModal.css';
import { Rechart } from './rechart/Rechart';

const ChartModal = ({ data, xData, yData, type, actions, onDismiss, isNewChart }) => {
    const tempTitle = 'Temperatura w \u2103';
    const humTitle = 'Wilgotność w %';

    return ReactDOM.createPortal(
        <div onClick={onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">Wykres - ostatnie 24h</div>
                <div className="content">
                    <div className="chart-title">
                        <h4>{type === 'temp' ? tempTitle : humTitle}</h4>
                    </div>
                    {isNewChart ? <Rechart data={data} type={type} /> : <Chart temp={yData} time={xData} />}
                </div>
                <div className="actions">{actions}</div>
            </div>
        </div>,
        document.querySelector('#modal'),
    );
};

export default ChartModal;

{
    /* <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            // trigger={<Button>Wykres</Button>}
        >
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
                <Rechart data={props.data} />
            </Modal.Content>
            <Modal.Actions>
                <Button color="green" onClick={() => setOpen(false)}>
                    Wilgotność
                </Button>
                <Button content="Temperatura" onClick={() => setOpen(false)} color={'green'} />
            </Modal.Actions>
        </Modal> */
}
