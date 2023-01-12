import React from 'react';
import { Card, Header, Label, Segment } from 'semantic-ui-react';

export const CardExample = (props) => {
    const square = { width: 30, height: 30 };
    return (
        <Card>
            <Card.Content>
                <Label as="a" color="blue" ribbon>
                    <Header as={'h2'}>Salon</Header>
                </Label>
                <Card.Header content={'Gora'}>
                    <div className="right floated mini ui header">
                        <span className="temp-header">{props.temp ? `${props.temp} \u2103` : '----'}</span>
                    </div>
                </Card.Header>
                <Card.Meta>Id: 4</Card.Meta>
                <Card.Description>
                    <Segment.Group horizontal>
                        <Segment>Wilgotność:</Segment>
                        <Segment>45%</Segment>
                    </Segment.Group>
                    <Segment.Group horizontal>
                        <Segment inverted color="red">
                            Max: {`12 \u2103`}
                        </Segment>
                        <Segment>o godz.: 17:45</Segment>
                    </Segment.Group>
                    Wilgotność: {props.hum ? `${props.hum}%` : '45%'} <br /> Max: {`12 \u2103`}
                </Card.Description>
            </Card.Content>
            <Card.Content extra></Card.Content>
        </Card>
    );
};
