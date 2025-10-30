import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { NavLink } from "react-router-dom"; // Import NavLin
import FormTitle from "../auth/FormTitle";

export function PasswordChangeSucessDialog({ show }) {
  return (
    <Dialog open={show} modal={true}>
      <DialogContent className="sm:max-w-[500px]" showCloseButton={false}>
        <div className="flex justify-center">
          <img src="/logos/Trophy.png" alt="aahc logo" className="h-16 w-16 " />
        </div>
        <div className=" text-center space-y-[8px] custom-my-20">
          <h1 className="text-[20px] font-bold text-primary-darkest text-center">
            Password Change Success
          </h1>
          <p className="text-neutral-500 text-[14px] text-center">
            Congratulations! You have successfully changed your password for
            login{" "}
          </p>
        </div>

        <NavLink
          to="/"
          className="w-full bg-primary-brandBlue rounded-sm text-white py-2 text-center hover:bg-primary-dark"
        >
          Return to login
        </NavLink>
      </DialogContent>
    </Dialog>
  );
}
