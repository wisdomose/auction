"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CountdownTimer from "@/components/CountdownTimer";

export default function AuctionPage() {
  return (
    <main className="">
      <header className="h-[70vh]">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          loop
          className="h-full"
        >
          <SwiperSlide className="h-full w-full isolate relative bg-[url('/images/1.jpeg')] bg-cover bg-no-repeat bg-center !flex items-center justify-center"></SwiperSlide>
          <SwiperSlide className="h-full w-full isolate relative bg-[url('/images/2.jpeg')] bg-cover bg-no-repeat bg-center !flex items-center justify-center"></SwiperSlide>
          <SwiperSlide className="h-full w-full isolate relative bg-[url('/images/3.jpeg')] bg-cover bg-no-repeat bg-center !flex items-center justify-center"></SwiperSlide>
        </Swiper>
      </header>

      <section className="max-w !max-w-3xl mt-6 pb-20">
        <p className="font-semibold">
          Bid timer:{" "}
          <CountdownTimer className="font-normal" date={Date.now() + 400000} />
        </p>
        <p className="font-semibold my-2">
          Countdown:{" "}
          <CountdownTimer className="font-normal" date={Date.now() + 20000} />
        </p>

        <p className="font-semibold">Description</p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore
          cum esse tempora facilis blanditiis, iusto harum facere natus.
          Repudiandae voluptate consequatur molestiae dolores! Dignissimos
          porro, ipsa laborum, aperiam adipisci, praesentium ipsam delectus sed
          quidem iusto molestiae facilis earum necessitatibus. Possimus impedit
          atque commodi numquam porro asperiores voluptatibus quos aliquid ipsam
          nulla minus ullam, illo ab quisquam harum reiciendis? Veniam, alias ea
          animi fuga officiis commodi ullam rem mollitia neque, quod dolores
          molestiae suscipit. Asperiores delectus corporis voluptatem doloribus
          quos iste molestias in voluptatum corrupti. Hic tenetur cum nostrum
          quisquam ullam! Quibusdam qui maiores officiis minus dolores doloribus
          sed sapiente.
        </p>

        <p className="font-semibold mt-6">Bid table</p>

        <div>
          <div className="border-y border-x flex gap-10 px-5 py-3">
            <p>12:10</p>
            <p>John Doe</p>
          </div>
          <div className="border-b border-x flex gap-10 px-5 py-3">
            <p>12:09</p>
            <p>John Doe</p>
          </div>
          <div className="border-b border-x flex gap-10 px-5 py-3">
            <p>12:09</p>
            <p>John Doe</p>
          </div>
          <div className="border-b border-x flex gap-10 px-5 py-3">
            <p>12:08</p>
            <p>John Doe</p>
          </div>
        </div>

        <p className="font-semibold my-6">
          Bids remaining: <span className="font-normal">100</span>
        </p>

        <button className="bg-blue-700 font-semibold text-white px-4 py-2 rounded">
          Bid now
        </button>
      </section>
    </main>
  );
}
