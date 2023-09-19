import BasicToolbarComponent from "~/components/BasicToolbar";
import Image from "next/image";
import {
    Card,
    CardHeader,
    CardBody,
  } from "@material-tailwind/react";
import Link from "next/link";



const ArticlesPage = () =>{
    const articles = [
        {
            slug: "pentingnya-peran-orang-tua",
            title: 'Pentingnya Peran Orang Tua dalam Perkembangan Anak',
            category: "kesehatan anak",
            image: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/05/12033113/Kesehatan-Mental-Orangtua-Berpengaruh-pada-Anak-e1652767408316.jpg",
            content: `
              <section class="spacing-px-content break-words prose">
                <p><span>Teh memang merupakan salah satu minuman yang sering dikonsumsi sehari-hari, baik anak maupun orang dewasa. Terlebih Indonesia berada di urutan ke-22 dari 54 negara dengan konsumsi teh terbanyak.</span></p>
              </section>
            `,
            author: 'Nama Penulis',
            date: '12 September 2023',
          },
          {
            slug: "cara-mengatasi-masalah",
            title: 'Cara Mengatasi Masalah Picky Eater pada Anak',
            image: 'https://primayahospital.b-cdn.net/wp-content/uploads/2022/11/Picky-Eater-Tips-Menghadapi-dan-Mencegahnya.jpg',
            category: "kesehatan anak",
            content: `
              <section class="spacing-px-content break-words prose">
                <p><span>Beberapa anak mungkin memiliki masalah picky eater, di mana mereka sulit makan makanan tertentu. Artikel ini memberikan tips tentang cara mengatasi masalah tersebut dan memastikan anak mendapatkan nutrisi yang cukup.</span></p>
              </section>
            `,
            author: 'Nama Penulis Lainnya',
            date: '15 September 2023',
          },
      ];
      
    return(
        <>
            <BasicToolbarComponent backButtonHref="/" title="Artikel Tentang Anak"></BasicToolbarComponent>
            <main className="min-h-fit bg-white">
                <div className="px-6 pt-2 pb-6 min-h-[calc(100vh-50px)] flex flex-col">
                    {
                        articles.map((item, index) => (
                        <Link key={index} href={{
                            pathname: `/articles/${item.slug}`
                        }}>                            
                        <Card  key={index} shadow={false} className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0">
                                <Image
                                width={90}
                                height={50}
                                src={item.image ||"/assets/img/header.jpg"}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="p-0">
                                <p className="mb-1 font-regular text-black">{item.title}</p>
                                <div className="leading-none">
                                <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">{item.category}</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Link>
                        ))}
                </div>
            </main>
        </>
    )
}

export default ArticlesPage;