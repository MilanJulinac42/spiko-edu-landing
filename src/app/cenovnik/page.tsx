import { redirect } from "next/navigation";

// Cenovnik je spojen sa stranicom kurseva.
export default function CenovnikPage() {
  redirect("/kursevi#cenovnik");
}
