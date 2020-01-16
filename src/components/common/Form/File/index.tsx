import * as React from 'react'

interface FileUploadProps {
  class_name?: string
  name?: string
  text: string
  error?: string
}

const FileUpload = (props: FileUploadProps) => {
  const {
    text,
    class_name,
    name,
    error,
  } = props

  const file_upload_styles = [class_name]
  if (error) file_upload_styles.push('is-danger') 

  return (
    <div className="file">
      <label className="file-label">
        <input
          className={file_upload_styles.join('')}
          type="file"
          name={name}
        />
        <span className="file-cta">
          <span className="file-icon">
            <i className="fas fa-upload"></i>
          </span>
          <span className="file-label">
            {text}
          </span>
        </span>
      </label>
      { error && <p className="help is-danger">{error}</p> }
    </div>
  )
}

export default FileUpload
