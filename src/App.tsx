import {ThemeProvider,CssBaseline,Container,} from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import theme from "./theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
