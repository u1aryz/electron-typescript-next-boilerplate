import Layout from 'components/Layout'
import Link from 'next/link'
import { useEffect } from 'react'

const IndexPage = () => {
  useEffect(() => {
    window.rpc.onReceiveMessage((message) => alert(message))
  }, [])

  const onSayHiClick = () => {
    window.rpc.sendMessage('hi from next')
  }

  // noinspection HtmlUnknownTarget
  return (
    <Layout title="Home | Next.js + TypeScript + Electron Example">
      <h1>Hello Next.js 👋</h1>
      <button onClick={onSayHiClick}>Say hi to electron</button>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
