import useDebug from 'hooks/useDebug'
import { useCallback, useEffect, useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'
import { DEBUG, uuid } from 'utils/helpers'
import UploadFileView from './uploadFileView'
import { CompleteFile, DropzoneProps, UploadableFile } from 'types'

const { debug } = useDebug('forms/Dropzone/index')

function ImageDrop({
  limit = -1,
  showUploadProgress = true,
  reset = false,
  onDropComplete,
  onDropChange,
  children,
  ...props
}: DropzoneProps) {
  const [files, setFiles] = useState<UploadableFile[]>([])
  const [rejected, setRejected] = useState<UploadableFile[]>([])
  const [completedFiles, setCompletedFiles] = useState<CompleteFile[]>([])

  const getLimit = (a: any[]) =>
    limit > 0 ? limit - completedFiles.length : a.length
  const fileCount = () => (getLimit([]) > 0 ? `up to ${getLimit([])}` : ``)

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      debug(`onDrop`, { acceptedFiles, rejectedFiles })

      const mapAccepted = acceptedFiles
        .slice(0, getLimit(acceptedFiles))
        .map((file) => ({ file, errors: [], id: uuid() }))
      debug('onDrop.mapAccepted', {
        files,
        acceptedFiles,
        mapAccepted,
        completedFiles,
      })
      const mapRejected = [
        ...acceptedFiles.slice(getLimit(acceptedFiles)).map((file) => ({
          file,
          accepted: true,
          errors: [
            { code: 'limit', message: `Exceed allowed limit (${limit})` },
          ],
          id: uuid(),
        })),
        ...rejectedFiles.map((file) => ({
          ...file,
          accepted: false,
          id: uuid(),
        })),
      ]

      setFiles((f) => [...f, ...mapAccepted])
      setRejected((f) => [...f, ...mapRejected])
    },
    []
  )

  const onFileComplete = useCallback((e: CompleteFile) => {
    debug('onFileComplete', e)
    setCompletedFiles((current) => [...current, e])
  }, [])

  const onFileChange = (file: any) => (onDropChange ? onDropChange(file) : {})

  useEffect(() => {
    debug('useEffect', {completedFiles})
    if (files.length > 0 && completedFiles.length === files.length) {
      if (onDropComplete) {
        debug('onDropComplete....')
        onDropComplete(completedFiles)
        setCompletedFiles(() => [])
        setFiles(() => [])
        setRejected(() => [])
      }
    }
  }, [completedFiles])

  useEffect(() => {
    setCompletedFiles(() => [])
    setFiles(() => [])
    setRejected(() => [])
    reset = false
  }, [reset])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  // const getWidth = (file: PrismaImage) => Math.round((60 / file.height!) * file.width!)

  return (
    <>
      {props.label && (
        <label>{props.label}</label>
      )}
      <div
        {...getRootProps()}
        className={`p-4 rounded-md ${
          isDragActive
            ? `bg-accent text-accent-content border-accent-focus`
            : `bg-secondary text-secondary-content border-secondary-focus`
        }`}
      >
        <input {...getInputProps()} />
        {children ? (
          children
        ) : isDragActive ? (
          <p>Drop n Go!!</p>
        ) : props.dropMessage ? (
          <p>{props.dropMessage}</p>
        ) : limit === 1 ? (
          <p>Drop your file here, or click to select...</p>
        ) : (
          <p>Drop {fileCount()} files here, or click to select...</p>
        )}
      </div>
      <div className="min-w-full p-4 grid grid-cols-6 gap-2">
          {rejected.map((r) => (
            <div className="relative mb-2" key={r.id}>
              <div className="bg-success text-success-content overflow-hidden text-xs opacity-80 absolute bottom-6 mx-2 px-2 rounded-md">
                {r.file.name}
              </div>
              <progress
                className={`progress h-2 px-2 absolute bottom-2 z-2 opacity-80 drop-shadow-md progress-error`}
                value={100}
                max="100"
              />
              {r.errors.map((e, i) => (
                <div className="text-xs" key={'error:' + i + ':' + r.id}>
                  {e.message}
                </div>
              ))}
            </div>
          ))}
          {files.map((file) => (
            <UploadFileView
              {...{ file }}
              onUploadComplete={onFileComplete}
              onUploadChange={onFileChange}
              key={file.id}
              showUploadProgress={showUploadProgress}
            />
          ))}
      </div>
    </>
  )
}

export default ImageDrop

export type { CompleteFile, DropzoneProps, UploadableFile }
