import './index.css'
import Firstwidget from '../Firstwidget'
import Gallerywidget from '../Gallerywidget'
const Widgets=()=>(
    <div className='Main-container'>
        <div className='left-container'>
        </div>
        
        <div className='right-container'>
            <Firstwidget />
            <hr className='line' />
            <Gallerywidget />
            <hr className='line' />
        </div>

    </div>
)

export default Widgets