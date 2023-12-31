import React from "react";
import darkChicken from "../../assets/dark black 1.png";
import goldChicken from "../../assets/Chicken gold 1.png";
import logo from "../../assets/boqcoqlogo.png";
import chickenWithSignBoard from "../../assets/Chicken with sign board  1.png";
import chicken01 from "../../assets/our team/ourTeam01.png";
import chicken02 from "../../assets/our team/ourTeam02.png";
import chicken03 from "../../assets/our team/ourTeam03.png";

import naming01 from "../../assets/naming section/black.png";
import naming02 from "../../assets/naming section/purple.png";
import naming03 from "../../assets/naming section/brown.png";

import ourNfts01 from "../../assets/our nfts/mint01.png";
import ourNfts02 from "../../assets/our nfts/mint02.png";
import ourNfts03 from "../../assets/our nfts/mint03.png";
import ourNfts04 from "../../assets/our nfts/mint04.png";
import ourNfts05 from "../../assets/our nfts/mint05.png";
import ourNfts06 from "../../assets/our nfts/mint06.png";

import joinWithUsTwitter from "../../assets/join with us/twitter.png";
import joinWithUsDiscode from "../../assets/join with us/discode.png";

import footerTop from "../../assets/footer/footer-top.png";

import ICON from "../../assets/icon.png";
import ICON2 from "../../assets/icon2.png";
import { Button } from "@material-tailwind/react";
import { MdAnalytics } from "react-icons/md";
import HomeCard from "../../components/home-card";
function index() {
  return (
    // <div className="container mx-auto">
    <div className="">
      <div className="bg-gradient-to-r from-[#B9F9C6] via-[#F8E7A9] to-[#f5c1be]">
        <section className="">
          <p className="text-[65px] text-[#EB5A5D] text-center mb-4">
            BOQ BOQ COQ
          </p>
          <p className="text-[22px] text-[#FE7A2B] text-center leading-7 mb-16">
            10.000 uniquely generated Whales that have grated to the <br></br>
            cleaner a warmer network of <br></br>Solana. Drawn by hand and
            assembled by cod <br></br>not one Whale is the same!
          </p>

          <div className="flex justify-center mb-[100px]">
            <div className="bg-[#FDDF7C] rounded-full shadow-lg shadow-[#a1a1a1] w-[1250px]">
              <p className="text-[#fff] text-[50px] text-center">MINT</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <section className="bg-[#FDDF7C] -mb-[200px] w-[1250px] py-16 px-20 relative drop-shadow-xl ">
              <div className="absolute top-[-290px] left-[-140px] ">
                <img
                  src={chickenWithSignBoard}
                  alt="aad"
                  className="w-[450px] object-scale-down "
                />
              </div>
              <p className="text-[70px] text-[#EB5A5D] text-center mb-[100px]">
                ABOUT US
              </p>

              <div className="absolute top-0 right-[-130px] ">
                <img
                  src={darkChicken}
                  alt="aad"
                  className="w-[450px] object-scale-down "
                />
              </div>

              <div className="ml-[200px] mb-[450px]">
                <p className="text-[60px] text-[#FE7A2B] text-left">
                  HOW TO BUY
                </p>

                <p className="text-left max-w-[550px] text-[22px]">
                  Welcome to [Your Website Name]! We're here to [briefly
                  describe what your website offers or its purpose].icable: Sign
                  up/Discover/Explore now!]"Welcome to [Your Website Name]!
                  We'rehere to [briefly describe what your website offers or its
                  purpose].icable: Sign up/Discover/Explore now!]"
                </p>
              </div>

              <div className="absolute bottom-[-30px] left-[-140px] ">
                <img
                  src={goldChicken}
                  alt="aad"
                  className="w-[600px] object-scale-down "
                />
              </div>

              <div className="absolute bottom-[470px] right-[-70px] ">
                <img
                  src={logo}
                  alt="aad"
                  className="w-[350px] object-scale-down "
                />
              </div>

              <div className="">
                <p className="text-[60px] text-[#FE7A2B] text-right">
                  HOW TO BUY
                </p>
                <p className="text-right text-[22px]">
                  Welcome to [Your Website Name]! We're <br></br>here to
                  [briefly describe what your <br></br>website offers or its
                  purpose].icable:
                  <br></br>
                  Sign up/Discover/Explore now!]"Welcome to <br></br>[Your
                  Website Name]! We're<br></br> here to [briefly describe what
                  your <br></br>
                  website offers or its purpose].icable:<br></br> Sign
                  up/Discover/Explore now!]"
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-[#c2f1ff]">
        <div className="container mx-auto pt-[300px]">
          <section className="bg-[#6388B8] rounded-3xl  py-16 shadow-lg shadow-black">
            <p className="text-[65px] text-[#DCF4FF] text-center ">OUR TEAM</p>
            <div className="flex items-center justify-center gap-6">
              <img
                src={chicken01}
                alt="aad"
                className="w-[390px] object-scale-down "
              />
              <img
                src={chicken02}
                alt="aad"
                className="w-[300px] object-scale-down "
              />
              <img
                src={chicken03}
                alt="aad"
                className="w-[300px] object-scale-down "
              />
            </div>
          </section>
        </div>

        <div>
          <section>
            <div className="flex items-center justify-center">
              <div>
                <p className="text-[50px] text-[#383838]">NAME 01</p>
                <p className="text-[#383838] w-[300px]">
                  Welcome to [Your Website Name]! We're here to [briefly Sign
                  up/Discover/Explore now!]"
                </p>
              </div>

              <img
                src={naming01}
                alt="naming chicken 01"
                className="w-[300px] transform scale-x-[-1] object-scale-down "
              />
            </div>

            <div className="flex items-center justify-center">
              <img
                src={naming02}
                alt="naming chicken 02"
                className="w-[300px] object-scale-down "
              />

              <div>
                <p className="text-[50px] text-[#571857] text-right">NAME 02</p>
                <p className="text-[#571857] text-right w-[300px]">
                  Welcome to [Your Website Name]! We're here to [briefly Sign
                  up/Discover/Explore now!]"
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center pb-[150px]">
              <div>
                <p className="text-[50px] text-[#674629]">NAME 01</p>
                <p className="text-[#674629] w-[300px]">
                  Welcome to [Your Website Name]! We're here to [briefly Sign
                  up/Discover/Explore now!]"
                </p>
              </div>

              <img
                src={naming03}
                alt="naming chicken 03"
                className="w-[300px] object-scale-down transform scale-x-[-1]"
              />
            </div>
          </section>
        </div>
      </div>

      {/* <div className="container mx-auto mt-[-100px] "> */}
      <div className="container mx-auto  mt-[-100px] mb-[-100px]">
        <section className="bg-[#fff] drop-shadow-xl py-16 rounded-3xl">
          <p className="text-[65px] text-[#002C48] text-center mb-4">
            OUR NFTS
          </p>
          <div className="grid grid-cols-2 gap-x-32 gap-y-16 mb-12">
            <div className="justify-self-end">
              <img
                src={ourNfts01}
                alt="naming chicken 03"
                className="w-[300px] object-scale-down"
              />
            </div>

            <div className="justify-self-start">
              <img
                src={ourNfts02}
                alt="naming chicken 03"
                className="w-[300px] object-scale-down"
              />
            </div>

            <div className="justify-self-end">
              <img
                src={ourNfts03}
                alt="naming chicken 03"
                className="w-[300px] object-scale-down"
              />
            </div>

            <div className="justify-self-start">
              <img
                src={ourNfts04}
                alt="naming chicken 03"
                className="w-[300px] object-scale-down"
              />
            </div>

            <div className="justify-self-end">
              <img
                src={ourNfts05}
                alt="naming chicken 03"
                className="w-[300px] object-scale-down"
              />
            </div>

            <div className="justify-self-start">
              <img
                src={ourNfts06}
                alt="naming chicken 03"
                className="w-[300px] object-scale-down"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-[#fff] text-[30px] text-center w-[800px] bg-[#002C48] rounded-full ">
              More NFTs{" "}
            </p>
          </div>
        </section>
      </div>

      <div className="bg-[#F3A4CD] pt-[200px]">
        <div className="container mx-auto bg-[#fff] py-[70px] rounded-3xl drop-shadow-xl">
          <section className="">
            <p className="text-[#002C48] text-[50px] text-center">
              JOIN WITH US
            </p>
            <p className="text-[#002C48] text-center">
              Welcome to [Your Website Name]! We're here to [briefly Sign
              up/Discover/Explore now!]"
            </p>

            {/* <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  src={joinWithUsTwitter}
                  alt="naming chicken 03"
                  className="w-[450px] object-scale-down"
                />
              </div>
              <div>
                <p className="bg-[#FDDF7C] text-center px-8 py-2 w-max rounded-full drop-shadow-lg">
                  Twitter
                </p>
              </div>

              <div>
                <p className="bg-[#FE7A2B]  text-center px-8 py-2 w-max rounded-full drop-shadow-lg">
                  Discode
                </p>
              </div>

              <div>
                <img
                  src={joinWithUsDiscode}
                  alt="naming chicken 03"
                  className="w-[450px] object-scale-down"
                />
              </div>
            </div> */}

            <div className="">
              <div className="flex justify-center gap-6 items-center">
                <div>
                  <img
                    src={joinWithUsTwitter}
                    alt="naming chicken 03"
                    className="w-[450px] object-scale-down"
                  />
                </div>
                <div>
                  <p className="bg-[#FDDF7C] text-center px-8 py-2 w-max rounded-full drop-shadow-lg">
                    Twitter
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-6 items-center">
                <div>
                  <p className="bg-[#FE7A2B]  text-center px-8 py-2 w-max rounded-full drop-shadow-lg">
                    Discode
                  </p>
                </div>

                <div>
                  <img
                    src={joinWithUsDiscode}
                    alt="naming chicken 03"
                    className="w-[450px] object-scale-down"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-center">
          <img
            src={footerTop}
            alt="naming chicken 03"
            className="w-[450px] object-scale-down"
          />
        </div>
      </div>
      <section className="bg-[#EB5A5D]">
        <p className="text-[45px] text-center mb-4 pt-10">FOOTER</p>
        <p className="text-[20px] text-center mb-6 px-16">
          Welcome to [Your Website Name]! We're here to [briefly Sign
          up/Discover/Explore now!]" Welcome to [Your Website Name]! We're here
          to [briefly Sign up/Discover/Explore now!]"Welcome to [Your Website
          Name]! Wefly Sign up/Discover/Explore now!]"Welcome to [Your Wte
          Name]! We're here to [briefly Sign up/Discover/Explore now!]"
        </p>

        <div className="flex items-center justify-center gap-12 mb-8">
          <img src={logo} alt="logo" className="w-[50px] object-scale-down" />
          <img src={logo} alt="logo" className="w-[50px] object-scale-down" />
          <img src={logo} alt="logo" className="w-[50px] object-scale-down" />
          <img src={logo} alt="logo" className="w-[50px] object-scale-down" />
          <img src={logo} alt="logo" className="w-[50px] object-scale-down" />
          <img src={logo} alt="logo" className="w-[50px] object-scale-down" />
        </div>

        <div className="flex items-center justify-center pb-16">
          <p className="bg-[#fff] text-[25px] text-[#EB5A5D] text-center w-[700px] py-1 rounded-full drop-shadow-lg">
            SUBSCRIBE
          </p>
        </div>
      </section>
    </div>
  );
}

export default index;
