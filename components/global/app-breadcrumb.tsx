import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

export function AppBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <BreadcrumbLink asChild className="text-[#175CFF]">
              <Link href="/">Quotes</Link>
            </BreadcrumbLink>
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-[#98A2B3] font-medium">/</BreadcrumbSeparator>
        <BreadcrumbItem className="text-[#667185]">Quote Response</BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
