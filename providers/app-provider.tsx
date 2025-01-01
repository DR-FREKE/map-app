import { AppSidebarProvider } from "@/providers/sidebar-provider";
import FormContextProvider from "@/context/form-context";
import { Toaster } from "@/components/ui/toaster";

export default function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppSidebarProvider>
      <FormContextProvider>
        {children}
        <Toaster />
      </FormContextProvider>
    </AppSidebarProvider>
  );
}
