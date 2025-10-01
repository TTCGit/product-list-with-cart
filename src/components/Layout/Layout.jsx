const Layout = ({ children }) => {
  return (
    <main className="bg-egg min-h-screen">
      <div className="container px-20 md:px-0  mx-auto py-40 grid grid-cols-1  xl:grid-cols-[2fr_1fr] gap-8">
        {children}
      </div>
    </main>
  );
};

export default Layout;
