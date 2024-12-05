"use client";
import { Id } from "@/app/features/types";
import { useState } from "react";
import { Globe } from "../../icons/Globe";
import { InboxIn } from "../../icons/InboxIn";
import { InboxOut } from "../../icons/InboxOut";
import { MagnifyingGlassDollar } from "../../icons/MagnifyingGlassDollar";
import { MessageCode } from "../../icons/MessageCode";
import { Sidebar } from "../Sidebar";
import { SidebarContent } from "../SidebarContent";
import { SidebarGroup } from "../SidebarGroup";
import { SidebarHeader } from "../SidebarHeader";
import { SidebarMenu } from "../SidebarMenu";
import { SidebarMenuButton } from "../SidebarMenuButton";
import { SidebarMenuItem } from "../SidebarMenuItem";
import { SidebarMenuSub } from "../SidebarMenuSub";
import { SidebarMenuSubButton } from "../SidebarMenuSubButton";
import { VerticalToggle } from "../VerticalToggle";

export function StepsSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Sidebar>
      <SidebarHeader>
        <VerticalToggle />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu as="ol">
            <SidebarMenuItem>
              <SidebarMenuButton
                id={Id.ENDPOINT}
                href={`#${Id.ENDPOINT}`}
                icon={<Globe />}
              >
                Endpoint
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                id={Id.FORMAT_THE_REQUEST_BODY}
                href={`#${Id.FORMAT_THE_REQUEST_BODY}`}
                icon={<MessageCode />}
              >
                Format The Request Body
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                id={Id.FORMAT_THE_MESSAGE_FIELD}
                href={`#${Id.FORMAT_THE_MESSAGE_FIELD}`}
                icon={<InboxOut />}
                hasSubmenu={true}
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
              >
                Format The Message Field
              </SidebarMenuButton>
              <SidebarMenuSub as="ol" isOpen={isOpen}>
                <SidebarMenuSubButton href={`#${Id.OVERVIEW}`} id={Id.OVERVIEW}>
                  Overview
                </SidebarMenuSubButton>

                <SidebarMenuSubButton
                  href={`#${Id.BASIC_HEADER}`}
                  id={Id.BASIC_HEADER}
                >
                  Basic Header
                </SidebarMenuSubButton>

                <SidebarMenuSubButton
                  href={`#${Id.APPLICATION_HEADER}`}
                  id={Id.APPLICATION_HEADER}
                >
                  Application Header
                </SidebarMenuSubButton>

                <SidebarMenuSubButton
                  href={`#${Id.USER_HEADER}`}
                  id={Id.USER_HEADER}
                >
                  User Header
                </SidebarMenuSubButton>

                <SidebarMenuSubButton
                  href={`#${Id.TEXT_BLOCK}`}
                  id={Id.TEXT_BLOCK}
                >
                  Text Block
                </SidebarMenuSubButton>
              </SidebarMenuSub>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                id={Id.RECEIVE_AN_API_RESPONSE}
                href={`#${Id.RECEIVE_AN_API_RESPONSE}`}
                icon={<InboxIn />}
              >
                Receive An API Response
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                id={Id.TRACK_YOUR_PAYMENT}
                href={`#${Id.TRACK_YOUR_PAYMENT}`}
                icon={<MagnifyingGlassDollar />}
              >
                Track Your Payment
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
