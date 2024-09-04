import './index.css'
import { useState, useRef} from 'react'
const defaultimages=[
    'images/Rectangle 5160.png',
    'images/Rectangle 5160.png',
    'images/Rectangle 5160.png'
]
const Gallerywidget=()=>{
    const [Images, setImages]=useState(defaultimages)
    const fileInputref=useRef(null)

    const handleChange=(event)=>{
        const file=event.target.files[0]
        if (file){
            const newImageUrl=URL.createObjectURL(file)
            setImages(prevState=>[
                ...prevState,
                newImageUrl
            ])
        }
        }

    const handleupload=()=>{
        fileInputref.current.click()
    }

    return (
        <div className='Gallery-card'>
            <div className='section'>
                <img  className='question-image' src='images/Vector.png' alt='question'/>
                <div className='button-area'>
                    <button className='gallery-button'>Gallery</button>
                    <div className='buttons-left'>
                        <button className='additem' type='button' onClick={handleupload}>+ Add Item</button>
                        <input className='addinput' ref={fileInputref} type='file' onChange={handleChange}/>
                        <button className='arrowbutton'>
                            <img  className='arrowimg' src='images/Group 28.png' alt='arrow'/>
                        </button>
                        <button className='arrowbutton'>
                            <img  className='arrowimg' src='images/Group 28 (1).png' alt='arrow'/>
                        </button>
                    </div>
                </div>
            </div>
            <div className='section2'>
                <img className='squares' src='images/Frame 1000002250.png' alt='square' />
                <div className='gallery-items'>
                    {Images.map((each, index)=>(
                        <img key={index} className='galleryimage' src={each} alt='galleryimage'/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallerywidget