import React from 'react';

import briogeLogo from '../assets/images/brioge.png';
import logo from '../assets/images/SRLOGO.svg';
import eth2 from '../assets/images/eth.svg';
import multiChain from '../assets/images/multichain.svg';
import connectWaletBrn from '../assets/images/CollectWalletButton.svg';
import Image from 'next/image';
import Button from './Button';

const ConnectWallect = () => {
  return (
    <div className=" bg-secondary space-y-5 border px-6 py-6 border-[#D9D9D9] rounded-[16px]">
      <div className=" max-w-[160px] md:max-w-[270px]">
        <Image src={briogeLogo} alt="briogeLogo" />
      </div>
      <p className=" text-sm lg:text-lg ">
        Transfer SquidGrow Tokens between <br /> Ethereum and Binance Smart
        Chain.
      </p>
      <div>
        <h3 className=" text-lg pb-2">Token Balance:</h3>
        <div className=" space-y-4 relative">
          {/* From */}
          <div className=" bg-extraDark rounded px-4 py-3">
            <h2 className=" text-xs lg:text-sm text-muted">From</h2>
            <div className=" flex items-center py-1 justify-between">
              <div className="flex items-center gap-2  lg:gap-5">
                <Image
                  alt="logo"
                  className="w-[40px] object-cover"
                  src={logo}
                />
                <h2 className="flex text-base lg:text-lg items-center gap-3">
                  <span className=" block">SQUIDGROW</span>
                  <svg
                    width="20"
                    height="20"
                    className=" block"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9333 2.81671H10.7416H6.06664C5.26664 2.81671 4.86664 3.78338 5.43331 4.35004L9.74997 8.66671C10.4416 9.35838 11.5666 9.35838 12.2583 8.66671L13.9 7.02504L16.575 4.35004C17.1333 3.78338 16.7333 2.81671 15.9333 2.81671Z"
                      fill="#57585A"
                    />
                  </svg>
                </h2>
              </div>
              <h2 className=" text-xl">1</h2>
            </div>
            <div className="flex justify-between items-center">
              <h2 className=" text-xs lg:text-sm text-muted">SquidGrow</h2>
              <h2 className=" text-xs lg:text-sm text-muted">~$1,835.37</h2>
            </div>
          </div>
          <div className="w-[44px] cursor-pointer h-[44px] absolute left-[46%] top-[39%]  rounded-full border-muted border-[3px] bg-extraDark flex justify-center items-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7857 8.08333L9.36903 3.66666C9.28569 3.58333 9.17855 3.5119 9.0595 3.46428C9.0476 3.46428 9.03569 3.46428 9.02379 3.45238C8.92855 3.41666 8.83331 3.39285 8.72617 3.39285C8.48807 3.39285 8.26188 3.48809 8.09522 3.65476L3.65474 8.08333C3.3095 8.42857 3.3095 9 3.65474 9.34523C3.99998 9.69047 4.57141 9.69047 4.91665 9.34523L7.83331 6.42857V25.7143C7.83331 26.2024 8.23807 26.6071 8.72617 26.6071C9.21427 26.6071 9.61903 26.2024 9.61903 25.7143V6.44047L12.5238 9.34523C12.7024 9.52381 12.9286 9.60714 13.1547 9.60714C13.3809 9.60714 13.6071 9.52381 13.7857 9.34523C14.1309 9 14.1309 8.44047 13.7857 8.08333Z"
                fill="white"
              />
              <path
                d="M26.3452 20.6548C26 20.3095 25.4285 20.3095 25.0833 20.6548L22.1666 23.5714V4.28571C22.1666 3.79761 21.7619 3.39285 21.2738 3.39285C20.7857 3.39285 20.3809 3.79761 20.3809 4.28571V23.5595L17.4762 20.6548C17.1309 20.3095 16.5595 20.3095 16.2143 20.6548C15.869 21 15.869 21.5714 16.2143 21.9167L20.6309 26.3333C20.7142 26.4167 20.8214 26.4881 20.9404 26.5357C20.9523 26.5357 20.9643 26.5357 20.9762 26.5476C21.0714 26.5833 21.1785 26.6071 21.2857 26.6071C21.5238 26.6071 21.75 26.5119 21.9166 26.3452L26.3452 21.9167C26.6904 21.5595 26.6904 21 26.3452 20.6548Z"
                fill="white"
              />
            </svg>
          </div>
          {/* To */}
          <div className="  bg-extraDark rounded px-4 py-3">
            <h2 className=" text-xs lg:text-sm text-muted">To</h2>
            <div className=" py-1 flex items-center justify-between">
              <div className="flex items-center gap-2  lg:gap-5">
                <Image src={eth2} className="w-[40px]" alt="" />
                <h2 className="flex text-base lg:text-lg items-center gap-3">
                  <span className=" block">BNB</span>
                  <svg
                    width="20"
                    height="20"
                    className=" block"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9333 2.81671H10.7416H6.06664C5.26664 2.81671 4.86664 3.78338 5.43331 4.35004L9.74997 8.66671C10.4416 9.35838 11.5666 9.35838 12.2583 8.66671L13.9 7.02504L16.575 4.35004C17.1333 3.78338 16.7333 2.81671 15.9333 2.81671Z"
                      fill="#57585A"
                    />
                  </svg>
                </h2>
              </div>
              <h2 className=" text-base lg:text-xl">179,430,020.3</h2>
            </div>
            <div className="flex justify-between items-center">
              <h2 className=" text-xs lg:text-sm text-muted">
                Binance Smart Chain
              </h2>
              <h2 className=" text-xs lg:text-sm text-muted">
                ~$1 831.44 (-0.21%)
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Percent fee:  */}

      <div className=" border space-y-2 border-[#2A2A2A] px-5 py-3">
        <div className=" flex justify-between items-center">
          <p className=" text-xs lg:text-sm">Percent fee: </p>
          <p className=" text-xs lg:text-sm">0.1%</p>
        </div>
        <div className=" flex justify-between items-center">
          <p className="text-xs lg:text-sm">Minimum Fee: </p>
          <p className="text-xs lg:text-sm">482,765,280 SquidGrow</p>
        </div>
      </div>
      {/* button collect wallet */}

      <div className="  flex justify-center">
        <Button />
      </div>
      {/* footer */}
      <div className="flex items-center gap-3">
        <div className=" text-muted">Powered By Multichain</div>
        <Image src={multiChain} alt="multiChain" />
      </div>
    </div>
  );
};

export default ConnectWallect;
