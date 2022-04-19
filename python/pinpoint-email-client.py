import boto3
import json
pinpointEmail = boto3.client('pinpoint-email')

def send_email_message(substitutions, template_arn, SENDER, RECEIVERS):
    """Sends an email message using Pinpoint-Email client

    Args:
    ---- 
    substitutions : dict 
        variables used on an email template. Can be used to customize an email template. Replace those variables to match the variables you created on your own email template.
    sender : string 
        a verified email address
    receivers : list of string 
        list of emails that will receive the message
    template_arn : string
        The Amazon Resource Name (ARN) of the email template you created.

    Returns: 
    -------
    response
        a dict with the response metadata and the message id.

    """

    response = pinpointEmail.send_email(
        FromEmailAddress=SENDER,
        Destination={
            'ToAddresses': RECEIVERS
        },
        Content={
            'Template': {
                'TemplateArn': template_arn,
                'TemplateData': json.dumps(substitutions) # need to be a string of key/value pairs
            }
        }
    )
    
    return response

if __name__ == "__main__":
    """Example of sending an email message using the Amazon Pinpoint Email client

    Replace the dictionary in substitutions with your own dict that reflects the variable used on your email template.
    Replace sender and receivers with actual values. Sender must be a verified email. Receivers must be a list of one or more email addresses.
    Replace template_arn with the Amazon Resource Name (ARN) of the email template you create on the Amazon Pinpoint console.
    """

    substitutions = {
        "user": "USER",
        "order_number": "ORDER_NUMBER",
        "shipping_date": "SHIPPING_DATE"
    }
    
    sender = 'email@domain.com'  
    receivers = ['email@domain.com', 'example@domain.com']
    template_arn = "ARN"

    data = send_email_message(substitutions, template_arn, sender, receivers)
    print("Email sent! Message ID: ", data['MessageId'])
