import React from 'react';
import CustomImage from 'modules/_partials/CustomImage';
import AddPartnerForm from '../AddPartner';

const PartnerAdminView = ({
  handleAddPartner,
  data,
}: {
  data: any;
  handleAddPartner: (item: any, isEdit: boolean) => void;
}) => {
  return (
    <>
      <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <CustomImage
          src={data?.image}
          width={'320px '}
          height={'200px'}
          objectFit="cover"
          priority
        />

        <div className="p-5">
          <div>
            <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data?.companyName}
            </h6>
          </div>
          <AddPartnerForm
            isEdit
            id={data?.id}
            imageUrl={data?.image}
            email={data?.email}
            phone={data?.phone}
            handlePartner={(item, isEdit) =>
              handleAddPartner(item, isEdit)
            }
          >
            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-brand-green/70 rounded-lg hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Edit
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </AddPartnerForm>
        </div>
      </div>
    </>
  );
};
export default PartnerAdminView;
