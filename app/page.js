"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log("session:", session);
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
