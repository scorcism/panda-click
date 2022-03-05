import React, { useEffect } from 'react'
import { useState } from 'react';

function MainBody() {


    const [unit, setunit] = useState(1);
    const [count, setCount] = useState(0)
    const [display, setDisplay] = useState("none")
    const [more, setMore] = useState(false)
    const [message, setMessage] = useState(false)
    let multipleBy = 2;
    // localStorage.setItem("count", count);
    document.title = `${count} | Panda Click`;

    const plusOne = () => {
        setunit(unit * multipleBy);
        setCount(count - 20);
        setDisplay("none")
        // setMore(true);
        let change = document.getElementById('promots');
        setMessage(true);
        setTimeout(() => {
            setMessage(false)
        }, 2500);
    }

    const updateCount = () => {
        setCount(count + unit);

        if (count >= 20) {
            setDisplay("Block");
        }
        setTimeout(() => {
            setMore(false);
        }, 4000);
        

    }

    const displayNone = () => {
        setMore(false)
    }

    const changePanda = () => {
        const pandas =
        {
            "0": "/pandas/panda1.png",
            "1": "/pandas/panda2.png",
            "2": "/pandas/panda3.png",
            "3": "/pandas/panda4.png",
            "4": "/pandas/panda5.png"

        }
        let panda = document.getElementById('panda');
        let random = Math.floor(Math.random() * 5);
        let randomPanda = pandas[random];
        panda.src = randomPanda;
        setCount(count - 50);
    }

    useEffect(() => {
        document.title = `Panda Click`;

        // if (localStorage.getItem('count') != null) {
    //         console.log('working')
    //         let message = "Do you want to load your Previous clicks ? "
    //         if (window.confirm(message)) {
    //             let localCount = parseInt(localStorage.getItem('count'));
    //             setCount(localCount);
    //         }
    //     } else {
    //         localStorage.setItem('count',count);
    //     }
    }, [])


    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img title={count < 0 ? "Click me" : "Hows the Josh"} onClick={updateCount} id='panda' className="cursor-pointer object-cover object-center" alt="panda" src="/pandas/pandaa.png" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Total Clicks - <span id='count'>{count > 0 ? count : "🐼"}</span>
                        </h1>

                        <button style={{display:message?"block":"none"}}  className="cursor-default py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><p>Everytime you click It multiples the Count</p></button>

                        <button type="button" className="cursor-default py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><p id='promots' className="leading-relaxed">{count < 20 ? "Exciting things comming for you Pal - Just Keep Going" : "Click on the button below pal"}</p></button>

                        <button style={{ display: more ? "block" : "none" }} onClick={displayNone} className="cursor-default my-3 py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Wait for more Clikes There are more Exciting Things for you</button>

                        <div className="flex justify-center">
                            <button style={{ display: display }} onClick={plusOne} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Yeah !! That's me</button>
                            <div style={{ display: count >= 50 ? "block" : "none" }} onClick={changePanda} className="">
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Change Panda
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MainBody