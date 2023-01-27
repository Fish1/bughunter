/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BACKEND_PROTOCOL: string;
  readonly VITE_BACKEND_HOSTNAME: string;
  readonly VITE_BACKEND_PORT: string;
  readonly VITE_BACKEND_PATH_PREFIX: string;

  readonly VITE_FRONTEND_PORT: string;

  readonly VITE_AD_CLIENT_ID: string;
  readonly VITE_AD_EXPOSED_API_CLIENT_ID: string;
  readonly VITE_AD_TENANT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
