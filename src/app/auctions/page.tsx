import Auction from "@/components/Auction";
import { FiChevronDown, FiFilter } from "react-icons/fi";

export default function AuctionsPage() {
  return (
    <main className="max-w">
      <div className="flex justify-end my-6">
        <button className="flex items-center gap-3 bg-blue-700 text-white px-4 py-2 rounded">
          Filters
          <FiFilter className="text-sm" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <Auction img="/images/1.jpeg" />
        <Auction img="/images/2.jpeg" />
        <Auction img="/images/3.jpeg" />
        <Auction img="/images/4.jpeg" />
        <Auction img="/images/5.jpeg" />
        <Auction img="/images/6.jpeg" />
      </div>
    </main>
  );
}
