'use server'

import { signOut } from "@/auth"

export async function signOutOAuth() {
  await signOut({
    redirect: true,
    redirectTo: "/auth/sign-in",
  })
}

export async function getProfile() {}