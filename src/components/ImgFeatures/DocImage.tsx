import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function DocImage({ src, alt, width = "100%", maxWidth = "600px" }) {
    return (
        <img
            src={useBaseUrl(`/img/${src}`)}
            alt={alt}
            style={{
                display: 'block',
                margin: 'auto',
                width,
                maxWidth,
            }}
        />
    );
}
