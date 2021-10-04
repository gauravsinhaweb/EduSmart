import React from "react";
import { Chatroom, About, Classroom, Contributors } from "./";

export function Home() {
    return (
        <>
            <div className="flex flex-col">
                <div>
                    <About />
                </div>
                <div>
                    <Classroom />
                </div>
                <div>
                    <Chatroom />
                </div>
                <div>
                    <Contributors />
                </div>
            </div>
        </>
    );
}
