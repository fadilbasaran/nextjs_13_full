
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Root Layout</title>
      </head>

      <body>
        <headers>Headers</headers>
        {children}
        
        <footer>Footer</footer>
      </body>
    </html>
  );
}
