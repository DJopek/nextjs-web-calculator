interface LayoutProps {
    children: React.ReactNode;
  }
  
const Layout = ( { children }: LayoutProps) => {
  return (
    <section className="m-0 flex flex-col font-inter w-full items-center min-h-[100vh]">
      {children}
    </section>
  );
}

export default Layout;