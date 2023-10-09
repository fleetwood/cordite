import {useToast} from "context/ToastContextProvider"
import {ReactNode,useEffect,useState} from "react"
import {variantProps} from "types"
import useDebug from "../../hooks/useDebug"
const {debug} = useDebug('toasty')

type ToastType = variantProps & {
  message: ReactNode | string
  toastId: string
}

export const LoggedIn = () => <div>Please <a href="/login" className="text-primary underline">log in</a> first</div>

const Toasty = ({ message, variant = 'neutral', toastId }: ToastType) => {
  const { slice } = useToast()
  const [markedForDeletion, setMarkedForDeletion] = useState(false)

  const markForDelete = async () => {
    setMarkedForDeletion(true)
    setTimeout(() => slice(toastId), 500)
  }

  useEffect(() => {
    const prune = setInterval(markForDelete, 3000)
    return () => clearInterval(prune)
  }, [])

  return (
    <div className={`
      relative w-full
      flex flex-row 
      transition-all duration-500
      alert alert-${variant}
      ${markedForDeletion ? `opacity-0 scale-0` : `inline`}`
    }>
      <button
        onClick={markForDelete}
        className="btn btn-sm btn-circle absolute right-2 top-2"
      >
        ✕
      </button>
      <div className="">
        <span>{message}</span>
      </div>
    </div>
  )
}

export default Toasty
