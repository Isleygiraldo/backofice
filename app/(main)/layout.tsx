import { SidebarProvider } from "@/components/SidebarContext";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex overflow-hidden">
      <SidebarProvider>
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <Topbar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}
