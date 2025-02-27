'use client'
import Image from "next/image"

const images = [
  'https://picsum.photos/id/30/1024/768', 'https://picsum.photos/id/31/1024/768'
]
export default function PostsGrid() {
  return (
    <>
    <figure className="size-80">
      <Image src={images[0]} alt="" width={5000} height={3333}/>
    </figure>
      
    </>
  )
}