import { Alert } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const AppMenuComponent = () => {
  const [open, setOpen] = React.useState(false);
  const ComingSoon = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };
  return (
    <>
      <section id="category" className="pt-4 px-6" onClick={() => ComingSoon()}>
        <div className="flex flex-row w-full">
          <div className="bg-deep-purple-50 py-3 m-1 rounded-lg basis-1/4 text-center items-center text-deep-purple-300 font-semibold flex flex-col">
            <Image
              width={36}
              height={36}
              src="/assets/icons/pregnant.png"
              className="h-9"
              alt="pregnant"
            />
            <p className="text-xs">Kehamilan</p>
          </div>
          <div className="bg-deep-purple-50 py-3 m-1 rounded-lg basis-1/4 text-center items-center text-deep-purple-300 font-semibold flex flex-col">
            <Image
              width={36}
              height={36}
              src="/assets/icons/consultation.png"
              className="h-9"
              alt="consultation"
            />
            <p className="text-xs">Konsultasi</p>
          </div>
          <div className="bg-deep-purple-50 py-3 m-1 rounded-lg basis-1/4 text-center items-center text-deep-purple-300 font-semibold flex flex-col">
            <Image
              width={36}
              height={36}
              src="/assets/icons/growth.png"
              className="h-9"
              alt="growth"
            />
            <p className="text-xs">Tumbuh</p>
          </div>
          <div className="bg-deep-purple-50 py-3 m-1 rounded-lg basis-1/4 text-center items-center text-deep-purple-300 font-semibold flex flex-col">
            <Image
              width={36}
              height={36}
              src="/assets/icons/screening.png"
              className="h-9"
              alt="screening"
            />
            <p className="text-xs">Screening</p>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="bg-deep-purple-50 py-3 m-1 rounded-lg basis-1/4 text-center items-center text-deep-purple-300 font-semibold flex flex-col">
            <Image
              width={36}
              height={36}
              src="/assets/icons/toys.png"
              className="h-9"
              alt="toys"
            />
            <p className="text-xs">Permainan</p>
          </div>
          <div className="bg-deep-purple-50 py-3 m-1 rounded-lg basis-1/4 text-center items-center text-deep-purple-300 font-semibold flex flex-col">
            <Image
              width={36}
              height={36}
              src="/assets/icons/food.png"
              className="h-9"
              alt="food"
            />
            <p className="text-xs">Asupan Gizi</p>
          </div>
          <div className="bg-deep-purple-50 py-3 m-1 rounded-lg basis-1/4 text-center items-center text-deep-purple-300 font-semibold flex flex-col">
            <Image
              width={36}
              height={36}
              src="/assets/icons/vaccine.png"
              className="h-9"
              alt="vaccine"
            />
            <p className="text-xs">Vaccine</p>
          </div>
          <div className="bg-deep-purple-50 py-3 m-1 rounded-lg basis-1/4 text-center items-center text-deep-purple-300 font-semibold flex flex-col">
            <Image
              width={36}
              height={36}
              src="/assets/icons/others.png"
              className="h-9"
              alt="others"
            />
            <p className="text-xs">Lainnya</p>
          </div>
        </div>
      </section>
      <Alert
        className="top-0 z-50 fixed rounded-none"
        color="deep-purple"
        open={open}
        onClose={() => setOpen(false)}
      >
        Coming Soon, Mohon Maaf Fitur Belum Tersedia ☺
      </Alert>
    </>
  );
};

export default AppMenuComponent;
