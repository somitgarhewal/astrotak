import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../apis'
import Body from './body'
import BottomButton from './bottomButton'
import Footer from './footer'
import Header from './header'
import WalletBar from './walletBar'

const AskQuestion = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const [question, setQuestion] = useState('')

  useEffect(() => {
    axios(getAllCategories)
      .then(res => {
        console.log('res', res)
        if (res?.data) {
          setCategories(res.data.data)
          setSelectedCategory(res.data.data[0])
        }
      })
  }, [])

  const handleSelectCategory = (id) => {
    setSelectedCategory(categories.find(item => item.id == id))
  }

  return (
    <div>
      <Header />
      <WalletBar />
      <Body
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleSelectCategory}
        question={question}
        setQuestion={setQuestion}
      />
      <BottomButton category={selectedCategory} />
      <Footer />
    </div>
  )
}

export default AskQuestion