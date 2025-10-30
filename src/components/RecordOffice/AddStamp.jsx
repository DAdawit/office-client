import React, { useState } from "react";
import ContainerDev from "../common/ContainerDev";
import RecordCount from "../common/RecordCount";
import { Search, Upload } from "lucide-react";
import { Input } from "../ui/input";
import { MediaItemCard } from "../common/MediaItemCard";
import DataPreview from "../common/DataPreview";
import { useIsMobile } from "@/hooks/use-mobile";

const AddStamp = () => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ContainerDev style="custom-mt-20">
      <div className="flex w-full custom-gapx-20">
        <div
          className={`bg-neutral-50 rounded-[10px] custom-py-20 w-full custom-text-14 ${
            isMobile && isExpanded ? "hidden" : ""
          }`}
        >
          <div className="flex flex-col items-center w-full justify-center">
            <Upload />
            <h3>upload New image/S</h3>
          </div>
          <div className="custom-px-14 custom-mt-14 mx-auto max-w-4xl">
            <Input type="file" className="px-10 " />
            <h3 className="text-center custom-mt-20 custom-text-14 text-neutral-500">
              Accepted Formats: Jpg, PNG
            </h3>
          </div>
        </div>
        <DataPreview
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
          className="h-min pr-1"
        >
          <div className="shadow-sm rounded-[14px] mt-5">
            <div className="py-2 px-[14px] gap-y-1">
              {[1, 2].map((item, index) => (
                <div className="flex items-center gap-x-2 w-full">
                  <h1>{index + 1}. </h1>
                  <MediaItemCard
                    key={item}
                    item={1}
                    fileUrl="https://example.com/image.png"
                    fileName="My Photo.jpg"
                  />
                </div>
              ))}
            </div>
          </div>
        </DataPreview>
      </div>
    </ContainerDev>
  );
};

export default AddStamp;
