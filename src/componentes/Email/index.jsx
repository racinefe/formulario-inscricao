import "./style.css"
function EmailField() {
    return (
        <div className="inputs">
            <label>Email address</label>
            <input type="email" placeholder="email@company.com"/>
            <button className="centered-button">Subscribe to monthly newsletter</button>
        </div>
    );
}
export default EmailField;