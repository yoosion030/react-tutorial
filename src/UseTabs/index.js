import React from 'react'
import { useState } from 'react'

const content = [
  {
    tab: 'Section 1',
    content: '안녕하세요 1',
  },
  {
    tab: 'Section 2',
    content: '안녕하세요 2',
  },
]

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab)
  if (!allTabs || !Array.isArray(allTabs)) {
    return
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  }
}

const UseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content)
  console.log(currentItem)
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      {currentItem.content}
    </div>
  )
}

export default UseTabs
