"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Equips = {
  id: string
  equipName: string
  userRequest: string
  scheduledStart?: Date
  scheduledEnd?: Date
  isAvailableNow?: boolean
}

export const columns: ColumnDef<Equips>[] = [
  {
    accessorKey: "equipName",
    header: "Equipamento",
  },
  {
    id: "availability",
    header: "Disponibilidade",
    cell: ({ row }) => {
      const equip = row.original
      // Exemplo de lógica simples para determinar a disponibilidade:
      const now = new Date()
      if (equip.scheduledStart && equip.scheduledEnd) {
        if (now >= equip.scheduledStart && now <= equip.scheduledEnd) {
          return "Em uso"
        } else if (now < equip.scheduledStart) {
          return "Agendado"
        }
      }
      return "Disponível"
    },
  },
  {
    accessorKey: "scheduledStart",
    header: "Início Agendamento",
    cell: ({ row }) => {
      const date = row.original.scheduledStart
      if (!date) return null
      const d = new Date(date)
      const dia = String(d.getDate()).padStart(2, "0")
      const mes = String(d.getMonth() + 1).padStart(2, "0")
      const ano = d.getFullYear()
      const hora = String(d.getHours()).padStart(2, "0")
      const minutos = String(d.getMinutes()).padStart(2, "0")
      return `${dia}/${mes}/${ano} ${hora}h${minutos}`
    },
  },
  {
    accessorKey: "userRequest",
    header: "Requisitante",
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
