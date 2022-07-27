import React, { useEffect, useState } from 'react';
import PartnerAdminView from 'modules/activities/_Partials/Partners/PartnerAdminView';
import AddPartnerForm from 'modules/activities/_Partials/Partners/AddPartner';
import { useOpenFetcher } from 'apis/utils/fetcher';

const AdminPartnersActivity = () => {
  const [filterValue, setFilterValue] = useState('');
  const [partnersList, setPartnersList] = useState<any[]>([]);
  const { data } = useOpenFetcher('/api/partners');

  useEffect(() => {
    if (data.partners?.rows?.length) {
      const filteredPartner = data.partners?.rows?.filter(each =>
        each.companyName
          .toLowerCase()
          .includes(filterValue.toLowerCase()),
      );
      setPartnersList(filteredPartner);
    }
  }, [data.partners?.rows, filterValue]);

  const handleAddPartner = (item: any, isEdit: boolean) => {
    if (!isEdit) {
      setPartnersList(prev => [...prev, item]);
    } else if (isEdit) {
      const updates = partnersList.map(element => {
        if (element.id === item.id) {
          return item;
        }
        return element;
      });
      setPartnersList(updates);
    }
  };

  useEffect(() => {
    if (data.partners?.rows?.length) {
      setPartnersList(data.partners.rows);
    }
  }, [data.partners?.rows]);

  return (
    <>
      <div>
        <section>
          <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">
                Partners
              </h2>

              <AddPartnerForm
                handlePartner={(item, isEdit) => {
                  handleAddPartner(item, isEdit);
                }}
              >
                <button className="hover:bg-brand-green group flex items-center rounded-md bg-brand-green/80 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mr-2"
                    aria-hidden="true"
                  >
                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                  </svg>
                  New
                </button>
              </AddPartnerForm>
            </div>
            <form className="group relative">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <input
                value={filterValue}
                onChange={event => setFilterValue(event.target.value)}
                className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Filter projects"
                placeholder="Filter Partners..."
              />
            </form>
          </header>
          <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm leading-6">
            {partnersList.map((eachPartner, index) => {
              return (
                <PartnerAdminView
                  key={eachPartner.id}
                  data={eachPartner}
                  handleAddPartner={handleAddPartner}
                />
              );
            })}

            <AddPartnerForm
              handlePartner={(item, isEdit) => {
                handleAddPartner(item, isEdit);
              }}
            >
              <li className="flex">
                <button className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
                  <svg
                    className="group-hover:text-blue-500 mb-1 text-slate-400"
                    width="20"
                    height="20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                  </svg>
                  New Partner
                </button>
              </li>
            </AddPartnerForm>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AdminPartnersActivity;
