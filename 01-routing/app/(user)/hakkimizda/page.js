import Link from "next/link";

export default function Hakkimizda() {
    return <div>
        <div>
            Hakkımızda sayfası
        </div>
        <br />
        <Link href={"/"}>Anasayfa</Link>
        <Link href={
            {hash:"hashhhahsdahkhdaş",
                pathname: "/",query:{
                    name:"Next.js",
                    surName:"Ali"
                }

            }}>Anasayfa</Link>
    </div>;
}