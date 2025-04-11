import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DataTable } from "./equips/data-table"
import { columns, Equips } from "./equips/equip-columns"

async function getData(): Promise<Equips[]> {
  return [
    {
      id: "728ed52f",
      equipName: "Impressora Laser",
      userRequest: "João Silva",
      scheduledStart: new Date("2023-10-01T10:30:00"),
      scheduledEnd: new Date("2023-10-01T11:30:00"),
      isAvailableNow: false,
    },
    {
      id: "b13dabf8",
      equipName: "Projetor HD",
      userRequest: "Maria Santos",
      scheduledStart: new Date("2023-10-02T09:00:00"),
      scheduledEnd: new Date("2023-10-02T10:00:00"),
      isAvailableNow: true,
    },
    {
      id: "3f92aebb",
      equipName: "Guindaste 5T",
      userRequest: "Carlos Souza",
      scheduledStart: new Date("2023-10-03T08:00:00"),
      scheduledEnd: new Date("2023-10-03T12:00:00"),
      isAvailableNow: false,
    },
    {
      id: "fe8cd1ab",
      equipName: "Notebook Dell",
      userRequest: "Ana Oliveira",
      isAvailableNow: true,
    },
    {
      id: "52ebcd77",
      equipName: "Retroprojetor",
      userRequest: "Luis Farias",
      scheduledStart: new Date("2023-10-04T13:00:00"),
      scheduledEnd: new Date("2023-10-04T14:00:00"),
      isAvailableNow: false,
    },
    {
      id: "a12b45cc",
      equipName: "Escavadeira",
      userRequest: "Renato Lima",
      scheduledStart: new Date("2023-10-05T07:30:00"),
      scheduledEnd: new Date("2023-10-05T15:30:00"),
      isAvailableNow: false,
    },
    {
      id: "f009d121",
      equipName: "Dron DJI",
      userRequest: "Paula Pereira",
      isAvailableNow: true,
    },
    {
      id: "ee77cc51",
      equipName: "Câmera 4K",
      userRequest: "Ricardo Reis",
      scheduledEnd: new Date("2023-10-06T18:00:00"),
      isAvailableNow: false,
    },
    {
      id: "bb91aa44",
      equipName: "Microfone Sem Fio",
      userRequest: "Beatriz Souza",
      scheduledStart: new Date("2023-10-07T09:00:00"),
      scheduledEnd: new Date("2023-10-07T09:30:00"),
      isAvailableNow: false,
    },
    {
      id: "d129ccce",
      equipName: "Tablet Samsung",
      userRequest: "Pedro Alves",
      isAvailableNow: true,
    },
  ]
}

export default async function Page() {
  const data = await getData()

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
        <div className="container mx-auto p-5">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}
