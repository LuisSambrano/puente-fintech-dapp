import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from 'next/image';
import React from "react";
import { render } from "react-dom";
import Carousel from "./carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"



export default function Home() {
  const { isConnected, isConnecting } = useAccount();

  if (!isConnected)
    return (
      <div className="flex gap-5 text-center min-h-screen flex-col items-center justify-between ">
        <div>
          <div className="text-4xl">
          <p >
           Making living 
          </p>
          <div>
          <p >
           simpler!
          </p>
          </div>
          
          </div>
         
          <div className=" mt-5 items-center justify-center flex ">
           
                <Image
            src="/tag-removebg-preview.png"
            width={100}
            height={100}
            alt="logo"
          />
                  
                </div>
          <div className="flex justify-center items-center mt-5  ">
            <ConnectButton />
          </div>

          <p className="text-4xl mt-5 ">
           Powered by
          </p>
          <div className="items-center justify-center flex mt-5  ">
                <Image
            src="/celo-removebg-preview.png"
            width={200}
            height={200}
            alt="logo"
          />
                  
                </div>
        </div>
      </div>
    );

  return (
     

      <div className="flex flex-col justify-center items-center">

       




<div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* House Image */}
      <div>
      <Carousel  />
      </div>
      
      {/* House Details */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Beautiful House in a Serene Location
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          sagittis augue nec ligula viverra, sit amet lacinia odio suscipit.
          Nulla facilisi.
        </p>
        {/* Buttons */}
        <div className="flex justify-between">
          {/* View Details Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            View Details
          </button>
          {/* Contact Agent Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
        
        

            <section id="objective" className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Concept Overview</h2>
              <p className="text-gray-800">
                To create a streamlined, secure, and financially inclusive
                system for tenants to manage their rent and utilities,
                facilitating savings and contributions from external sources.
              </p>
            </section>

            <section id="features" className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-white p-6 rounded shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    Rent and Utilities Payment through MiniPay
                  </h3>
                  <p>
                    Utilize the MiniPay wallet within the Opera Mini browser for
                    direct payments of rent and utilities.
                  </p>
                </li>
                <li className="bg-white p-6 rounded shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    Locked Savings Account for Budgeting
                  </h3>
                  <p>
                    Implement a feature within MiniPay that allows tenants to
                    lock away a portion of their funds specifically for rent and
                    utilities.
                  </p>
                </li>
              </ul>
            </section>
          

         
        
      </div>
    
  );
}


