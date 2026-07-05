function tambah(a, b) {
  return a + b;
}

function jalankanTest() {
  const hasil = tambah(2, 3);
  if (hasil !== 5) {
    console.error(`Test gagal! Diharapkan 5, didapat ${hasil}`);
    process.exit(1);
  }
  console.log('Semua test lulus');
  process.exit(0);
}

jalankanTest();
