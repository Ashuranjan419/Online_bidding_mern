import React from "react";
import { Title } from "../../router";

export const WinningBidList = () => {
  return (
    <>
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="flex justify-between">
          <Title level={5} className=" font-normal">
            Winning Product Lists
          </Title>
        </div>
        <br />

        <div className="text-center py-5">
          <p className="text-gray-500">Diamond Pearl of 19th Century</p>
        </div>
      </section>
    </>
  );
};
