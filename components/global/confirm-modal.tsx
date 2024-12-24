"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ConfirmModal = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  return (
    <Dialog open={open}>
      <DialogContent className="sm:w-[568px] py-8 px-6">
        <DialogHeader className="gap-4">
          <DialogTitle>Confirmation</DialogTitle>
          <DialogDescription>
            You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client “Westend Clear Hospital”. Are you sure you want to proceed?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-end gap-3 items-center">
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" className="bg-[#175CFF]" onClick={() => setOpen(false)}>
              Continue
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;
