var AWS = require('aws-sdk');
AWS.config.update({region: 'eu-central-1'});

const createTopic = async (topicName) => {
    var createTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).createTopic({Name: topicName}).promise();
    
    // Handle promise's fulfilled/rejected states
    createTopicPromise.then(
        function(data) {
            
        }).catch(
            function(err) {
            console.error(err, err.stack);
        });
};

exports.createTopic = createTopic;