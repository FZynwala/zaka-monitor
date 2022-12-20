import React from 'react';
import ReactDOM from 'react-dom';
import './ChartModal.css';
import { Rechart } from './rechart/Rechart';

const ChartModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const tempTitle = 'Temperatura w \u2103';
    const humTitle = 'Wilgotność w %';
    console.log('##ChartModal props:', props);

    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">Wykres - ostatnie 24h</div>
                <div className="content">
                    <div className="chart-title">
                        <h4>{props.type === 'temp' ? tempTitle : humTitle}</h4>
                    </div>
                    <Rechart data={props.data} />
                </div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal'),
    );
};

export default ChartModal;

// {
//     <div onClick={props.onDismiss} className="ui dimmer modals visible active">
//         <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
//             <div className="header">Wykres - ostatnie 24h</div>
//             <div className="content">
//                 <div className="chart-title">
//                     <h4>{props.type === 'temp' ? tempTitle : humTitle}</h4>
//                 </div>
//                 <Chart temp={props.yData} time={props.xData} />
//             </div>
//             <div className="actions">{props.actions}</div>
//         </div>
//     </div>;
// }

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
