import React, { useContext, useEffect, useState } from 'react';

import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Icon } from 'semantic-ui-react';
import '../sensors-list/SensorList.css';

const Arrow = ({
    children,
    disabled,
    onClick,
}: {
    children: React.ReactNode;
    disabled: boolean;
    onClick: VoidFunction;
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                // right: '1%',
                opacity: disabled ? '0' : '1',
                userSelect: 'none',
                backgroundColor: 'transparent',
                backgroundRepeat: 'no-repeat',
                border: 'none',
                padding: 0,
                outline: 'none',
            }}
        >
            {children}
        </button>
    );
};

export const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } = useContext(VisibilityContext);

    const [disabled, setDisabled] = useState(!initComplete || (initComplete && isFirstItemVisible));
    useEffect(() => {
        // NOTE: detect if whole component visible
        if (visibleElements.length) {
            setDisabled(isFirstItemVisible);
        }
    }, [isFirstItemVisible, visibleElements]);

    return (
        <Arrow disabled={disabled} onClick={() => scrollPrev()}>
            <Icon name="chevron left" size={'large'} className={'u-pr'} />
        </Arrow>
    );
};

export const RightArrow = () => {
    const { isLastItemVisible, scrollNext, visibleElements } = useContext(VisibilityContext);

    const [disabled, setDisabled] = useState(!visibleElements.length && isLastItemVisible);
    useEffect(() => {
        if (visibleElements.length) {
            setDisabled(isLastItemVisible);
        }
    }, [isLastItemVisible, visibleElements]);

    return (
        <Arrow disabled={disabled} onClick={() => scrollNext()}>
            <Icon name="chevron right" size={'large'} className="u-pl" />
        </Arrow>
    );
};
