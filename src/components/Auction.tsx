import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";

export default function Auction({ img }: { img: string }) {
  return (
    <Link href="/auctions/1" className="">
      <div className="relative isolate w-full h-40">
        <CountdownTimer
          className="absolute bg-black/20 text-white text-xs px-2 rounded-full left-2 top-2 z-10"
          date={Date.now() + 4000000000}
        />
        <Image src={img} alt="" fill className="object-cover object-center" />
      </div>
      <div className="p-2 bg-white shadow">
        <p>Lorem, ipsum dolor</p>
        <p className="">
          Highest bid: <span className="font-semibold">400</span>
        </p>
        <p className="">
          Lowest bid: <span className="font-semibold">200</span>
        </p>
      </div>
    </Link>
  );
}
