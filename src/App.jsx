import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tareas } from "./pages/Tareas";
import { SobreNosotros } from "./pages/SobreNosotros";
import { Menu } from "./components/Menu";
import { ChakraProvider} from '@chakra-ui/react';
import { theme } from './theme/theme';


function App() {

return (
  <ChakraProvider theme={theme}>
    <div>
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Tareas />} />
        <Route path="/aboutUs" element={<SobreNosotros />} />
      </Routes>
    </BrowserRouter>
    </div>
  </ChakraProvider>
  );
}

export default App;
