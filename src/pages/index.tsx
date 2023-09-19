import Link from "next/link";
import {
  BookmarkIcon,
  ChevronRightIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  CardBody,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Carousel,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import ReviewComponent from "~/components/Review";
import AppMenuComponent from "~/components/AppMenu";
import BottomNavComponent from "~/components/BottomNav";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import 'swiper/css';
import { api } from "~/utils/api";
import { UserUpdateSchema, UserUpdateSchemaInput } from "~/server/schema/user.schema";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const [modal, setModal] = useState(false);
  const searchParams = useSearchParams()
  const data = searchParams.get("phone")
  const session = useSession();
  const router = useRouter()
  useEffect(()=>{
    if (data === "true" && session.data?.user) {
      
        setModal(true)
    }
  }, [data])


  const methods = useForm<UserUpdateSchemaInput>({
    resolver: zodResolver(UserUpdateSchema),
  });
  const {
    reset,
    register,
    setValue,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
  } = methods;


  const { isLoading, mutate: updatePhone } = api.user.updateUserPhone.useMutation({
    onSuccess(){
      setModal(false)
      router.push("/auth/account")
      signOut()
    },
    onError(error){
      console.log(error)
    }
  });
  const onSubmitHandler: SubmitHandler<UserUpdateSchemaInput> = (values) => {
    values.uid = session.data?.user.id!
    updatePhone(values)
    
  };

  return (
    <>
      {/* <HeaderComponent/> */}
      <main className="min-h-fit bg-white">
        <section id="hero">
          <Image
            className="w-full object-cover"
            width={500}
            height={281}
            src="/assets/img/header.jpg"
            alt="Tentang Anak Hero Image"
          />
        </section>
        <AppMenuComponent />
        <section className="p-7">
        <Swiper
            spaceBetween={10}
            slidesPerView={1.5}
            initialSlide={0}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Link
                href={"/test"}
                className="flex items-center font-regular text-[#DE5A29]"
              >
                <img
                  src="/assets/img/1.jpg"
                  alt="image 1"
                  className="h-full w-full object-cover rounded-3xl"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link
              href={"https://wa.me/6288228149133"}
              className="flex items-center font-regular text-[#DE5A29]"
            >
                <img
                  src="/assets/img/2.jpg"
                  alt="image 2"
                  className="h-full w-full object-cover rounded-3xl"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link
                href={"https://kursuscoding.com"}
                className="flex items-center font-regular text-[#DE5A29]"
              >
                <img
                  src="/assets/img/3.jpg"
                  alt="image 3"
                  className="h-full w-full object-cover rounded-3xl"
                />
              </Link>
              </SwiperSlide>
          </Swiper>
          {/* <Carousel className="rounded-xl" autoplay autoplayDelay={3000} loop>
            <Link href={"/test"}>
              <Image
                width={374}
                height={187}
                src="/assets/img/1.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
              />
            </Link>

            <Image
              width={374}
              height={187}
              src="/assets/img/2.jpg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <Image
              width={374}
              height={187}
              src="/assets/img/3.jpg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel> */}
        </section>
        <section className="pt-4 pb-6">
          <div className="px-6 flex items-end justify-between mb-2">
            <h2 className="text-base font-bold">Artikel Terbaru</h2>
            <Link
              href={"/articles"}
              className="flex items-center font-regular text-[#DE5A29]"
            >
              <span>Lihat Semua</span>
              <ChevronRightIcon className="h-4 stroke-2" />
            </Link>
          </div>
          <div className="px-6">
            <Card
              shadow={false}
              className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0"
              >
                <Image
                  width={174}
                  height={116}
                  src="https://tentanganak.com/_next/image/?url=https%3A%2F%2Fd1yumyy1wq8q4y.cloudfront.net%2Fimages%2Farticle%2Fthumbnail%2F64f70aca-1c98f64e-70f4-4cb8-bb08-43114f5083c9.jpg&w=828&q=75"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-0">
                <p className="mb-1 font-regular text-black">
                  Si Kecil Lahir Sehat? Ini Alasan Wajib Skrining Hipotiroid
                </p>
                <div className="leading-none">
                  <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">
                    Kesehatan anak
                  </span>
                </div>
              </CardBody>
            </Card>
            <Card
              shadow={false}
              className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0"
              >
                <Image
                  width={174}
                  height={116}
                  src="https://tentanganak.com/_next/image/?url=https%3A%2F%2Fd1yumyy1wq8q4y.cloudfront.net%2Fimages%2Farticle%2Fthumbnail%2F64f5b056-276521ea-08b8-46e6-98a4-23dc77b1a030.jpg&w=828&q=75"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-0">
                <p className="mb-1 font-regular text-black">
                  Bolehkah Anak Makan Jeroan? Simak Penjelasannya di Sini
                </p>
                <div className="leading-none">
                  <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">
                    Kesehatan anak
                  </span>
                </div>
              </CardBody>
            </Card>
            <Card
              shadow={false}
              className="w-full max-w-[48rem] gap-x-2 border justify-between items-center rounded h-[140px] flex-row p-2 mt-2"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0"
              >
                <Image width={174} height={116} src="https://tentanganak.com/_next/image/?url=https%3A%2F%2Fd1yumyy1wq8q4y.cloudfront.net%2Fimages%2Farticle%2Fthumbnail%2F64f33042-fd31963d-0dcd-44f8-b09a-89699c55724d.jpg&w=828&q=75" alt="card-image" className="h-full w-full object-cover" />
              </CardHeader>
              <CardBody className="p-0">
                <p className="mb-1 font-regular text-black">
                  Selain Susu Sapi, Ini Makanan Tinggi Kalsium yang Baik untuk
                  Anak
                </p>
                <div className="leading-none">
                  <span className="text-[#DE5A29] text-[10px] bg-[#FFF3F3] py-0.5 px-1 rounded">
                    Kesehatan anak
                  </span>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
        <section className="pt-4 pb-6">
          <div className="px-6 flex items-end justify-between mb-2">
            <h2 className="text-base font-bold">Fitur Tentang Anak</h2>
          </div>
          <div className="px-6 font-regular">
            <p className="m-0">
              SOLUSI TERLENGKAP untuk kehamilan dan tumbuh kembang anak langsung
              dari Ahlinya!
            </p>
            <Card
              shadow={false}
              className="w-full max-w-[48rem] gap-x-2 justify-between items-center rounded flex-row mt-4"
            >
              <CardHeader shadow={false} floated={false} className="m-0">
                <Image
                  width={174}
                  height={116}
                  src="/assets/icons/icon.png"
                  alt="card-image"
                  className="h-16 w-16 object-cover"
                />
              </CardHeader>
              <CardBody className="p-0 w-full text-[#121212]">
                <span className="font-medium">Kehamilan</span>
                <p>
                  Pantau perkembangan ukuran janin AyBun setiap minggunya.
                  Saksikan juga Webinar dan Tanya Jawab dengan Obsgyn di fitur
                  Tanya Ahli.
                </p>
              </CardBody>
            </Card>
          </div>
        </section>
        <section className="pt-4 pb-6">
          <div className="px-6 flex items-end justify-between mb-2">
            <h2 className="text-base font-bold">Ulasan</h2>
          </div>
          <ReviewComponent></ReviewComponent>
        </section>
      </main>
          <Dialog open={modal} handler={() => { setModal(true); }} >
            <div className="flex items-center justify-between">
              <DialogHeader>Lengkapi Nomer telepon</DialogHeader>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-3 h-5 w-5" onClick={()=>setModal(false)} >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmitHandler)}>

              <DialogBody divider>
                <div className="grid gap-6">
                    <input type="hidden" {...register("uid")}/>
                  <div className="relative h-10 w-full min-w-[200px]">
                    <input
                      className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      placeholder=" "
                      {...register("phoneNumber")}
                    />
                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Phone Number
                    </label>
                  </div>
                </div>
                
              </DialogBody>
              <DialogFooter className="space-x-2">
                {/* <Button variant="outlined" color="red" onClick={()=>setModal(false)}>
                  close
                </Button> */}
                <Button variant="gradient" color="green" type="submit">
                  Update User Phone Number
                </Button>
              </DialogFooter>
              </form>
            </FormProvider>

          </Dialog>
      <BottomNavComponent />
    </>
  );
}
