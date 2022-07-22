import Scaffold from 'modules/layouts/Scaffold';
import Image from 'next/image';
import React from 'react';
import {ConnectWithoutContact} from "@mui/icons-material";
import {useRouter} from "next/router";

const InnovationCenterActivity = () => {
  const {
    push
  } = useRouter();
  return (
    <Scaffold>
      <div className="flex flex-col w-full relative bg-brand-green min-h-[250px]">
        <Image
          src="/assets/images/innovation-center.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="w-full flex bg-cyan-01 h-[526px] bg-white py-6">
        <div className={"hidden md:flex-1 md:flex relative w-[511px]"}>

          <Image
            src="/assets/images/farmer-innovation.png"
            alt=""
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={"flex-1  w-auto"}>
          <p className="text-justify px-10 text-center">The AIIC is an agribusiness incubation center powered by YEAN. Agribusiness is one of the priorities for the country for job and wealth creation. Through our work, YEAN has realized that agripreneurs face multiple challenges including the lack of adequate skills, mentorships and coaching to innovate, develop and scale up their ideas.
            YEAN in collaboration with the University of Lay Adventist of Kigali (UNILAK) through the support of the Forum for Agricultural Research in Africa (FARA) together with the Association for Strengthening Agricultural Research in Eastern and Central Africa (ASARECA) and the East African Farmers’ Federation (EAFF) supported by the Organization of African, Caribbean, and Pacific States (OACPS) through the ACP Innovation Fund which is funded by the European Union (EU), has established a space for agripreneurs.
            The space was established to strengthen the agribusiness ecosystem in Rwanda. The center provides incubation and business support services to agripreneurs through availing infrastructures, providing training programs and workshop to incubates, technical and business mentorship, Networking and access to finance.
            If you are considering venturing in agribusiness (Crop and livestock Primary Production, Processing, post-harvest handling, marketing) this center is for you. Join and be part of agribusiness professional community.
          </p>
          <button
            type="button"
            onClick={() => push('/contact')}
            className="bg-white mx-auto text-dark-green font-semibold flex items-center space-x-2 mt-20 rounded-[20px] border border-dark-green py-3 px-20"
          >
            <ConnectWithoutContact />
            <span>Contact us </span>
          </button>
        </div>
      </div>
    </Scaffold>
  );
};

export default InnovationCenterActivity;
