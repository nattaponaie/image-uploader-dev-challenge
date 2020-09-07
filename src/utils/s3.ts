import AWS from 'aws-sdk';

import {
  AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
} from 'configs/environment';

const config = {
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  sslEnabled: true,
  s3ForcePathStyle: true,
};
AWS.config.update(config);

const s3 = new AWS.S3();
const s3Bucket = `${AWS_BUCKET_NAME}`;

const getS3Bucket = async (s3Key: string): Promise<string> => {
  const s3Object = await s3
    .getObject({
      Bucket: s3Bucket,
      Key: s3Key,
    })
    .promise();

  const buf = Buffer.from(s3Object.Body || '');
  const result = buf.toString('utf8');
  return result;
};

const getS3ObjectsList = async (prefix: string): Promise<AWS.S3.ObjectList> => {
  const s3Object = await s3
    .listObjects({
      Bucket: s3Bucket,
      Prefix: prefix,
    })
    .promise();
  return s3Object.Contents || [];
};

const putS3Object = async (
  key: string,
  data: string | Buffer | Uint8Array | Blob,
): Promise<string> => {
  const s3Object = await s3
    .putObject({
      Bucket: s3Bucket,
      Key: key,
      Body: data,
    })
    .promise();
  return s3Object.ETag || '';
};

export { getS3Bucket, getS3ObjectsList, putS3Object };
