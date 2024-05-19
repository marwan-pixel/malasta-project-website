import * as react from "react";

export default function Navbar() {
    return (
        <>
            <div className="w-full mx-auto flex justify-between items-center bg-white text-customgreen h-[5.8rem] navbar-base">
                <h1 className="text-[1.7rem] font-semibold font-inter block ml-32">
                Malasta Project
                </h1>
                <div className="navbar-link flex text-[1.3rem] font-semibold mr-32 gap-x-7">
                    <a href="">Home</a>
                    <a href="">Rental</a>
                    <a href="">Catalog</a>
                </div>
                <div className="flex navbar-socmed">
                    <p></p>
                    <p></p>
                </div>
            </div>
        </>
    );
}
