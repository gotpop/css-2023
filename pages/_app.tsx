import '../styles/app.css'
import { ColumnProvider } from '../ColumnsContext'

export default function MyApp({ Component, pageProps }) {
  return (
    <ColumnProvider>
      <Component {...pageProps} />
    </ColumnProvider>
  )
}
