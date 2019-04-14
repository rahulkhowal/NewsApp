import React from 'react'
import UserInterface from '../UserInterface/userInterface'
import '../App.css'

const Input = (props) => {
    return (
        <div >
            <form onSubmit={props.getupdates}>
                <select name="country" className="text-input">
                    <option value="">Select a country</option>
                    <option value="IN">India</option>
                    <option value="au">Australia </option>
                    <option value="be">Belgium</option>
                    <option value="ca">Canada </option>
                    <option value="eg">Egypt </option>
                    <option value="fr">France</option>
                    <option value="de">Germany </option>
                    <option value="id">Indonesia </option>
                    <option value="il">Israel </option>
                    <option value="jp">Japan </option>
                    <option value="mx">Mexico</option>
                </select><br></br>
                <select name="catagory" className="text-input" >
                    <option value="">select a category</option>
                    <option value="business">business</option>
                    <option value="entertainment">entertainment</option>
                    <option value="health">health</option>
                    <option value="science">science</option>
                    <option value="technology">technology</option>
                </select><br></br>
                <button >GetNews</button>
            </form>
            <UserInterface NewsItems={props.NewsItems} />
        </div>
    )
}
export default Input