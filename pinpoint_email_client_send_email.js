import { PinpointEmailClient, SendEmailCommand } from "@aws-sdk/client-pinpoint-email";

("use strict"); 

const REGION = 'US-EAST-1'
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
        console.log("Email sent! Message ID: ", response["MessageId"]);
    } catch (err) { 
        console.log("Error", err);
    }
};

run();
// snippet-end:[pinpoint.javascript.pinpoint_send_email_message_v3]
// For unit tests only.
module.exports = { run, params };