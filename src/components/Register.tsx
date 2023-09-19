import { Button, Card, Input, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import Link from "next/link";

const RegisterComponent = () =>{
    return(
        <main className="min-h-fit h-[90vh] bg-white flex justify-center items-center">
        <div>
            <Card shadow={true} className="w-96 mx-auto mb-16">
                <CardHeader
                variant="gradient"
                color="purple"
                className="mb-4 grid h-28 place-items-center"
                >
                <Typography variant="h3" color="white">
                    {/* {session.data.user.name} */}
                    Register
                </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input crossOrigin={null} label="Email" size="lg" />
                    <Input crossOrigin={null} label="Password" size="lg" />
                    {/* <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                    </div> */}
                </CardBody>
                <CardFooter className="pt-0">
                    <Button className="bg-deep-purple-500 capitalize" fullWidth>
                    Register
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                    {/* Don&apos;t have an account? */}
                    have an account?
                    <Link href={"/auth/login"}>
                    <Typography
                        as="span"
                        variant="small"
                        color="blue-gray"
                        className="ml-1 font-bold"
                    >
                            Login
                    </Typography>
                        </Link>
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    </main>
    )
}

export default RegisterComponent;