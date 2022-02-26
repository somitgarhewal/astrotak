import React from 'react'
import './profileTable.scss'

const ProfileTable = ({ relativeList }) => {

    const formateDate = (val) => {
        const date = new Date(val)
        return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
    }
    const formateTime = (val) => {
        const time = val.split('T')[1]
        return time.slice(0, 5)
    }
    return (
        <div className='profileTable'>
            <div className="tableHeader">
                <div className="nameCol">Name</div>
                <div className="DOBCol">DOB</div>
                <div className="TOBCol">TOB</div>
                <div className="RelationCol">Relation</div>
                <div className="othersCol"></div>
            </div>
            {
                relativeList.map((item, index) => <div key={index} className="card">
                    <div className="nameCol">{item.fullName}</div>
                    <div className="DOBCol">{formateDate(item.dateAndTimeOfBirth)}</div>
                    <div className="TOBCol">{formateTime(item.dateAndTimeOfBirth)}</div>
                    <div className="RelationCol">{item.relation}</div>
                    <i className="editCol fa fa-solid fa-pencil" />
                    <i className="deleteCol fa fa-solid fa-trash" />
                </div>)
            }
        </div>
    )
}

export default ProfileTable