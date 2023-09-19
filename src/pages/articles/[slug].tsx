import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BasicToolbarComponent from "~/components/BasicToolbar";

export default function DetailArticle() {
    const articles = [
        {
          slug: "pentingnya-peran-orang-tua",
          title: 'Pentingnya Peran Orang Tua dalam Perkembangan Anak',
          category: "kesehatan anak",
          image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/05/12033113/Kesehatan-Mental-Orangtua-Berpengaruh-pada-Anak-e1652767408316.jpg",
          content: `
            <section class="py-2 px-6 break-words prose">
              <p><span>Teh memang merupakan salah satu minuman yang sering dikonsumsi sehari-hari, baik anak maupun orang dewasa. Terlebih Indonesia berada di urutan ke-22 dari 54 negara dengan konsumsi teh terbanyak.</span></p>
            </section>
          `,
          author: 'Tim SahabatQ',
          review: 'dr. Ganda Ilmana, Sp.A',
          date: '12 September 2023',
        },
        {
          slug: "cara-mengatasi-masalah",
          title: 'Cara Mengatasi Masalah Picky Eater pada Anak',
          image: 'https://primayahospital.b-cdn.net/wp-content/uploads/2022/11/Picky-Eater-Tips-Menghadapi-dan-Mencegahnya.jpg',
          category: "kesehatan anak",
          content: `
            <section class="py-2 px-6 break-words prose">
              <p><span>Beberapa anak mungkin memiliki masalah picky eater, di mana mereka sulit makan makanan tertentu. Artikel ini memberikan tips tentang cara mengatasi masalah tersebut dan memastikan anak mendapatkan nutrisi yang cukup.</span></p>
            </section>
          `,
          author: 'Tim SahabatQ',
          review: 'dr. Ganda Ilmana, Sp.A',
          date: '15 September 2023',
        },
      ];
    const router = useRouter();
    const [article, setArticle] = useState<article>();
    useEffect(()=>{
        if (router.query.slug) {
            const obj = articles.find(o=>o.slug == router.query.slug as string);
            setArticle(obj)
        }
    }, [router.query.slug])
    if (!article) {
        return(
            <div>
                loading
            </div>
        )
    }
    return(
        <>
            <BasicToolbarComponent backButtonHref="/" image={true} />
            <article>
                <section className="bg-[#E1E1E1] pt-[56.25%] relative w-full">
                    <Image className="absolute h-full w-full inset-0 object-cover object-center" alt="head" src={article.image} width={414} height={233}></Image>
                </section>
                <section className="py-2 px-6">
                    <nav className="text-[10px] tracking-[0.2px] text-[#121212]">
                        <ol className="flex items-center space-x-2">
                            <li className="whitespace-nowrap overflow-hidden text-ellipsis">
                                <Link href={"/"}>Home</Link>
                                <span className="pl-2">{">"}</span>
                            </li>
                            <li className="whitespace-nowrap overflow-hidden text-ellipsis">
                                <Link href={"/"}>Artikel</Link>
                                <span className="pl-2">{">"}</span>
                            </li>
                            <li className="whitespace-nowrap overflow-hidden text-ellipsis">
                                <Link href={"/"}>Kesehatan Anak</Link>
                                <span className="pl-2">{">"}</span>
                            </li>
                            <li className="whitespace-nowrap overflow-hidden text-ellipsis">
                                <Link href={"/"}>Nutrisi</Link>
                            </li>
                        </ol>
                    </nav>
                    <div className="mt-2">
                        <time dateTime="2023-09-11T11:06:00.000Z" className="text-[#959393] font-regular">{article.date}</time>
                        <h1 className="text-[1.125rem] tracking-normal font-bold text-[#121212]">{article.title}</h1>
                    </div>
                    <ul className="text-[#959393] mt-1 font-regular">
                        <li>{`Ditulis Oleh ${article.author}`}</li>
                        <li>{`Ditinjau Oleh ${article.review}`}</li>
                    </ul>
                </section>
                <div dangerouslySetInnerHTML={{__html: article.content}} />
            </article>
        </>
    )
}

export interface article{
        slug: string;
        title: string;
        category: string;
        image: string;
        content: string;
        author: string;
        review: string;
        date: string;
}