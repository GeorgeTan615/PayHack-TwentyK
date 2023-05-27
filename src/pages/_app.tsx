import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-black">
      <div className="w-2/5 h-full bg-gray-200 text-black">
        <Component {...pageProps} />
      </div>
	  </div>

  )

}
