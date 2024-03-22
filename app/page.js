'use client'

import SingleComment from "@/components/SingleComment";
import SingleStory from "@/components/SingleStory";
import { useEffect, useState } from 'react'

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Activetab, setActiveTab] = useState(true);
  const [width, setwidth] = useState(0);

  useEffect(() => {
    setwidth(window.innerWidth);
  }, [])

  const detectWidth = () => {
    setwidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", detectWidth);
    console.log(width);
  }, [width])

  return (
    <main className="flex">
      <div className={isOpen?"transition-all absolute w-[70%] z-10 sm:sticky left-0 top-0 h-screen bg-[#1e375f] sm:w-[30%]":"sticky top-0 h-screen w-0"}>
        <div className={isOpen?"h-full text-white block":"hidden"}>
          <div className="py-4 px-6 border-b-2 border-gray-500 flex justify-between items-center text-2xl">
            <div className="flex gap-3 items-center">
              <ion-icon name="person"></ion-icon><span className="text-base">Hello, User</span>
            </div>
            <ion-icon name="notifications"></ion-icon>
          </div>
          <div className="py-4">
            <div className="bg-[#142341] px-4 py-2 flex items-center relative">
              <span className="w-[10%] flex items-center"><ion-icon name="chatbox"></ion-icon></span>
              <span>Disscussion Fourm</span>
              <span className="absolute right-4 flex items-center"><ion-icon name="caret-down-outline"></ion-icon></span>
            </div>
            <div className="px-4 py-2 flex items-center relative">
              <span className="w-[10%] flex items-center"><ion-icon name="chatbox"></ion-icon></span>
              <span>Market Stories</span>
            </div>
            <div className="px-4 py-2 flex items-center relative">
              <span className="w-[10%]"></span>
              <span>Sentiment</span>
            </div>
            <div className="px-4 py-2 flex items-center relative">
              <span className="w-[10%]"></span>
              <span>Market</span>
            </div>
            <div className="px-4 py-2 flex items-center relative">
              <span className="w-[10%]"></span>
              <span>Sector</span>
            </div>
            <div className="px-4 py-2 flex items-center relative">
              <span className="w-[10%]"></span>
              <span>Watchlist</span>
            </div>
            <div className="px-4 py-2 flex items-center relative">
              <span className="w-[10%]"></span>
              <span>Events</span>
            </div>
            <div className="px-4 py-2 flex items-center relative">
              <span className="w-[10%]"></span>
              <span>News/Interview</span>
            </div>
          </div>
        </div>
        <button className="absolute top-[48%] right-[-18px] h-16 text-white p-0.5 bg-[#1e375f]" onClick={() => {setIsOpen(!isOpen)}}><ion-icon name="caret-forward-outline"></ion-icon></button>
      </div>
      <div className="absolute w-full h-[8vh] sm:hidden bg-[#142841] text-white">
        <button className={Activetab?"w-1/2 bg-[#1e375f] h-full border-b-2 border-red-800": "w-1/2 h-full"} onClick={() => {setActiveTab(true)}}>Disscussion Fourm</button>
        <button className={!Activetab?"w-1/2 bg-[#1e375f] h-full border-b-2 border-red-800": "w-1/2 h-full"} onClick={() => {setActiveTab(false)}}>Market Stories</button>
      </div>
      <div className={width >= 650?"sm:w-[70%] sm:px-6 py-5":Activetab?"w-[100%] sm:w-[70%] sm:px-6 py-5": "hidden"}>
        <h1 className="text-2xl p-2 hidden sm:inline font-bold uppercase text-[#d5868e] bg-[#f0f0f0]">Disscussion Fourm</h1>
        <div className="pt-8 sm:py-5 flex flex-col sm:items-start items-center gap-6">
          <SingleComment />
          <SingleComment />
          <SingleComment />
          <SingleComment />
          <SingleComment />
        </div>
      </div>
      <div className={width >= 650?"sm:w-[30%] sm:py-6 py-8 px-10":!Activetab?"w-[100%] sm:w-[30%] sm:py-6 py-8 px-10": "hidden"}>
        <h1 className="text-2xl p-2 hidden sm:inline font-bold uppercase text-[#d5868e] bg-[#f0f0f0]">Market Stories</h1>
        <div className="py-8 flex flex-col gap-9">
          <SingleStory />
          <SingleStory />
          <SingleStory />
        </div>
      </div>
    </main>
  );
}

export default page
