// ✅ users.js — Data user global
console.log("✅ users.js berhasil dipanggil!");

// Jika belum ada data user di localStorage, buat default-nya
if (!localStorage.getItem('users')) {
  const defaultUsers = [
    { username: 'owner', password: 'owner123', role: 'owner' },
    { username: 'manager', password: '12345', role: 'manager' },
    { username: 'admin1', password: 'xyz', role: 'admin' }
  ];
  localStorage.setItem('users', JSON.stringify(defaultUsers));
}

// Ambil daftar user dari localStorage dan simpan ke variabel global
const users = JSON.parse(localStorage.getItem('users')) || [];

// ✅ Fungsi bantu untuk ambil dan simpan data user
function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(updatedUsers) {
  localStorage.setItem('users', JSON.stringify(updatedUsers));
}
