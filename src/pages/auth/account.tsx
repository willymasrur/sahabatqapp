import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
    Input,
  } from "@material-tailwind/react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import BasicToolbarComponent from "~/components/BasicToolbar";
import { getServerAuthSession } from "~/server/auth";
   
  export default function AccountPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if (!props.sess) {
        return(
            <>
                <BasicToolbarComponent backButtonHref="/" image={true}></BasicToolbarComponent>
                <main className="min-h-fit h-[90vh] bg-white flex justify-center items-center">
                <div>
                    <Card shadow={true} className="w-96 mx-auto mb-16">
                        <CardHeader variant="gradient" color="purple" className="mb-4 grid h-28 place-items-center">
                            <Typography variant="h3" color="white">Login</Typography>
                        </CardHeader>
                        <CardFooter className="pt-0">
                            <Button fullWidth className="flex justify-center bg-deep-purple-500 items-center py-3 px-4" onClick={() => { signIn("google") }}>
                                <Image className="mr-2" src={"https://authjs.dev/img/providers/google.svg"} width={24} height={24} alt="google"></Image>
                                <span className="ml-2 flex-grow capitalize">Sign in with google</span>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </main>
            </>
        )
    }
    return (
        <>  
        <BasicToolbarComponent backButtonHref="/" image={true}></BasicToolbarComponent>      
        <main className="min-h-fit h-[90vh] bg-white flex justify-center items-center">
            <div>
                <Card className="w-96 mx-auto mt-12">
                    <CardHeader variant="gradient" color="purple" className="mb-4 grid h-28 place-items-center">
                        <Typography variant="h3" color="white">
                            {props.sess.user.name}
                        </Typography>
                    </CardHeader>
                    {/* <CardBody className="flex flex-col gap-4">
                        <Button className="flex justify-center items-center bg-deep-purple-500 py-3 px-4" onClick={()=>{signOut()}}>
                            <span className="ml-2 flex-grow capitalize">Log out</span>
                        </Button>
                    </CardBody> */}
                    <CardFooter className="pt-0">
                        <Button fullWidth className="flex justify-center items-center bg-deep-purple-500 py-3 px-4" onClick={()=>{signOut()}}>
                            <span className="ml-2 flex-grow capitalize">Log out</span>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
        </>
    );
  }

  export async function getServerSideProps(
    context: GetServerSidePropsContext,
  ) {   
    const session = await getServerAuthSession(context);
    return {
      props: {
        sess: session
      },
    };
  }