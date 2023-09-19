import BasicToolbarComponent from "~/components/BasicToolbar";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { api } from "~/utils/api";
import { useRouter } from 'next/router'
import ProgressBar from "~/components/ProgressBar";
import { SubmitTestInput } from "~/server/schema/test.schema";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { error } from "console";
import { getServerAuthSession } from "~/server/auth";

export async function getServerSideProps(context: GetServerSidePropsContext<{ id: string }>) {   
    const id = context.params!.id;
    const session = await getServerAuthSession(context);
    return {
      props: {
        id,
        sess: session
      },
    };
  }

export default function TestPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [questions, setQuestion] = useState<BabyBluesQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<answer[]>([]);
    // const [full, setfull] = useState<boolean>(false);
    const router = useRouter()
    const bottomRef = useRef<null | HTMLDivElement>(null);
    const testById = api.test.getTestbyid.useQuery({id: props.id})
    const { mutate: submitTest} = api.test.SubmitTest.useMutation({
        onSuccess(data){
            router.push(`/result/${data.data.user.testAttemptId}`)
        },
        onError(error){
            console.log(error)
        }
      });


    useEffect(()=>{
        if (testById.data) {
          const datas: BabyBluesQuestion[] = JSON.parse(JSON.stringify(testById.data.testQuestionsAnswer))
          setQuestion(datas)
        }
        if (testById.data === null) {
            router.push("/").catch((error)=>{
                console.error("Error during navigation:", error);
            })
        }
        if (testById.isError) {
            router.push("/").catch((error)=>{
                console.error("Error during navigation:", error);
            })
        }
      },[testById.data, testById.data])


      useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
      }, [userAnswers]);
      

      const submitTestHandler = ()=>{
        const input: SubmitTestInput = {
            testId: 0,
            Order: 0,
            Score: 0,
            status: 0,
            userId: "",
            userChildId: 0,
        };
        const totalPoint =  userAnswers.reduce((accumulator, current)=>{return accumulator + current.point}, 0)
        input.userId = props.sess?.user.id!
        input.Score = totalPoint
        input.testId = testById.data!.testId
        submitTest(input)
    }

    const handleAnswerSelect = (selectedAnswer: answer) => {
        setUserAnswers([...userAnswers, selectedAnswer]);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }else{
            // setfull(true)
            submitTestHandler()
        }
      };

    const renderList = () => {
        const listItems = [];
        for (let i = 0; i <= currentQuestionIndex; i++) {
          listItems.push(
            <div key={i}>
                <div className="flex items-start space-x-2 mt-4">
                    <Image width={24} height={24} src="/assets/img/ava-consultant.png" alt="Bot" className="w-8 h-8 rounded-full" />
                    <div className="bg-purple-100 chat-baloon-question">
                        <p className="text-sm text-gray-800 break-words">{questions[i]?.question}</p>
                    </div>
                </div>
                {userAnswers[i]?.answer && (
                    <div className="flex items-end justify-end space-x-2 mt-4">
                        <div className="bg-gray-200 chat-baloon-answer">
                        <p className="text-sm text-deep-purple-500 break-words">{userAnswers[i]?.answer}</p>
                        </div>
                    </div>
                )}
            </div>
          );
        }
        return listItems;
      };
    return (
        <>
            <BasicToolbarComponent backButtonHref="/" title={"Baby Blues Screening Test"}>
                <div className="flex justify-center items-center h-[5vh] bg-white shadow-lg">
                    <ProgressBar max={questions.length} value={userAnswers.length}></ProgressBar>
                </div>
            </BasicToolbarComponent>
            <main className="min-h-fit bg-white">
                <div className="p-4 overflow-y-auto min-h-[80vh] flex flex-col-reverse">
                        <div className="p-4">
                            {questions[currentQuestionIndex]?.answer.map((option, index) => (
                                <div className="bg-gray-200 px-4 py-2 m-1 rounded-xl float-left" key={index} onClick={() => handleAnswerSelect(option)} >
                                    <p className="text-sm text-deep-purple-500">{option.answer}</p>
                                </div>
                            ))}
                            <div className="clear-both"></div>
                        </div>
  
                    <div ref={bottomRef}></div>
                    {renderList().slice().reverse()}
                </div>

            </main>
        </>
    )
}


export interface BabyBluesQuestion {
    question: string;
    answer: answer[]
}

export interface answer{
    point: number;
    answer: string;
}