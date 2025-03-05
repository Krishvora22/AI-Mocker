// import { Button } from "@/components/ui/button"

import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Link href={"/dashboard"}>
        <button>Go Dashboard</button>
      </Link>
    </div>
  );
}
