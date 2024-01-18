
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <headers>Headers</headers>
        {children}
        
        <footer>Footer</footer>
      </body>
    </html>
  );
}
