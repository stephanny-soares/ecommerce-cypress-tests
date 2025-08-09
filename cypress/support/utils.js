export function generateUniqueEmail() {
  return `test_${Date.now()}@mail.com`;
}

export function generateRandomName() {
  const names = ['Lucía', 'Mateo', 'Sofía', 'Hugo', 'Martina'];
  const lastNames = ['García', 'López', 'Martínez', 'Sánchez'];
  return `${names[Math.floor(Math.random() * names.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

export function generateRandomPhone() {
  return `6${Math.floor(100000000 + Math.random() * 900000000)}`;
}

// valid Spanish ZIP codes
export function generateRandomPostalCode() {
  return `${Math.floor(10000 + Math.random() * 89999)}`;
}
