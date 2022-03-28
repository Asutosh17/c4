// User should be able to add/create new meetups 

import axios from "axios";
import { useState } from "react";

export const AddMeetup = () => {
  const [data, setData] = useState({
    title:"",
    location:"",
    date:"",
    time:"",
    theme:"",
    description:"",
    image:""
  })

  const handelChange = (event) => {
    const {className, value} = event.target
    setData({...data,[className]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post("http://localhost:8080/meetups",data)
  }

  return (
    <div className="addMeetupContainer">
      <form onSubmit={handleSubmit}>
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className="title" onChange={handelChange} value={data.title} required />
        <label>Location</label>
        <select value={"data.location"} className="location" onChange={handelChange}>
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          onChange={handelChange}
          value={data.date}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          onChange={handelChange}
          value={data.time}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select value={data.theme} className="theme" onChange={handelChange}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          onChange={handelChange}
          value={data.description}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          onChange={handelChange}
          value={data.image}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
