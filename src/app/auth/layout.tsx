export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className='no-scrollbar bg-cover bg-center bg-no-repeat text-white opacity-90'
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        {children}
      </div>
    </div>
  );
}
