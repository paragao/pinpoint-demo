/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. For more information on this example, see https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ses-examples.html.
Purpose:
pinpoint_send_email_message.js demonstrates how to send a transactional email message using Amazon Pinpoint.
Inputs (replace in code):
- REGION
- CONFIG_SET
- TEMPLATE_ARN
- SENDER_ADDRESS
- TO_ADDRESS
- SUBSTITUTIONS (optional), where the data inside it are the variable used in an email template

Running the code:
node pinpoint_email_client_send_email.js
*/
// snippet-start:[pinpoint.javascript.pinpoint_send_email_message_v3]

// Import required AWS SDK clients and commands for Node.js
import { PinpointEmailClient, SendEmailCommand } from "@aws-sdk/client-pinpoint-email";

("use strict"); 

const REGION = 'REGION'
const client = new PinpointEmailClient({ region: REGION });

const SUBSTITUTIONS = {
    "user": "USER",
    "num_order": "NUMBER",
    "shipping_date": "DATE"
}

const params = {
    ConfigurationSetName: 'CONFIG_SET',
    Content: {
        Template: {
            TemplateArn: 'TEMPLATE_ARN',
            TemplateData: JSON.stringify(SUBSTITUTIONS)
        }
    },
    FromEmailAddress: 'SENDER_ADDRESS',
    Destination: {
        ToAddresses: [
            'TO_ADDRESS'
        ]
    }
}

const run = async () => {
    try { 
        const response = await client.send(new SendEmailCommand(params));
        console.log("Email sent! Message ID: ", response["MessageId"])
    } catch (err) { 
        console.log("Error", err)
    }
}

run();
// snippet-end:[pinpoint.javascript.pinpoint_send_email_message_v3]
// For unit tests only.
module.exports = { run, params };