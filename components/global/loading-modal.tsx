import { AlertDialog, AlertDialogContent, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ClipLoader } from "react-spinners";

export function LoadingDialog({ open }: { open: boolean }) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="sm:w-[350px] sm:h-[194px] rounded-sm flex flex-col justify-center items-center">
        <VisuallyHidden>
          <AlertDialogTitle>Hidden title</AlertDialogTitle>
        </VisuallyHidden>
        <ClipLoader size={48} color="#175CFF" className="" cssOverride={{ borderWidth: "4px" }} />
        <span className="font-medium text-sm text-[#000000]">Sending Quote...</span>
      </AlertDialogContent>
    </AlertDialog>
  );
}
