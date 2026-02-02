import { SidebarProvider, SidebarTrigger } from "@/components/shadcn/sidebar"
import { AppSidebar } from "@/components/shadcn/app-sidebar"
 
export default function ShadcnSidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true} className="dark">
      <AppSidebar />
      <div className="flex w-full flex-col">
        <main>
          <div className="fixed z-10 p-4">
            <div className="rounded-lg bg-white/50 w-10 h-10 flex justify-center items-center m-auto">
                      <SidebarTrigger className="transform scale-150" />
            </div>
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}



