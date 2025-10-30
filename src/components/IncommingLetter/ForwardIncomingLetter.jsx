import { X } from "lucide-react";
import UserBadge from "../common/User/UserBadge";
import { Label } from "../ui/label";
import { MySwitch } from "../common/switch";
import MultiSelect from "../ui/MultiSelect";
import { MySelect } from "../common/MySelect";
import { Checkbox } from "../ui/checkbox";

export function ForwardIncomingLetter({
  senderInfo,
  forwardOptions,
  selectedForward,
  setSelectedForward,
  register,
  setValue,
  watch,
  paraphOptions = [
    { value: "urgent", label: "Urgent" },
    { value: "normal", label: "Normal" },
    { value: "low", label: "Low Priority" },
  ],
}) {
  const removeOption = (option) => {
    const newSelected = selectedForward.filter((f) => f.id !== option.id);
    setSelectedForward(newSelected);

    // Update form data
    const currentRecipients = watch("recipients") || [];
    const updatedRecipients = currentRecipients.filter(
      (r) => r.recipient.id !== option.id
    );
    setValue("recipients", updatedRecipients);
  };

  console.log(forwardOptions);
  return (
    <div
      className="w-full flex flex-col gap-2.5"
      style={{
        scrollbarWidth: "none" /* Firefox */,
        msOverflowStyle: "none" /* IE/Edge */,
      }}
    >
      {/* <pre>{JSON.stringify(forwardOptions, null, 2)}</pre> */}

      {/* Form Input */}
      <div className="flex flex-col gap-[20px] px-[20px]">
        <div className="flex flex-col gap-[12px]">
          <Label className="font-sans font-normal text-[14px] leading-[20px]">
            From
          </Label>
          <input
            type="text"
            className="w-full h-[40px] rounded-[6px] px-3 py-[10px] border border-[#E5E5E5] bg-[#FAFAFA] outline-none"
            placeholder="From name"
            value={senderInfo?.name}
            readOnly
            {...register("from")}
          />
        </div>

        {/* Multi-Select Input */}
        <div className="flex flex-col gap-[12px]">
          <Label className="font-sans font-normal text-[14px] leading-[20px]">
            To
          </Label>
          <MultiSelect
            options={forwardOptions}
            selected={selectedForward}
            onSelectedChange={(newSelected) => {
              setSelectedForward(newSelected);
              const currentRecipients = watch("recipients") || [];
              const newRecipients = newSelected.map((recipient) => {
                const existing = currentRecipients.find(
                  (r) => r.recipient.id === recipient.id
                );
                return (
                  existing || {
                    recipient,
                    paraph: "",
                    endDate: "",
                    sendAsIndividual: false,
                  }
                );
              });
              setValue("recipients", newRecipients);
            }}
            placeholder="Choose forward type"
            searchPlaceholder="Search forward type..."
            emptyMessage="No forward type found."
          />
        </div>
      </div>

      {/* Selected Forward List */}
      {selectedForward.length > 0 &&
        selectedForward.map((selected, index) => (
          <div
            key={selected.id}
            className="w-full pt-[14px] pb-[14px] border-b border-b-[#D4D4D4]"
          >
            <div className="w-full flex px-[20px] justify-between items-center pt-[14px] pb-[14px] bg-[#F5F5F5] border-t border-b border-[#E5E5E5]">
              {selected?.name}
              <UserBadge
                name={selected?.name}
                structure={selected?.structure}
                avatarSrc={selected?.photoUrl}
                position={selected?.position}
              />
              <button
                type="button"
                onClick={() => removeOption(selected)}
                className="hover:opacity-70 transition-opacity"
              >
                <X className="w-[42px] h-[42px] text-[#404040]" />
              </button>
            </div>

            {/* Inner Form Section */}
            <div className="w-full pr-[10px] pl-[20px]">
              <div className="w-full mx-auto">
                <MySwitch
                  name={`recipients.${index}.urgent`}
                  label="Urgent"
                  register={register}
                />
                <div className="flex flex-col gap-[10px] py-[10px]">
                  <Label className="font-sans font-normal text-[14px] leading-[20px]">
                    Paraph
                  </Label>
                  <MySelect
                    placeholder="Choose"
                    options={paraphOptions}
                    value={watch(`recipients.${index}.paraph`)}
                    onChange={(value) =>
                      setValue(`recipients.${index}.paraph`, value)
                    }
                    className="w-full h-[40px] rounded-[6px] px-3 py-[10px] border border-[#E5E5E5] bg-[#FAFAFA] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-[10px] py-[10px]">
                  <Label className="font-sans font-normal text-[14px] leading-[20px]">
                    Choose end date
                  </Label>
                  <input
                    type="date"
                    className="w-full h-[40px] rounded-[6px] px-3 py-[10px] border border-[#E5E5E5] bg-[#FAFAFA] outline-none"
                    placeholder="Select date"
                    {...register(`recipients.${index}.endDate`)}
                  />
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={`individual-${selected.id}`}
                      checked={watch(`recipients.${index}.sendAsIndividual`)}
                      onCheckedChange={(checked) =>
                        setValue(
                          `recipients.${index}.sendAsIndividual`,
                          checked
                        )
                      }
                      className="
                                    w-[20px] h-[20px] rounded-[6px] border border-[#737373] bg-[#FFFFFF] 
                                    appearance-none cursor-pointer transition
                                    hover:bg-[#FCB043] hover:shadow-[0_0_0_2px_#F1F1FF]
                                    focus:outline-none  focus:border-[#FCB043] focus:shadow-[0_0_0_2px_#F1F1FF]
                                    active:shadow-[0_0_0_2px_#F1F1FF]
                                    disabled:bg-[#E5E5E5] disabled:cursor-not-allowed focus:ring-offset-0 focus:ring-0
                                    data-[state=checked]:bg-[#FCB043] checked:border-[#FCB043]
                                    disabled:checked:bg-[#A3A3A3] disabled:checked:border-[#737373]
                                "
                      // className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                    />
                    <Label
                      htmlFor={`individual-${selected.id}`}
                      className="custom-text-14 font-medium text-gray-700 cursor-pointer"
                    >
                      Send As Individual
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
