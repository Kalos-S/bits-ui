import type { HTMLAttributes } from "svelte/elements";

export { default as GitHub } from "./github.svelte";
export { default as Xcom } from "./x-com.svelte";
export { default as Tailwind } from "./tailwind.svelte";
export { default as Aria } from "./aria.svelte";
export { default as Npm } from "./npm.svelte";
export { default as Pnpm } from "./pnpm.svelte";
export { default as Yarn } from "./yarn.svelte";
export { default as SwitchOn } from "./switch-on.svelte";
export { default as SwitchOff } from "./switch-off.svelte";
export { default as Logo } from "./logo.svelte";
export { default as Check } from "phosphor-svelte/lib/Check";
export { default as Sun } from "phosphor-svelte/lib/Sun";
export { default as Moon } from "phosphor-svelte/lib/Moon";
export { default as Info } from "phosphor-svelte/lib/Info";
export { default as CaretDown } from "phosphor-svelte/lib/CaretDown";
export { default as Minus } from "phosphor-svelte/lib/Minus";
export { default as CaretUpDown } from "phosphor-svelte/lib/CaretUpDown";
export { default as CaretRight } from "phosphor-svelte/lib/CaretRight";
export { default as CalendarBlank } from "phosphor-svelte/lib/CalendarBlank";
export { default as X } from "phosphor-svelte/lib/X";
export { default as LockKeyOpen } from "phosphor-svelte/lib/LockKeyOpen";
export { default as MapPin } from "phosphor-svelte/lib/MapPin";
export { default as Cat } from "phosphor-svelte/lib/Cat";
export { default as CaretLeft } from "phosphor-svelte/lib/CaretLeft";
export { default as TextStrikethrough } from "phosphor-svelte/lib/TextStrikethrough";
export { default as MagicWand } from "phosphor-svelte/lib/MagicWand";
export { default as CodeBlock } from "phosphor-svelte/lib/CodeBlock";
export { default as SquareHalf } from "phosphor-svelte/lib/SquareHalf";
export { default as Palette } from "phosphor-svelte/lib/Palette";
export { default as CopySimple } from "phosphor-svelte/lib/CopySimple";
export { default as Sparkle } from "phosphor-svelte/lib/Sparkle";
export { default as TextAlignRight } from "phosphor-svelte/lib/TextAlignRight";
export { default as TextAlignCenter } from "phosphor-svelte/lib/TextAlignCenter";
export { default as TextAlignLeft } from "phosphor-svelte/lib/TextAlignLeft";
export { default as TextItalic } from "phosphor-svelte/lib/TextItalic";
export { default as TextB } from "phosphor-svelte/lib/TextB";
export { default as LinkSimpleHorizontalBreak } from "phosphor-svelte/lib/LinkSimpleHorizontalBreak";
export { default as ImageSquare } from "phosphor-svelte/lib/ImageSquare";
export { default as LockKey } from "phosphor-svelte/lib/LockKey";
export { default as DotsThree } from "phosphor-svelte/lib/DotsThree";
export { default as UserCirclePlus } from "phosphor-svelte/lib/UserCirclePlus";
export { default as GearSix } from "phosphor-svelte/lib/GearSix";
export { default as Cardholder } from "phosphor-svelte/lib/Cardholder";
export { default as MouseSimple } from "phosphor-svelte/lib/MouseSimple";
export { default as Trash } from "phosphor-svelte/lib/Trash";
export { default as PencilSimpleLine } from "phosphor-svelte/lib/PencilSimpleLine";
export { default as Compass } from "phosphor-svelte/lib/Compass";
export { default as Sticker } from "phosphor-svelte/lib/Sticker";
export { default as UserCircle } from "phosphor-svelte/lib/UserCircle";
export { default as PlusCircle } from "phosphor-svelte/lib/PlusCircle";
export { default as OrangeSlice } from "phosphor-svelte/lib/OrangeSlice";
export { default as Airplane } from "phosphor-svelte/lib/Airplane";

export type IconProps = Partial<HTMLAttributes<SVGElement>> & {
	class?: string;
};
