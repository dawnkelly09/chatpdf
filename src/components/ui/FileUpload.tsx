'use client'
import { useDropzone } from "react-dropzone"

const FileUpload = () => {
    //deconstructing the getRootProps and getInputProps functions from useDropzone hook
    const {getRootProps, getInputProps} = useDropzone();
  return (
    <div className='p-2 bg-white rounded-xl'>
        <div {...getRootProps({
            className: 'border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col'
        })}>
            <input {...getInputProps()}/>
            <>
            </>
        </div>
    </div>
  )
}

export default FileUpload