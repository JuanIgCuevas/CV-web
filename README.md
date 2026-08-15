# Portfolio · Juan Ignacio Cuevas

Portfolio/CV personal desarrollado con Next.js, TypeScript, Tailwind CSS y Framer Motion.

## Características

- Presentación editorial y responsive con identidad visual propia.
- Navegación por perfil, experiencia, aportes, proyectos y contacto.
- Filtro interactivo de proyectos y sección de preguntas frecuentes.
- Tema claro/oscuro con preferencia persistente.
- Descarga directa del CV y accesos a LinkedIn, GitHub y correo.
- Formulario de contacto protegido con validación, campo trampa y límite de envíos.
- Animaciones accesibles que respetan `prefers-reduced-motion`.

## Uso local

1. Instalar dependencias con `npm install`.
2. Iniciar el entorno con `npm run dev`.
3. Generar la versión de producción con `npm run build`.

Los datos personales y profesionales se administran desde `lib/profile.ts`.

## Configuración del formulario de contacto

1. Copiar `.env.example` como `.env.local`.
2. Configurar `RESEND_API_KEY`, `CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL`.
3. Para protección avanzada, agregar las claves pública y privada de Cloudflare Turnstile.

La dirección de destino y las claves privadas se utilizan exclusivamente en el servidor y no se incluyen en el código enviado al navegador.
