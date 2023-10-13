import { Editor } from '@tinymce/tinymce-react'
import useDebug from 'hooks/useDebug'
import { Dispatch, SetStateAction, useCallback, useRef } from 'react'

import { __site__, __tinyApi__, uuid } from 'utils/helpers'
import Label, {LabelProps} from './Label'

const { debug } = useDebug('forms/InlineEditor', 'DEBUG')

type TinyMCEProps = LabelProps & {
  content?: string
  setContent?: Dispatch<SetStateAction<string | null>>
  noToolbar?: boolean
  writingToolbar?: boolean
  readonly?: boolean
}

export default function InlineTinyMCE({
  content,
  setContent,
  ...props
}: TinyMCEProps) {
  const editorId = `editor-${uuid()}`
  const editorRef = useRef(editorId)

  const update = useCallback(() => {
    if (editorRef.current && setContent) {
      // @ts-ignore
      const c = editorRef.current.getContent()
      setContent(() => c)
    }
  }, [])

  const writingTools = `
    blocks fontfamily fontsize | 
    bold italic forecolor | 
    alignleft aligncenter alignright alignjustify lineheight | 
    bullist numlist outdent indent removeformat | 
    table image |
    undo redo
  `

  return (
    <>
      {props.label && <Label label={props.label} labelClass={props.label} />}
      <Editor
        apiKey={__tinyApi__}
        id={editorId}
        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
        // @ts-ignore
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={content}
        onChange={update}
        init={{
          skin: window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'oxide-dark'
            : 'oxide',
          content_css: window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'default',
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'anchor',
            'autolink',
            'charmap',
            'fullscreen',
            'image',
            'insertdatetime',
            'lists',
            'link',
            'media',
            'preview',
            'searchreplace',
            'table',
          ],
          toolbar:
            props.readonly || props.noToolbar
              ? false
              : props.writingToolbar
              ? writingTools
              : `bold italic`,
          // @ts-ignore
          // mentions_fetch: (query, success) => {
          //   debug('mentions_fetch', {query, success})
          //   mentionsFetch(query, success)
          // }
        }}
      />
      {/* <div className="font-sans">
        <HtmlContent content={content ?? ''} />
      </div> */}
    </>
  )
}
