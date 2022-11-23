declare global {
  interface Window {
    rpc: {
      sendMessage: (message: string) => void
      onReceiveMessage: (listener: (message: string) => void) => void
    }
  }
}

export type User = {
  id: number
  name: string
}
