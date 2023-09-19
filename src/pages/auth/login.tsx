import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import BasicToolbarComponent from "~/components/BasicToolbar";

export default function LoginPage() {
    return (
        <>
            <BasicToolbarComponent backButtonHref="/"></BasicToolbarComponent>
            <main className="min-h-fit h-[90vh] bg-white flex justify-center items-center">
                <div>
                    <Card shadow={true} className="w-96 mx-auto mb-16">
                        <CardHeader variant="gradient" color="purple" className="mb-4 grid h-28 place-items-center">
                            <Typography variant="h3" color="white">Login</Typography>
                        </CardHeader>
                    {/*  <CardBody className="flex flex-col gap-4">
                            <div className="-ml-2.5">
                                    <Checkbox label="Remember Me" />
                                    </div>
                        </CardBody> */}
                        <CardFooter className="pt-0">
                            <Button fullWidth className="flex justify-center bg-deep-purple-500 items-center py-3 px-4" onClick={() => { signIn("google") }}>
                                <Image className="mr-2" src={"https://authjs.dev/img/providers/google.svg"} width={24} height={24} alt="google"></Image>
                                <span className="ml-2  flex-grow capitalize">Sign in with google</span>
                            </Button>
                            <Typography variant="small" className="mt-6 flex justify-center">
                                Don&apos;t have an account?
                                <Link href={"/auth/account"}>
                                    <Typography as="span" variant="small" color="blue-gray" className="ml-1 font-bold">
                                        Regitser
                                    </Typography>
                                </Link>
                            </Typography>
                        </CardFooter>
                    </Card>
                </div>
            </main>
        </>
    );
}