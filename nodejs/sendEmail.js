exports.handler = async (event, context) => {
    const { PinpointEmailClient, SendEmailCommand } = require("@aws-sdk/client-pinpoint-email");
    const client = new PinpointEmailClient();

    const substitutions = {
        "user": event.user,
        "num_pedido": event.num_pedido,
        "data_envio": event.data_envio,
        "codebase": event.codebase
    }

    const input = {
        ConfigurationSetName: 'teste',
        Content: {
            Template: {
                TemplateArn: 'arn:aws:mobiletargeting:us-east-1:441224055073:templates/testeEmail/EMAIL',
                TemplateData: JSON.stringify(substitutions)
            }
        },
        FromEmailAddress: 'paragao@amazon.com',
        Destination: {
            ToAddresses: [
                'paragao@amazon.com'
            ]
        }
    }

    try { 
        const response = await client.send(new SendEmailCommand(input));
        return { 
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(response)
        }
    } catch (err) { 
        return { 
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(err)
        }
    }
}