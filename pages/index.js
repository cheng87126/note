import fetch from 'node-fetch'

function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/list')
  console.log('res',res)
  const data = await res.json()
  return { props: { data } }
}

export default HomePage