import React, { useEffect, useState } from 'react'
import { Pdf } from '../typings/PdfReader'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'
const PdfReader = ({ url, height, width }: Pdf) => {
    const CSS_HANDLES = [
        'pdf__container'
    ]
    const handles = useCssHandles(CSS_HANDLES);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])


    return (
        mounted && (
            <div className='flex'>
                <object
                    className={handles.pdf__container}
                    data={url}
                    type="application/pdf"
                    width={width}
                    height={height}
                >
                    <iframe
                        title='PDF'
                        src={url}
                        width={width}
                        height={height}
                    >
                        <p>EL navegador que se esta usando no soporta el PDF!!!!</p>
                    </iframe>
                </object>
            </div>
        )
    )
}

export default PdfReader