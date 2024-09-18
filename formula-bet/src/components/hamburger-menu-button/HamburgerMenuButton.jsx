import {useRef, useEffect} from "react";

export default function HamburgerMenuButton(){

    const buttonRef = useRef(null);

    useEffect(() => { 
        const button = buttonRef.current;

        const openMenu = () =>{

            const isOpened = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", !isOpened);
      
             // Chama a função passada via props para alternar a div
        }

        if(button){
            button.addEventListener("click", openMenu);
        }

        return () => {
            if (button) {
                button.removeEventListener('click', openMenu);
            }
        }
    }, [])

    return (
        <>
            <button ref={buttonRef} className="rounded-sm cursor-pointer hamburger-menu-button" aria-controls='primary-navigation' aria-expanded='false'>
                <svg className='fill-none svg-burger' viewBox='-10 -10 120 120' width='50'>
                    <path className="dark:stroke-[#FFF] line" strokeWidth='10' strokeLinecap="round" strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"></path>
                </svg>
            </button>
            <style>
                {".line {stroke-dasharray: 60 31 60 300; transition: 1s;}"}
                {".hamburger-menu-button[aria-expanded='true'] .line {stroke-dasharray: 60 105 60 300; stroke-dashoffset: -90;}"}
                {".hamburger-menu-button[aria-expanded='true'] .svg-burger {rotate: .125turn; translate: 3px -4px}"}
                {".hamburger-menu-button .svg-burger{transition: translate 1s, rotate 1s;}"}
            </style>
        </>
    )
}