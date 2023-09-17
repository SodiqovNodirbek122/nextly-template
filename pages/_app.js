import { ThemeProvider } from "next-themes"
import "../css/tailwind.css"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.replainSettings = { id: "85ec9b94-c2cb-42cf-bae1-01b5fa52a386" }
    ;(function (u) {
      var s = document.createElement("script")
      s.async = true
      s.src = u
      var x = document.getElementsByTagName("script")[0]
      x.parentNode.insertBefore(s, x)
    })("https://widget.replain.cc/dist/client.js")
    window.scrollTo(0, 0)
  }, [])
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
