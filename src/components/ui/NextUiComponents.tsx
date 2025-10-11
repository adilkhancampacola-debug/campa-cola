import { Input } from "@nextui-org/input";
import { extendVariants } from "@nextui-org/system";

export const MyInput = extendVariants(Input, {
  variants: {
    // <- modify/add variants
    color: {
      stone: {
        inputWrapper: [
          "bg-zinc-100",
          "border",
          "shadow",
          "transition-colors",
          "focus-within:bg-zinc-100",
          "data-[hover=true]:border-zinc-600",
          "data-[hover=true]:bg-zinc-100",
          "group-data-[focus=true]:border-zinc-600",
          // dark theme
          "dark:bg-zinc-900",
          "dark:border-zinc-800",
          "dark:data-[hover=true]:bg-zinc-900",
          "dark:focus-within:bg-zinc-900"
        ],
        input: [
          // <- Input element slot
          "text-zinc-800",
          "placeholder:text-zinc-600",
          // dark theme
          "dark:text-zinc-400",
          "dark:placeholder:text-zinc-600"
        ]
      }
    },
    size: {
      xs: {
        inputWrapper: "h-6 min-h-6 px-1",
        input: "text-tiny"
      },
      md: {
        inputWrapper: "h-10 min-h-10",
        input: "text-small"
      },
      xl: {
        inputWrapper: "h-14 min-h-14",
        input: "text-medium"
      }
    },
    radius: {
      xs: {
        inputWrapper: "rounded"
      },
      sm: {
        inputWrapper: "rounded-[4px]"
      }
    },
    textSize: {
      base: {
        input: "text-base"
      }
    },
    removeLabel: {
      true: {
        label: "hidden"
      },
      false: {}
    }
  },
  defaultVariants: {
    color: "stone",
    textSize: "base",
    removeLabel: true
  }
});
