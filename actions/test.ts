"use server";

import { revalidateTag } from "next/cache";

export async function createQuote(prevState: any, id: number = 2) {
  // simulate server-side processing
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log(`Quote submitted for RFQ ID: ${id}`);
  revalidateTag("quotes");

  return { success: true, message: "Quote successfully submitted!" };
}
