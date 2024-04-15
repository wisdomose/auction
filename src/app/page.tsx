"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CountdownTimer from "@/components/CountdownTimer";
import Image from "next/image";
import Auction from "@/components/Auction";
import Link from "next/link";

export default function Home() {
  const date = 1913196662869;

  return (
    <main className="">
      <header className="h-screen">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          loop
          className="h-full"
        >
          <SwiperSlide className="h-full w-full isolate relative bg-[url('/images/1.jpeg')] bg-cover bg-no-repeat !flex items-center justify-center">
            <div className="bg-black/50 inset-0 absolute -z-[1]"></div>
            <div className="flex flex-col items-center">
              <CountdownTimer date={date} className="text-7xl text-white" />
              <Link href="/auctions/1" className="px-20 tracking-widest py-4 rounded text-3xl mt-5 bg-blue-500 text-white font-bold">
                Bid
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full w-full isolate relative bg-[url('/images/2.jpeg')] bg-cover bg-no-repeat !flex items-center justify-center">
            <div className="bg-black/50 inset-0 absolute -z-[1]"></div>
            <div className="flex flex-col items-center">
              <CountdownTimer date={date} className="text-7xl text-white" />
              <Link href="/auctions/1" className="px-20 tracking-widest py-4 rounded text-3xl mt-5 bg-blue-500 text-white font-bold">
                Bid
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-full w-full isolate relative bg-[url('/images/3.jpeg')] bg-cover bg-no-repeat !flex items-center justify-center">
            <div className="bg-black/50 inset-0 absolute -z-[1]"></div>
            <div className="flex flex-col items-center">
              <CountdownTimer date={date} className="text-7xl text-white" />
              <Link href="/auctions/1" className="px-20 tracking-widest py-4 rounded text-3xl mt-5 bg-blue-500 text-white font-bold">
                Bid
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </header>

      <section className="max-w mt-10 pb-20">
        <h2 className="font-medium">Trending now</h2>

        <div className="grid grid-cols-4 gap-5 mt-6">
          <Auction img="/images/1.jpeg"/>
          <Auction img="/images/2.jpeg"/>
          <Auction img="/images/3.jpeg"/>
          <Auction img="/images/4.jpeg"/>
          <Auction img="/images/5.jpeg"/>
          <Auction img="/images/6.jpeg"/>
        </div>
      </section>
    </main>
  );
}
