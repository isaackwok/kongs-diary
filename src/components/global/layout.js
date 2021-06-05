import React from "react"
import classnames from "classnames"
import { Link } from "gatsby"

const linkItems = [
    // { text: 'News', to: '/news' },
    { text: 'Blog', to: '/blog' },
    { text: 'About', to: '/about' }
]

const Layout = ({ children }) => {
    return (
        <div className="border-0">
            <NavigationBar />
            <main className="container mx-auto p-4">
                {children}
            </main>
        </div>
    )
}

const NavigationBar = () => {
    return (
        <nav className="sticky top-0 bg-white border-b z-10">
            <div className="flex p-4 justify-between container mx-auto items-baseline">
                <Link to="/" className="mr-8 text-xl text-primary">港港日記</Link>
                <NavigationMenu className="flex" items={linkItems} />
            </div>
        </nav>
    )
}

const NavigationMenu = ({ items, className }) => {
    return (
        <div className={classnames(className, "flex text-gray-500 font-mono")}>
            {items.map(item => (
                <Link to={item.to} key={item.to} className="hover:text-gray-700 ml-8" activeClassName="text-primary">
                    {item.text}
                </Link>
            ))}
        </div>
    )
}

export default Layout