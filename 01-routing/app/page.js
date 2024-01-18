import Link from "next/link";
export default function Home() {
  return (

    <div >
      <Link href={"/hakkimizda"}>Hakkımızda</Link>
      <br />
      <Link href={"/docs/post-1"}>Post1</Link>
      <br />
      <Link href={"/docs/post-1/post-2"}>Post2</Link>
      <br />
      <Link 
      target="_blank"
      className="test"
      href={{
        pathname:"/hakkimizda",
        query:{
          name:"Next.js",
          surName:"ff"
        },
        
      }}>Hakkımızda Quary</Link>
    </div>
  )
}
