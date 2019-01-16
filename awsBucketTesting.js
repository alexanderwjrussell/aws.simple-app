const AWS = require('aws-sdk')
const s3 = new AWS.S3();

const bucketName = 'awjr-first-test-bucket';
const testBodyData = '{"testJSON: true, "number":333, "words": "These are words"}';
const testKeyTxt = 'test.txt';
const testKeyJson = 'test.json';

function list() {
    s3.listObjectsV2({Bucket: bucketName}, (err, data) => {
        if (err) return console.log(err);
        console.log(data);
        const contents = data.Contents;
        console.log(contents); // Outputs an array of contents
    });
}

function get() {
    s3.getObject({Bucket: bucketName, Key: testKeyTxt}, (err, data) => {
        if (err) return console.log(err);
        console.log(data);
        const body = data.Body;
        console.log('Body as Buffer: ', body); // Outputs a buffer
        const stringBody = body.toString('utf8');
        console.log('Body as string: ', stringBody);
        const jsonBody = JSON.stringify(body);
        console.log('Body as JSON: ', jsonBody);
    });
}

function put() {
    s3.putObject({
        Body: testBodyData,
        Bucket: bucketName,
        Key: testKeyJson
    }, (err, data) => {
        if (err) return console.log(err);
        console.log(data);  // Outputs an ETag
    });
}

get();