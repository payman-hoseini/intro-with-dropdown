'use client'

import { useEffect, useState } from "react"

export default function Header(){
    const [showFeatures,setShowFeatures] = useState(false)
    const [showCompany,setShowCompany] = useState(false)
    const [win,setWin] = useState(0)

    function showFeatureHandler(){
        showFeatures ? setShowFeatures(false) : setShowFeatures(true)
        console.log('hello')
    }
    function showCompanyHandler(){
        showCompany ? setShowCompany(false) : setShowCompany(true)
    }
    
    useEffect(() =>{
        setWin(window.innerWidth)
        const handleResize = () => {
            setWin(window.innerWidth);
          };
        window.addEventListener('resize' , handleResize);
        return () =>{
            window.removeEventListener('resize' , handleResize)
        }
    },[])
    return (
        <>
            <div className="pt-8 md:px-10 px-3 flex justify-between relative">
            <div className="flex items-center">
                <div>
                    <svg width="84" height="27" xmlns="http://www.w3.org/2000/svg"><path d="M8.852 19.42c-1.108 0-2.175-.128-3.202-.385a9.648 9.648 0 0 1-2.756-1.137c-.811-.502-1.453-1.13-1.925-1.882-.473-.752-.709-1.63-.709-2.633v-.316h5.39v.246c0 .676.3 1.172.901 1.487.601.315 1.415.472 2.441.472a7.08 7.08 0 0 0 1.55-.166c.495-.11.903-.291 1.224-.542.321-.251.482-.569.482-.954 0-.618-.342-1.056-1.024-1.313-.683-.256-1.777-.513-3.282-.77a21.716 21.716 0 0 1-2.59-.595A10.937 10.937 0 0 1 2.938 9.91 5.28 5.28 0 0 1 1.17 8.28C.727 7.622.505 6.82.505 5.875c0-1.26.382-2.322 1.146-3.185.764-.863 1.782-1.517 3.054-1.96C5.977.287 7.377.065 8.905.065c1.458 0 2.818.242 4.078.726 1.26.484 2.28 1.179 3.062 2.083.782.904 1.172 1.992 1.172 3.264v.245H11.88v-.21c0-.467-.149-.846-.446-1.138a2.804 2.804 0 0 0-1.129-.656 4.616 4.616 0 0 0-1.418-.219c-.443 0-.9.05-1.373.149-.473.099-.872.262-1.199.49-.327.227-.49.545-.49.954 0 .396.175.72.525.97.35.252.84.456 1.47.613.63.158 1.36.306 2.188.447.781.128 1.607.306 2.476.533.869.228 1.686.549 2.45.963a5.34 5.34 0 0 1 1.855 1.627c.472.671.709 1.52.709 2.546 0 1.062-.245 1.972-.735 2.73a5.607 5.607 0 0 1-1.987 1.847 10.04 10.04 0 0 1-2.782 1.05c-1.021.227-2.068.341-3.142.341ZM33.48 19V8.92c0-.77-.1-1.473-.298-2.109a2.965 2.965 0 0 0-1.067-1.531c-.513-.385-1.254-.577-2.223-.577-.84 0-1.566.192-2.178.577a3.754 3.754 0 0 0-1.41 1.61c-.326.688-.49 1.482-.49 2.38L24.31 8.185c0-1.61.35-3.022 1.05-4.235a7.627 7.627 0 0 1 2.844-2.853C29.398.41 30.726.066 32.183.066c1.53 0 2.786.306 3.772.919.986.612 1.721 1.464 2.205 2.555.484 1.09.726 2.365.726 3.824V19H33.48Zm-13.09 0V.415h5.425V19h-5.425Zm28.389.385c-1.354 0-2.558-.216-3.614-.648-1.056-.431-1.881-1.055-2.476-1.872-.595-.817-.893-1.808-.893-2.975 0-1.318.362-2.392 1.085-3.22.724-.828 1.683-1.461 2.879-1.899a15.898 15.898 0 0 1 3.894-.866c2.041-.198 3.45-.38 4.226-.542.776-.164 1.164-.45 1.164-.858V6.47c0-.688-.33-1.23-.989-1.627-.66-.397-1.578-.595-2.756-.595-1.249 0-2.202.224-2.861.673-.66.45-.99 1.135-.99 2.056H42.11c0-1.493.406-2.753 1.217-3.78.81-1.026 1.91-1.805 3.298-2.336 1.389-.53 2.958-.796 4.708-.796 1.633 0 3.144.248 4.532.744 1.389.496 2.506 1.24 3.352 2.231.845.992 1.268 2.252 1.268 3.78v8.032c0 .479.015.937.044 1.374.03.438.096.837.201 1.199.117.408.263.747.438 1.015.175.268.32.455.437.56h-5.337a3.723 3.723 0 0 1-.376-.508 3.962 3.962 0 0 1-.43-.892 7.195 7.195 0 0 1-.305-1.234 9.674 9.674 0 0 1-.097-1.461l1.12.77c-.326.77-.854 1.432-1.583 1.986-.73.554-1.593.98-2.59 1.278-.998.297-2.074.446-3.23.446Zm1.452-4.06a6.14 6.14 0 0 0 2.389-.464A4.104 4.104 0 0 0 54.43 13.4c.467-.665.7-1.534.7-2.608V8.92l1.348 1.313c-.77.28-1.66.51-2.669.69-1.01.182-2.015.324-3.019.43-1.19.116-2.08.317-2.668.603-.59.286-.884.767-.884 1.444 0 .642.25 1.123.752 1.444.502.32 1.249.481 2.24.481Zm13.742 11.323V.415h5.442v26.233h-5.442Zm11.182-7.228a7.325 7.325 0 0 1-4.042-1.181c-1.225-.788-2.205-1.85-2.94-3.185-.735-1.336-1.103-2.838-1.103-4.507v-.28l2.345-.052v.21c0 .863.21 1.619.63 2.266.42.648.963 1.146 1.628 1.496.665.35 1.359.526 2.082.526 1.19 0 2.226-.412 3.106-1.234.881-.823 1.322-2.109 1.322-3.859s-.438-3.025-1.313-3.824c-.875-.799-1.913-1.199-3.115-1.199-.723 0-1.417.173-2.082.517a4.308 4.308 0 0 0-1.628 1.461c-.42.63-.63 1.383-.63 2.257l-2.345-.14c0-1.68.368-3.164 1.103-4.453.735-1.29 1.715-2.307 2.94-3.054a7.619 7.619 0 0 1 4.042-1.12c1.505 0 2.911.37 4.218 1.111 1.306.741 2.365 1.823 3.176 3.247.81 1.423 1.216 3.155 1.216 5.197 0 2.135-.396 3.932-1.19 5.39-.793 1.458-1.843 2.558-3.15 3.299a8.51 8.51 0 0 1-4.27 1.111Z" fill="#151515"/></svg>
                </div>
                {(win > 768) && <div className="ml-16 flex items-center space-x-12 text-Medium-Gray font-medium">
                    <button onClick={showFeatureHandler} className="flex items-center hover:text-Almost-Black">
                        <p className="mr-2">Features</p>
                        { showFeatures ? 
                            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>
                            : <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>
                        }
                    </button>
                    <button onClick={showCompanyHandler} className="flex items-center hover:text-Almost-Black">
                        <p className="mr-2">Company</p>
                        { showCompany ?
                            <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/></svg>
                            : <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg" ><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>
                        }
                    </button>
                    <button className="hover:text-Almost-Black">Careers</button>
                    <button className="hover:text-Almost-Black">About</button>
                </div>}
            </div>
            {(win > 768) && <div className="font-medium text-Medium-Gray">
                <button className="mr-10 hover:text-Almost-Black">Login</button>
                <button className="border-[3px] border-Medium-Gray pl-5 pr-4 py-2 rounded-2xl text-center hover:text-Almost-Black hover:border-Almost-Black">Register</button>
            </div>}
            {/* dropdown 1 */}
            {showFeatures &&  <div className="bg-white p-6  text-Medium-Gray font-medium rounded-xl shadow-lg absolute top-20 left-28">
                <ul className="space-y-2">
                    <li className="flex items-center space-x-3">
                        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z" fill="#726CEE"/></svg>
                        <p>Todo List</p>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z" fill="#4BB1DA"/></svg>
                        <p>Calendar</p>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z" fill="#EDD556"/></svg>
                        <p>Reminders</p>
                    </li>
                    <li className="flex items-center space-x-3">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z" fill="#8E4CB6"/></svg>
                        <p>Planning</p>
                    </li>
                </ul>
            </div>}
            {/* dropdown 2 */}
            {showCompany && <ul className="bg-white list-none font-medium text-Medium-Gray p-6 rounded-xl shadow-lg space-y-2 absolute  top-20 left-80">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
            </ul>}

            {/* menu */}
            <button>
                <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>
            </button>
        </div>
         {/* modal menu */}
         <div className="fixed top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50">
            <div className="bg-white px-5 pt-5 w-2/3 h-full absolute right-0">
                <div className="absolute right-5">
                    <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg>
                </div>
                <ul className="mt-16 font-medium text-Medium-Gray space-y-4">
                    <li className="flex items-center space-x-4">
                        <button>Features</button>
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>
                    </li>
                    <li className="flex items-center space-x-4">
                        <button>Company</button>
                        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>
                    </li>
                    <li>
                        <button>Careers</button>
                    </li>
                    <li>
                        <button>About</button>
                    </li>
                </ul>
                <div className="grid mt-8 font-medium text-Medium-Gray">
                    <button>Login</button>
                    <button className="mt-3 border-Medium-Gray border-2 rounded-xl py-2">Register</button>
                </div>
            </div>
        </div>
        </>
    )
}