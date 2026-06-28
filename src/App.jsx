import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import './styles/globals.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/responsive.css';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
