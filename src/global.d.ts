export interface renderer {
    sendLoginMessage: (data: any) => Promise<any>;
  }
  
  declare global {
    interface Window {
      electronAPI: renderer;
    }
  }