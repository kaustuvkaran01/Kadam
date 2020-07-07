import React from 'react';
import Admin from '../components/Admin/Admin';
import NavbarAdmin from '../components/Admin/NavbarAdmin';
import Footer from '../components/Footer';

function AdminPanel() {
  return (
    <div>
        <NavbarAdmin />
        <Admin />
        <Footer />
    </div>
  );
}
export default AdminPanel;