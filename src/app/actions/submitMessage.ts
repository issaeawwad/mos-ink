"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function submitMessage(formData: FormData) {
  const payload = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string || null,
    message: formData.get("message") as string,
  };

  const { error } = await supabase.from("messages").insert([payload]);

  if (error) return { success: false, error: error.message };
  return { success: true };
}
