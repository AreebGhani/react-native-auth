import { ThemeProvider } from './src/context/ThemeContext'
import Navigation from './src/routes/Navigation'

export default function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}
