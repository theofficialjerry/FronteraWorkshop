import React, {useState} from 'react';


function Modal({children, onEventEmitted}) {
    const [isModalOpen, setModalOpen] = useState(true);

    function startAction() {
        setModalOpen(false);
    }

    return isModalOpen && (<div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-sm backdrop-filter backdrop-saturate-150">
            <div className="bg-white w-[80%] h-[80%] shadow-2xl rounded-2xl border border-2 border-green-600 p-8">
                <div className="flex flex-col items-center justify-center h-full w-full gap-10">
                    <span
                        className="text-green-400 text-3xl text-center">Welcome to the Intro to Web Dev Workshop</span>
                    <button
                        className="text-slate-700 border border-2 px-4 rounded-md bg-green-400 border-slate-700 hover:bg-green-600 hover:text-slate-900"
                        onClick={startAction}>Start
                    </button>
                </div>
            </div>
        </div>);
}

export default Modal;
