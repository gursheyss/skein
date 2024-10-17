"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function SignInButton() {
  return (
    <Button
      onClick={async () => {
        await signIn.social({
          provider: "github",
          callbackURL: "/",
        });
      }}
      variant={"outline"}
      size={"sm"}
    >
      <SiGithub className="h-4 w-4" />
      Sign in with Github
    </Button>
  );
}
