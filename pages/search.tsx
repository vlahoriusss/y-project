import React from 'react';
import Header from "@/components/Header";
import { BiPlus } from 'react-icons/bi';

const Search = () => {


  return (
    <>
      <Header label="Search" />
      <div className="px-6 py-2">
      <input type="text" className="bg-neutral-900 h-14 w-full px-12 rounded-full focus:outline-none hover:cursor-pointer"></input>
      </div>
      <div className="px-6 py-2">
      <h2 className="text-xl font-regular  text-white">Yap Circles</h2>
      </div>

      <div className="flex items-center px-6 py-4 cursor-pointer" >
      <div className="h-10 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
          <div className="h-5 w-5 flex items-center justify-center ">
      </div>
        </div>
        <div>
        <h3 className="text-sm font-semibold text-white mb-1">Technology</h3>
        <p className="text-sm text-gray-400">Created By Y Social</p>
        </div>
        <BiPlus className="h-5 w-5 text-gray-500 ml-auto" />
      </div>
      <div className="border-b border-neutral-800"></div>
      <div>
      <div className="flex items-center px-6 py-4 cursor-pointer" >
      <div className="h-10 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
          <div className="h-5 w-5 flex items-center justify-center ">
        </div>
        </div>
        <div>
        <h3 className="text-sm font-semibold text-white mb-1">Sports</h3>
        <p className="text-sm text-gray-400">Created By Y Social</p>
        </div>
        <BiPlus className="h-5 w-5 text-gray-500 ml-auto" />
      </div>
      <div className="border-b border-neutral-800"></div>
      </div>
      <div className="border-b border-neutral-800"></div>
      <div>
      <div className="flex items-center px-6 py-4 cursor-pointer" >
      <div className="h-10 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
          <div className="h-5 w-5 flex items-center justify-center ">
        </div>
        </div>
        <div>
        <h3 className="text-sm font-semibold text-white mb-1">Music</h3>
        <p className="text-sm text-gray-400">Created By Y Social</p>
        </div>
        <BiPlus className="h-5 w-5 text-gray-500 ml-auto" />
      </div>
      <div className="border-b border-neutral-800"></div>
      </div>
      <div>
      <div className="flex items-center px-6 py-4 cursor-pointer" >
      <div className="h-10 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
          <div className="h-5 w-5 flex items-center justify-center ">
        </div>
        </div>
        <div>
        <h3 className="text-sm font-semibold text-white mb-1">Proxima Circle</h3>
        <p className="text-sm text-gray-400">Created By Proxima</p>
        </div>
        <BiPlus className="h-5 w-5 text-gray-500 ml-auto" />
      </div>
      <div className="border-b border-neutral-800"></div>
      </div>
      <div>
      <div className="flex items-center px-6 py-4 cursor-pointer" >
      <div className="h-10 w-10 mr-3 flex items-center justify-center rounded-full bg-neutral-800">
          <div className="h-5 w-5 flex items-center justify-center ">
        </div>
        </div>
        <div>
        <h3 className="text-sm font-semibold text-white mb-1">Photography</h3>
        <p className="text-sm text-gray-400">Created By Y Social</p>
        </div>
        <BiPlus className="h-5 w-5 text-gray-500 ml-auto" />
      </div>
      <div className="border-b border-neutral-800"></div>
      </div>
    </>
  );
};

export default Search;