import Layout from "./componentes/layout/Layout";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [mode, setMode] = useState("claro")

  return (
    <ThemeProvider theme={mode === "claro" ? lightTheme : darkTheme}>
      <CssBaseline />
      <div className="App">
     <Layout mode={mode} setMode={setMode}/>
     </div>
    </ThemeProvider>
    );
}

export default App;
