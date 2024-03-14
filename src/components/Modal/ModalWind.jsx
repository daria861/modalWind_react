import './ModalWind.css'

export default function ModalWind({ call, onDestroy }) {

    if (!call) { return null }

    const closeWind = (e) => {
        if(e.target.className === 'modal'){ onDestroy()}
    }

    return (
        <div className="modal" onClick={closeWind}>
            <div className="modal-content">
                <i className="close" onClick={onDestroy}>X</i>
                <h1>Delete text?</h1>
                <div className="btns">
                    <button className='accept'>Yes</button>
                    <button className='reject' onClick={onDestroy}>No</button>
                </div>
            </div>
        </div>
    )
}