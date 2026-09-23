# Reformas Iker

Web corporativa multipágina construida con Next.js y TypeScript, preparada para GitHub y Vercel. Incluye Home, Servicios, Proyectos, Sobre nosotros, Contacto y Privacidad.

## Instalación y desarrollo

```bash
npm install
npm run dev
```

## Compilación

```bash
npm run build
```

La exportación estática se genera en `out/`.

## Variables de entorno

Copia `.env.example` como `.env.local` y configura:

- `NEXT_PUBLIC_SITE_URL`: dominio principal sin barra final.
- `NEXT_PUBLIC_GTM_ID`: identificador opcional de Google Tag Manager.

## GitHub y Vercel

Sube el contenido del proyecto a un repositorio de GitHub. En Vercel, importa el repositorio y conserva la configuración automática de Next.js. Añade las variables de entorno en la configuración del proyecto.

## Antes de publicar

- Configurar el dominio con `NEXT_PUBLIC_SITE_URL`.
- Confirmar razón social, NIF, dirección, teléfono, zona de trabajo y horarios.
- Confirmar años de experiencia y cifras comerciales.
- Sustituir los proyectos de muestra por trabajos autorizados.
- Completar los textos jurídicos reales.
- Conectar el formulario a correo, CRM o endpoint propio.
- Instalar un gestor de consentimiento antes de activar analítica no esencial.
