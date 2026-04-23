export default function Footer() {
  return (
    <footer className="bg-[#dadddf] dark:bg-zinc-900 w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center mt-20">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-7xl mx-auto">
        <div className="text-lg font-bold text-[#2c2f30] dark:text-white font-headline">
          TeeUp Charity
        </div>
        <div className="flex gap-8 text-sm font-label text-[#2c2f30] dark:text-[#dadddf]">
          <a href="#" className="hover:opacity-80 transition-all font-body">Privacy Policy</a>
          <a href="#" className="hover:opacity-80 transition-all font-body">Terms of Service</a>
          <a href="#" className="hover:opacity-80 transition-all font-body">Impact Report</a>
          <a href="#" className="hover:opacity-80 transition-all font-body">Contact</a>
        </div>
        <div className="md:ml-auto text-sm text-[#2c2f30] dark:text-[#dadddf] opacity-60 font-body">
          © 2024 TeeUp Charity. Kinetic Impact.
        </div>
      </div>
    </footer>
  );
}
