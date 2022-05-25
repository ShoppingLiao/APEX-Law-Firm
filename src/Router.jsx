import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Info from './components/Info';
import Team from './components/Team';
import Contact from './components/Contact';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        {/* 公司主頁 */}
        <Route index element={<Info />} />
        <Route path="info" element={<Info />} />
        {/* 團隊介紹 */}
        <Route path="team" element={<Team />} />
        {/* 聯絡方式 */}
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
