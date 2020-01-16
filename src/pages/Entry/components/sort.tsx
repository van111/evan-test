import * as React from 'react'
import InputAddOns from '../../../components/common/Form/InputAddOns'

const Sort: React.FunctionComponent = () => {
  const { useState } = React
  const [val, setVal] = useState('')
  const [list, setList] = useState([34, 7, 23, 32, 5, 62] as any)
  
  const _addContent = () => {
    if (val) {
      setList(val.split(','))
    }
  }

  const _sort = () => {
    return list.slice().sort((a: any, b: any) => a - b).join(',')
  }
  return (
    <div className="column">
      <div className="content">
        <p><strong>Unordered list:</strong>{list.join(', ')}</p>
        <p><strong>Sorted list:</strong>{_sort()}</p>
      </div>
      <div className="level">
        <div className="level-left">
          <InputAddOns
            type="text"
            placeholder="e.g. 1,2,3,4"
            buttonLabel="Sort array"
            help="Include comma(,) to create a list"
            buttonStyles="is-info"
            onChange={(e) => setVal(e.currentTarget.value)}
            onClick={_addContent}
          />
        </div>
      </div>
    </div>
  )
}

export default Sort