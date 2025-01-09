const TOKEN = process.argv.slice(2)[0];
const ENVIRONMENT_ID = "acd168f1-37c4-4a1e-86e4-206d07568f2c"
const SERVICE_ID = "945e37da-1034-446e-9610-2af87582d634"

const resp = await fetch('https://backboard.railway.com/graphql/v2', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'authorization': `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({
    query: `
      mutation ServiceInstanceRedeploy {
          serviceInstanceRedeploy(
              environmentId: "${ENVIRONMENT_ID}"
              serviceId: "${SERVICE_ID}"
          )
      }`
  }),
})

const data = await resp.json()

if (data.errors) {
  console.error(data.errors)
  throw new Error('Failed to redeploy service')
}

console.log(data)
