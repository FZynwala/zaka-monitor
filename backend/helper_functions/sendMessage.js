var AWS = require('aws-sdk');
AWS.config.update({region: 'eu-central-1'});


const sendMessage = (alert, data) => {
    var params = {
        Message: `ALERT FROM ZAKA-MONITOR
         Sensor: ${alert.sensor}
         ${alert.parameter}: ${data[alert.parameter]}
         Time: ${data.time}`, /* required */
        TopicArn: `arn:aws:sns:eu-central-1:666702137936:${alert.endpoint}`
    };
      
    // Create promise and SNS service object
    var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
    
    publishTextPromise.then(
        function(data) {
          console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
          console.log("MessageID is " + data.MessageId);
    }).catch(
          function(err) {
          console.error(err, err.stack);
    });

}

exports.sendMessage = sendMessage;