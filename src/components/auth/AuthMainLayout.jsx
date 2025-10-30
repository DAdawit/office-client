import { useEffect, useState } from "react";
import { SelectPreferredLanguage } from "../common/SelecetPreferedLanguage";
import ThemeToggleButton from "../common/ThemeToggleButton";
import PoweredBy from "../common/poweredBy";

const AuthMainLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return sessionStorage.getItem("darkmode") === "true";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    sessionStorage.setItem("darkmode", darkMode);

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className="min-h-screen dark:bg-background xxl:h-screen max-w-screen flex lg:flex-cols-2 bg-base-white overflow-hidden custom-p-20 mx-auto">
        <div className="w-full min-h-full flex flex-1 flex-col">
          <div className="flex-1 flex flex-col items-stretch gap-1 xxl:gap-3">
            <div className="flex justify-between mx-auto px-5 w-full">
              <ThemeToggleButton checked={darkMode} onChange={setDarkMode} />
              <SelectPreferredLanguage />
            </div>

            <div className="grid xxl:gap-3">
              <div className="xxl:mt-5 flex justify-center">
                <img
                  src="/logos/house-logo-1.png"
                  alt="aahc logo"
                  className="h-[89px] w-[189px]"
                />
              </div>

              <div className="flex justify-center custom-mt-12">
                <h6>Welcome Back To CSM & ADTM system</h6>
              </div>

              <div className="flex flex-col items-center gap-y-3 pt-4">
                {children}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <PoweredBy />
          </div>
        </div>

        <div className="min-h-full flex-1 w-full rounded-xl hidden lg:flex overflow-hidden [mask-image:linear-gradient(white,white)] [mask-composite:intersect] will-change-transform">
          <div className="relative min-h-full w-full">
            <img
              src="/loginImage.png"
              alt="aahc logo"
              className="absolute z-10 h-full rounded-xl"
              // className=" inset-0 bg-[url('/loginImage.png')] h-full bg-cover bg-top rounded-3xl z-30 bg-blue-600"
            />
            {/* <div className="absolute inset-0 bg-[url('/loginImage.png')] h-full bg-cover bg-top rounded-3xl blur-sm [mask-image:linear-gradient(white,white)] [mask-composite:intersect] will-change-transform " /> */}
            <div className="absolute z-20 grid w-full min-h-full backdrop-blur-xs rounded-2xl">
              <div className="grid grid-row-8">
                <div className="flex flex-col gap-2 px-5 row-span-2 pt-10 justify-center">
                  <div className="flex justify-between">
                    <div>
                      <img
                        src="/logos/bureau-logo.png"
                        alt="aahc logo"
                        className="lg:h-[80px] lg:w-[80px] xl:h-[97px] xl:w-[97px]"
                      />
                    </div>
                    <div>
                      <h4 className="text-center uppercase grid text-white text-xl lg:text-lg xl:text-2xl xxl:text-[32px] px-2">
                        <span>Addis Ababa Housing</span>
                        <span>Development Corporation</span>
                      </h4>
                      <h6 className="text-center text-[14px] custom-mt-4 text-accent-logo">
                        Welcome Back To CSM & ADTM system
                      </h6>
                    </div>
                    <div className="">
                      <img
                        src="/logos/Group 2.png"
                        alt="aahc logo"
                        className="lg:h-[80px] lg:w-[80px] xl:h-[97px] xl:w-[97px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="row-span-1 custom-p-20">
                  <h4 className="custom-p-20 text-white text-center font-bold grid gap-y-2 text-xl lg:text-lg xl:text-2xl xxl:text-[32px]">
                    <span>Welcome To Addis Ababa Housing</span>
                    <span> Development Corporation</span>
                  </h4>
                </div>

                <div className="px-5 row-span-4">
                  <h4 className="text-white text-center italic">
                    Houses for all!
                  </h4>
                </div>
                <div className="px-5 align-end row-span-2">
                  <h5 className="text-white text-center">Help . USER MANUAL</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthMainLayout;
