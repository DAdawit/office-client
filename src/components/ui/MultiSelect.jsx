import React, { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Check, X } from "lucide-react"

const MultiSelect = ({
    options = [],
    selected = [],
    onSelectedChange,
    placeholder = "Choose options",
    searchPlaceholder = "Search options...",
    emptyMessage = "No options found.",
    className = ""
}) => {
    const [open, setOpen] = useState(false)

    const addOption = (option) => {
        if (!selected.find(item => item.id === option.id)) {
            onSelectedChange([...selected, option])
        }
    }

    const removeOption = (option) => {
        onSelectedChange(selected.filter((item) => item.id !== option.id))
    }

    const filteredOptions = options.filter(option =>
        !selected.find(item => item.id === option.id)
    )

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div
                    className={`flex flex-wrap items-center gap-2 p-2 border rounded-md min-h-[44px] bg-white cursor-text hover:border-gray-400 transition-colors ${className}`}
                >
                    {selected.length === 0 && (
                        <span className="text-[14px] text-muted-foreground ml-1">{placeholder}</span>
                    )}
                    {selected.map((item) => (
                        <Badge
                            key={item.id}
                            variant="secondary"
                            className="bg-[#E5F0FF] text-[#0A74B9] hover:bg-[#E5F0FF] px-2 py-1 font-mono text-xs flex items-center gap-1 overflow-hidden"
                        >
                            {`${item?.name} | ${item?.position} | ${item?.structure}`}
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-4 w-4 p-0 ml-1 hover:bg-transparent hover:text-red-600"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    removeOption(item)
                                }}
                            >
                                <X className="h-3 w-3" />
                            </Button>
                        </Badge>
                    ))}
                </div>
            </PopoverTrigger>
            <PopoverContent className="min-w-full m-0 p-0" >
                <Command className={"min-w-full p-0 m-0"}>
                    <CommandInput
                        placeholder={searchPlaceholder}
                        className="h-9"
                    />
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {filteredOptions.map((option) => (
                                <CommandItem
                                    key={option.id}
                                    value={option.name}
                                    onSelect={() => {
                                        addOption(option)
                                        setOpen(true)
                                    }}
                                    className="cursor-pointer font-mono text-sm"
                                >
                                    {option.name}
                                    <Check
                                        className={`ml-auto h-4 w-4 ${selected.find(item => item.id === option.id)
                                            ? "opacity-100"
                                            : "opacity-0"
                                            }`}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default MultiSelect