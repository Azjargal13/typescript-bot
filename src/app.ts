const { App, ExpressReceiver } = require('@slack/bolt');
//console.log(process.env)
// Initializes your app with your bot token and signing secret
const receiver = new ExpressReceiver({
    signingSecret: process.env.SLACK_SIGNING_SECRET
})

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    receiver: receiver
});

// // Health Check Endpoint
// receiver.app.get('/', (_, res) => {
//     res.status(200).send();
// });

// receiver.app.post('slack/events', (_, res) => {
//     res.status(200).send();
// });

// Listens to incoming messages that contain "hello"
app.message('hello', ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    say(`Hey there <@${message.user}>!`);
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();