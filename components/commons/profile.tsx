'use client'

import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function Profile() {
  const { data: session } = useSession()

  return (
    <>
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
        <AvatarFallback className="rounded-lg">
          {session?.user?.name?.substring(0, 2).toUpperCase() || "CN"}
        </AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{session?.user?.name || ""}</span>
        <span className="truncate text-xs">{session?.user?.email || ""}</span>
      </div>
    </>
  )
}