import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import {extensionMaterialsCategory} from './data';
import DrawerLayout from 'modules/layouts/DrawerLayout';

const AddExtensionMaterialForm = ({
                          children,
                        }: {
  email?: string;
  phone?: string;
  companyName?: string;
  isEdit?: boolean;
  id?: number;
  imageUrl?: string;
  handlePartner: (item: any, isEdit: boolean) => void;
  children: any;
}) => {
  const [toggle, setToggle] = React.useState(false);

  const [mainCategory, setMainCategory] = useState<any[]>([]);
  const [subCategories, setSubCategories] = useState<any[]>([]);
  const [chosenMainCategory, setChosenMainCategory] = useState("");
  const [selectedArticles, setSelectedArticles] = useState<any[]>([])
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(()=> {
    if(extensionMaterialsCategory===undefined ||extensionMaterialsCategory === null){
      return;
    }
    const category_level1 = extensionMaterialsCategory.map((each: { name: string; }) => each.name)
    setMainCategory([...category_level1])
  }, [])
  useEffect(() => {
    if(mainCategory?.length != 0){
      setChosenMainCategory(mainCategory[0])
    }
  }, [mainCategory])
  useEffect(() => {
    if(chosenMainCategory === undefined || chosenMainCategory === null){
      return;
    }
    extensionMaterialsCategory.forEach((each: { name: string; sub: { name:string; }[] }) => {
      if(each.name ===chosenMainCategory){
        let category_level2= each.sub.map(eachSub => eachSub.name);
        setSubCategories([...category_level2])
      }
    })
  }, [chosenMainCategory])

  const handleSubmit = async () => {
    const formData = new FormData();

  };

  return (
    <DrawerLayout
      title={`New Material`}
      toggle={toggle}
      setToggle={setToggle}
    >
      {children}
      <div className="flex flex-col">
        <form
          onSubmit={event => {
            event.preventDefault();
            handleSubmit();
          }}
          className="pt-4"
        >
          <div className="mb-6">
            <label
              htmlFor="materialName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="materialName"
              placeholder={'Name'}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="main-category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Main category
            </label>
            <select value={chosenMainCategory} onChange={(event) => {setChosenMainCategory(event.target.value);} } id="main-category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {
                mainCategory.map((eachMainCategory,index) =>{
                  return (
                    <option key={eachMainCategory + index} value={eachMainCategory} >{eachMainCategory}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="sub-category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              sub category
            </label>
            <select id="sub-category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {
                subCategories.map((eachSub,index) =>{
                  return (
                    <option key={eachSub + index+"sub"} value={eachSub} >{eachSub}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="main-content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Articles </label>

            <Select
              isMulti={true}
              defaultValue={selectedArticles}
              onChange={newValue => {
                setSelectedArticles([...newValue]);
              }}
              options={articles}
              isSearchable
              className="mt-2"
            />
          </div>

          <button
            type="submit"
            className="text-white mt-12 bg-brand-green/80 hover:bg-brand-green focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </DrawerLayout>
  );
};

export default AddExtensionMaterialForm;
