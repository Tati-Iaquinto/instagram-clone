'use client'
import PostsGrid from "@/components/postsGrid";
import { Check, ChevronLeft, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return(
    <>
      {/* header w/return button, username and settings button*/}
      <section className="flex justify-between items-center">
        <button><ChevronLeft /></button>
        <div className="flex font-bold items-center gap-2">
          my_username
          <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center">
            <Check size={16} color="white"/>
          </div>
        </div>
        <button><Settings /></button>
      </section>

      {/* avatar */}
      <section className="mt-8 flex justify-center items-center">
        <div  className="size-48 p-2 bg-gradient-to-tr from-ig-orange to-ig-red rounded-full">
          <div className="size-44 p-2 bg-white rounded-full">
            <figure className="size-40 aspect-square overflow-hidden rounded-full">
            <Image src={'/img/pfp.jpeg'} alt="profile" width={400} height={400}/>
            </figure>
          </div>
        </div>
      </section>
      
      <section className="text-center mt-4">
        <h1 className="text-xl font-bold">Username</h1>
        <p className="text-gray-500 my-1">Who am I?</p>
        <p>Contact@info.com</p>
      </section>

      <section className="mt-4">
        <div className="flex justify-center gap-4 font-bold">
          <Link href={'/'}>Posts</Link>
          <Link href={'/highlights'} className="text-gray-400">Highlights</Link>
        </div>
      </section>

      <section className="mt-4">
        <PostsGrid />
      </section>
    </>
  )
}