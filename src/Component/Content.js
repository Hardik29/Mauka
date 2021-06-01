import React from "react";
import moving from "./assest/moving.gif";
import laptop from "./assest/laptop.png";

function Content() {
  return (
    <div className="mt-20">
      <div className="text-center text-3xl font-bold text-mysite-boldblue">
        About Mauka
      </div>
      <div className="flex  mt-20">
        <div className="mr-10">
          <p className="pl-36 pt-14 text-3xl">
            At Mauka, we believe there is always room to <br />
            grow — for you and for us.
          </p>
          <p className="pl-36 pt-7 text-3xl">
            CohortOne will be the first of many communities
            <br />
            for students to fail, learn, and improve.
          </p>
        </div>
        <img src={moving} alt="" className="w-72 h-72 pl-20 pr-10 ml-24" />
      </div>
      <div className="text-center text-3xl font-bold text-mysite-boldblue mt-20">
        COHORT DETAILS
      </div>
      <div className="flex justify-center align-middle mt-20 pr-24 ml-24">
        <img src={laptop} alt="" className="w-1/2 h-full pl-20 pt-36" />
        <div className="">
          <h1 className="text-xl text-gray-600 font-bold">
            Join our #CohortOne
            <br />
          </h1>
          <p className="text-2xl text-gray-600 font-medium pr-20">
            Get exclusive access to our community of 20 highly motivated
            individuals like you.
          </p>
          <p className="pt-10 text-lg font-medium text-gray-600">
            <div className="bg-mysite-boldblue w-40 rounded p-2 text-white">
              Cohort Timeline
            </div>
            <div className="text-left pr-20">
              This cohort will run for 60 days and will focus on high-demand,
              transferable skills that will give you an edge in your
              professional career.
            </div>
          </p>
          <p className="pt-10 text-lg font-medium text-gray-600">
            <div className="bg-mysite-boldblue w-80 rounded p-2 text-white">
              Focus on community and networking
            </div>
            <p className="text-lg font-medium pr-20">
              At Mauka, we focus on creating communities and conversations —
              with yourself, your peers and experts through a series of Q&As
              with moderators and industry veterans
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
