import {
  Activity,
  Database,
  ShoppingCart,
  Ticket,
} from "lucide-react";

export const projects = [
  {
    id: 1,
    featured: true,
    number: "01",
    title: "OCC vs Pessimistic Locking Benchmark",
    category: "THESIS / BACKEND PERFORMANCE",
    description:
      "Simulasi dan analisis perbandingan Optimistic Concurrency Control dan Pessimistic Locking dalam menangani race condition pada sistem booking kursi.",
    problem:
      "Concurrent booking dapat menyebabkan lost update dan double booking ketika beberapa request mengakses kursi yang sama secara bersamaan.",
    solution:
      "Membangun simulator berbasis Go dengan PostgreSQL menggunakan version checking pada OCC dan SELECT FOR UPDATE pada PCC.",
    metrics: [
      {
        value: "352.82",
        label: "TPS OCC",
      },
      {
        value: "100%",
        label: "Data Integrity",
      },
      {
        value: "50",
        label: "Seats Tested",
      },
    ],
    stack: [
      "Go",
      "PostgreSQL",
      "Goroutine",
      "OCC",
      "Pessimistic Locking",
      "REST API",
    ],
    icon: Activity,
    color: "purple",
    github: "#",
    demo: "#",
  },

  {
    id: 2,
    featured: false,
    number: "02",
    title: "MOLA Online Marketplace",
    category: "BACKEND / E-COMMERCE",
    description:
      "Backend marketplace dengan fitur autentikasi, product variants, checkout, payment gateway, dan role-based access control.",
    problem:
      "Membutuhkan backend yang mampu mengelola katalog produk, transaksi, autentikasi pengguna, dan integrasi pembayaran dalam satu sistem.",
    solution:
      "Membangun REST API menggunakan Go, Echo, PostgreSQL, Redis, JWT, dan Midtrans dengan struktur handler-service-repository.",
    metrics: [
      {
        value: "REST",
        label: "API Architecture",
      },
      {
        value: "RBAC",
        label: "Authorization",
      },
      {
        value: "Redis",
        label: "Caching",
      },
    ],
    stack: [
      "Go",
      "Echo",
      "PostgreSQL",
      "GORM",
      "Redis",
      "JWT",
      "Midtrans",
      "Docker",
    ],
    icon: ShoppingCart,
    color: "yellow",
    github: "#",
    demo: "#",
  },

  {
    id: 3,
    featured: false,
    number: "03",
    title: "Scrum Ticketing System",
    category: "MSIB / BACKEND",
    description:
      "Backend ticketing system yang dikembangkan dalam program MSIB untuk mendukung pengelolaan user dan proses autentikasi.",
    problem:
      "Sistem membutuhkan API terstruktur untuk pengelolaan pengguna, autentikasi, verifikasi email, serta reset password.",
    solution:
      "Mengembangkan User Management module menggunakan Go, Echo, PostgreSQL, JWT, bcrypt, dan email template.",
    metrics: [
      {
        value: "JWT",
        label: "Authentication",
      },
      {
        value: "RBAC",
        label: "Access Control",
      },
      {
        value: "SMTP",
        label: "Email Service",
      },
    ],
    stack: [
      "Go",
      "Echo",
      "PostgreSQL",
      "GORM",
      "JWT",
      "bcrypt",
      "SMTP",
    ],
    icon: Ticket,
    color: "green",
    github: "#",
    demo: "#",
  },

//   {
//     id: 4,
//     featured: false,
//     number: "04",
//     title: "Degan 1 Village Website",
//     category: "KKN / WEB DEVELOPMENT",
//     description:
//       "Website profil Pedukuhan Degan 1 untuk menyediakan informasi, berita, galeri, dan konten administrasi desa.",
//     problem:
//       "Informasi pedukuhan sebelumnya belum tersaji dalam platform digital yang terpusat dan mudah diakses masyarakat.",
//     solution:
//       "Mengembangkan website profil desa dengan PHP dan Bootstrap beserta halaman admin untuk mengelola konten.",
//     metrics: [
//       {
//         value: "PHP",
//         label: "Backend",
//       },
//       {
//         value: "CMS",
//         label: "Content Management",
//       },
//       {
//         value: "LIVE",
//         label: "Deployment",
//       },
//     ],
//     stack: [
//       "PHP",
//       "MySQL",
//       "Bootstrap",
//       "cPanel",
//       "Nginx",
//       "SSL",
//     ],
//     icon: Database,
//     color: "pink",
//     github: "#",
//     demo: "https://degansatuvillage.my.id",
//   },
];