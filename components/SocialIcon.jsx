export default function SocialIcon({icon}) {
    return (
        <div className="bg-white cursor-pointer rounded-lg flex items-center justify-center w-[50px] h-[50px] min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]">
            {icon}
        </div>
    )
}