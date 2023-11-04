import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" px-4 w-[100%] md:w-auto">
          {" "}
          <Button variant="outline">
            Search Item.. <MagnifyingGlassIcon />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Arcana">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Immortal">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
              <CommandItem>Settings</CommandItem>
              <CommandItem>Settings</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
