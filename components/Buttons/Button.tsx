import Link from "next/link"

const Button = ({ children }) => {
    return (
        <Link href="/watch">
            <button className="text-white bg-red-600 px-[40px] py-[9px] text-[18px] hover:opacity-[0.8] rounded-[999px]">{children}</button>
        </Link>
    )
}

export default Button