

import React from 'react';


function GridDisplay({delay}) {
    return (

        <div
            data-framer-background-image-wrapper="true"
            style={{
                position: 'absolute',
                borderRadius: 'inherit',
                inset: 0,
                zIndex: -1
            }}
        >
            <img
                className={` absolute top-0 animate-fade-down animate-delay-[${delay}ms]`}
                src={"https://framerusercontent.com/images/6W1hwo7RUvFICkjbmBLNfjkLT0.png"}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'cover',
                    imageRendering: 'auto'
                }}
            />

            <img
                src="https://framerusercontent.com/images/AYlzs6m9OqzXm37jkYmRsERtNA.png"
                alt=""
                srcSet="https://framerusercontent.com/images/yfJSQG9mXOn8WEVstxUZQjpz2A.png?scale-down-to=512 512w, https://framerusercontent.com/images/yfJSQG9mXOn8WEVstxUZQjpz2A.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/yfJSQG9mXOn8WEVstxUZQjpz2A.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/yfJSQG9mXOn8WEVstxUZQjpz2A.png 2880w"
                sizes="100vw"
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center center',
                    objectFit: 'cover',
                    imageRendering: 'auto',
                }}
            />
        </div>
    );
}

export default GridDisplay;
