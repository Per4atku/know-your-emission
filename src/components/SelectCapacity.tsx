"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
  CommandEmpty,
} from "@/components/ui/command";
import { useDevice } from "@/context/device-context";

export default function SelectCapacity() {
  const { selectedDevice, selectedCapacity, setSelectedCapacity } = useDevice();

  const [open, setOpen] = React.useState(false);

  if (!selectedDevice) return null;

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-60 justify-between"
          >
            {selectedCapacity ?? "Select capacity..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-60 p-0">
          <Command>
            <CommandInput placeholder="Search capacity..." className="h-9" />
            <CommandList>
              <CommandEmpty>No storage found.</CommandEmpty>
              <CommandGroup>
                {selectedDevice.available_storages.map((s) => (
                  <CommandItem
                    key={s}
                    value={s}
                    onSelect={() => {
                      setSelectedCapacity(s);
                      setOpen(false);
                    }}
                  >
                    {s}
                    <Check
                      className={cn(
                        "ml-auto",
                        selectedCapacity === s ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
