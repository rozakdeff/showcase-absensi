/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Fingerprint, 
  Bell, 
  MapPin, 
  History, 
  Calendar, 
  FileText, 
  User, 
  Home as HomeIcon, 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  LogOut, 
  Clock, 
  Camera, 
  Check, 
  MoreHorizontal,
  Stethoscope,
  Cake,
  Umbrella,
  AlertTriangle,
  FileEdit,
  ClipboardList,
  ChevronDown,
  CalendarDays,
  Paperclip,
  Radar
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Shared Components for Showcase ---

const DeviceFrame = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="flex flex-col items-center gap-6 w-full max-w-[400px] mx-auto px-4">
    <div className="relative group w-full">
      {/* Device Frame */}
      <div className="w-full aspect-[375/812] bg-white rounded-[2.5rem] md:rounded-[3rem] border-[8px] md:border-[12px] border-gray-900 shadow-2xl overflow-hidden relative">
        {/* Notch - Smaller on mobile */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-40 h-5 md:h-7 bg-gray-900 rounded-b-xl md:rounded-b-2xl z-50 flex items-end justify-center pb-1">
          <div className="w-8 md:w-12 h-0.5 md:h-1 bg-gray-800 rounded-full mb-1"></div>
        </div>
        {/* Screen Content Container */}
        <div className="w-full h-full relative bg-surface text-on-surface">
           <div className="w-full h-full overflow-y-auto hide-scrollbar">
            {children}
           </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <h3 className="font-headline font-bold text-lg md:text-xl text-primary">{title}</h3>
    </div>
  </div>
);

const BrowserFrame = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-6xl px-4">
    <div className="w-full h-[400px] md:h-[600px] bg-white rounded-xl md:rounded-2xl border-[4px] md:border-[8px] border-gray-100 shadow-2xl overflow-hidden relative flex flex-col">
       {/* Browser Header */}
       <div className="w-full h-10 md:h-12 bg-gray-100 flex items-center px-4 gap-2 shrink-0">
          <div className="flex gap-1.5">
             <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
             <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
             <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 max-w-xs md:max-w-md bg-white h-6 md:h-7 rounded-md mx-auto flex items-center px-3 gap-2">
             <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-200 rounded-full"></div>
             <div className="w-24 md:w-32 h-1.5 md:h-2 bg-gray-100 rounded-full"></div>
          </div>
       </div>
       {/* Browser Content */}
       <div className="flex-1 overflow-auto bg-surface text-on-surface">
          {children}
       </div>
    </div>
    <h3 className="font-headline font-bold text-xl md:text-2xl text-primary text-center">{title}</h3>
  </div>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-12 md:mb-20 text-center px-4">
    <h2 className="font-headline font-extrabold text-3xl md:text-6xl tracking-tighter text-primary mb-4">{title}</h2>
    <p className="text-on-surface-variant font-medium text-base md:text-xl max-w-3xl mx-auto">{subtitle}</p>
  </div>
);

// --- Admin Section Screens ---

const AdminSidebar = ({ active }: { active: string }) => {
  const items = [
    { id: 'dashboard', icon: <Fingerprint className="w-5 h-5" />, label: 'Dashboard' },
    { id: 'attendance', icon: <CalendarDays className="w-5 h-5" />, label: 'Kehadiran' },
    { id: 'employees', icon: <User className="w-5 h-5" />, label: 'Karyawan' },
    { id: 'location', icon: <MapPin className="w-5 h-5" />, label: 'Lokasi' },
    { id: 'leave', icon: <AlertCircle className="w-5 h-5" />, label: 'Cuti' },
    { id: 'payroll', icon: <ClipboardList className="w-5 h-5" />, label: 'Penggajian' },
  ];

  return (
    <aside className="hidden lg:flex w-[200px] bg-[#0F1F3D] h-full flex-col py-6 shrink-0 border-r border-white/5">
      <div className="px-6 mb-10">
        <h1 className="text-white font-bold text-xl">AbsensiApp</h1>
        <p className="text-[10px] text-secondary-container uppercase tracking-widest font-bold opacity-60">Sovereign Ledger</p>
      </div>
      <nav className="flex-1 flex flex-col gap-1 px-3">
        {items.map(item => (
          <div key={item.id} className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${active === item.id ? 'bg-white/10 text-white scale-95' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            {item.icon}
            <span className="hidden xl:inline">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

const AdminHeader = () => (
  <header className="h-16 border-b border-outline-variant/10 bg-surface flex items-center justify-between px-8 shrink-0">
    <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-80">
      <Fingerprint className="w-4 h-4 text-outline" />
      <input className="bg-transparent border-none focus:ring-0 text-sm italic ml-2" placeholder="Search data..." />
    </div>
    <div className="flex items-center gap-6">
      <button className="text-secondary text-sm font-bold">Export Data</button>
      <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant/20">
         <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDWGiwERjd8n9JOAY_DCvyG-iBRyomyUGq4fAhFbLtnSRBm02uLH70vkO4K2BXkcqRX4dOTx_22xhHWxuFTWDHDTQml3aVVSDIQ_mM3zYmPZjYxm2yMNH-hTx9IurNXYGxSybEADwQhN2APYoukrpUwXoU4sMNXCbozwaRaH0lxJPAC1KTIM7E6ABbUlgCYImjZ7i22XAF6XRjmf0zH9cApUDRhTsgFGdDXB9uh7E7KERKa5L1UazhvOuwRs6W1G6c8cUay3umbEmv" className="w-full h-full object-cover" />
      </div>
    </div>
  </header>
)

const AdminDashboard = () => (
  <div className="flex h-full font-body overflow-hidden">
    <AdminSidebar active="dashboard" />
    <div className="flex-1 flex flex-col bg-surface-container-low overflow-hidden">
      <AdminHeader />
      <main className="p-4 md:p-8 overflow-auto flex flex-col gap-6 md:gap-8">
        <h2 className="text-xl md:text-2xl font-headline font-bold text-primary">Main Monitoring Dashboard</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <AdminKpi border="border-secondary" title="Total Hadir" val="28" pct="82%" color="bg-[#c3ead6] text-green-800" />
          <AdminKpi border="border-secondary" title="Terlambat" val="3" pct="9%" color="bg-amber-100 text-amber-800" />
          <AdminKpi border="border-secondary" title="Tidak Hadir" val="6" pct="18%" color="bg-red-100 text-red-800" />
          <AdminKpi border="border-secondary" title="Cuti Pending" val="2" pct="NEW" color="bg-blue-100 text-blue-800" />
        </div>
        <div className="bg-surface-container-lowest rounded-2xl shadow-ambient p-6">
          <h4 className="font-bold mb-4">Laporan Kehadiran Hari Ini</h4>
          <div className="space-y-4">
             {[
               { name: 'Budi Santoso', location: 'Kantor Pusat', status: 'Hadir', time: '07:55 AM' },
               { name: 'Siti Rahmawati', location: 'Cabang Surabaya', status: 'Terlambat', time: '08:15 AM' },
               { name: 'Andi Wijaya', location: 'Gudang C', status: 'Cuti', time: '-' },
             ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-[10px]">USER</div>
                    <div>
                      <p className="text-sm font-bold">{row.name}</p>
                      <p className="text-[10px] text-on-surface-variant uppercase">{row.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold">{row.time}</p>
                    <p className={`text-[10px] uppercase font-bold ${row.status === 'Terlambat' ? 'text-amber-600' : 'text-green-600'}`}>{row.status}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </main>
    </div>
  </div>
);

const AdminGPSMonitoring = () => (
  <div className="flex h-full overflow-hidden">
    <AdminSidebar active="location" />
    <div className="flex-1 flex flex-col overflow-hidden">
      <AdminHeader />
      <main className="flex-1 relative flex flex-col md:flex-row overflow-hidden">
         <div className="w-full md:w-2/3 h-1/2 md:h-full bg-blue-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#005fac11_1px,transparent_1px)] [background-size:40px_40px]"></div>
            <img src="https://picsum.photos/seed/map/1000/600" className="w-full h-full object-cover opacity-20 invert grayscale" />
            <div className="absolute top-1/2 left-1/3 w-10 h-10 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-white border-2 border-secondary rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                </div>
                <p className="absolute left-10 top-2 whitespace-nowrap bg-primary text-white text-[10px] px-2 py-1 rounded font-bold">ANDI R. • HADIR</p>
            </div>
         </div>
         <div className="w-full md:w-1/3 h-1/2 md:h-full bg-surface-container-lowest border-t md:border-t-0 md:border-l border-outline-variant/10 p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-auto">
            <h3 className="font-bold text-sm md:text-base">Karyawan Lapangan (6)</h3>
            <div className="space-y-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-surface-container-high shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">Karyawan #{i}</p>
                      <p className="text-[10px] text-on-surface-variant truncate">Jl. Sudirman No 22, Jakarta</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                ))}
            </div>
         </div>
      </main>
    </div>
  </div>
);

const AdminEmployeeManagement = () => (
  <div className="flex h-full">
    <AdminSidebar active="employees" />
    <div className="flex-1 flex flex-col bg-surface-container-low overflow-hidden">
      <AdminHeader />
      <main className="p-4 md:p-10 flex flex-col gap-6 md:gap-8 overflow-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-headline font-bold text-primary">Manajemen Karyawan</h2>
            <p className="text-on-surface-variant text-xs md:text-sm">Kelola data terpusat tenaga kerja.</p>
          </div>
          <button className="bg-primary text-on-primary px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm whitespace-nowrap">Tambah Karyawan</button>
        </div>
        <div className="bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-outline-variant/10">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-outline">Karyawan</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-outline">Divisi</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-outline">Status Kerja</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-outline">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Budi Santoso', div: 'Engineering', status: 'Tetap' },
                { name: 'Siti Aminah', div: 'HRD', status: 'Tetap' },
                { name: 'Ahmad Faisal', div: 'Marketing', status: 'Kontrak' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-outline-variant/5">
                  <td className="px-6 py-4 font-bold text-sm">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{row.div}</td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-primary-fixed text-[10px] font-bold rounded-full uppercase">{row.status}</span></td>
                  <td className="px-6 py-4 text-secondary text-sm font-bold">Edit</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
);

const AdminKpi = ({ title, val, pct, color, border }: any) => (
  <div className={`bg-surface-container-lowest p-6 rounded-2xl relative overflow-hidden border-l-4 ${border} shadow-ambient`}>
    <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-4">{title}</p>
    <div className="flex items-baseline gap-2">
      <span className="text-4xl font-headline font-black text-primary">{val}</span>
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${color}`}>{pct}</span>
    </div>
  </div>
);

// --- Screen Components ---

const LoginScreen = () => (
  <div className="min-h-full flex flex-col bg-surface relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-surface-container-low to-surface opacity-50 z-0 pointer-events-none"></div>
    <main className="flex-1 flex flex-col justify-center px-8 relative z-10 pt-20">
      <div className="mb-14">
        <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-primary/10">
          <Fingerprint className="text-on-primary w-8 h-8" />
        </div>
        <h1 className="font-headline font-extrabold text-4xl tracking-tight text-primary mb-3">AbsensiApp</h1>
        <p className="font-body text-on-surface-variant text-sm font-medium tracking-wide leading-relaxed">Sistem Absensi dan Pantauan Karyawan</p>
      </div>
      <form className="space-y-6 flex flex-col">
        <div className="relative bg-surface-container-low rounded-t-xl border-b-2 border-outline-variant/30">
          <input className="w-full bg-transparent border-none px-4 pt-6 pb-2 text-on-surface focus:ring-0 placeholder-transparent font-body" value="muzainmu@gmail.com" readOnly />
          <label className="absolute left-4 top-1.5 text-secondary text-[10px] font-semibold font-label">Email</label>
        </div>
        <div className="relative bg-surface-container-low rounded-t-xl border-b-2 border-outline-variant/30">
          <input className="w-full bg-transparent border-none px-4 pt-6 pb-2 text-on-surface focus:ring-0 placeholder-transparent font-body pr-12" type="password" value="********" readOnly />
          <label className="absolute left-4 top-1.5 text-secondary text-[10px] font-semibold font-label">Kata Sandi</label>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant"><Bell className="w-5 h-5" /></button>
        </div>
        <div className="flex justify-end"><a className="font-label text-xs font-semibold text-primary" href="#">Lupa kata sandi?</a></div>
        <button className="w-full bg-primary text-on-primary font-headline font-bold text-lg py-4 rounded-xl mt-6 shadow-lg shadow-primary/10">Masuk</button>
      </form>
    </main>
    <footer className="py-8 text-center mt-auto">
      <p className="font-label text-[10px] font-semibold text-on-surface-variant tracking-widest uppercase">v1.0 © 2026 AbsensiApp</p>
    </footer>
  </div>
);

const EmployeeDashboard = () => (
  <div className="bg-surface text-on-surface min-h-full pb-24">
    <header className="flex justify-between items-center w-full px-6 py-8 sticky top-0 z-40 bg-surface">
      <div className="flex flex-col">
        <span className="text-secondary font-label text-sm font-medium mb-0.5">Selamat pagi 👋</span>
        <h1 className="text-primary font-manrope font-black tracking-tighter text-2xl leading-none">Andi Rizky</h1>
        <span className="text-on-surface-variant font-label text-xs mt-1">Back Office · Kantor Pusat</span>
      </div>
      <div>
        <img alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-surface-container-highest shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzP29o2N-UeScnA0aTVW_RnWger3k9SIMHj76fhUTo1YikeZzzDvNh1un4McbB_xHL0779LGs5XLVn90bWEhVlOiP_FOlEB6gFGP74nUg1bM9JwRYSwS_aJSkwxP9QAaYh8mNWIwrpt18844mNroCw1cYMm14UctFJgNv7CR5vT7Fy0VQCoMuuItyynjX7KAQa4yZZLqh7fKGFtP4i2Okuqmdjsr1dbBPctEejmNXrrmmcWqjgOlcYqk3PE-ryRk0Eq6XZnaem0i5F" />
      </div>
    </header>
    <main className="px-6 space-y-8">
      <section className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-6 text-on-primary shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="flex flex-col items-center justify-center text-center space-y-2 relative z-10">
          <span className="font-body text-sm text-primary-fixed-dim">Senin, 14 April 2026</span>
          <div className="font-headline text-6xl font-extrabold tracking-tighter py-2">07:55</div>
          <div className="w-full pt-4">
            <button className="w-full bg-surface-container-lowest text-primary font-headline font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2">
              <Camera className="w-5 h-5 fill-current" />
              Absen Masuk Sekarang
            </button>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-4">
        <div className="bg-surface-container-low rounded-xl p-4 flex flex-col items-center justify-center shadow-ambient">
          <span className="font-headline text-2xl font-bold text-primary">12</span>
          <span className="font-label text-[10px] text-on-surface-variant mt-1 uppercase font-semibold">Sisa Cuti</span>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center justify-center shadow-ambient border border-outline-variant/15">
          <span className="font-headline text-2xl font-bold text-primary">0</span>
          <span className="font-label text-[10px] text-on-surface-variant mt-1 uppercase font-semibold">Terlambat</span>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-4 flex flex-col items-center justify-center shadow-ambient border border-outline-variant/15">
          <span className="font-headline text-2xl font-bold text-primary">22</span>
          <span className="font-label text-[10px] text-on-surface-variant mt-1 uppercase font-semibold">Hari Kerja</span>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="font-headline text-xl font-bold text-on-surface">Menu Utama</h2>
        <div className="flex flex-col space-y-3">
          <MenuItem icon={<HomeIcon className="w-6 h-6" />} title="Pengajuan Cuti" subtitle="Ajukan dan cek status cuti" />
          <MenuItem icon={<FileText className="w-6 h-6" />} title="Laporan Harian" subtitle="Isi aktivitas kerja hari ini" />
          <MenuItem icon={<History className="w-6 h-6" />} title="Riwayat Absensi" subtitle="Lihat rekap absensi bulanan" />
        </div>
      </section>
    </main>
    <BottomNav active="beranda" />
  </div>
);

const MenuItem = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <a className="flex items-center p-4 bg-surface-container-lowest rounded-xl shadow-ambient hover:bg-surface-container-high transition-colors group">
    <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-secondary transition-colors group-hover:bg-secondary-container group-hover:text-on-secondary-container">
      {icon}
    </div>
    <div className="ml-4 flex-1">
      <h3 className="font-headline font-semibold text-on-surface">{title}</h3>
      <p className="font-body text-xs text-on-surface-variant mt-0.5">{subtitle}</p>
    </div>
    <ChevronRight className="text-outline-variant group-hover:text-primary transition-colors w-5 h-5" />
  </a>
);

const FaceVerification = () => (
  <div className="bg-background text-on-background min-h-full flex flex-col relative">
    <header className="flex justify-between items-center w-full px-6 py-4 sticky top-0 z-40 bg-surface border-b-0">
      <button className="p-2 rounded-full hover:bg-surface-container-low"><ArrowLeft /></button>
      <div className="text-center flex-1">
        <h1 className="font-headline font-bold text-xl tracking-tight">Verifikasi Wajah</h1>
        <p className="font-body text-sm text-on-surface-variant mt-0.5">Posisikan wajah di tengah</p>
      </div>
      <div className="w-10"></div>
    </header>
    <main className="flex-1 flex flex-col relative w-full h-full bg-[#0f1624]">
      <div className="relative flex-1 flex flex-col items-center justify-center rounded-b-[2rem] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLpvVOdk8MS4wzDlUndKkMlBLrlM8mbUTSmFgiJlFeH6mJC0l9JcurPXG5sef2cffY8CcJl0zi1hh-iM4X_VLxdDYsca1hLn6e1XZFQToipvpY-mVPq3ueswDjQQq8-tQwvnV7Nem9Ms904J7tEoRD2z4b0ExqJlEWYeAa_XEtM2YSDxcEzbd-yKUvUWbKXJAkAraTh5P-UM2WC4SqlpqTu9_TN-05GzcB8kaKfGhov55uzhr7-ukTMKIkzYKtKHPGyk_InjOiDWoh')"}} />
        <div className="relative w-64 h-80 border-4 border-secondary rounded-[100px] flex items-center justify-center shadow-[0_0_20px_rgba(0,95,172,0.5)] z-10 bg-primary/10 backdrop-blur-[2px]">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-secondary shadow-[0_0_15px_rgba(0,95,172,0.8)] opacity-80 -translate-y-1/2"></div>
          <span className="font-headline font-bold text-secondary text-[10px] tracking-[0.2em] bg-[#0f1624]/80 px-4 py-2 rounded-full absolute bottom-8">POSISIKAN WAJAH</span>
        </div>
        <div className="absolute bottom-6 bg-surface-container-low/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 z-20 shadow-lg">
          <Radar className="w-5 h-5 text-secondary animate-pulse" />
          <span className="font-body text-sm font-medium">Mendeteksi wajah...</span>
        </div>
      </div>
      <div className="bg-surface px-6 pt-8 pb-10 flex flex-col gap-6">
        <div className="bg-surface-container-lowest border border-secondary/20 rounded-xl p-5 shadow-ambient relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary font-bold"></div>
          <div className="flex items-center gap-3">
            <div className="bg-secondary-container/30 p-2 rounded-lg text-secondary"><MapPin className="w-5 h-5 fill-current" /></div>
            <div>
              <h3 className="font-headline font-bold text-sm">Lokasi Terdeteksi</h3>
              <p className="font-body text-sm text-on-surface-variant mt-0.5">Jl. Pemuda No. 14, Semarang</p>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-lg p-3 flex items-center gap-2 mt-2">
            <CheckCircle2 className="w-4 h-4 text-green-700" />
            <span className="font-body text-xs font-semibold text-green-700">Sesuai lokasi kerja</span>
          </div>
        </div>
        <div className="flex items-start gap-3 px-2">
          <div className="p-1"><div className="w-4 h-4 bg-gray-400 rounded flex items-center justify-center text-white"><User className="w-3 h-3" /></div></div>
          <p className="font-body text-xs text-on-surface-variant leading-relaxed">Data wajah dienkripsi dan tidak disimpan sebagai foto. Hanya digunakan untuk biometrik sesaat.</p>
        </div>
      </div>
    </main>
  </div>
);

const ClockInSuccess = () => (
  <div className="bg-surface min-h-full flex flex-col pb-24">
    <header className="flex justify-between items-center w-full px-6 py-4 sticky top-0 z-40 bg-surface">
      <div className="flex items-center gap-3">
        <img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzP29o2N-UeScnA0aTVW_RnWger3k9SIMHj76fhUTo1YikeZzzDvNh1un4McbB_xHL0779LGs5XLVn90bWEhVlOiP_FOlEB6gFGP74nUg1bM9JwRYSwS_aJSkwxP9QAaYh8mNWIwrpt18844mNroCw1cYMm14UctFJgNv7CR5vT7Fy0VQCoMuuItyynjX7KAQa4yZZLqh7fKGFtP4i2Okuqmdjsr1dbBPctEejmNXrrmmcWqjgOlcYqk3PE-ryRk0Eq6XZnaem0i5F" />
        <div className="flex flex-col">
          <span className="text-xs text-on-surface-variant">Selamat Pagi,</span>
          <span className="text-lg font-headline font-extrabold text-primary">Andi Rizky</span>
        </div>
      </div>
      <Bell className="text-on-surface-variant" />
    </header>
    <main className="px-6 py-4 flex flex-col gap-6">
      <section className="relative rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col gap-4 text-on-primary bg-gradient-to-br from-[#166534] to-[#14532d]">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        <div className="relative z-10 flex items-center gap-2 text-sm font-body font-medium bg-white/20 backdrop-blur-md w-fit px-3 py-1.5 rounded-full">
          <CheckCircle2 className="w-4 h-4" /> Absen masuk berhasil
        </div>
        <div className="relative z-10 flex flex-col mt-2">
          <span className="font-headline font-black text-6xl tracking-tighter">08:02</span>
          <span className="font-body text-sm font-medium mt-1 opacity-90">Senin, 14 April 2026</span>
        </div>
        <div className="relative z-10 mt-4 flex gap-3">
          <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md text-on-primary py-3 px-4 rounded-xl border border-white/20 flex items-center justify-center gap-2">
            <LogOut className="w-5 h-5" /> Absen Keluar
          </button>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-3">
        <StatsSmall title="Waktu Masuk" val="08:02" color="text-[#166534]" />
        <StatsSmall title="Waktu Keluar" val="—" color="text-on-surface-variant" />
        <StatsSmall title="Status" val="Tepat Waktu" color="text-[#166534]" />
      </section>
      <section className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-4 flex gap-3 items-start">
        <AlertCircle className="text-[#92400E] w-5 h-5 mt-0.5" />
        <div className="flex flex-col gap-1">
          <span className="font-headline font-bold text-[#92400E] text-sm">Isi laporan harian</span>
          <span className="font-body text-sm text-[#92400E]/80 leading-relaxed">Jangan lupa input aktivitas sebelum clock out ya!</span>
        </div>
      </section>
    </main>
    <BottomNav active="beranda" />
  </div>
);

const StatsSmall = ({ title, val, color }: { title: string; val: string; color: string }) => (
  <div className="bg-surface-container-lowest rounded-xl p-3 shadow-ambient flex flex-col gap-1 items-center justify-center border border-outline-variant/15">
    <span className="text-[10px] font-body text-on-surface-variant uppercase tracking-wider font-semibold">{title}</span>
    <span className={`font-headline font-bold text-lg ${color}`}>{val}</span>
  </div>
);

const LeaveBalance = () => (
  <div className="bg-surface text-on-surface min-h-full pb-24">
    <header className="flex justify-between items-center w-full px-6 py-4 sticky top-0 z-40 bg-surface-container-low">
      <div className="flex items-center gap-3">
        <img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB36yuDxXPLub5UQfhY2s87RMmSeOcyA5oo9rcLoKLLZxdlY1f7p0PDwL3mcOf22bNC4BHpTO4aYoT4TQZsthNSKZOjDkwc5GM4AGUjP242ft8oPTX1SE1bLjYxYPwzEM-CKsuFTu2soSFLugq8-VB2AQZ_synkcV2wZ9_S6enPnCk-3GbYJ7vdnAXU4nSieZaiixe8zOe-Taajuq249FrHBf7YBW9a9q3xW7E9xEgtZk9Ju1If14e_y7fbL6tfUjBUKmBii5UJISh1" />
        <div>
          <h1 className="text-primary font-headline font-black tracking-tighter text-xl leading-none">AbsensiApp</h1>
          <p className="font-body text-xs text-on-surface-variant mt-1">Saldo Cuti • Tahun 2026</p>
        </div>
      </div>
      <Bell className="text-primary" />
    </header>
    <main className="px-6 pt-6 flex flex-col gap-8">
      <section className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-6 text-on-primary shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary-container/20 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <p className="font-body text-xs text-primary-fixed-dim uppercase tracking-wider font-medium">Total saldo tersisa</p>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-headline text-6xl font-extrabold tracking-tighter">12</span>
            <span className="font-body text-sm text-primary-fixed-dim">hari</span>
          </div>
          <p className="font-body text-xs text-on-primary/70 mt-1">dari 14 hari jatah tahunan</p>
          <div className="w-full h-2 bg-on-primary/10 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-secondary-container w-[85%] rounded-full"></div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4">
        <StatsGridItem icon={<Calendar className="w-5 h-5" />} val="14" label="Jatah Tahunan" />
        <StatsGridItem icon={<CheckCircle2 className="w-5 h-5 text-secondary" />} val="2" label="Sudah Diambil" />
        <StatsGridItem icon={<Check className="w-5 h-5 text-amber-600" />} val="1" label="Cuti Disetujui" />
        <StatsGridItem icon={<Clock className="w-5 h-5 text-gray-500" />} val="1" label="Pending" />
      </section>
      <section>
        <h2 className="font-headline font-bold text-lg text-on-surface mb-4">Rincian Tipe Cuti</h2>
        <div className="bg-surface-container-lowest rounded-2xl shadow-ambient overflow-hidden flex flex-col">
          <LeaveListRow icon={<Umbrella className="w-5 h-5 text-on-secondary-fixed fill-current" />} bg="bg-secondary-fixed" title="Cuti Tahunan" sub="Sisa saldo reguler" val="12 / 14" />
          <LeaveListRow icon={<Stethoscope className="w-5 h-5 text-error fill-current" />} bg="bg-error-container/50" title="Cuti Sakit" sub="Dengan surat dokter" val="∞" />
          <LeaveListRow icon={<Cake className="w-5 h-5 text-on-tertiary-fixed fill-current" />} bg="bg-tertiary-fixed" title="Cuti Khusus" sub="Menikah, duka, dll" val="3" />
        </div>
      </section>
    </main>
    <BottomNav active="cuti" />
  </div>
);

const StatsGridItem = ({ icon, val, label }: { icon: React.ReactNode; val: string; label: string }) => (
  <div className="bg-surface-container-lowest rounded-xl p-4 flex flex-col gap-2 shadow-ambient">
    <div className="text-on-surface-variant opacity-70">{icon}</div>
    <div>
      <p className="font-headline font-bold text-xl">{val}</p>
      <p className="font-body text-[10px] text-on-surface-variant mb-1 font-semibold">{label}</p>
    </div>
  </div>
);

const LeaveListRow = ({ icon, bg, title, sub, val }: { icon: React.ReactNode; bg: string; title: string; sub: string; val: string }) => (
  <div className="flex items-center justify-between p-4 border-b border-surface-container-low last:border-0">
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center`}>{icon}</div>
      <div>
        <p className="font-headline font-bold text-sm">{title}</p>
        <p className="font-body text-xs text-on-surface-variant">{sub}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-headline font-bold text-base">{val}</p>
      <p className="font-body text-[10px] text-on-surface-variant font-semibold">hari</p>
    </div>
  </div>
);

const RequestLeaveForm = () => (
  <div className="bg-surface min-h-full flex flex-col pb-24">
    <header className="bg-surface sticky top-0 z-40 px-6 py-4 flex items-center gap-4 shadow-sm">
      <button className="text-on-surface-variant"><ArrowLeft /></button>
      <div>
        <h1 className="font-headline font-bold text-xl text-primary">Pengajuan Cuti</h1>
        <p className="font-label text-sm text-on-surface-variant">Saldo: 12 hari tersisa</p>
      </div>
    </header>
    <main className="flex-1 px-6 py-8 space-y-8">
      <div className="space-y-2">
        <label className="font-label text-sm font-semibold">Jenis Cuti</label>
        <div className="relative">
          <select className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-4 pr-10 appearance-none font-body text-sm">
            <option>Tahunan</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="font-label text-sm font-semibold">Tanggal Mulai</label>
          <div className="bg-surface-container-low rounded-xl px-4 py-4 font-body text-sm text-on-surface-variant uppercase">April 15, 2026</div>
        </div>
        <div className="space-y-2">
          <label className="font-label text-sm font-semibold">Tanggal Selesai</label>
          <div className="bg-surface-container-low rounded-xl px-4 py-4 font-body text-sm text-on-surface-variant uppercase">April 17, 2026</div>
        </div>
      </div>
      <div className="bg-secondary-fixed text-on-secondary-fixed rounded-xl p-4 flex items-center gap-3">
        <CalendarDays className="w-5 h-5" />
        <p className="font-body text-sm font-medium">Durasi: 3 hari kerja · Sisa: 9 hari</p>
      </div>
      <div className="space-y-2">
        <label className="font-label text-sm font-semibold">Keterangan</label>
        <textarea className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 resize-none h-32" placeholder="Alasan pengajuan cuti..." />
      </div>
      <div className="space-y-2">
        <label className="font-label text-sm font-semibold">Upload Dokumen (Opsional)</label>
        <div className="border-2 border-dashed border-outline-variant/50 rounded-xl p-8 flex flex-col items-center justify-center gap-2 bg-surface-container-low/50">
          <Paperclip className="text-on-surface-variant w-8 h-8" />
          <p className="font-body text-xs text-on-surface-variant">Tap untuk upload dokumen</p>
        </div>
      </div>
      <button className="w-full bg-primary text-on-primary font-headline font-bold text-lg py-4 rounded-xl shadow-lg mt-10">Kirim Pengajuan</button>
    </main>
  </div>
);

const LeaveStatusHistory = () => (
  <div className="bg-surface min-h-full pb-24">
    <header className="flex justify-between items-center w-full px-6 py-4 sticky top-0 z-40 bg-surface-container-low">
      <div className="flex items-center gap-4">
        <ArrowLeft className="text-on-surface-variant" />
        <div>
          <h1 className="font-headline font-bold text-xl text-primary">Status Cuti</h1>
          <p className="text-sm font-label text-on-surface-variant">Riwayat pengajuan</p>
        </div>
      </div>
      <Bell className="text-on-surface-variant" />
    </header>
    <main className="px-6 py-6 space-y-6">
      <div className="flex overflow-x-auto gap-3 pb-2 -mx-6 px-6 hide-scrollbar">
        <button className="px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white">Semua</button>
        <button className="px-4 py-2 rounded-xl text-sm font-medium bg-surface-container-low text-on-surface-variant">Pending</button>
        <button className="px-4 py-2 rounded-xl text-sm font-medium bg-surface-container-low text-on-surface-variant">Disetujui</button>
      </div>
      <StatusCard 
        title="Cuti Tahunan" 
        date="15–17 April 2026 · 3 hari" 
        status="Menunggu" 
        accent="bg-tertiary-fixed"
        steps={[
          { title: 'Supervisor', sub: 'Disetujui 14 Apr, 09:12', done: true },
          { title: 'HRD', sub: 'Sedang diproses', current: true }
        ]}
      />
      <StatusCard 
        title="Cuti Sakit" 
        date="3 Maret 2026 · 1 hari" 
        status="Disetujui" 
        statusBg="bg-secondary-fixed/50"
        accent="bg-secondary-fixed"
        steps={[
          { title: 'Supervisor', sub: 'Disetujui 1 Mar, 10:05', done: true },
          { title: 'HRD', sub: 'Disetujui 2 Mar, 14:20', done: true }
        ]}
      />
    </main>
    <BottomNav active="cuti" />
  </div>
);

const StatusCard = ({ title, date, status, accent, steps, statusBg = "bg-tertiary-fixed/20" }: any) => (
  <div className="bg-surface-container-lowest rounded-xl p-5 shadow-ambient relative overflow-hidden">
    <div className={`absolute top-0 left-0 w-1 h-full ${accent}`}></div>
    <div className="flex justify-between items-start pl-2">
      <div>
        <h2 className="font-headline font-bold text-lg text-primary">{title}</h2>
        <p className="text-sm text-on-surface-variant flex items-center gap-1 mt-1"><Calendar className="w-3.5 h-3.5" /> {date}</p>
      </div>
      <span className={`px-3 py-1 ${statusBg} rounded-full text-[10px] font-bold uppercase tracking-widest`}>{status}</span>
    </div>
    <div className="pl-2 mt-4 space-y-4 relative before:absolute before:inset-y-2 before:left-3.5 before:w-0.5 before:bg-outline-variant/20">
      {steps.map((step: any, i: number) => (
        <div key={i} className="flex gap-4 relative z-10">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${step.done ? 'bg-secondary-fixed text-on-secondary-container' : step.current ? 'bg-primary text-white' : 'bg-outline-variant text-white'}`}>
            {step.done ? <Check className="w-4 h-4 fill-current" /> : step.current ? <MoreHorizontal className="w-4 h-4" /> : <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
          </div>
          <div>
            <p className="text-sm font-bold">{step.title}</p>
            <p className={`text-xs text-on-surface-variant ${step.current ? 'italic' : ''}`}>{step.sub}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const DailyReport = () => (
  <div className="bg-surface min-h-full pb-24">
    <header className="flex justify-between items-center w-full px-6 py-4 sticky top-0 z-40 bg-surface-container-low">
      <div className="flex items-center gap-3">
        <img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXX1BUumuW5hD57xAwz3Q9Pf5rvjIu8Hmme08cu9YamoxZw7QbpFZUcO6roOLiR-rqgfqN2zSx_PZpHp2AlENZ4FXeoHsFkCcvRfuelqvHJsyKjLji0iQwNUDRQrzKmSumk5DLKta00cUGzvAqpxqitAppEXyYFy326rJ8ef-NTmMhsjL-eocCoPC6DLlfKeeoD_fOy4U6GkRHCqUAmEuqC6Bo04-E7sFhmwba68R1w9SteP_WHFEEvwGFrhVbsB_rq6Tghi8dOrQQ" />
        <div>
          <h1 className="text-primary font-manrope font-bold text-xl tracking-tight">Laporan Harian</h1>
          <p className="text-xs text-on-surface-variant">Senin, 14 April 2026</p>
        </div>
      </div>
      <Bell className="text-on-surface-variant" />
    </header>
    <main className="px-6 py-6 space-y-8">
      <div className="bg-surface-container-lowest rounded-xl p-4 shadow-ambient">
        <div className="relative w-full h-40 rounded-lg overflow-hidden bg-surface-container-low mb-4 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#005fac_1px,transparent_1px),linear-gradient(to_bottom,#005fac_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          <div className="relative text-error flex items-center justify-center h-full">
            <div className="w-8 h-8 bg-error/30 rounded-full animate-ping absolute"></div>
            <MapPin className="w-8 h-8 fill-current relative" />
          </div>
        </div>
        <div className="flex items-start gap-2 text-sm text-on-surface-variant"><MapPin className="w-4 h-4 text-primary mt-0.5" /> Jl. Merdeka 22, Semarang Tengah</div>
      </div>
      <div className="space-y-6">
        <div className="relative bg-surface-container-low rounded-xl p-4 pt-8">
          <label className="absolute top-3 left-4 text-secondary text-[10px] font-bold">Aktivitas yang Dikerjakan</label>
          <p className="text-on-surface font-body text-sm leading-relaxed">Kunjungan ke 3 client di area Semarang Tengah dan follow up dokumen penagihan...</p>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-6 shadow-ambient">
          <h2 className="font-headline font-bold text-lg text-primary mb-4">Target Hari Ini</h2>
          <div className="space-y-4">
            <CheckItem done label="Kunjungan 3 client" />
            <CheckItem done label="Kirim penawaran harga" />
            <CheckItem label="Follow-up prospect baru" pending />
          </div>
        </div>
      </div>
      <button className="w-full bg-primary text-on-primary font-headline font-bold py-4 rounded-xl shadow-lg mt-4">Kirim Laporan</button>
    </main>
    <BottomNav active="laporan" />
  </div>
);

const CheckItem = ({ done, label, pending }: { done?: boolean; label: string; pending?: boolean }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      {done ? <CheckCircle2 className="w-5 h-5 text-secondary-container fill-current" /> : <div className="w-5 h-5 rounded-full border-2 border-outline-variant"></div>}
      <span className={`font-body text-sm ${done ? 'line-through opacity-50' : 'text-on-surface'}`}>{label}</span>
    </div>
    <span className={`px-2 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-wider ${done ? 'bg-secondary-fixed text-on-secondary-fixed' : 'bg-tertiary-fixed text-on-tertiary-fixed'}`}>
      {done ? 'Selesai' : 'Pending'}
    </span>
  </div>
);

const NotificationsScreen = () => (
  <div className="bg-surface min-h-full flex flex-col pb-24">
    <header className="flex justify-between items-center w-full px-6 py-4 bg-surface-container-low">
      <div className="flex items-center gap-4">
        <ArrowLeft className="text-on-surface-variant" />
        <h1 className="font-headline font-bold text-xl text-primary">Notifikasi</h1>
      </div>
      <button className="text-secondary font-semibold text-sm">Tandai dibaca</button>
    </header>
    <main className="px-4 py-6 space-y-3">
      <NotifItem active title="Pengajuan cuti tahunan Anda telah disetujui HRD untuk tanggal 15–17 April 2026." time="Hari ini · 10:24" icon={<CheckCircle2 className="w-5 h-5 text-green-600 fill-current" />} />
      <NotifItem active title="Pengingat: Jangan lupa absen masuk hari ini sebelum jam 08:15." time="Hari ini · 07:45" icon={<Clock className="w-5 h-5 text-amber-500 fill-current" />} />
      <NotifItem title="Informasi: Saldo cuti tahunan Anda tinggal 9 hari lagi." time="Kemarin · 08:00" icon={<ClipboardList className="w-5 h-5 text-secondary fill-current" />} />
      <NotifItem title="Catatan: Anda terlambat 15 menit pada hari Kamis, 10 April 2026." time="10 Apr · 09:05" icon={<AlertTriangle className="w-5 h-5 text-amber-500 fill-current" />} />
    </main>
  </div>
);

const NotifItem = ({ active, title, time, icon }: any) => (
  <div className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${active ? 'bg-secondary-fixed/30 border-l-4 border-secondary' : 'bg-surface-container-lowest pl-7'}`}>
    {active && <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />}
    <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center flex-shrink-0 shadow-sm">{icon}</div>
    <div className="flex-1 min-w-0">
      <p className={`font-body text-sm leading-snug ${active ? 'font-bold' : 'text-on-surface-variant'}`}>{title}</p>
      <p className="font-label text-xs text-on-surface-variant mt-1.5">{time}</p>
    </div>
  </div>
);

const BottomNav = ({ active }: { active: string }) => (
  <nav className="absolute bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-3 bg-surface/80 backdrop-blur-xl rounded-t-3xl shadow-ambient border-t border-outline-variant/10">
    <NavItem icon={<HomeIcon className="w-6 h-6" />} label="Beranda" isActive={active === 'beranda'} />
    <NavItem icon={<CalendarDays className="w-6 h-6" />} label="Cuti" isActive={active === 'cuti'} />
    <NavItem icon={<FileEdit className="w-6 h-6" />} label="Laporan" isActive={active === 'laporan'} />
    <NavItem icon={<User className="w-6 h-6" />} label="Profil" isActive={active === 'profil'} />
  </nav>
);

const NavItem = ({ icon, label, isActive }: any) => (
  <div className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all ${isActive ? 'bg-primary text-white scale-90' : 'text-on-surface-variant opacity-60'}`}>
    <div className={`mb-1 relative`}>
      {React.cloneElement(icon, { fill: isActive ? 'currentColor' : 'none' })}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
  </div>
);

const AdminLeaveApproval = () => (
  <div className="flex h-full">
    <AdminSidebar active="leave" />
    <div className="flex-1 flex flex-col bg-surface-container-low overflow-hidden">
      <AdminHeader />
      <main className="p-4 md:p-8 overflow-auto flex flex-col gap-6 md:gap-8">
        <h2 className="text-xl md:text-2xl font-headline font-bold text-primary">Persetujuan Cuti</h2>
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
           <div className="flex-1 bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-ambient border-l-4 border-amber-400">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant">Detail Pengajuan</h3>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase">Menunggu</span>
              </div>
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-fixed flex items-center justify-center font-bold">AS</div>
                 <div>
                    <h4 className="font-bold text-base md:text-lg text-primary">Ahmad Sutrisno</h4>
                    <p className="text-[10px] md:text-xs text-on-surface-variant uppercase">Back Office • HQ Jakarta</p>
                 </div>
              </div>
              <p className="text-xs md:text-sm leading-relaxed text-on-surface-variant mb-6 md:mb-8 bg-surface p-4 rounded-xl italic">
                "Keperluan keluarga di luar kota. Pekerjaan mendesak sudah diserahterimakan kepada Bpk. Budi Santoso."
              </p>
              <div className="flex gap-3 md:gap-4">
                 <button className="flex-1 bg-primary text-on-primary py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm transition-transform active:scale-95">Setujui</button>
                 <button className="flex-1 border border-error text-error py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm">Tolak</button>
              </div>
           </div>
           <div className="w-full lg:w-80 xl:w-96 bg-surface-container-lowest rounded-2xl p-6 shadow-ambient">
              <h4 className="font-bold mb-4">Daftar Antrean</h4>
              <div className="space-y-4">
                 <div className="p-3 bg-primary/5 rounded-xl border border-primary/20">
                    <p className="font-bold text-sm">Ahmad Sutrisno</p>
                    <p className="text-[10px] text-on-surface-variant">Tahunan • 3 Hari</p>
                 </div>
                 <div className="p-3 hover:bg-surface transition-colors cursor-pointer rounded-xl">
                    <p className="font-bold text-sm">Siti Maimunah</p>
                    <p className="text-[10px] text-on-surface-variant">Sakit • 1 Hari</p>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  </div>
);

// --- MAIN SHOWCASE COMPONENT ---

export default function App() {
  return (
    <div className="min-h-screen bg-surface-container-low text-on-surface selection:bg-secondary/20 selection:text-secondary">
      {/* Introduction Header */}
      <header className="bg-primary text-on-primary py-16 md:py-24 px-6 md:px-8 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 md:mb-8 backdrop-blur-sm border border-white/10">
            <Fingerprint className="w-4 h-4" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-80 text-center">Dokumentasi Sistem Absensi</span>
          </div>
          <h1 className="font-headline font-black text-4xl md:text-8xl tracking-tight leading-[1.1] md:leading-none mb-6 max-w-4xl">
            Sistem Absensi & <span className="text-secondary-fixed-dim">Monitoring Karyawan</span>
          </h1>
          <p className="font-body text-lg md:text-2xl opacity-70 max-w-3xl leading-relaxed">
            Blueprint alur bisnis dan dokumentasi teknis sistem absensi terintegrasi untuk 21 lokasi perusahaan.
          </p>
        </div>
      </header>

      {/* Main Content Showcase */}
      <main className="max-w-[1400px] mx-auto px-4 md:px-8 py-16 md:py-24 space-y-32 md:space-y-64">
        
        {/* Section 1: Alur Absensi Harian */}
        <section>
          <SectionTitle title="1. Alur Absensi Harian" subtitle="Alur Clock In dan Clock Out menggunakan verifikasi biometrik dan validasi lokasi GPS." />
          
          <div className="space-y-32">
            {/* 1.1 Clock In */}
            <div className="space-y-16">
              <h3 className="font-headline font-bold text-2xl text-primary border-l-4 border-secondary pl-4">1.1 Alur Clock In</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <FlowStep number="1" title="Buka Aplikasi" />
                <FlowStep number="2" title="Verifikasi Wajah" />
                <FlowStep number="3" title="Cek GPS" />
                <FlowStep number="4" title="Simpan & Notif" />
              </div>
              
              <div className="flex flex-wrap justify-center items-start gap-12 md:gap-24">
                <DeviceFrame title="Face Recognition">
                  <FaceVerification />
                </DeviceFrame>
                <div className="max-w-xl space-y-6">
                  <BusinessRuleCard 
                    rules={[
                      { step: "1", desc: "Konfigurasi jam kerja server-side. Tombol nonaktif di luar jam." },
                      { step: "2", desc: "Data registrasi biometrik dienkripsi (bukan foto)." },
                      { step: "3", desc: "Validasi radius zona kerja per lokasi." },
                      { step: "4", desc: "Push notification real-time ke sistem & karyawan." }
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* 1.2 Clock Out */}
            <div className="space-y-16">
              <h3 className="font-headline font-bold text-2xl text-primary border-l-4 border-secondary pl-4">1.2 Alur Clock Out</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <FlowStep number="1" title="Laporan Kerja" />
                <FlowStep number="2" title="Verifikasi Wajah" />
                <FlowStep number="3" title="Cek GPS" />
                <FlowStep number="4" title="Finish" />
              </div>
              
              <div className="flex flex-wrap justify-center items-start gap-12 md:gap-24">
                <DeviceFrame title="Daily Reporting">
                  <DailyReport />
                </DeviceFrame>
                <div className="max-w-xl space-y-6">
                  <BusinessRuleCard 
                    rules={[
                      { step: "1", desc: "Input aktivitas harian dan status target (mandatory/opsional)." },
                      { step: "2", desc: "Sistem verifikasi wajah ulang untuk keamanan." },
                      { step: "4", desc: "Auto clock out jika melewati batas jam kerja." }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Alur Cuti */}
        <section>
          <SectionTitle title="2. Pengajuan & Persetujuan Cuti" subtitle="Proses manajemen cuti terintegrasi dengan validasi saldo otomatis." />
          
          <div className="space-y-24">
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              <DeviceFrame title="Sisa Saldo Cuti">
                <LeaveBalance />
              </DeviceFrame>
              <div className="max-w-xl flex flex-col justify-center gap-8">
                <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-ambient">
                  <h4 className="font-headline font-bold text-2xl mb-4 text-primary">Validasi & Approval Tier</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Sistem otomatis menghitung hari kerja dan memvalidasi sisa saldo sebelum pengajuan dikirim ke Supervisor.
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <FlowTag icon={<Check />} text="Auto-reject jika saldo tidak cukup" />
                    <FlowTag icon={<User />} text="Tier 1: Approval Supervisor" />
                    <FlowTag icon={<Fingerprint />} text="Tier 2: Approval HRD" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <BrowserFrame title="Admin Panel: Leave Approval">
                <AdminLeaveApproval />
              </BrowserFrame>
            </div>
          </div>
        </section>

        {/* Section 3 & 4: GPS & Reporting */}
        <section>
          <SectionTitle title="3 & 4. Monitoring & Accountability" subtitle="Pelacakan lokasi real-time untuk karyawan lapangan dan pemantauan target harian." />
          
          <div className="space-y-32">
            <div className="flex flex-col items-center">
              <BrowserFrame title="Live GPS Tracking Center">
                <AdminGPSMonitoring />
              </BrowserFrame>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-4">
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-ambient border border-outline-variant/10">
                  <h5 className="font-bold text-primary mb-3">Alert Conditions (L1, L2)</h5>
                  <ul className="text-sm text-on-surface-variant space-y-2 list-disc pl-5">
                    <li>Push notif jika karyawan di luar zona kerja.</li>
                    <li>Notif sinyal GPS terputus &gt; X menit.</li>
                    <li>Alert ketidakhadiran melewati jam toleransi.</li>
                  </ul>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-ambient border border-outline-variant/10">
                  <h5 className="font-bold text-primary mb-3">Target Tracking (L3-L6)</h5>
                  <ul className="text-sm text-on-surface-variant space-y-2 list-disc pl-5">
                    <li>Siapa penetap target (Supervisor/HR)?</li>
                    <li>Periode target (Harian/Mingguan/Bulanan)?</li>
                    <li>Jenis target (Kunjungan/Sales/Lainnya).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Hak Akses */}
        <section>
          <SectionTitle title="6. Aturan Hak Akses (RBAC)" subtitle="Matriks wewenang untuk 4 level pengguna utama." />
          <div className="max-w-5xl mx-auto bg-surface-container-lowest rounded-3xl shadow-ambient overflow-hidden border border-outline-variant/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#0F1F3D] text-white">
                  <tr>
                    <th className="p-6 text-sm font-bold uppercase tracking-wider">Fitur / Data</th>
                    <th className="p-6 text-center text-xs">Admin</th>
                    <th className="p-6 text-center text-xs">Manajer</th>
                    <th className="p-6 text-center text-xs">HRD</th>
                    <th className="p-6 text-center text-xs">Karyawan</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-on-surface">
                  <AccessRow feature="Clock in/out sendiri" roles={['no', 'yes', 'yes', 'yes']} />
                  <AccessRow feature="Lihat absensi tim/semua" roles={['yes', 'yes', 'yes', 'no']} />
                  <AccessRow feature="Koreksi data absensi" roles={['yes', 'no', 'yes', 'no']} />
                  <AccessRow feature="Monitor GPS Lapangan" roles={['yes', 'yes', 'yes', 'no']} />
                  <AccessRow feature="Approve Cuti" roles={['no', 'yes', 'yes', 'no']} />
                  <AccessRow feature="Kelola Data Karyawan" roles={['yes', 'no', 'yes', 'no']} />
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-16 md:py-24 text-center border-t border-outline-variant/10 px-6">
        <div className="max-w-7xl mx-auto">
          <Fingerprint className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-6" />
          <p className="font-headline font-bold text-xl md:text-2xl mb-2 text-primary">AbsensiApp Project Discovery</p>
          <p className="text-on-surface-variant text-sm md:text-base italic mb-8">Business Flow & Specs Documentation · April 2026</p>
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 max-w-xs md:max-w-none mx-auto">
            <button className="border border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary/5 text-sm md:text-base">Back to Top</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

const FlowStep = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
      {number}
    </div>
    <span className="font-headline font-bold text-lg text-on-surface">{title}</span>
    <ChevronRight className="text-outline-variant hidden md:block" />
  </div>
);

const BusinessRuleCard = ({ rules }: { rules: { step: string; desc: string }[] }) => (
  <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-ambient border border-outline-variant/10 w-full">
    <h5 className="font-headline font-bold text-lg mb-6 text-primary">Aturan & Kondisi</h5>
    <div className="space-y-4">
      {rules.map((rule, i) => (
        <div key={i} className="flex gap-4">
          <span className="font-bold text-secondary text-sm">{rule.step}.</span>
          <p className="text-sm text-on-surface-variant leading-relaxed">{rule.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const FlowTag = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant bg-surface p-2 rounded-lg border border-outline-variant/10">
    <div className="text-secondary">{icon}</div>
    {text}
  </div>
);

const AccessRow = ({ feature, roles }: { feature: string; roles: string[] }) => (
  <tr className="border-b border-outline-variant/5 hover:bg-surface-container-low transition-colors">
    <td className="p-6 font-bold text-on-surface">{feature}</td>
    {roles.map((role, i) => (
      <td key={i} className="p-6 text-center">
        {role === 'yes' ? (
          <Check className="w-5 h-5 text-green-600 mx-auto" />
        ) : role === 'no' ? (
          <div className="w-5 h-5 border-2 border-outline-variant rounded-full mx-auto opacity-20"></div>
        ) : (
          <span className="text-xs text-outline">-</span>
        )}
      </td>
    ))}
  </tr>
);


const FeatureCard = ({ title, text }: { title: string; text: string }) => (
  <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-ambient border border-outline-variant/10">
    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
      <CheckCircle2 className="w-5 h-5" />
    </div>
    <h4 className="font-headline font-bold text-xl mb-2">{title}</h4>
    <p className="text-on-surface-variant text-sm leading-relaxed">{text}</p>
  </div>
);

const ColorBox = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-3 bg-white/5 p-2 pr-4 rounded-full border border-white/10">
    <div className="w-8 h-8 rounded-full border border-white/20" style={{ backgroundColor: color }}></div>
    <span className="text-xs font-bold uppercase tracking-wider">{label}</span>
  </div>
);

const AdminFeatureMini = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-sm">
    <div className="mb-4">{icon}</div>
    <h5 className="font-bold text-sm tracking-tight">{title}</h5>
  </div>
);
