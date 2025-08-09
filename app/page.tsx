// Server Component: immediately redirect "/" to "/main"
import { redirect } from "next/navigation"

export default function Page() {
  redirect("/main")
}
