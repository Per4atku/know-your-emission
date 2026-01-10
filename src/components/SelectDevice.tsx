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
import { Device, useDevice } from "@/context/device-context";

export default function SelectDevice({ devices }: { devices: Device[] }) {
  const { selectedDevice, setSelectedDevice } = useDevice();

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-60 justify-between"
          >
            {selectedDevice ? selectedDevice.name : "Select device..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-60 p-0">
          <Command>
            <CommandInput placeholder="Search device..." className="h-9" />
            <CommandList>
              <CommandEmpty>No device found.</CommandEmpty>
              <CommandGroup>
                {devices.map((d) => (
                  <CommandItem
                    key={d.id}
                    value={d.name}
                    onSelect={() => {
                      setSelectedDevice(d);
                      setOpen(false);
                    }}
                  >
                    {d.name}
                    <Check
                      className={cn(
                        "ml-auto",
                        selectedDevice?.name === d.name
                          ? "opacity-100"
                          : "opacity-0"
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
