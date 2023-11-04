import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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

export default function SreachBox() {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="ghost">
            Search Items..{" "}
            <div className="mx-2">
              <MagnifyingGlassIcon />
            </div>{" "}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
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
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
