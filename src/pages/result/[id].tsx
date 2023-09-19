import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import BasicToolbarComponent from "~/components/BasicToolbar";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/utils/api";

export default function ResultPage(props: InferGetServerSidePropsType<typeof getServerSideProps>){
    const id: number = parseInt(props.id)
    const router = useRouter()
    const {data, isLoading} = api.test.getSingleAttemptbyid.useQuery({id: id, Userid: props.sess?.user.id!})
    if (!isLoading && !data) {
      router.push("/")
    }
    return(
      <>
        <BasicToolbarComponent backButtonHref="/test" title={"Result Page Test"}></BasicToolbarComponent>
        <main className="min-h-fit bg-white mt-12">
          <p className="text-center mb-3">{data?.test.testName}</p>
          <p className="text-center">{data?.testResult.testResultResult}</p>
        </main>
      </>
    )
}

export async function getServerSideProps(
    context: GetServerSidePropsContext<{ id: string }>,
  ) {   
    const id = context.params!.id;
    const session = await getServerAuthSession(context);
    return {
      props: {
        id,
        sess: session
      },
    };
  }