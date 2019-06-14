const { sdk } = require('@cto.ai/sdk')

async function main() {
  const res = await sdk.user().catch(err => console.log(err))
  const person = res && res.me ? `, ${res.me.username}` : ' there'
  const greeting = `\n👋 Hi${person}! This template will run the demo for CTO.ai CLI SDK where you'll see some basic interactions that are included. This will allow you to easily create a simple-to-use automation.`

  sdk.log(greeting)

  require('./demo')
}

main()
