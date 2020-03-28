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


(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();