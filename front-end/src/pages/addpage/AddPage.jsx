import { useEffect, useState } from "react";
import "./addPage.css";
import axios from "axios";
import jwtDecode from "jwt-decode";

export default function AddPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            authorId: user.id,
            title,
            description,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.image_path = filename;
            try {
                await axios.post("http://localhost:3000/upload", data)
            } catch (err) {
                console.log(err)
            }
            try {
                const token = localStorage.getItem("token");
                await axios.post(`http://localhost:3000/recipes/${user.id}`, newPost, {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                window.location.replace("/");

            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div className="addPage">
            {file &&
                <img
                    className="addPageImg"
                    src={URL.createObjectURL(file)}
                    alt=""
                />
            }
            <form className="addPageForm" onSubmit={handleSubmit}>
                <div className="addPageFormGroup">
                    <label htmlFor="fileInput">
                        <i className="addPageIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} onChange={e => setFile(e.target.files[0])} />
                    <input
                        className="addPageInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="addPageFormGroup">
                    <textarea
                        className="addPageInput addPageText"
                        placeholder="Share your description..."
                        type="text"
                        autoFocus={true}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button className="addPageSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}