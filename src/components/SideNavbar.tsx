"use client";

import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { Nav } from "./ui/nav";
import { useState } from "react";
import { Button } from "./ui/button";

import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

const SideNavbar = ({}: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-20 border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className=" absolute -right-5 top-[7px]">
          <Button
            variant="secondary"
            className="rounded-full p-2 bg-gray-100"
            onClick={toggleSidebar}
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UserRound,
            variant: "default",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "default",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "default",
          },
        ]}
      />
    </div>
  );
};

export default SideNavbar;
