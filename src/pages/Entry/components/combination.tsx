import * as React from 'react'
import InputAddOns from '../../../components/common/Form/InputAddOns'

const Combination: React.FunctionComponent = () => {
  const { useState } = React
  const [userInput, setUserInput] = useState()
  const [list, setList] = useState([1, 2, 6, 4])

  const _addList = () => {
    if (userInput) {
      setList(userInput.split(','))
    }
  }

  const _sumOfEight = () => {
    let ctr = 0
    let result = 0
    let innerCtr = 0
    while(list.length > ctr) {
      innerCtr = 0
      while(list.length > innerCtr) {    
        result = parseInt(list[ctr].toString(), 10)  + parseInt(list[innerCtr].toString(),10)
        if (ctr !== innerCtr && result === 8) {
          return `Sum = ${result} Yes`
        }
        innerCtr++
      }
      ctr++
    }
    return 'Sum = 8 No'
  }

  return (
    <div className="column">
      <div className="content">
        <p>
          {list.join(',')} {_sumOfEight()}
        </p>
      </div>
      <InputAddOns
        type="text"
        placeholder="e.g. 1,2,3,4"
        buttonLabel="Validate"
        buttonStyles="is-info"
        help="Include comma(,) to create a list"
        onChange={(e) => setUserInput(e.currentTarget.value)}
        onClick={_addList}
      />
    </div>
  )
}

export default Combination