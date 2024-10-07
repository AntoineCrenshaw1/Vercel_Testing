import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
  return (
    <>
    <main><h1 className='text-3xl'>Hello World</h1></main>
    <Link href="/users" className='text-3xl'>Users</Link>
    <ProductCard />
    </>
  )
}
