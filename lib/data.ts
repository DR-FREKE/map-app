import PreviewStep from "@/components/forms/preview-form";
import RequestQuoteForm from "@/components/forms/request-quote-form";
import TermAttachmentForm from "@/components/forms/terms-attachment-form";
import { Calendar, Home, Inbox, Search, Settings, MessageCircle, DockIcon } from "lucide-react";

// Menu items.
export const items = [
  {
    id: 1,
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    id: 2,
    title: "Inventory",
    url: "#",
    icon: Inbox,
  },
  {
    id: 3,
    title: "Procurement",
    url: "#",
    icon: Calendar,
    is_collapsible: true,
    collapsible_item: [
      { id: 1, title: "Quotes", url: "" },
      { id: 2, title: "Orders", url: "#" },
    ],
  },
  {
    id: 4,
    title: "Finance",
    url: "#",
    icon: Search,
    is_collapsible: true,
  },
  {
    id: 5,
    title: "Communication",
    url: "#",
    icon: MessageCircle,
    has_badge: true,
  },
  {
    id: 6,
    title: "Calendar",
    url: "#",
    icon: Calendar,
    has_badge: true,
  },
  {
    id: 7,
    title: "Contracts",
    url: "#",
    icon: DockIcon,
  },
];

// bottom menu item
// Menu items.
export const bottom_items = [
  {
    id: 1,
    title: "Support",
    url: "#",
    icon: Home,
  },
  {
    id: 2,
    title: "Settings",
    url: "#",
    icon: Inbox,
  },
];

export interface QuoteItem {
  id: number;
  item_name: string;
  color: string | null;
  quantity: number;
  unit: string;
  price: number;
  amount: number;
  delivery_date: string;
}

export const steps = [
  { title: "Request Information", head_title: "Request for Quote", head_sub: "Fill out these details to send the RFQ", sub_title: "Provide details about the RFQ", component: RequestQuoteForm },
  {
    title: "Terms and Attachments",
    head_title: "Terms and Attachments",
    head_sub: "Provide detailed information on payment and delivery terms",
    sub_title: "Payment and delivery terms",
    component: TermAttachmentForm,
  },
  { title: "Review", sub_title: "Confirm all information provided", component: PreviewStep },
];
