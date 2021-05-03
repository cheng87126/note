import fetch from 'node-fetch'

function HomePage({data}) {
  return <div>{data.name} Welcome to Next.js!</div>
}

export async function getServerSideProps() {
  const server = process.env.NODE_ENV !== 'production'?'http://localhost:3000':'https://note-liart.vercel.app/'
  const res = await fetch(`${server}/api/list`)
  const data = await res.json()
  return { props: { data } }
}

export default HomePage