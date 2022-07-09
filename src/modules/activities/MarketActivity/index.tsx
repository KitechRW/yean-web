import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { actions, features, products } from './data';

const MarketActivity = () => {
  const {
    query: { q },
  } = useRouter();
  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[312px] h-full">
        <Image
          src="/assets/images/market.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="text-white md:flex items-center h-full w-full justify-between z-10">
          <div className="flex flex-col md:max-w-[50%] p-4 md:p-8">
            <h1 className="text-lg md:text-xl font-semibold uppercase">
              YEAN FARMER MARKET
            </h1>
            <p className="text-2xl md:text-4xl mt-4 font-black tracking-wide">
              BUY LOCAL & DIRECTLY FROM FARMERS
            </p>
          </div>

          <div className="flex flex-col md:pr-12">
            <div className="md:h-full max-w-sm flex flex-col bg-brand-green/80 items-center p-4 md:p-8">
              <h1 className="uppercase font-semibold">
                Select a product to buy/sell
              </h1>
              <div className="flex flex-wrap justify-center gap-5 mt-3">
                {products.map(element => (
                  <button
                    key={element}
                    type="button"
                    className="p-2 rounded-full bg-white"
                  >
                    <Image
                      src={element}
                      width="64"
                      height="64"
                      alt=""
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-auto py-4 pt-12 flex flex-col items-center">
                <p className="uppercase">
                  Can&apos;t find the Product you are looking for?
                </p>
                <button className="mt-3 uppercase rounded py-2 px-3 bg-white text-[#74AB4E]">
                  Talk to us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full bg-[#F7F6F6] p-4 md:p-8 mx-auto">
        <div className="flex flex-col items-center max-w-6xl">
          <h1 className="uppercase text-center mt-10 text-2xl md:text-4xl font-black tracking-wide">
            Our <span className="text-[#74AB4E]">solution</span>
          </h1>
          <p className="text-gray-600 mt-3 text-justify">
            Agri Marketplace is a digital B2B market solution that
            brings together Farmers and Industrial Buyers.
          </p>
          <div className="mt-6 flex items-center justify-center flex-wrap gap-3">
            <Image
              src={'/assets/images/solution.png'}
              width="459px"
              height="322px"
              alt=""
              loading="lazy"
            />
            <div className="flex flex-col md:max-w-[50%]">
              <p className="">
                We drive agricultural transactions through our digital
                platform in combination with our service partnership
                network. Yean Marketplace accommodates online payments
                between buyer and seller, product quality check
                options, and end-to-end logistic services.
              </p>
              <p className="mt-4">
                Yean Farmer Market does not buy or sell crops and is
                not a broker. Instead, we offer you the ability to
                effortlessly market your crop via our platform.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <button className="border-2 border-[#74AB4E] text-[#74AB4E] rounded-lg py-3 px-4">
                  Explore the marketplace
                </button>
                <button className="border-2 border-[#74AB4E] text-[#74AB4E] rounded-lg py-3 px-4">
                  Learn more about us
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center flex-wrap gap-3">
            <div className="flex flex-col md:max-w-[50%]">
              <p className="">
                A user-friendly platform that generates market
                opportunity for farmers and industry buyers.
              </p>
              <p className="mt-2">
                Unlimited access to a global market from anywhere, at
                anytime.
              </p>
              <p className="mt-2">
                Transparent and reliable market information, deal
                creation and negotiation.
              </p>
              <p className="mt-2">
                Integrated and secure platform payment processes.
              </p>
              <p className="mt-2">
                Tailored product quality verification and logistic
                services.
              </p>
              <p className="mt-2">
                A market with only verified buyers and sellers.
              </p>
              <p className="mt-2">Customer support & insight.</p>
            </div>

            <Image
              src={'/assets/images/solution.png'}
              width="459px"
              height="322px"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full bg-white p-4 md:p-8 mx-auto">
        <div className="mt-12 flex items-center justify-center flex-wrap gap-3 max-w-6xl">
          <div className="flex flex-col md:max-w-[50%]">
            <h1 className="uppercase mt-10 text-2xl md:text-4xl font-black tracking-wide">
              <span className="text-[#74AB4E]">HOW</span> it works
            </h1>
            <p className="mt-3 uppercase">Take a look at our</p>
            <p className="mt-6 leading-loose">
              Sign-up to the platform Create your offer or bid Set a
              quantity & price Provide us with crop characteristics &
              details Decide upon your preferred incoterm Decide upon
              logistic and/or crop quality check services Post your
              seller offer or buyer bid Stay updated by email or
              notification centre
            </p>
          </div>

          <Image
            src={'/assets/images/screen.png'}
            width="459px"
            height="322px"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 max-w-6xl">
          <h1 className="uppercase text-2xl md:text-4xl">
            Get Started
          </h1>
          <p className="mt-6">
            We open the door to thousands of approved buyers and
            sellers. Post your crop bid as a registered buyer, or
            create your crop offer as a platform verified seller.
            Through our rigorous customer compliance we make sure that
            only reliable users gain access to our digital
            marketplace. There are two ways to get started:
          </p>

          <div className="mt-6 flex flex-wrap gap-5">
            <div className="flex flex-col md:max-w-[50%]">
              <h1 className="font-bold text-[#74AB4E]">
                Post offer as a seller
              </h1>
              <p className="mt-3">
                As a seller, post offers for the agricultural crop you
                are looking to sell, and gain immediate access to
                credit-verified buyers. Or simply react to an existing
                buyer’s bid and start your transaction.
              </p>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-[#74AB4E]">
                Post bid as a buyer
              </h1>
              <p className="mt-3">
                As a buyer, post bids for the agricultural crop you
                are looking to buy. Communicate to the market what you
                are looking for, and get rapid reactions from
                interested farmers or sellers.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            {actions.map(action => (
              <button
                key={action}
                className="border-2 border-[#74AB4E] text-[#74AB4E] rounded-lg py-2 px-6"
              >
                {action}
              </button>
            ))}
          </div>

          <h1 className="uppercase mt-12 text-2xl md:text-4lx font-bold tracking-wide">
            Our <span className="text-[#74AB4E]">services</span>
          </h1>
          <p className="mt-3">
            Yean marketplace provides all of the following services
            through internal operations
          </p>
          <p className="mt-2">
            in combination with our specialised partnership network.
          </p>

          <Image
            src={'/assets/images/all-services.png'}
            width="1101"
            height="496"
            alt=""
            loading="lazy"
            className="mt-6"
          />

          <div className="mt-12 flex items-center md:justify-between flex-wrap gap-3">
            <div className="flex flex-col md:max-w-[60%]">
              <h1 className="w-full uppercase text-2xl md:text-4lx font-bold tracking-wide">
                Pricing
              </h1>
              <p className="mt-6">
                Both buyer and seller pay a small fee to Yean
                Marketplace once a transaction is made. We price
                transparently and keep you updated through all steps
                of the process. Our pricing is based on your
                transaction’s value & volume
              </p>
            </div>
            <Image
              src={'/assets/images/sack.png'}
              width="350"
              height="243"
              alt=""
              loading="lazy"
              className=""
            />
          </div>

          <h1 className="uppercase mt-12 text-2xl md:text-4lx font-bold tracking-wide">
            Key <span className="text-[#74AB4E]">features</span>
          </h1>
          <p className="mt-3">
            Discover how Agri Marketplace can benefit you and all
            other food supply chain actors.
          </p>

          <div className="mt-6 flex gap-5 justify-center flex-wrap">
            {features.map(feature => (
              <div
                key={feature.title}
                className="rounded p-3 text-center border-[0.5px] border-[#D9E0D3] flex flex-col items-center max-w-[297.59px]"
              >
                <Image
                  src={feature.image}
                  width="160.86"
                  height="160.86"
                  alt=""
                  loading="lazy"
                  className=""
                />
                <h2 className="mt-6 uppercase">{feature.title}</h2>
                <p className="mt-6">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Scaffold>
  );
};

export default MarketActivity;
