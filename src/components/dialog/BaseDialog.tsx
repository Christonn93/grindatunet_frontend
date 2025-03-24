import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

interface BaseDialogProps {
 trigger: React.ReactNode;
 title?: string;
 description?: string;
 children?: React.ReactNode;
 footer?: React.ReactNode;
}

export const BaseDialog = ({ trigger, title, description, children, footer }: BaseDialogProps) => {
 return (
  <Dialog>
   <DialogTrigger asChild>{trigger}</DialogTrigger>
   <DialogContent>
    <DialogHeader>
     {title && <DialogTitle>{title}</DialogTitle>}
     {description && <DialogDescription className="text-black">{description}</DialogDescription>}
    </DialogHeader>
    {children}
   </DialogContent>
   {footer && <DialogFooter>{footer}</DialogFooter>}
  </Dialog>
 );
};
