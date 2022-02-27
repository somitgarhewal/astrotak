import React from 'react'
import './profileTable.scss'

const ProfileTable = ({ relativeList, handleEditProfile }) => {

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
                relativeList?.map((item, index) => <div key={index} className="card">
                    <div className="nameCol">{item.fullName}</div>
                    <div className="DOBCol">{`${item.birthDetails.dobDay}-${item.birthDetails.dobMonth}-${item.birthDetails.dobYear}`}</div>
                    <div className="TOBCol">{`${item.birthDetails.tobHour}:${item.birthDetails.tobMin}`}</div>
                    <div className="RelationCol">{item.relation}</div>
                    <i className="editCol fa fa-solid fa-pencil" onClick={() => handleEditProfile(index)}/>
                    <i className="deleteCol fa fa-solid fa-trash" />
                </div>)
            }
        </div>
    )
}

export default ProfileTable