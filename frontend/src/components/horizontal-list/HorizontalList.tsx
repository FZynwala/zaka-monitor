import React, { useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow } from 'components/arrows/Arrows';
import { HorizontalListitems } from 'components/weather-component/ui/WeatherComponentUi';
import useDrag from 'hooks/useDrag';
import { Card, Table } from 'semantic-ui-react';
import { formatSmallDate, formatTime } from 'utils';
import './HorizontalList.css';

// NOTE: embrace power of CSS flexbox!
// import "./hideScrollbar.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

// const extra = (
//     <a>
//         <Icon name="user" />
//         16 Friends
//     </a>
// );

type HorizontalListProps = {
    horizontalListitems: HorizontalListitems[];
};

export const HorizontalList: React.FC<HorizontalListProps> = ({ horizontalListitems }) => {
    console.log('items', horizontalListitems);

    // NOTE: for drag by mouse
    const { dragStart, dragStop, dragMove, dragging } = useDrag();

    const handleDrag =
        ({ scrollContainer }: scrollVisibilityApiType) =>
        (ev: React.MouseEvent) =>
            dragMove(ev, (posDiff) => {
                if (scrollContainer.current) {
                    scrollContainer.current.scrollLeft += posDiff;
                }
            });

    const [selected, setSelected] = useState<string>('');
    const handleItemClick = (itemId: string) => (): boolean | void => {
        if (dragging) {
            return false;
        }
        setSelected(selected !== itemId ? itemId : '');
    };

    return (
        <>
            <div className="example" style={{ paddingTop: '10px' }}>
                <div onMouseLeave={dragStop}>
                    <ScrollMenu
                        LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                        onWheel={onWheel}
                        onMouseDown={() => dragStart}
                        onMouseUp={() => dragStop}
                        onMouseMove={handleDrag}
                    >
                        {horizontalListitems.map((item) => (
                            <Card
                                header={formatTime(item.time)}
                                meta={formatSmallDate(item.time)}
                                onClick={handleItemClick(item.time)}
                            >
                                <Table unstackable={true} basic="very">
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell width={5}>Rain Gauge</Table.Cell>
                                            <Table.Cell width={3}>{item.rainGauge}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Wind speed</Table.Cell>
                                            <Table.Cell>{item.windSpeed}</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Wind vane</Table.Cell>
                                            <Table.Cell>{item.windVane}</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Card>
                        ))}
                    </ScrollMenu>
                </div>
            </div>
        </>
    );
};

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}
