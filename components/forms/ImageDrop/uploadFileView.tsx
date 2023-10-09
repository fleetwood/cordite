import useDebug from 'hooks/useDebug'
import {useEffect,useState} from 'react'
import {FileError} from 'react-dropzone'
import {cloudinary} from 'utils/cloudinary'

import {CompleteFile,UploadFileViewProps} from 'types'
import {DEBUG} from 'utils/helpers'

const { debug } = useDebug('forms/Dropzone/UploadingFileView')

const UploadFileView = ({
  file,
  showUploadProgress = true,
  onUploadComplete,
  onUploadChange,
}: UploadFileViewProps) => {
  
  const [fileProgress, setFileProgress] = useState<number>(0)
  const [fileErrors, setFileErrors] = useState<FileError[]>([])
  const [completeFile, setCompleteFile] = useState<CompleteFile>()

  // if (isLoading) return <Spinner />
  
  const progressStyle = (e: boolean, p: number) =>
    e ? 'progress-error' : p < 100 ? 'progress-info' : 'progress-success'

  const onProgress = (p: number) => {
    setFileProgress(p)
  }

  /**
   *
   * @param file: {@link CompleteFile} will need to be converted to {@link ImageUpsertProps}
   */
  const uploadComplete = async (file: CompleteFile) => {
    debug('No longer need to create an image file, just get the url', file)
    onUploadComplete(file)
  }

  const removeFile = (file: CompleteFile) => {
    debug('removeFile', file)
    file.visible = false
    if (onUploadChange) {
      onUploadChange(file)
    }
  }

  const unRemoveFile = (file: CompleteFile) => {
    debug('removeFile', file)
    file.visible = true
    if (onUploadChange) {
      onUploadChange(file)
    }
  }

  useEffect(() => {
    cloudinary.upload({
      file: file.file,
      onProgress,
      onComplete: uploadComplete,
    })
  }, [])

  const RemoveButton = ({ img }: { img: CompleteFile }) => {
    const { visible } = img
    return visible ? (
      <label
        className="btn btn-sm btn-circle bg-warning absolute right-0 top-0"
        onClick={() => removeFile(img)}
      >
        ✕
      </label>
    ) : (
      <label
        className="btn btn-sm btn-circle bg-success absolute right-0 top-0"
        onClick={() => unRemoveFile(img)}
      >
        +
      </label>
    )
  }

  return (
    <div className="col-span-1 mb-2 h-2 relative" key={file.id}>
      <progress
        className={`progress h-2 absolute bottom-2 z-2 opacity-80 drop-shadow-md ${progressStyle(
          fileErrors.length > 0,
          fileProgress
        )}`}
        value={fileProgress}
        max="100"
      />
      {fileErrors.map((e) => (
        <div>{e.message}</div>
      ))}
    </div>
  )
}

export default UploadFileView
