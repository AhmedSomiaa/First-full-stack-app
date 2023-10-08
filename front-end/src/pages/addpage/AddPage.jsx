import "./addPage.css";
import axios from "axios";

export default function AddPage() {
    return (
        <div className="addPage">
            <form className="addPageForm">
                <div className="addPageFormGroup">
                    <label htmlFor="fileInput">
                        <i className="addPageIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                        className="addPageInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="addPageFormGroup">
                    <textarea
                        className="addPageInput addPageText"
                        placeholder="Share your description..."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className="addPageSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}