# Sending email using the Amazon Pinpoint Email client

The [Amazon Pinpoint](https://docs.aws.amazon.com/pinpoint/) service has lots of features that will enable you to engage with your customer base and delight them through well thought [Journeys](https://docs.aws.amazon.com/pinpoint/latest/userguide/journeys.html) and [Campaigns](https://docs.aws.amazon.com/pinpoint/latest/userguide/campaigns.html).

Sometime you might want to send a pre-defined message tailored to specific users without creating a project or campaign. That's when Amazon Pinpoint Email client comes to your rescue! 

On this repository I provide example on how to use the Pinpoint Email client on two different programming languages: NodeJS and Python.

## Code Examples

- Python: [send email message](https://github.com/paragao/pinpoint-demo/tree/main/python)
- NodeJS: [send email message](https://github.com/paragao/pinpoint-demo/tree/main/nodejs)

## Important
- As an AWS best practice, grant this code least privilege, or only the permissions required to perform a task. For more information, see [Grant least privilege](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege) in the *AWS Identity and Access Management USer Guide*.
- This code has not bee tested in all AWS Regions. Some AWS services are available only in specific AWS Regions. For more information, see [AWS Regional Services List](https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/) on the AWS website.
- Runnint this code might result in charges to your AWS account.

## Running the code
Please see the specific instructions on how to run the examples inside each of the specific folders.

### Prerequisites
- An AWS accoiunt. To create an account. see [How do I create and activate a new AWS account](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/) on the AWS Premium Support website.
- AWS credentials. For details, see [Setting credentials in Node.js](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials-node.html) in the *AWS SDK for Javascript (v3) Developer Guide*. For details, see [Configuration](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/quickstart.html#configuration) in the *AWS SDK for Python (boto3) Developer Guide*.
- Clone this repo to your local environment.
- Node v14 or above (for the NodeJS example)
- Python 3.8 or above (for the Python example)

# Resources
- [AWS SDK for JavaScript v3](https://github.com/aws/aws-sdk-js-v3)
- [AWS SDK for JavaScript v3 API Reference Guide](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-pinpoint/index.html)
- [AWS SDK for Python (boto3)](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)