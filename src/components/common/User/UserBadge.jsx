import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const UserBadge = ({
  name,
  structure,
  avatarSrc,
  position,
  mode = "normal",
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8 rounded-lg grayscale">
          <AvatarImage className={"rounded-full"} src={avatarSrc} alt={name} />
          <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left leading-tight">
          <h1 className="truncate text-primary-darkest custom-text-14">
            {name}
          </h1>
          <div className=" flex gap-1 items-center">
            <h1 className="custom-text-10 text-neutral-600 font-[400] leading-[160%] truncate">
              {position}
            </h1>
            <h1 className="bg-neutral-400 border border-neutral-400 h-[10px]"></h1>
            <h1 className="custom-text-10 text-neutral-600 font-[400] leading-[160%] truncate">
              {structure}
            </h1>
          </div>
        </div>
      </div>
      {structure === "popup" && (
        <Badge
          variant="secondary"
          className="bg-[#E5F0FF]  text-[#021828] hover:bg-[#E5F0FF] px-2 py-1 font-mono custom-text-12 flex items-center gap-1"
        >
          {structure}
        </Badge>
      )}
    </div>
  );
};

export default UserBadge;
