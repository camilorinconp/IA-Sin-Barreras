import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { School, Users, Building, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const departamentos = [
  'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas', 'Caquetá',
  'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca', 'Guainía', 'Guaviare',
  'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño', 'Norte de Santander', 'Putumayo',
  'Quindío', 'Risaralda', 'San Andrés y Providencia', 'Santander', 'Sucre', 'Tolima',
  'Valle del Cauca', 'Vaupés', 'Vichada'
];

export default function Contacto() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    institucion: '',
    cargo: '',
    departamento: '',
    municipio: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent, tipo: string) => {
    e.preventDefault();
    
    // Simular envío del formulario
    toast({
      title: "Formulario enviado",
      description: `Gracias por tu interés en IA Sin Barreras. Te contactaremos pronto.`,
    });

    // Reset form
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      institucion: '',
      cargo: '',
      departamento: '',
      municipio: '',
      mensaje: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold mb-4">Únete a IA Sin Barreras</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectemos para transformar la educación en IA en Colombia. 
            Elige la opción que mejor describe tu interés.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center hover-lift">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Correo Electrónico</h3>
              <p className="text-muted-foreground">contacto@iasinbarreras.co</p>
            </CardContent>
          </Card>
          <Card className="text-center hover-lift">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Ubicación</h3>
              <p className="text-muted-foreground">Bogotá, Colombia</p>
            </CardContent>
          </Card>
          <Card className="text-center hover-lift">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">+57 300 123 4567</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Forms */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="colegio" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="colegio" className="flex items-center gap-2">
                <School className="h-4 w-4" />
                Colegio
              </TabsTrigger>
              <TabsTrigger value="aliado" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                Aliado
              </TabsTrigger>
              <TabsTrigger value="prensa" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Prensa/Otros
              </TabsTrigger>
            </TabsList>

            {/* Formulario Colegios */}
            <TabsContent value="colegio">
              <Card>
                <CardHeader>
                  <CardTitle>Formulario para Instituciones Educativas</CardTitle>
                  <CardDescription>
                    Comparte los datos de tu institución para comenzar el proceso de vinculación
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleSubmit(e, 'colegio')} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre del contacto *</Label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cargo">Cargo en la institución *</Label>
                        <Input
                          id="cargo"
                          value={formData.cargo}
                          onChange={(e) => handleInputChange('cargo', e.target.value)}
                          placeholder="Ej: Rector, Coordinador, Docente"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="correo@institucion.edu.co"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange('telefono', e.target.value)}
                          placeholder="+57 300 123 4567"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="institucion">Nombre de la institución *</Label>
                      <Input
                        id="institucion"
                        value={formData.institucion}
                        onChange={(e) => handleInputChange('institucion', e.target.value)}
                        placeholder="Nombre completo de la institución educativa"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="departamento">Departamento *</Label>
                        <Select value={formData.departamento} onValueChange={(value) => handleInputChange('departamento', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona departamento" />
                          </SelectTrigger>
                          <SelectContent>
                            {departamentos.map((dept) => (
                              <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="municipio">Municipio *</Label>
                        <Input
                          id="municipio"
                          value={formData.municipio}
                          onChange={(e) => handleInputChange('municipio', e.target.value)}
                          placeholder="Municipio de la institución"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Cuéntanos sobre tu institución</Label>
                      <Textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange('mensaje', e.target.value)}
                        placeholder="Número de estudiantes, niveles educativos, experiencia con tecnología, necesidades específicas..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar solicitud de vinculación
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Formulario Aliados */}
            <TabsContent value="aliado">
              <Card>
                <CardHeader>
                  <CardTitle>Formulario para Aliados</CardTitle>
                  <CardDescription>
                    Universidades, empresas, gremios y entidades gubernamentales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleSubmit(e, 'aliado')} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre-aliado">Nombre del contacto *</Label>
                        <Input
                          id="nombre-aliado"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cargo-aliado">Cargo *</Label>
                        <Input
                          id="cargo-aliado"
                          value={formData.cargo}
                          onChange={(e) => handleInputChange('cargo', e.target.value)}
                          placeholder="Tu cargo en la organización"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organizacion">Organización *</Label>
                      <Input
                        id="organizacion"
                        value={formData.institucion}
                        onChange={(e) => handleInputChange('institucion', e.target.value)}
                        placeholder="Nombre de la universidad/empresa/entidad"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email-aliado">Correo electrónico *</Label>
                        <Input
                          id="email-aliado"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="correo@organizacion.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono-aliado">Teléfono *</Label>
                        <Input
                          id="telefono-aliado"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange('telefono', e.target.value)}
                          placeholder="+57 300 123 4567"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cobertura">Cobertura territorial</Label>
                      <Input
                        id="cobertura"
                        value={formData.municipio}
                        onChange={(e) => handleInputChange('municipio', e.target.value)}
                        placeholder="Región, departamento o municipios donde operan"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="oferta">¿Qué puedes ofrecer a la red?</Label>
                      <Textarea
                        id="oferta"
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange('mensaje', e.target.value)}
                        placeholder="Formación docente, infraestructura, financiación, mentoría, retos reales, investigación..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-brand-emerald hover:bg-brand-emerald/90">
                      Proponer alianza
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Formulario Prensa/Otros */}
            <TabsContent value="prensa">
              <Card>
                <CardHeader>
                  <CardTitle>Contacto General</CardTitle>
                  <CardDescription>
                    Para medios de comunicación, investigadores, padres de familia y consultas generales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleSubmit(e, 'general')} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre-general">Nombre completo *</Label>
                        <Input
                          id="nombre-general"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange('nombre', e.target.value)}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-general">Correo electrónico *</Label>
                        <Input
                          id="email-general"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="tu@correo.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organizacion-general">Organización</Label>
                      <Input
                        id="organizacion-general"
                        value={formData.institucion}
                        onChange={(e) => handleInputChange('institucion', e.target.value)}
                        placeholder="Medio de comunicación, universidad, empresa..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="asunto">Asunto *</Label>
                      <Input
                        id="asunto"
                        value={formData.cargo}
                        onChange={(e) => handleInputChange('cargo', e.target.value)}
                        placeholder="Motivo de tu consulta"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje-general">Mensaje *</Label>
                      <Textarea
                        id="mensaje-general"
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange('mensaje', e.target.value)}
                        placeholder="Describe tu consulta o solicitud..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}