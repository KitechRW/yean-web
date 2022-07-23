import React, {useState} from 'react';
import Scaffold from "modules/layouts/Scaffold";
import {LocalLibrary} from "@mui/icons-material";
import Image from "next/image";

const EditHomePageActivity = () => {
  const [title, setTitle] = useState("From Youth Engagement in Agriculture Network");

  return <Scaffold>
    <div className="inline-grid items-center gap-x-10 gap-y-5 md:grid-cols-2 bg-brand-green px-4 md:px-0 py-4 md:py-8">
      <div className="flex flex-col items-start md:pl-8">
        <div className="font-black text-3xl md:text-6xl text-white tracking-wide flex-1 w-full">
          <form className={"w-full bg-brand-green"}>
            <div
              className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
              <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800 w-full bg-brand-green">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea id="comment" rows="5" value={title} onChange={(event) => setTitle(event.target.value) }
                          className="px-0 w-full text-white bg-brand-green text-xxl border-0 focus:ring-0"
                          placeholder="Write a comment..." required></textarea>
              </div>
              <div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">
                <button type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-brand-green rounded-lg focus:ring-4 focus:bg-brand-green hover:bg-brand-green/90">
                  Save
                </button>

              </div>
            </div>
          </form>
        </div>
        <p className="text-white text-sm md:text-base leading-relaxed mt-3 md:mt-6">
          Youth Engagement in Agriculture Network (YEAN ) is a Youth
          Led Private Agriculture Extension Social enterprise
          created in 2014.
        </p>
        <button
          type="button"
          className="uppercase rounded-sm mt-3 md:mt-6 px-4 py-2 bg-brand-yellow flex items-center space-x-2 text-white"
        >
          <LocalLibrary />
          <span>Learn more</span>
        </button>
      </div>
      <div className="flex flex-col relative min-h-[418px]">
        <Image
          src="/assets/images/Home Slider Image.png"
          alt=""
          layout="fill"
          priority
          objectFit="cover"
        />
      </div>
    </div>
  </Scaffold>
}

export default EditHomePageActivity;
