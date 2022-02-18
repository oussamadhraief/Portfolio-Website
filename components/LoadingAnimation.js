
export default function LoadingAnimation(){

    return (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-white z-[9999] grid content-center">
                <div className="loadingAnimation flex justify-center items-center flex-nowrap mb-28">
                    <span className="w-2 h-2 bg-zinc-600 rounded-full mx-2"></span>
                    <span className="w-2 h-2 bg-slate-900 rounded-full mx-1"></span>
                    <span className="w-2 h-2 bg-secondary rounded-full mx-2"></span>
                </div>
        </div>
    )
}