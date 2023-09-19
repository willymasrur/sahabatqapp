export interface ProgressBarProps{
    max: number
    value: number
}

const ProgressBar = (props: ProgressBarProps) => {
    return(
        <div className="flex flex-start overflow-hidden font-sans rounded-full text-xs font-medium h-2.5 w-[70%] bg-deep-purple-100">
            <div style={{width: `${(props.value / props.max) * 100}%`}} className="flex transition-all ease-out duration-1000 justify-center items-center h-full overflow-hidden break-all rounded-full bg-purple-500 text-white" >  
            </div>
        </div>
    )
}
export default ProgressBar;
