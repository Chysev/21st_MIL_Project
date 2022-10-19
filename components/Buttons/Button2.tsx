import Link from "next/link"

const Button2 = ({ children }) => {
    return (
        <Link href="/trailer">
            <button className="text-white bg-[#1c181f] px-[40px] py-[9px] text-[18px] opacity-[0.8] rounded-[999px]">{children}</button>
        </Link>
    )
}

export default Button2