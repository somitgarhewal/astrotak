import React from 'react'
import './body.scss'

const Body = ({ categories, selectedCategory, setSelectedCategory, question, setQuestion }) => {
    return (
        <div className='bodyContainer'>
            <div className="descriptionContainer">
                <div className="title">
                    Ask a Question
                </div>
                <div className="description">
                    Seek accurate answers to your life problems and get guidance towards the right the path.
                    Whether the problem is related to love, self, life, business, money, education or work,
                    our astrologers will do an in depth study of your birth chart to provide personalized responses
                    along with remedies.
                </div>
            </div>
            <div className="title">Choose Category</div>
            <div className="chooseCategorySelect">
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    {
                        categories.map(item => <option key={item.id} value={item.id} >{item.name}</option>)
                    }
                </select>
            </div>
            <div className="textareaContainer">
                <textarea
                    maxLength={150}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <div className="characterCount">{`${question.length}/150`}</div>
            </div>
            <div className="title">
                Ideas what to Ask (Select Any)
            </div>
            <div className="suggestions">
                {selectedCategory?.suggestions.map((item, index) => <div key={index} className='suggestion'>
                    <div className="icon">
                        <div className='diamond-narrow'>
                            <i className="fa fa-question fa-lg question-mark" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className='suggestionText'>{item}</div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Body