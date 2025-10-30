import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function MySwitch() {
  return (
    <div class="w-[450px] h-[49px] pt-[14px] flex items-center pb-[10px] gap-[14px] border-t border-opacity-100 opacity-100">
      <Label
        className="font-[CenturyGothic] font-bold text-[20px] leading-[100%] tracking-[0%] capitalize"
        htmlFor="cc-mode"
      >
        CC
      </Label>
      <Switch
        id="cc-mode"
        className="w-[40px] h-[20px] data-[state=checked]:bg-[#737373]"
      />
    </div>
  );
}
