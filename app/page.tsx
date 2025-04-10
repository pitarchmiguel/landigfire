import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock, Leaf, Heart, Coffee } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-cafe-500" />
            <span className="text-xl font-bold">Fire Station</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-cafe-500 transition-colors">
              Inicio
            </Link>
            <Link href="#nosotros" className="text-sm font-medium hover:text-cafe-500 transition-colors">
              Nosotros
            </Link>
            <Link href="#testimonios" className="text-sm font-medium hover:text-cafe-500 transition-colors">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-cafe-500 transition-colors">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Reservar
            </Button>
            <Button className="bg-cafe-500 hover:bg-cafe-600">Menú</Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_firestation.webp"
              alt="Comida saludable"
              fill
              className="object-cover brightness-[0.5]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Alimenta tu cuerpo, nutre tu alma
              </h1>
              <p className="text-lg md:text-xl">
                Descubre una experiencia gastronómica saludable y deliciosa en Fire Station, donde cada plato está
                preparado con ingredientes frescos y orgánicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-cafe-500 hover:bg-cafe-600">
                  Ver Menú
                </Button>
                <Button size="lg" variant="outline" className="text-cafe-500 border-cafe-500 hover:bg-transparent hover:text-white">
                  Reservar Mesa
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-cafe-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Leaf className="h-12 w-12 text-cafe-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Ingredientes Orgánicos</h3>
                <p className="text-muted-foreground">
                  Seleccionamos cuidadosamente ingredientes orgánicos y de temporada para ofrecerte lo mejor.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Heart className="h-12 w-12 text-cafe-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Nutrición Balanceada</h3>
                <p className="text-muted-foreground">
                  Nuestros platos están diseñados para proporcionar una nutrición completa y equilibrada.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Coffee className="h-12 w-12 text-cafe-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Ambiente Acogedor</h3>
                <p className="text-muted-foreground">
                  Un espacio diseñado para que disfrutes de cada momento mientras cuidas tu salud.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/nerea.webp"
                  alt="Nerea Centelles"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 text-sm font-medium text-cafe-500 bg-cafe-100 rounded-full">
                  Mi Historia
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nerea Centelles</h2>
                <p className="text-muted-foreground">
                Desde que era pequeña, siempre me llamó la atención cómo los alimentos influían en cómo nos sentíamos, rendíamos y vivíamos. Esa curiosidad me llevó a estudiar Nutrición, una carrera que me dio las bases para entender el cuerpo desde adentro y cómo podemos cuidarlo a través de lo que comemos. Pero con el tiempo descubrí algo más que transformó mi manera de ver la salud: el CrossFit.
                </p>
                <p className="text-muted-foreground">
                Fue casi por casualidad que lo encontré, pero desde el primer entrenamiento supe que era algo más que un deporte. Me atrapó la energía, el esfuerzo compartido, la disciplina y el reto constante de superarme. Se convirtió en mi estilo de vida, y junto con la nutrición, entendí que podía crear algo más grande: un espacio donde unir mis dos pasiones y compartirlas con los demás.
                </p>
    
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-16 md:py-24 bg-cafe-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nuestro Menú</h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Descubre nuestra selección de platos preparados con ingredientes frescos y orgánicos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bowl de Açaí",
                  description: "Açaí, plátano, fresas, granola casera y miel orgánica.",
                  price: "€8.50",
                },
                {
                  title: "Tostada de Aguacate",
                  description: "Pan integral artesanal, aguacate, tomate cherry, semillas y microgreens.",
                  price: "€7.90",
                },
                {
                  title: "Ensalada Mediterránea",
                  description: "Mix de hojas verdes, tomate, pepino, aceitunas, queso feta y vinagreta de limón.",
                  price: "€9.50",
                },
                {
                  title: "Wrap de Hummus",
                  description: "Tortilla integral, hummus casero, verduras asadas y brotes tiernos.",
                  price: "€8.90",
                },
                {
                  title: "Smoothie Verde",
                  description: "Espinacas, manzana, jengibre, limón y semillas de chía.",
                  price: "€5.50",
                },
                {
                  title: "Café Orgánico",
                  description: "Café de comercio justo con opciones de leche vegetal.",
                  price: "€3.20",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="h-48 mb-4 rounded-md overflow-hidden relative">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=${encodeURIComponent(item.title)}`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-cafe-500 font-bold">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-cafe-500 hover:bg-cafe-600">
                Ver Menú Completo
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Lo que dicen nuestros clientes</h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Experiencias de quienes ya han disfrutado de nuestra propuesta saludable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "David Gual",
                  quote: "Desayuno, almuerzo y comidas saludables, que no quiere decir poco sabrosas, al contrario! Producto de calidad!",
                },
                {
                  name: "Mario Martinez",
                  quote:
                    "Comida saludable, hecha al momento y con ingredientes locales.",
                },
                {
                  name: "Laura Gonzalez",
                  quote:
                    "Nerea ha creado un espacio único donde cada plato es una obra de arte nutritiva. Imprescindible.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-cafe-100 flex items-center justify-center mr-4">
                      <span className="text-cafe-500 font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24 bg-cafe-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Visítanos</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Estamos esperando para ofrecerte una experiencia gastronómica saludable y deliciosa.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-cafe-500 mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Dirección</h3>
                      <p className="text-muted-foreground">C/ Amelia Ferrer Armengot 12 <br/>12004 Castellón de la Plana</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-cafe-500 mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Horario</h3>
                      <p className="text-muted-foreground">Lunes a Viernes: 7:00 - 17:00</p>
                      <p className="text-muted-foreground">Sábado: 8:00 - 13:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-cafe-500 mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">690 040 694</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-cafe-500 mr-4 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">hola@cafeteriastation.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex space-x-4">
                  <a
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-cafe-500 text-white hover:bg-cafe-600"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-cafe-500 text-white hover:bg-cafe-600"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-cafe-500 text-white hover:bg-cafe-600"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/mapa.webp"
                  alt="Ubicación"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-cafe-900 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-bold">Cafeteria Fire Station</span>
              </div>
              <p className="text-cafe-200 mb-4">Alimentación saludable para un estilo de vida consciente.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-cafe-200 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-cafe-200 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-cafe-200 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#inicio" className="text-cafe-200 hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="text-cafe-200 hover:text-white">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="text-cafe-200 hover:text-white">
                    Menú
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="text-cafe-200 hover:text-white">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-cafe-200 hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-cafe-200 hover:text-white">
                    Catering
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cafe-200 hover:text-white">
                    Eventos privados
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cafe-200 hover:text-white">
                    Talleres de cocina
                  </a>
                </li>
                <li>
                  <a href="#" className="text-cafe-200 hover:text-white">
                    Asesoría nutricional
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <address className="not-italic text-cafe-200">
                <p>C/ Amelia Ferrer Armengot 12</p>
                <p className="mb-2">12004 Castellón de la Plana</p>
                <p className="mb-2">+34 690 040 694</p>
                <p>hola@cafeteriastation.com</p>
              </address>
            </div>
          </div>

          <div className="border-t border-cafe-800 mt-8 pt-8 text-center text-cafe-200 text-sm">
            <p>&copy; {new Date().getFullYear()} Firestation Cafeteria. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
