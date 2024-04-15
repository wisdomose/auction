import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Basic plan",
    desc: "Lorem ipsum dolor sit amet",
    monthly: 19,
    yearly: 199,
    bids: 50,
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
    ],
  },
  {
    name: "Business plan",
    desc: "Lorem ipsum dolor sit amet",
    monthly: 29,
    yearly: 299,
    bids: 100,
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
    ],
  },
  {
    name: "Pro plan",
    desc: "Lorem ipsum dolor sit amet",
    monthly: 49,
    yearly: 499,
    bids: 200,
    features: [
      "Feature text goes here",
      "Feature text goes here",
      "Feature text goes here",
    ],
  },
];

export default function BidsPage() {
  return (
    <main className="">
      <section className="py-10 md:py-12 lg:py-16">
        <h1 className="text-center font-bold">Pricing plans</h1>
        <p className="mt-4 text-center text-3xl font-bold md:text-4xl lg:text-6xl">
          Simple, transparent pricing
        </p>

        <div className="mt-10 grid gap-8 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Plan key={plan.name} plan={plan} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Plan({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <div className="rounded-t-2xl border border-black p-8 dark:border-white/10">
      <p className="text-xl font-bold">{plan.name}</p>
      <p className="mb-8 mt-1">{plan.desc}</p>

      <hr className="border-black dark:border-white/10" />

      <p className="mt-8 text-6xl font-bold">
        ${plan.monthly}
        <span className="text-2xl font-normal">/{plan.bids} bids</span>
      </p>

      <button className="my-8 w-full bg-[#125BD4] px-6 py-3 text-white">
        Get started
      </button>

      <hr className="border-black dark:border-white/10" />

      <div className="mt-8 flex flex-col gap-4">
        {plan.features.map((feature, index) => (
          <div
            className="flex items-center gap-4"
            key={feature.replaceAll(" ", "-") + index}
          >
            <FiCheck />
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}
