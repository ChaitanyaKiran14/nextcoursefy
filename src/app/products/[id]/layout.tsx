

export default function ProductLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <div >
      {children}
    <div>
      <h1>Layout</h1>
    </div>
    </div>
  );
}
