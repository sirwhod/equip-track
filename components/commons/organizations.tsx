"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

export function Organizations() {
  const organizations = [
    { id: "1", name: "ACME Corp", slug: "acme-corp", role: "Admin" },
    { id: "2", name: "Tech Solutions", slug: "tech-solutions", role: "Member" },
    { id: "3", name: "Inventários Rápidos", slug: "inventarios-rapidos", role: "Owner" }
  ]

  return (
    <div className="h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
          Suas Organizações
        </h1>
        {organizations.length === 0 ? (
          <div className="text-center">
              <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Você ainda não pertence a nenhuma organização.
            </p>
            <Button>Criar uma organização</Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {organizations.map((org) => (
              <Card key={org.id} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{org.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Sua função: <span className="font-medium">{org.role}</span>
                  </p>
                  <Button asChild className="w-full">
                    <Link href={`/${org.slug}`}>Acessar</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      <BackgroundBeams />
    </div>
    </div>
  )
}