import AppProvider from '@components/providers/app-provider';
import appRoutes from '@config/routes.config';
import { HashRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <AppProvider routes={appRoutes} />
    </Router>
  );
}

export default App;
