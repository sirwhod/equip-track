import { AppSidebar } from "@/components/commons/app-sidebar"
import { SiteHeader } from "@/components/commons/site-header"
import { Providers } from "@/components/providers"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

export const iframeHeight = "800px"

export const description = "A sidebar with a header and a search form."

export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ orgSlug: string }>
})  {
  const { orgSlug } = await params

  // Implementar lógica para obter página atual
  const currentPage = orgSlug

  return (
    <Providers>
      <div className="[--header-height:calc(--spacing(14))]">
        <SidebarProvider className="flex flex-col">
          <SiteHeader orgSlug={orgSlug} currentPage={currentPage} />
          <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
              {children}
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </Providers>
  )
}
