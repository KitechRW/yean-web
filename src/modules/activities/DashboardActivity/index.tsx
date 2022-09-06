import React from 'react'

const DashboardActivity = () => {
  return (
    <div>
      <div className={"flex flex-col"}>
        <div className={"flex place-content-evenly mt-5"}>
          <div
            className={`flex flex-col p-3 px-8 justify-center min-w-[255px] min-h-[145px] drop-shadow rounded-lg bg-white`}
          >
            <h2
              className={`text-base font-semibold`}
            >
              Reports
            </h2>
            <div className="flex items-center space-x-2 mt-3">
              <p
                className={`bg-[#E6F3FF] p-2 px-3 rounded text-dark-green font-bold`}
              >
                34
              </p>
              <p
                className={`text-[#AAB1B7]`}
              >
                Registered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardActivity
