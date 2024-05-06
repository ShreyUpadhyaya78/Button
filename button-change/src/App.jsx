import Button from './button';
import { StoreProvider } from './store';
import './App.css'
const App = () => {
  return (
    <StoreProvider>
      <Button />
    </StoreProvider>
  );
};

export default App;