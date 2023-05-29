# Lab 8 - Starter
1. Within a Github action that runs whenever code is pushed
- This can ensure that if the pushed code fails any tests, the github actions pipeline can deny deployment of the webpage so I can make any fixes to the Recipe project before trying again.
2. No
3. Yes I would use a unit test to test the message feature. You first randomly generate a message, then compare that message with the message that gets sent to the other user through the function call of message.
4. No, I would use E2E testing for this. You send in a message thats is greater than 80 characters. Then send that message and get the length of the message which would have you getting the properties of the text-box that holds the message.