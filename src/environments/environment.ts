import { LOGIN_TYPE } from 'src/app/constant';

export const environment = {
  production: false,
  title: 'S3 Manager',
  logins: [
    {
      type: LOGIN_TYPE.cognito,
      name: 'Amazon Cognito',
      region: 'ap-northeast-1',
      identityPoolId: 'ap-northeast-1:',
      userPoolId: 'ap-northeast-1_xxxxx',
      userPoolWebClientId: 'xxxxxx',
    },
    {
      type: LOGIN_TYPE.accessKey,
      name: 'AWS Access Key',
      region: 'eu-west-1',
    },
  ],
};
