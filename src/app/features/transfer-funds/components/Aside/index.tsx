import { Anchors } from "@/app/features/types";
import { MESSAGING_STANDARD_OPTIONS } from "../../data/optons";
import { Globe } from "../../icons/Globe";
import { InboxIn } from "../../icons/InboxIn";
import { InboxOut } from "../../icons/InboxOut";
import { MagnifyingGlassDollar } from "../../icons/MagnifyingGlassDollar";
import { MessageCode } from "../../icons/MessageCode";
import { Sidebar } from "../Sidebar";
import { SidebarContent } from "../SidebarContent";
import { SidebarGroup } from "../SidebarGroup";
import { SidebarGroupLabel } from "../SidebarGroupLabel";
import { SidebarHeader } from "../SidebarHeader";
import { SidebarMenu } from "../SidebarMenu";
import { SidebarMenuButton } from "../SidebarMenuButton";
import { SidebarMenuItem } from "../SidebarMenuItem";
import { SidebarMenuSub } from "../SidebarMenuSub";
import { SidebarMenuSubButton } from "../SidebarMenuSubButton";
import { SidebarMenuSubItem } from "../SidebarMenuSubItem";
import { VerticalToggle } from "../VerticalToggle";
import styles from "./index.module.scss";

export function Aside({ className }: { className?: string }) {
  return (
    <aside className={`${styles.aside} ${className ?? ""}`}>
      <Sidebar>
        <SidebarHeader>
          <VerticalToggle
            options={MESSAGING_STANDARD_OPTIONS}
            name="messaging-standard-aside"
          />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenuButton href={`#${Anchors.INITIATE_A_PAYMENT}`}>
              Initiate a Payment
            </SidebarMenuButton>
            <SidebarMenuButton href={`#${Anchors.HOW_IT_WORKS}`}>
              How It Works
            </SidebarMenuButton>
            <SidebarMenuButton href={`#${Anchors.OUR_CLIENTS}`}>
              Our Clients
            </SidebarMenuButton>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>
              <SidebarMenuButton
                href={`#${Anchors.STEPS_TO_INITIATE_A_WIRE_PAYMENT}`}
              >
                Steps to Initiate a Wire Payment
              </SidebarMenuButton>
            </SidebarGroupLabel>
            <SidebarMenu as="ol">
              <SidebarMenuItem>
                <SidebarMenuButton
                  href={`#${Anchors.ENDPOINT}`}
                  icon={<Globe />}
                >
                  Endpoint
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href={`#${Anchors.FORMAT_THE_REQUEST_BODY}`}
                  icon={<MessageCode />}
                >
                  Format The Request Body
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href={`#${Anchors.FORMAT_THE_MESSAGE_FIELD}`}
                  icon={<InboxOut />}
                >
                  Format The Message Field
                </SidebarMenuButton>
                <SidebarMenuSub as="ol">
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href={`#${Anchors.OVERVIEW}`}>
                      Overview
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href={`#${Anchors.BASIC_HEADER}`}>
                      Basic Header
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      href={`#${Anchors.APPLICATION_HEADER}`}
                    >
                      Application Header
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href={`#${Anchors.USER_HEADER}`}>
                      User Header
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href={`#${Anchors.TEXT_BLOCK}`}>
                      Text Block
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href={`#${Anchors.RECEIVE_AN_API_RESPONSE}`}
                  icon={<InboxIn />}
                >
                  Receive An API Response
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  href={`#${Anchors.TRACK_YOUR_PAYMENT}`}
                  icon={<MagnifyingGlassDollar />}
                >
                  Track Your Payment
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </aside>
  );
}
