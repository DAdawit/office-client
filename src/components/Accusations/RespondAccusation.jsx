import React from "react";
import ContainerDev from "../common/ContainerDev";
import SubTitle from "../common/SubTitle";
import { Upload } from "lucide-react";
import { Input } from "../ui/input";
import { MediaItemCard } from "../common/MediaItemCard";

const RespondAccusation = () => {
  return (
    <ContainerDev>
      <div className="bg-neutral-50 rounded-[10px] py-[14px]">
        <div className="flex flex-col items-center w-full justify-center">
          <Upload />
          <h3 className="text-primary-darkest custom-text-14">
            upload Response file *
          </h3>
        </div>
        <div className="px-[14px] mt-[14px]">
          <Input type="file" className="px-10 " />
          <h3 className="text-center custom-mt-20 custom-text-12">
            Accepted formats: pdf
          </h3>
        </div>
      </div>
      <div className="bg-neutral-50 rounded-[10px] py-[20px] mt-5">
        <div className="flex flex-col items-center w-full justify-center">
          <Upload />
          <h3 className="text-primary-darkest custom-text-14">
            upload Additional Response files
          </h3>
        </div>
        <div className="px-[14px] mt-[14px]">
          <Input type="file" className="px-10 " />
          <h3 className="text-center custom-mt-20 custom-text-12">
            Accepted formats: pdf
          </h3>
        </div>
      </div>
      <div className="py-2 px-[14px] grid gap-y-3">
        {[1, 2].map((item, index) => (
          <MediaItemCard
            key={index}
            item={1}
            fileUrl="https://example.com/stamp.png"
            fileName="Additional file.pat"
            fileSize="144 kb"
            date="Mon Sep 22 2025"
            showDeleteButton={true}
            onDelete={(item) => console.log("Delete item:", item)}
          />
        ))}
      </div>
    </ContainerDev>
  );
};

export default RespondAccusation;
