export default function Blog( {params}) {
    console.log(params);
    return (
        <div>
            Blog Sayfası : {params.blog}
        </div>
    );
}

