const Layout = ({ children }) => {
  return (
    <main className="bg-[#FCF8F6] h-screen">
      <div className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
        {children}
      </div>
    </main>
  );
};

export default Layout;
