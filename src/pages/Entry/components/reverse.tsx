import * as React from 'react'
import InputAddOns from '../../../components/common/Form/InputAddOns'

const Reverse: React.FunctionComponent = () => {
  const { useState } = React
  const [content, setContent] = useState('The quick brown fox')
  const [val, setVal] = useState('')

  const _addContent = () => {
    setContent(val)
  }
  return (
    <div className="column">
      <ul>
        <li><strong>Phrase/sentence:</strong>{content}</li>
        <li><strong>Reversed:</strong> {content.split(' ').reverse().join(' ')}</li>
      </ul>
      <InputAddOns
        type="text"
        placeholder="e.g. This is Valhalla"
        buttonStyles="is-info"
        onChange={e => setVal(e.currentTarget.value)}
        onClick={_addContent}
        buttonLabel="Reverse"
      />
    </div>
  )
}

export default Reverse
