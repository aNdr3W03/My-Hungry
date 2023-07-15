# Test Case Menyukai dan Membatalkan Suka pada Restoran

## Alur Use Case

1. Tampilkan halaman detail Restoran.
2. Jika restoran tersebut belum disukai, tampilkan tombol berbentuk hati kosong untuk menyukai restoran.
3. Jika restoran tersebut sudah disukai, tampilkan tombol berbentuk hati penuh. Pengguna dapat membatalkan favorit pada restoran tersebut.
4. Memberi nama yang berbeda untuk createLikeButtonTemplate dan createUnlikeButtonTemplate.

## Skenario Menyukai Restoran

1. Restoran belum disukai.
2. Tombol untuk menyukai restoran ditampilkan.
3. Tombol menyukai restoran ditekan oleh pengguna.
4. Restoran ditambahkan ke daftar restoran favorit:
    a. Ternyata restoran sudah disukai:
        - Tidak perlu menyimpan kembali.
    b. Data restoran tidak memiliki ID:
        - Sistem tidak memproses penyimpanan.
        - Sistem tidak gagal.

## Skenario Batal Menyukai Restoran

1. Restoran sudah disukai.
2. Tombol untuk batal menyukai restoran ditampilkan.
3. Tombol batal menyukai restoran ditekan oleh pengguna.
4. Restoran dihapus dari daftar restoran favorit.
    a. Ternyata restoran tidak ada dalam daftar restoran yang disukai.

Keterangan:
- Alur positif dijelaskan pada poin berangka.
- Alur negatif dijelaskan pada poin huruf.