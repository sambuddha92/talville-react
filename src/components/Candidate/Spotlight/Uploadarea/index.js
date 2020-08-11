import React from 'react'
import './Uploadarea.css';

export default () => {
    const onClickUpload = (e) => {
        e.preventDefault();
        console.log("clicked upload");
    }
    const onDragEnterUpload = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }
    const onDragOverUpload = (e) => {
        e.stopPropagation();
        e.preventDefault();
    }
    const onDropUpload = (e) => {
        e.preventDefault();
        console.log("file dropped");
    }
    return (
        <div 
        className='uploadarea'
        onClick={e => onClickUpload(e)}
        onDragEnter={e => onDragEnterUpload(e)}
        onDragOver={e => onDragOverUpload(e)}
        onDrop={e=>onDropUpload(e)}
        >
            <img src='/upload.png' alt='Upload' className='upload-logo' />
            <span className='content'>Choose your resume or <span className='part-2'>drag it here!</span></span>
        </div>
    )
}