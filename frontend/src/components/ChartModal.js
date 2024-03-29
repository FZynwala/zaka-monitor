import React from 'react';
import ReactDOM from 'react-dom';
import './ChartModal.css';
import { Rechart } from './rechart/Rechart';

const ChartModal = ({ data, type, actions, onDismiss }) => {
    const tempTitle = 'Temperatura w \u2103';
    const humTitle = 'Wilgotność w %';

    return ReactDOM.createPortal(
        <div onClick={onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">Wykres - ostatnie 24h</div>
                <div className="content">
                    <div className="chart-title">
                        <h4>{type === 'temp' || type === 'tempOut' ? tempTitle : humTitle}</h4>
                    </div>
                    <Rechart data={data} type={type} />
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
