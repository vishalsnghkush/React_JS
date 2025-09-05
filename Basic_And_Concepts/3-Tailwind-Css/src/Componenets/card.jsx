import React from 'react'

function Card({userName,RecievedObject}) { // by default we got an props which is its real name
    // you can recieve this as function or object
    return (
        <div class="flex flex-col items-center p-7 rounded-2xl">
            <div>
                <img class="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
            </div>
            <div class="flex">
                <span class="text-2xl font-medium">{userName}</span>
                <span class>The Anti-{RecievedObject}</span>
                <span class="flex">
                    <span>No. 4</span>
                    <span>·</span>
                    <span>2025</span>
                </span>
            </div>
        </div>
    )
}

export default Card
