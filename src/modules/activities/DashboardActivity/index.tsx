import React from 'react'
import {useOpenFetcher} from "apis/utils/fetcher";
import { withSessionSsr } from 'system/lib/withSession';
import { useNavbar } from 'modules/contexts/NavbarContext';
const DashboardActivity = () => {
  const {
    data: { data},
    isLoading,
  } = useOpenFetcher(
    `/api/dashboard`,
  );
 const {profile} = useNavbar();

  return (
    <div>
      <div className={"flex flex-col"}>
       
          {
            profile?.user?.type !== "admin" ? (
            <div className={"flex place-content-evenly gap-3 flex-wrap mt-5"}>
              <div
                className={`flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`}
                >
                <h2
                  className={`text-base font-semibold`}
                >
                  Articles
                </h2>
                <div className="flex items-center space-x-2 mt-3">
                  <p
                    className={`bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`}
                  >
                    {data?.articles}
                  </p>
                  <p
                    className={`text-[#AAB1B7]`}
                  >
                    Registered
                  </p>
                </div>
              </div>
            </div>
            )
            : (
            <div className={"flex place-content-evenly gap-3 flex-wrap mt-5"}>
              <div className={`flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`}>
              <h2
                className={`text-base font-semibold`}
              >
                Articles
              </h2>
              <div className="flex items-center space-x-2 mt-3">
                <p
                  className={`bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`}
                >
                  {data?.articles}
                </p>
                <p
                  className={`text-[#AAB1B7]`}
                >
                  Registered
                </p>
              </div>
            </div>
            <div
              className={`flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`}
            >
              <h2
                className={`text-base font-semibold`}
              >
                Users
              </h2>
              <div className="flex items-center space-x-2 mt-3">
                <p
                  className={`bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`}
                >
                  {data?.users}
                </p>
                <p
                  className={`text-[#AAB1B7]`}
                >
                  Registered
                </p>
              </div>
            </div>
            <div
              className={`flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`}
            >
              <h2
                className={`text-base font-semibold`}
              >
                Books
              </h2>
              <div className="flex items-center space-x-2 mt-3">
                <p
                  className={`bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`}
                >
                  {data?.books}
                </p>
                <p
                  className={`text-[#AAB1B7]`}
                >
                  Registered
                </p>
              </div>
            </div>
            <div
              className={`flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`}
            >
              <h2
                className={`text-base font-semibold`}
              >
                Partners
              </h2>
              <div className="flex items-center space-x-2 mt-3">
                <p
                  className={`bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`}
                >
                  {data?.partners}
                </p>
                <p
                  className={`text-[#AAB1B7]`}
                >
                  Registered
                </p>
              </div>
            </div>
            <div
              className={`flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`}
            >
              <h2
                className={`text-base font-semibold`}
              >
                Jobs
              </h2>
              <div className="flex items-center space-x-2 mt-3">
                <p
                  className={`bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`}
                >
                  {data?.jobs}
                </p>
                <p
                  className={`text-[#AAB1B7]`}
                >
                  Registered
                </p>
              </div>
            </div>
          </div>
            )
          }
        </div>
      </div>
  )
}

export default DashboardActivity

export const getServerSideProps = withSessionSsr(
  async ({ req, res }) => {
    const { user, token } = req.session;

    return {
      props: {
        user: user || null,
        token: token || null,
      },
    };
  },
);
