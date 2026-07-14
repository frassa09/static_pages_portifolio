import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '../shared/contexts/LanguageContext';
import HubApp from './hub/App';
import AgencyApp from '../landing-pages/agency-software/src/App';
import CrmApp from '../landing-pages/saas-crm/src/App';
import RestaurantApp from '../landing-pages/restaurant/src/App';
import ClothingApp from '../landing-pages/clothing-store/src/App';
import EducationApp from '../landing-pages/education-institution/src/App';

export default function App() {
  return (
    <LanguageProvider defaultLang="en">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HubApp />} />
          <Route path="/agency-software" element={<AgencyApp />} />
          <Route path="/saas-crm" element={<CrmApp />} />
          <Route path="/restaurant" element={<RestaurantApp />} />
          <Route path="/clothing-store" element={<ClothingApp />} />
          <Route path="/education-institution" element={<EducationApp />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
}
