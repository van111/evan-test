import * as React from 'react'
import InputAddOns from '../../../components/common/Form/InputAddOns'

const Fibonacci: React.FunctionComponent = () => {
  const { useState } = React
  const [numberToGenerate, setNumberToGenerate] = useState(0)
  const [fibo, setFibo] = useState([''])
  const _generate = () => {
    let newValue = 0
    let currentValue = 1
    let oldValue = 0
    let f:string[] = []
    for(let ctr = 0; ctr <= numberToGenerate; ctr++) {
      oldValue = currentValue
      currentValue = currentValue + newValue
      newValue = oldValue
      f.push(newValue.toString())
    }
    setFibo(f)
  }
  return (
    <div className="column">
      <div className="content">
        <span>Input the number(s) of fibonacci you want to display:</span>
        <InputAddOns
          type="number"
          placeholder="e.g. 5"
          buttonLabel="Generate"
          buttonStyles="is-info"
          onChange={e => setNumberToGenerate(
            parseInt(e.currentTarget.value, 10)
          )}
          onClick={_generate}
        />
      </div>
      <div className="content">
        <p>
          Result: {fibo.join(",")}
        </p>
      </div>
    </div>
  )
}

export default Fibonacci