import { SnackbarProvider } from 'notistack';
import './App.css';
import { Home } from './pages/home';
import { TrackerContextProvider } from './providers/TrackerContextProvider';

function App() {
  return (
    <TrackerContextProvider>
      <SnackbarProvider>
        <div className="App">
          <Home />
        </div>
      </SnackbarProvider>
    </TrackerContextProvider>
  );
}

export default App;
