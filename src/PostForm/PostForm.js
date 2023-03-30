import React, { useContext} from "react";
import "./PostForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import PostView from '../PostView/PostView'
import ABC from "../Context/userContext";

const PostForm = () => {
  // const { information, setinformation } = useContext(ABC);
  const [user, setuser] = useState({
    author: "",
    location: "",
    description: "",
  });

  const [Image, setImage] = useState(null);
  const navigate = useNavigate();
  // const context=createContext()

  // const [dataTrans,usedataTrans]=useState(null)

  let Atname, value;
  const handleInputs = (e) => {
    // console.log(e)
    Atname = e.target.name;
    value = e.target.value;
    console.log(Atname, value);
    setuser({
      ...user,
      [Atname]: value,
    });
    // console.log(user);
  };

  const OnImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(Image);
      setImage({
        image: URL.createObjectURL(img),
      });
      console.log(Image);
    }
  };

  const PostFunc = async (e) => {
    console.log("check postfunc");
    e.preventDefault();
    const { author, location, description } = user;
    const img = Image.image;

    const FetchData = await fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        location,
        description,
        img,
      }),
    });
   
    // setinformation(response.data.result);


    if (FetchData.status === 200) {
      navigate("/Postview");
    }

    if (FetchData.status !== 200 || !FetchData) {
      window.alert("Not able to post");
      console.log("Not able to post");
    }
  };

  return (
    <div className="formbox">
      <form method="POST" onSubmit={PostFunc}>
        <input
          type="file"
          value={user.file}
          name="file"
          onChange={OnImageChange}
          id="fileinput"
        />
        <div className="inputAuthLoc">
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={user.author}
            onChange={handleInputs}
            className="authloc"
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={user.location}
            onChange={handleInputs}
            className="authloc"
          />
        </div>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={user.description}
          onChange={handleInputs}
          id="description"
        />

        <button type="submit" id="postbutton">
          Post
        </button>
      </form>
    </div>
    //  </context.Provider>
  );
};

export default PostForm;
