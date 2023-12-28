export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <span>Hello World!</span>
      {children}
    </div>
  );
}
