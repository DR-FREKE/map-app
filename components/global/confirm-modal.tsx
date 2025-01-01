import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

const ConfirmModal = ({ open, setOpen, action }: { open: boolean; setOpen: (open: boolean) => void; action?: () => void }) => {
  const handleAction = () => {
    setOpen(false);
    action!();
  };
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="sm:w-[568px] sm:min-w-[320px] rounded-sm py-8 px-6 flex flex-col gap-8">
        <AlertDialogHeader className="gap-4">
          <AlertDialogTitle>Confirmation</AlertDialogTitle>
          <AlertDialogDescription className="font-medium text-sm">
            You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="sm:justify-end gap-3 items-center">
          <AlertDialogCancel asChild>
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </AlertDialogCancel>

          <form action={handleAction}>
            <Button type="submit" className="bg-[#175CFF]">
              Continue
            </Button>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmModal;
