import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import LaIniciativa from "./pages/LaIniciativa";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/IA-Sin-Barreras/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="iniciativa" element={<LaIniciativa />} />
            <Route path="contacto" element={<Contacto />} />
            {/* TODO: Add more pages */}
            <Route path="participar" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Página en construcción</h1><p className="text-muted-foreground mt-4">Esta página estará disponible pronto.</p></div>} />
            <Route path="pilares" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Página en construcción</h1><p className="text-muted-foreground mt-4">Esta página estará disponible pronto.</p></div>} />
            <Route path="red" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Página en construcción</h1><p className="text-muted-foreground mt-4">Esta página estará disponible pronto.</p></div>} />
            <Route path="recursos" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Página en construcción</h1><p className="text-muted-foreground mt-4">Esta página estará disponible pronto.</p></div>} />
            <Route path="eventos" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Página en construcción</h1><p className="text-muted-foreground mt-4">Esta página estará disponible pronto.</p></div>} />
            <Route path="impacto" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Página en construcción</h1><p className="text-muted-foreground mt-4">Esta página estará disponible pronto.</p></div>} />
            <Route path="aliados" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Página en construcción</h1><p className="text-muted-foreground mt-4">Esta página estará disponible pronto.</p></div>} />
            {/* Legal pages placeholders */}
            <Route path="politica-privacidad" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Política de Privacidad</h1><p className="text-muted-foreground mt-4">Contenido legal pendiente.</p></div>} />
            <Route path="tratamiento-datos" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Tratamiento de Datos</h1><p className="text-muted-foreground mt-4">Contenido legal pendiente.</p></div>} />
            <Route path="terminos-uso" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Términos de Uso</h1><p className="text-muted-foreground mt-4">Contenido legal pendiente.</p></div>} />
            <Route path="cookies" element={<div className="py-20 text-center"><h1 className="text-3xl font-semibold">Política de Cookies</h1><p className="text-muted-foreground mt-4">Contenido legal pendiente.</p></div>} />
            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
