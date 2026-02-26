import { Home, Info, Mail, ChevronDown, FishingHook, ListCheck, Calendar } from "lucide-react"
import { Link } from "react-router-dom"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useSidebar } from "@/components/shadcn/sidebar"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/sidebar"

// Main menu items
const mainItems = [
  { title: "Hjem", url: "/", icon: Home },
  { title: "Projekter", url: "/projects", icon: Info },
  { title: "Kontakt", url: "/contact", icon: Mail },
]

// Showcase items
const showcaseItems = [
  { title: "Hook - useState", url: "/useStateHook", icon: FishingHook },
  { title: "Hook - useReducer", url: "/useReducerHook", icon: FishingHook },
]

const demosItems =[
  { title: "To-Do List", url: "/toDoList", icon: ListCheck },
  { title: "Chore Board", url: "https://weeklychores.vercel.app/", icon: Calendar },
]

export function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar()

   const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }


  return (
    <Sidebar>
      <SidebarContent>

        {/* Main pages */}
        <SidebarGroup>
          <SidebarGroupLabel>Quick access</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} onClick={handleLinkClick} className="flex items-center gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Showcase (collapsible) */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center">
                Showcase
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {showcaseItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}  onClick={handleLinkClick} className="flex items-center gap-2 pl-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

        {/* Demos (collapsible) */}
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center">
                Demos
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {demosItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}  onClick={handleLinkClick} className="flex items-center gap-2 pl-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>

      </SidebarContent>
    </Sidebar>
  )
}