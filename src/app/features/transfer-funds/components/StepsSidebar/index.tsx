"use client";

import { SectionId } from "@/app/features/types";
import { useState } from "react";
import { Globe } from "../../icons/Globe";
import { InboxIn } from "../../icons/InboxIn";
import { InboxOut } from "../../icons/InboxOut";
import { MagnifyingGlassDollar } from "../../icons/MagnifyingGlassDollar";
import { MessageCode } from "../../icons/MessageCode";
import { Sidebar } from "../Sidebar";
import { SidebarContent } from "../SidebarContent";
import { SidebarGroup } from "../SidebarGroup";
import { SidebarMenu } from "../SidebarMenu";
import { SidebarMenuButton } from "../SidebarMenuButton";
import { SidebarMenuItem } from "../SidebarMenuItem";
import { SidebarMenuSub } from "../SidebarMenuSub";
import { SidebarMenuSubButton } from "../SidebarMenuSubButton";
import { VerticalToggle } from "../VerticalToggle";
import styles from "./index.module.scss";

export function StepsSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className={styles.verticalToggle}>
            <VerticalToggle />
          </div>
          <SidebarMenu as="ol">
            <SidebarMenuItem>
              <SidebarMenuButton
                id={SectionId.ENDPOINT}
                href={`#${SectionId.ENDPOINT}`}
                icon={<Globe />}
              >
                Endpoint
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                id={SectionId.FORMAT_THE_REQUEST_BODY}
                href={`#${SectionId.FORMAT_THE_REQUEST_BODY}`}
                icon={<MessageCode />}
              >
                Format The Request Body
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                id={SectionId.FORMAT_THE_MESSAGE_FIELD}
                href={`#${SectionId.FORMAT_THE_MESSAGE_FIELD}`}
                icon={<InboxOut />}
                hasSubmenu={true}
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
              >
                Format The Message Field
              </SidebarMenuButton>
              <SidebarMenuSub as="ol" isOpen={isOpen}>
                <SidebarMenuSubButton
                  href={`#${SectionId.OVERVIEW}`}
                  id={SectionId.OVERVIEW}
                >
                  Overview
                </SidebarMenuSubButton>

                <SidebarMenuSubButton
                  href={`#${SectionId.BASIC_HEADER}`}
                  id={SectionId.BASIC_HEADER}
                >
                  Basic Header
                </SidebarMenuSubButton>

                <SidebarMenuSubButton
                  href={`#${SectionId.APPLICATION_HEADER}`}
                  id={SectionId.APPLICATION_HEADER}
                >
                  Application Header
                </SidebarMenuSubButton>

                <SidebarMenuSubButton
                  href={`#${SectionId.USER_HEADER}`}
                  id={SectionId.USER_HEADER}
                >
                  User Header
                </SidebarMenuSubButton>

                <SidebarMenuSubButton
                  href={`#${SectionId.TEXT_BLOCK}`}
                  id={SectionId.TEXT_BLOCK}
                >
                  Text Block
                </SidebarMenuSubButton>
              </SidebarMenuSub>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                id={SectionId.RECEIVE_AN_API_RESPONSE}
                href={`#${SectionId.RECEIVE_AN_API_RESPONSE}`}
                icon={<InboxIn />}
              >
                Receive An API Response
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                id={SectionId.TRACK_YOUR_PAYMENT}
                href={`#${SectionId.TRACK_YOUR_PAYMENT}`}
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
