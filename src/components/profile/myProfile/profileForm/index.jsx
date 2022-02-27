import React, { useState, useEffect } from 'react'
import './profileForm.scss'
import Select from 'react-select'
import axios from 'axios'
import { addRelativeProfile, getLocations, updateRelativeProfile } from '../../../../apis'

const ProfileForm = ({ profile, setProfileToEdit, setDisplayProfiles }) => {

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [meridiem, setMeridiem] = useState('AM')
    const [place, setPlace] = useState('')
    const [gender, setGender] = useState('MALE')
    const [relation, setRelation] = useState('1')
    const [locations, setLocations] = useState([])


    useEffect(() => {
        if (profile != null) {
            setName(profile.fullName)
            setDate(profile.birthDetails.dobDay)
            setMonth(profile.birthDetails.dobMonth)
            setYear(profile.birthDetails.dobYear)
            setHour(profile.birthDetails.tobHour)
            setMinute(profile.birthDetails.tobMin)
            setMeridiem(profile.birthDetails.meridiem)
            setLocations([{ value: profile.birthPlace.placeId, label: profile.birthPlace.placeName }])
            setPlace({ value: profile.birthPlace.placeId, label: profile.birthPlace.placeName })
            setRelation(profile.relation)
            setGender(profile.gender)
        }
    }, [profile])

    const converToOptions = (data) => {
        const options = data.map(item => {
            return {
                value: item.placeId,
                label: item.placeName,
            }
        })
        return options
    }

    const handleSelectChange = (val) => {
        axios(`${getLocations}${val}`)
            .then(res => {
                console.log('res', res)
                if (res?.data) {
                    setLocations(converToOptions(res.data.data))
                }
            })
    }

    const handleSave = () => {
        const data = {
            birthDetails: {
                dobDay: date,
                dobMonth: month,
                dobYear: year,
                meridiem: meridiem,
                tobHour: hour,
                tobMin: minute
            },
            birthPlace: {
                placeId: place.value,
                placeName: place.label
            },
            fullName: name,
            gender: gender,
            relationId: relation,
            firstName: name.split(' ')[0],
            lastName: name.split(' ')[1] || '',
            ...profile
        }
        console.log('data', data);
        const headers = {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4ODA5NzY1MTkxIiwiUm9sZXMiOltdLCJleHAiOjE2NzY0NjE0NzEsImlhdCI6MTY0NDkyNTQ3MX0.EVAhZLNeuKd7e7BstsGW5lYEtggbSfLD_aKqGFLpidgL7UHZTBues0MUQR8sqMD1267V4Y_VheBHpxwKWKA3lQ'
        }
        let request = ''
        let requestType = 'post'
        if (profile != null) {
            request = `${updateRelativeProfile}${profile.uuid}`
            requestType = 'put'
        } else {
            request = addRelativeProfile
        }

        axios[`${requestType}`](request, data, {
            headers: headers
        })
            .then((response) => {
                alert(response.data.message)
                if (profile != null) {
                    setDisplayProfiles(true)
                    setProfileToEdit(-1)
                }
            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <div className='profileForm'>
            <div className="formName">
                <label>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="formDOB">
                <label>Date of Birth</label>
                <div className="formDOBInputs">
                    <div className="w-33">
                        <input type='number'
                            placeholder='DD'
                            value={date}
                            onChange={(e) => {
                                let value = e.target.value
                                if (value.length > 2) return
                                setDate(value)
                            }} />
                    </div>
                    <div className="w-33">
                        <input
                            type='number'
                            placeholder='MM'
                            value={month}
                            onChange={(e) => {
                                let value = e.target.value
                                if (value.length > 2) return
                                setMonth(value)
                            }}
                        />
                    </div>
                    <div className="w-33">
                        <input
                            type='number'
                            placeholder='YYYY'
                            value={year}
                            onChange={(e) => {
                                let value = e.target.value
                                if (value.length > 4) return
                                setYear(e.target.value)
                            }
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="formTOB">
                <label>Time of Birth</label>
                <div className="formTOBInputs">
                    <div className="w-33">
                        <input
                            placeholder='HH'
                            value={hour}
                            type='number'
                            onChange={(e) => {
                                let value = e.target.value
                                if (value.length > 2) return
                                setHour(value)
                            }
                            }
                        />
                    </div>
                    <div className="w-33">
                        <input
                            placeholder='MM'
                            value={minute}
                            type='number'
                            onChange={(e) => {
                                let value = e.target.value
                                if (value.length > 2) return
                                setMinute(e.target.value)
                            }}
                        />
                    </div>
                    <div className="w-33 meridiem">
                        <div className={meridiem === 'AM' ? 'selectedMeridiem' : null} onClick={() => setMeridiem('AM')}>AM</div>
                        <div className={meridiem === 'PM' ? 'selectedMeridiem' : null} onClick={() => setMeridiem('PM')}>PM</div>
                    </div>
                </div>
            </div>
            <div className="formPlace">
                <label>Place of Birth</label>
                <Select onInputChange={(e) => handleSelectChange(e)} options={locations} onChange={(e) => setPlace(e)} />
            </div>

            <div className="row">
                <div className="formGender">
                    <label>Gender</label>
                    <select onChange={(e) => setGender(e.target.value)}>
                        <option value='FEMALE'>FEMALE</option>
                        <option value='MALE'>MALE</option>
                    </select>
                </div>
                <div className="formRelation">
                    <label>Relation</label>
                    <select onChange={(e) => setRelation(e.target.value)}>
                        <option value='1'>Mother</option>
                        <option value='2'>Father</option>
                        <option value='3'>Brother</option>
                        <option value='4'>Sister</option>
                        <option value='5'>Spouse</option>
                        <option value='6'>Uncle</option>
                        <option value='7'>Aunty</option>
                        <option value='8'>Son</option>
                        <option value='9'>Daughter</option>
                    </select>
                </div>
            </div>
            <div className="saveChanges">
                <button onClick={() => handleSave()}>Save Changes</button>
            </div>
        </div>
    )
}

export default ProfileForm