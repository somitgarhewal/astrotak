import axios from 'axios'
import React, { useState } from 'react'
import { deleteProfile } from '../../../../apis'
import DeleteProfileModal from '../deleteModal'
import './profileTable.scss'

const ProfileTable = ({ relativeList, handleEditProfile }) => {
    const [open, setOpen] = useState(false)
    const [idToDelete, setIdToDelete] = useState('')

    const handleYes = () => {
        setOpen(false)
        const headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4ODA5NzY1MTkxIiwiUm9sZXMiOltdLCJleHAiOjE2NzY0NjE0NzEsImlhdCI6MTY0NDkyNTQ3MX0.EVAhZLNeuKd7e7BstsGW5lYEtggbSfLD_aKqGFLpidgL7UHZTBues0MUQR8sqMD1267V4Y_VheBHpxwKWKA3lQ'
        }
        axios.delete(`${deleteProfile}${idToDelete}`, {
            headers: headers
        })
        .then((response) => {
            alert(response.data.message)
            setIdToDelete('')
        })
        .catch((error) => {
            alert(error)
        })
    }

    const handleNo = () => {
        setOpen(false)
    }

    const handleModalOpen = (id) => {
        console.log(id);
        setOpen(true)
        setIdToDelete(id)
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
                relativeList?.map((item, index) => <div key={index} className="card">
                    <div className="nameCol">{item.fullName}</div>
                    <div className="DOBCol">{`${item.birthDetails.dobDay}-${item.birthDetails.dobMonth}-${item.birthDetails.dobYear}`}</div>
                    <div className="TOBCol">{`${item.birthDetails.tobHour}:${item.birthDetails.tobMin}`}</div>
                    <div className="RelationCol">{item.relation}</div>
                    <i className="editCol fa fa-solid fa-pencil" onClick={() => handleEditProfile(index)} />
                    <i className="deleteCol fa fa-solid fa-trash" onClick={() => handleModalOpen(item.uuid)} />
                </div>)
            }
            <DeleteProfileModal open={open} handleYes={handleYes} handleNo={handleNo} />
        </div>
    )
}

export default ProfileTable