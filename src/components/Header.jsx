import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Header = () => {
  const [leftSide, setLeftSide] = useState();
  const [topSide, setTopSide] = useState();
  const [big, setBig] = useState(false);

  useEffect(() => {
    const hendleMouse = (dets) => {
      setLeftSide(dets.x);
      setTopSide(dets.y);
    };
    document.body.addEventListener("mousemove", hendleMouse);

    return () => {
      document.body.removeEventListener("mousemove", hendleMouse);
    };
  }, []);

  useEffect(() => {
    gsap.to(".cursorji", {
      x: leftSide,
      y: topSide,
      duration: 0.7,
      ease: "power4.out",
    });
  }, [leftSide, topSide]);

  return (
    <div className="w-full min-h-[82vh] bg-black text-white">
      <div
        className="cursorji w-4 h-4 fixed bg-[#FEE500] rounded-full pointer-events-none"
        style={{
          zIndex: 9999,
        }}
      ></div>
      <div className="h-1/2 ">
        <nav>
          <div className="flex justify-end">
            <div className="h-20 w-[55%]">
              <div className="bigger flex items-center font-normal text-white/85 justify-around text-2xl capitalize  h-full">
                <div className="group overflow-hidden cursor-pointer  h-9">
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    purpose
                  </h1>
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    vision
                  </h1>
                </div>
                <div className="group overflow-hidden cursor-pointer  h-9">
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    work
                  </h1>
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    creations
                  </h1>
                </div>
                <div className="group overflow-hidden cursor-pointer  h-9">
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    about
                  </h1>
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    soul
                  </h1>
                </div>
                <div className="group overflow-hidden cursor-pointer  h-9">
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    blog
                  </h1>
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    thoughts
                  </h1>
                </div>
                <div className="group overflow-hidden cursor-pointer  h-9">
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    shop
                  </h1>
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    goods
                  </h1>
                </div>
                <div className="group overflow-hidden cursor-pointer  h-9">
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    contact
                  </h1>
                  <h1 className="group-hover:-translate-y-[100%] transition-all">
                    talk
                  </h1>
                </div>
                <div className="group flex">
                  <div className="w-3 h-3  border-2 group-hover:bg-transparent bg-white rounded-full"></div>
                  <div className="w-3 h-3  group-hover:bg-white border-white border-2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex relative bottom-10">
          <svg
            width="1889"
            height="384"
            viewBox="0 0 1889 384"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            data-v-661b3f1c=""
            className="h-1/2"
          >
            <path
              d="M257.538 0.076895V165.403H35.5438V0.076895H0.710879V377H35.5438V198.156H257.538V377H292.371V0.076895H257.538ZM548.886 377H581.12V97.297H548.886V254.825C548.886 314.093 511.454 354.645 467.263 354.645C412.674 354.645 400.197 319.292 400.197 266.782V97.297H367.963V275.621C367.963 344.767 394.478 383.759 458.945 383.759C507.295 383.759 534.849 358.284 548.886 331.769V377ZM691.309 221.552C691.309 162.284 725.102 121.732 770.853 121.732C824.921 121.732 835.839 157.085 835.839 209.594V377H868.073V221.552C868.073 162.284 901.866 121.732 947.616 121.732C1001.69 121.732 1012.6 157.085 1012.6 209.594V377H1044.84V200.756C1044.84 131.61 1019.88 92.618 955.935 92.618C910.184 92.618 882.63 112.894 861.314 148.247C849.356 112.374 824.402 92.618 779.171 92.618C729.261 92.618 705.346 118.093 691.309 144.607V97.297H659.075V377H691.309V221.552ZM1128.53 306.814C1128.53 263.663 1177.4 248.066 1291.25 235.589V249.106C1291.25 328.13 1244.46 355.164 1192.47 355.164C1155.04 355.164 1128.53 336.448 1128.53 306.814ZM1291.77 377H1324.53C1322.97 346.326 1321.41 319.292 1321.41 287.578C1321.41 265.223 1321.93 240.268 1321.93 201.276C1321.93 118.093 1278.78 91.0583 1213.79 91.0583C1149.84 91.0583 1107.21 126.931 1099.41 182.56H1133.21C1135.81 145.647 1163.88 119.652 1211.71 119.652C1251.74 119.652 1289.69 133.17 1289.69 197.117V206.995C1155.04 221.032 1092.65 243.387 1092.65 307.334C1092.65 353.605 1132.69 383.759 1185.2 383.759C1237.19 383.759 1272.02 364.003 1290.21 334.369L1291.77 377ZM1421.9 97.297H1389.67V377H1421.9V221.552C1421.9 162.284 1458.29 121.732 1506.64 121.732C1562.79 121.732 1576.83 157.085 1576.83 209.594V377H1609.06V200.756C1609.06 131.61 1581.51 92.618 1514.96 92.618C1462.45 92.618 1435.94 118.093 1421.9 144.607V97.297ZM1692.59 306.814C1692.59 263.663 1741.46 248.066 1855.32 235.589V249.106C1855.32 328.13 1808.53 355.164 1756.54 355.164C1719.11 355.164 1692.59 336.448 1692.59 306.814ZM1855.84 377H1888.59C1887.03 346.326 1885.47 319.292 1885.47 287.578C1885.47 265.223 1885.99 240.268 1885.99 201.276C1885.99 118.093 1842.84 91.0583 1777.85 91.0583C1713.91 91.0583 1671.28 126.931 1663.48 182.56H1697.27C1699.87 145.647 1727.94 119.652 1775.77 119.652C1815.81 119.652 1853.76 133.17 1853.76 197.117V206.995C1719.11 221.032 1656.72 243.387 1656.72 307.334C1656.72 353.605 1696.75 383.759 1749.26 383.759C1801.25 383.759 1836.08 364.003 1854.28 334.369L1855.84 377Z"
              data-v-661b3f1c=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
