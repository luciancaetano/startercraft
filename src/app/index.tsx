import AppProvider from '@components/providers/app-provider';
import appRoutes from '@config/routes.config';
import Router from '@lib/router';

function App() {
  return (
    <AppProvider>
      <Router routes={appRoutes} />
    </AppProvider>
  );
}

export default App;
