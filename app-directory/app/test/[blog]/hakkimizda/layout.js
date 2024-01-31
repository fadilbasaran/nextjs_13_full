export default function HakkimizdaLayout({children,...rest}) {
    console.log(rest);
    return (
        <div>
            <h3>Hakkımızda layoutunda geliyorum</h3>
            <div>{children}</div>
        </div>
    );
}

 