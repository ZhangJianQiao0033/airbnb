import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { EntireFilterrWrapper } from './style'
import filterData from "@/assets/data/filter_data.json"
import classNames from 'classnames'
const Entirefilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([])
  function itemClickHandle(item) {
    const newItems = [...selectItems]
    if(newItems.includes(item)) {
      const index = newItems.findIndex(filterItem => filterItem === item ) 
      newItems.splice(index, 1)
    } else {
      newItems.push(item)
    }
    setSelectItems(newItems)
    console.log(newItems);
  }
  return (
    <EntireFilterrWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return (
              <div className={classNames("item", {active: selectItems.includes(item)})} onClick={e => itemClickHandle(item)} key={item}>{item}</div>
            )
          })
        }

      </div>
    </EntireFilterrWrapper>
  )
})

Entirefilter.propTypes = {}

export default Entirefilter