import React from "react";
import { BookOpenCheck, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Statistics = ({ statsData }) => {
  return (
    <div className="bg-primary-brandBlue rounded-t-[10px] custom-py-40">
      <div className="grid grid-cols-1 custom-gapx-20 custom-gapy-14 md:grid-cols-2  xl:flex w-full justify-between custom-gapx-20 px-5">
        {statsData.map((stat, index) => (
          <React.Fragment key={stat.id}>
            <div className="custom-py-14 custom-py-20">
              <div className="max-w-md mx-auto">
                <div className="flex items-top justify-between">
                  <div className="grid">
                    <p className="text-[14px] font-medium text-white custom-mb-4 capitalize">
                      {stat.title}
                    </p>
                    <p className="text-[32px] font-bold text-white">
                      {stat.value}
                    </p>
                  </div>
                  <div className="custom-mt-4">{stat.icon}</div>
                </div>
                <div className="custom-mt-20 flex justify-between custom-text-14 items-center xl:gap-x-3">
                  <div className="flex items-center flex-nowrap">
                    <TrendingUp className="w-[15px] h-[15px] text-success-400" />
                    <span className="custom-text-12 xxl:text-[12px] text-success-400">
                      {stat.growth}
                    </span>
                  </div>
                  <div className="h-2 border-[0.5px] border-accent-logo flex flex-no"></div>
                  <span className="custom-custom-ml-20 text-[12px] text-accent-logo">
                    {stat.increase} today
                  </span>
                </div>
              </div>
            </div>
            {/* Vertical Separator - not shown for last item */}
            {index < statsData.length - 1 && (
              <div className="hidden xl:flex items-center">
                <Separator
                  orientation="vertical"
                  className="h-16 bg-accent-logo"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
