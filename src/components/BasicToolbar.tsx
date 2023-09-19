import Image from "next/image";
import Link from "next/link"
import type { ReactNode } from "react";

export interface BasicToolbarProps{
    image?: boolean,
    shareButton?: boolean 
    backButtonHref: string,
    title?: string
    children?: ReactNode
}

const BasicToolbarComponent = (props: BasicToolbarProps) =>{
    return(
        <div className="sticky top-0 z-10 ">
            <nav className="bg-white px-6 flex items-center justify-between py-3 border-b border-[#E1E1E1]">
                <div className="space-x-2 flex items-center w-full">
                    <Link className="pr-2 py-2" href={props.backButtonHref}>
                        <svg viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-deep-purple-800">
                            <path d="m7.41 10.688-4.58-4.59 4.58-4.59L6 .098l-6 6 6 6 1.41-1.41Z" fill="currentColor"></path>
                        </svg>
                    </Link>
                    {!props.image ?
                        (
                        <h1 className="text-lg font-bold">{props.title ? props.title : ""}</h1>
                        )
                        :
                        (
                            <Image height={24} width={93} alt="Tentang Anak" loading="lazy" className="w-24 h-6" src="/assets/img/logo-sahabatq.png"></Image>
                        )
                    }
                </div>
                {props.shareButton && (
                    <button className="rounded-md text-primary-orange max-w-fit disabled:cursor-not-allowed disabled:text-spanish-grey font-bold text-almost-black p-2">
                        <span>
                            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                <path d="M14.414 12.723c-.687 0-1.301.271-1.77.696L6.2 9.669c.046-.208.082-.416.082-.633 0-.217-.036-.425-.082-.632l6.37-3.714a2.7 2.7 0 0 0 1.844.732c1.5 0 2.711-1.211 2.711-2.711 0-1.5-1.21-2.711-2.71-2.711s-2.712 1.21-2.712 2.71c0 .218.037.426.082.633l-6.37 3.714a2.7 2.7 0 0 0-1.844-.732C2.07 6.325.86 7.536.86 9.036c0 1.5 1.21 2.711 2.71 2.711a2.7 2.7 0 0 0 1.844-.732l6.434 3.76c-.045.189-.072.388-.072.586A2.642 2.642 0 0 0 14.414 18a2.642 2.642 0 0 0 2.639-2.639 2.642 2.642 0 0 0-2.639-2.638Zm0-10.916c.497 0 .904.407.904.904a.906.906 0 0 1-.904.903.906.906 0 0 1-.903-.903c0-.497.406-.904.903-.904ZM3.571 9.94a.906.906 0 0 1-.904-.904c0-.497.407-.903.904-.903.497 0 .903.406.903.903a.906.906 0 0 1-.903.904Zm10.843 6.343a.906.906 0 0 1-.903-.904c0-.496.406-.903.903-.903s.904.406.904.903a.906.906 0 0 1-.904.904Z" fill="currentColor"></path>
                            </svg>
                        </span>
                    </button>
                )}
            </nav>
            {props.children}
        </div>
    )
}

BasicToolbarComponent.defaultProps = {
    image: false,
    shareButton: false
};

export default BasicToolbarComponent;