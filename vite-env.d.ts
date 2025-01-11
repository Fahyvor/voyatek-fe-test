interface ImportMetaEnv {
    readonly VITE_HOST: string;
    readonly VITE_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  