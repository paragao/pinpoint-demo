# Running this example

## Pre-requisites

You are going to need a message template and a configuration set already created. More details, follow the instructions on the [Creating email templates](https://docs.aws.amazon.com/pinpoint/latest/userguide/message-templates-creating-email.html) user guide and the [Creating configuration sets in Amazon SES](https://docs.aws.amazon.com/ses/latest/dg/creating-configuration-sets.html) user guide.

## Running the code

I recommend you create a virtual enviroment and install the AWS SDK for Python (boto3). In order to do that, you need to: 

1. Go to the `python/` directory and create a virtual environment

`python3 -m venv virtualenv`

2. Switch into the virtual environment

`source virtualenv/bin/activate`

3. Install the required packages

`pip3 install -r requirements.txt`

And you are going to need your AWS credentials setup. Please follow the steps outlined on the AWS 

4. Run the example

`python3 pinpoint-email-client.py`

The output should be similar to this one.

`Email sent! Message information:  0100018043e956c2-a3be1511-4bb2-427c-b698-628c6dcd0523-000000`

## Clean up
To deactivate the virtual environment just run `deactivate`. Now you can delete the folder `virtualenv/` inside the `python/` directory.