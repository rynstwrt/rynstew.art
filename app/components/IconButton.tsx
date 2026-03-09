'use client';

import "@/app/ui/IconButton.css";


const OPEN_NEW_TAB = false;


export default (props: any) => {
    return (
        <a className="icon-btn"
           href={props.url}
           target={OPEN_NEW_TAB ? "_blank" : undefined}>
            <div className="icon-container">
                {props.icon}
            </div>

            {props.text && <p>{props.text}</p>}
        </a>
    );
};