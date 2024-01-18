export default function HakkimizdaLayout({children,...rest}) {
    console.log(rest);
    return (
        <div>
            <h1>Hakkımızda layoutunda geliyorum</h1>
            <div>{children}</div>
        </div>
    );
}

 