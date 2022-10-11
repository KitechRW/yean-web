import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { actions, features, products } from './data';
import { Facebook, WhatsApp } from '@mui/icons-material';

const FarmerPlatformActivity = () => {
  const {
    query: { q },
  } = useRouter();
  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[312px] h-full">
        <Image
          // src="/assets/images/farmer-platrom.png"
          src="/assets/images/partner.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="text-white flex flex-col items-center h-full w-full justify-center z-10">
          <div className="flex flex-col p-4 md:p-8">
            <h1 className="text-lg md:text-xl font-semibold uppercase">
              Farmer platform
            </h1>
            <p className="text-2xl md:text-4xl mt-4 font-black tracking-wide">
              CONNECT WITH OTHER FARMERS
            </p>
          </div>

          <div className="hidden flex-col md:pr-12 h-full">
            <div className="md:h-full max-w-sm flex flex-col bg-dark-green items-center p-4 md:p-8">
              <h1 className="uppercase font-semibold">
                We connect you
              </h1>
              <div className="flex flex-wrap justify-center gap-5 mt-3">
                {products.map(element => (
                  <div key={element.src}>
                    <button
                      type="button"
                      className="p-2 rounded-full bg-white"
                    >
                      <Image
                        src={element.src}
                        width="64"
                        height="64"
                        alt=""
                        loading="lazy"
                      />
                    </button>
                    <p className="pt-2 text-center">
                      {element.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto py-4 pt-12 flex flex-col items-center">
                <p className="uppercase">WANT TO JOIN COMMUNITY?</p>
                <button className="mt-3 uppercase rounded py-2 px-3 bg-white text-[#74AB4E]">
                  Talk to us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center py-12 text-justify bg-gradient-to-r from-cyan-01 to-[#016648]/25">
        <p className="max-w-4xl">
          YEAN Farmer Platform is a virtual space for YEAN Network of
          farmers and other value chain actors created and hosted by
          YEAN. The platform host farmers who actively share farming
          information to support one another in their respective
          agribusiness activities. The farmer platform provide space
          and support virtual online farmers and on field physical
          farmer groups. YEAN partner organizations are also included
          in the platform building a strong farmer centered
          partnership that collectively work to support the
          agriculture knowledge management, information dissemination
          and capacity building of farmers.
        </p>

        <p className="max-w-4xl mt-2">
          The YEAN Network of agripreneurs access farming and
          agribusiness information through this Farmer Platform that
          keeps them close to one another breaking social barriers.
          The Farmer Platform uses Whatsapp, Facebook Group (Urubuga
          rw’Abahanzi Borozi | Farmer platform) and YEAN Website.
        </p>

        <p className="max-w-4xl mt-2">
          In 2014, YEAN created a Facebook account, page and group
          which has boosted its presence on social networks. By 2021,
          over 25,000 farmers predominantly youth had subscribed to
          the group and get daily and timely support regarding farming
          tips, information and advisory. In 2015, with evolvement of
          social media use, YEAN created WhatsApp group to increase
          interaction, knowledge sharing and support with agriculture
          sector actors. As of 2021, YEAN WhatsApp groups have
          attracted farmers, experts, and keep on increasing day to
          day. Today, the platforms have attracted around 3000 farmers
          with 92% of male and 18% Female membership.
        </p>

        <p className="max-w-4xl mt-2">
          Currently (2022), YEAN strengthens the capacity of its
          Farmer Platform of with a good representation on social
          platforms including 3000+ farmers on 34 well moderated YEAN
          WhatsApp groups, 30,000+ members on Facebook platform,
          10,000+ followers on Twitter and more than 27 commodity
          specific platforms.”
        </p>
      </div>

      <div className="flex items-center flex-wrap gap-4 justify-center w-full bg-[#F7F6F6] p-4 md:p-8 mx-auto">
        <a
          href="https://www.facebook.com/groups/farmerplatform/?ref=share_group_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4267B2] text-lg text-white rounded-lg py-3 px-4"
        >
          <Facebook />
          <span className={'px-2 font-bold'}>
            Join our Facebook Community
          </span>
        </a>

        <a
          href="https://wa.me/+250788845727"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3B951C] text-lg text-white rounded-lg py-3 px-4"
        >
          <WhatsApp />
          <span className={'px-2 font-bold'}>
            Join our WhatsApp Community
          </span>
        </a>
      </div>
    </Scaffold>
  );
};

export default FarmerPlatformActivity;
