const resp = await fetch('https://backboard.railway.com/graphql/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer 3e392dba-86be-465d-82b1-cffc9a0bf04d`,
      },
      body: JSON.stringify({ query: 'query { me { name email } }' }),
})

const data = await resp.json()
console.log(data)
