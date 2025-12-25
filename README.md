# 🎓 Sistem Pakar Pemilihan Jurusan dan Karier

Sistem pakar berbasis web untuk membantu siswa SMA dan mahasiswa semester awal dalam memilih jurusan kuliah dan karier yang sesuai dengan minat, kemampuan akademik, dan kepribadian mereka.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Deskripsi

Aplikasi ini mengimplementasikan **Sistem Pakar** dengan metode:

- **Forward Chaining** - Inferensi maju dari fakta pengguna menuju kesimpulan
- **Certainty Factor (CF)** - Perhitungan tingkat keyakinan rekomendasi
- **Multi-Factor Analysis** - Analisis komprehensif dari berbagai dimensi

### Target Pengguna

- Siswa SMA yang akan memilih jurusan kuliah
- Mahasiswa semester awal yang ingin memastikan pilihan jurusan
- Individu yang sedang merencanakan karier

## ✨ Fitur Utama

### 🧠 Inference Engine

- Forward Chaining dengan rule-based system
- Perhitungan Certainty Factor kombinasi
- Partial matching dengan strength calculation
- Multi-factor weighted scoring

### 📊 Faktor Analisis (17 Dimensi)

1. **Minat** (4 dimensi): Teknologi, Bisnis, Seni, Sains
2. **Akademik** (4 dimensi): Matematika, Bahasa Inggris, IPA, IPS
3. **Kepribadian** (3 dimensi): Tipe kepribadian, Preferensi kerja, Gaya belajar
4. **Motivasi & Tujuan** (3 dimensi): Motivasi karier, Toleransi risiko, Orientasi waktu
5. **Soft Skills** (3 dimensi): Komunikasi, Analitis, Kreativitas

### 📚 Knowledge Base

- **30+ Jurusan** dari berbagai bidang (Teknologi, Sains, Sosial, Bisnis, Seni, Kesehatan, Pendidikan, Hukum)
- **50+ Karier** dengan mapping ke jurusan terkait
- **Rule-based system** dengan ~50 aturan inferensi

### 🎯 Output Rekomendasi

- Top 5 rekomendasi jurusan dengan persentase kecocokan
- Top 5 rekomendasi karier dengan tingkat keyakinan
- Analisis profil (minat dominan, kemampuan kuat)
- Area kekuatan dan saran pengembangan
- Penjelasan rule yang aktif

## 🛠️ Tech Stack

| Teknologi                                     | Versi   | Kegunaan                          |
| --------------------------------------------- | ------- | --------------------------------- |
| [Next.js](https://nextjs.org/)                | 16.1.1  | Framework React dengan App Router |
| [React](https://react.dev/)                   | 19.2.3  | UI Library                        |
| [TypeScript](https://www.typescriptlang.org/) | 5.x     | Type-safe JavaScript              |
| [Tailwind CSS](https://tailwindcss.com/)      | 4.x     | Utility-first CSS                 |
| [GSAP](https://gsap.com/)                     | 3.14.2  | Animasi                           |
| [Lucide React](https://lucide.dev/)           | 0.562.0 | Icon Library                      |

## 📁 Struktur Project

```
src/
├── app/
│   ├── api/
│   │   └── inference/
│   │       └── route.ts          # API endpoint inferensi
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/
│   ├── HeroSection.tsx           # Hero dengan animasi
│   ├── LoadingState.tsx          # Loading indicator
│   ├── Particles.tsx             # Background particles
│   ├── QuestionForm.tsx          # Form kuesioner (5 step)
│   └── ResultSection.tsx         # Tampilan hasil rekomendasi
└── lib/
    ├── inference-engine.ts       # 🧠 Mesin inferensi utama
    ├── knowledge-base.ts         # Kompilasi semua rules
    ├── types.ts                  # TypeScript interfaces
    ├── data/
    │   ├── jurusan.ts            # Data 30+ jurusan
    │   └── karier.ts             # Data 50+ karier
    └── rules/
        ├── jurusan-rules.ts      # Rules untuk jurusan
        └── karier-rules.ts       # Rules untuk karier
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x atau lebih baru
- npm, yarn, pnpm, atau bun

### Instalasi

1. **Clone repository**

   ```bash
   git clone https://github.com/qulDev/Sistem-pemilhan-jurusan-dan-karir.git
   cd Sistem-pemilhan-jurusan-dan-karir
   ```

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Jalankan development server**

   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. **Buka browser**

   Akses [http://localhost:3000](http://localhost:3000)

### Build untuk Production

```bash
npm run build
npm start
```

## 📖 Cara Penggunaan

1. **Buka aplikasi** di browser
2. **Klik "Mulai Konsultasi"** di halaman utama
3. **Isi kuesioner** (5 tahap):
   - Tahap 1: Minat (Teknologi, Bisnis, Seni, Sains)
   - Tahap 2: Nilai Akademik (Matematika, B. Inggris, IPA, IPS)
   - Tahap 3: Kepribadian (Tipe, Preferensi kerja, Gaya belajar)
   - Tahap 4: Motivasi & Tujuan (Motivasi karier, Toleransi risiko, Orientasi waktu)
   - Tahap 5: Soft Skills (Komunikasi, Analitis, Kreativitas)
4. **Lihat hasil** rekomendasi jurusan dan karier
5. **Analisis** detail kecocokan dan saran pengembangan

## 🔬 Metode yang Digunakan

### Forward Chaining

```
Fakta Pengguna → Pencocokan Rule → Kesimpulan (Rekomendasi)
```

Proses inferensi dimulai dari fakta yang diinput pengguna, kemudian dicocokkan dengan aturan-aturan di knowledge base untuk menghasilkan rekomendasi.

### Certainty Factor (CF)

Formula kombinasi CF:

```
CF_combine = CF1 + CF2 × (1 - CF1)   jika keduanya positif
CF_combine = CF1 + CF2 × (1 + CF1)   jika keduanya negatif
CF_combine = (CF1 + CF2) / (1 - min(|CF1|, |CF2|))   jika berbeda tanda
```

### Multi-Factor Analysis

Sistem menganalisis 17 dimensi dengan pembobotan:

- Minat: 30%
- Akademik: 25%
- Kepribadian: 20%
- Motivasi: 15%
- Kemampuan: 10%

## 📝 Contoh Rule

```typescript
{
  id: "J001",
  conditions: [
    { fact: "minatTeknologi", operator: "=", value: "tinggi" },
    { fact: "nilaiMatematika", operator: "in", value: ["tinggi", "sedang"] },
    { fact: "kepribadian", operator: "in", value: ["introvert", "ambivert"] }
  ],
  conclusion: { type: "jurusan", value: "teknik-informatika" },
  cf: 0.9,
  description: "Minat teknologi tinggi dengan kemampuan matematika mendukung Teknik Informatika"
}
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 👏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP Animation Library](https://gsap.com/)
- Teori Sistem Pakar dan Certainty Factor

---

<p align="center">
  Made with ❤️ untuk Tugas UAS Sistem Pakar
</p>
