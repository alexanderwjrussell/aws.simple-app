const AWS = require('aws-sdk')
const s3 = new AWS.S3();

const bucketName = 'awjr-first-test-bucket';
const testBodyData = '{"testJSON: true, "number":333, "words": "These are words"}';
const testKey = 'test.json';

function list() {
    s3.listObjectsV2({Bucket: bucketName}, (err, data) => {
        if (err) return console.log(err);
        console.log(data);
    });
}

function put() {
    s3.putObject({
        Body: testBodyData,
        Bucket: bucketName,
        Key: testKey
    }, (err, data) => {
        if (err) return console.log(err);
        console.log(data);
    });
}

list();