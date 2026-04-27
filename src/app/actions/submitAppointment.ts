"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function submitAppointment(formData: FormData) {
  const payload = {
    name: formData.get("firstName") + " " + formData.get("lastName"),
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    date: formData.get("date") as string || null,
    service_type: formData.get("service") as string,
    message: [
      formData.get("description"),
      formData.get("placement") ? `Placement: ${formData.get("placement")}` : "",
      formData.get("size") ? `Size: ${formData.get("size")}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
  };

  const { error } = await supabase.from("appointments").insert([payload]);

  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}
