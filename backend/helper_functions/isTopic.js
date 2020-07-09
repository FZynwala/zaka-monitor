var AWS = require('aws-sdk');
AWS.config.update({region: 'eu-central-1'});

const listTopics = async () => {
    var listTopicsPromise = new AWS.SNS({apiVersion: '2010-03-31'}).listTopics({}).promise();
    let list = await listTopicsPromise;
    
    return list.Topics;
};

const isTopic = async (topic) => {
    let topicArn = 'arn:aws:sns:eu-central-1:666702137936:' + topic;
    let isTopic = false;
    
    const topics = await listTopics();

    if(!topics) return false;

    topics.forEach( topic => {
        if(topic.TopicArn === topicArn) {
            isTopic = true;
        }
    });

    return isTopic;
}

exports.isTopic = isTopic;