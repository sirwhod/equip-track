import { CalendarClock, Inbox, Settings } from "lucide-react";

import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108"

const demoData = {
  badge: "equiptrack.com",
  heading: "A gestão de inventários mais fácil do Brasil.",
  description: "Aumente a eficiência e reduza custos com nossa plataforma.",
  tabs: [
    {
      value: "tab-1",
      icon: <Settings className="h-auto w-4 shrink-0" />,
      label: "Gestão Facilitada",
      content: {
        badge: "Facilidade de Uso",
        title: "Gerencie todos os seus equipamentos em um só lugar.",
        description:
          "Descubra novas maneiras de gerenciar seus equipamentos e recursos. Use tecnologia de ponta para otimizar processos e aumentar a eficiência.",
        buttonText: "Veja seus Recursos",
        imageSrc:
          "https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-2",
      icon: <CalendarClock className="h-auto w-4 shrink-0" />,
      label: "Agendamento Personalizado",
      content: {
        badge: "Agendamento Inteligente",
        title: "Agende e reserve equipamentos com facilidade.",
        description:
          "Use nosso agendador para reservar equipamentos e recursos de forma simples e rápida. Aumente a eficiência e reduza custos com nossa plataforma.",
        buttonText: "Veja como funciona",
        imageSrc:
          "https://www.shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-3",
      icon: <Inbox className="h-auto w-4 shrink-0" />,
      label: "Acompanhamento Preciso",
      content: {
        badge: "Relatórios Detalhados",
        title: "Acompanhe o uso de equipamentos com dados precisos.",
        description:
          "Analise com cuidado o uso de equipamentos e recursos. Use dados precisos para tomar decisões informadas e aumentar a eficiência.",
        buttonText: "Acessar Relatórios",
        imageSrc:
          "https://www.shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "placeholder",
      },
    },
  ],
};

export function Features() {
  return <Feature108 {...demoData} />;
}
