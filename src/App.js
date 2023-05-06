import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {Homepage} from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Installationfront } from './components/pages/Installationfront';
import { Installationback } from './components/pages/Installationback';
import { Installationjira } from './components/pages/installationjira';
import { Installationchrome } from './components/pages/installationchrome';
import { Usermanualfront } from './components/pages/usermanualfront';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/installation/spgenie-tool-frontend" element={<Installationfront />} />
            <Route path="/installation/spgenie-tool-backend" element={<Installationback />} />
            <Route path="/installation/jira-plugin" element={<Installationjira />} />
            <Route path="/installation/chrome-extension" element={<Installationchrome />} />
            <Route path="/user-manual/spgenie-tool-frontend" element={<Usermanualfront />} />
          </Routes>
        </Router>
      </ChakraProvider>
      
    </div>
  );
}

export default App;
