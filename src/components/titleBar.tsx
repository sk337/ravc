import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { Separator } from "./ui/separator";

export default function TitleBar() {
  return (
    <NavigationMenu className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <NavigationMenuList className="h-14 px-3 w-full flex flex-row gap-4">
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            RAVC
          </NavigationMenuLink>
        </Link>
        <Separator orientation="vertical" />
        <div className="flex md:justify-end"></div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
