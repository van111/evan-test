import * as React from 'react'
import InputAddOns from '../../../components/common/Form/InputAddOns'

const Recurring: React.FunctionComponent = () => {
  const { useState } = React
  const [val, setVal] = useState('')
  const [word, setWord] = useState('ABCA')

  const _addWord = () => {
    setWord(val)
  }

  const _validateRecurringLetter = () => {
    let ctr = 0
    while(word.length > ctr) {
      if (word.search(word[ctr]) !== word.lastIndexOf(word[ctr])) {
        return word[ctr]
      }
      ctr++
    }

    return 'not recurring'
  }

  return(
    <div className="column">
      <div className="content">
      <p>{word} => {_validateRecurringLetter()}</p>
      </div>
      <div className="column">
        <InputAddOns
          type="text"
          placeholder="e.g CABDBA"
          buttonStyles="is-info"
          onChange={e => setVal(e.currentTarget.value)}
          onClick={_addWord}
          buttonLabel="Validate"
        />
      </div>
    </div>
  )
}

export default Recurring