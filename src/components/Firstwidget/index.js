import './index.css'

import { useState } from 'react'

const Firstwidget=()=>{
    const [activeTab, setTab]=useState('about')

    const handletab=(tab)=>{
        setTab(tab)
    }

    return (
        <div className='Tabwidget'>
            <div className='section'>
                <img className='tabquestion' src='images/Vector.png' alt='question'/>
                <div className='tabs-card'>
                    <button className={activeTab==='about' ?'activebutton':'non-activebutton'} onClick={()=>handletab('about')}>About</button>
                    <button className={activeTab==='experience' ?'activebutton':'non-activebutton'} onClick={()=>handletab('experience')}>Experience</button>
                    <button className={activeTab==='recommended' ?'activebutton':'non-activebutton'} onClick={()=>handletab('recommended')}>Recommended</button>
                </div>
            </div>

            <div className='section2'>
                <img className='squares' src='images/Frame 1000002250.png' alt='squares'/>
                <div className='content'>
                    {activeTab==='about' && <p className='contentpara'>This is About me section of the right top widget</p>}
                    {activeTab==='experience' && <p className='contentpara'>This is experience section of the right top widget</p>}
                    {activeTab==='recommended' && <p className='contentpara'>This is recommended section of the right top widget</p>}
                </div>
            </div>
        </div>
    )
}

export default Firstwidget