export default function Blog( {params}) {
    console.log(params);
    return (
        <div>
           Post : {params.blog}
        </div>
    );
}

