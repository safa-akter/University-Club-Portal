import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [menu, setMenu] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [club, setClub] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function changePage(name) {
    setPage(name);
    setMenu(false);
    setError("");
    setSuccess("");
  }

  function submitForm(e) {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmPassword === "" ||
      age === "" ||
      club === "" ||
      gender === ""
    ) {
      setError("Please fill all required fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password does not match.");
      return;
    }

    if (!/^01[3-9]\d{8}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setSuccess("Form submitted successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setAge("");
    setClub("");
    setGender("");
    setMessage("");
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setAge("");
    setClub("");
    setGender("");
    setMessage("");
    setError("");
    setSuccess("");
  }

  return (
    <div className="app">

      <nav className="navbar">
        <h2 onClick={() => changePage("home")}>UniClub</h2>

        <button
          className="menu-button"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>

        <div className={menu ? "nav-links open" : "nav-links"}>
          <button onClick={() => changePage("home")}>Home</button>
          <button onClick={() => changePage("clubs")}>Clubs</button>
          <button onClick={() => changePage("events")}>Events</button>
          <button onClick={() => changePage("membership")}>
            Membership
          </button>
        </div>
      </nav>

      {page === "home" && (
        <>
          <section className="hero">
            <div>
              <p>Welcome to</p>

              <h1>
                University <span>Club Portal</span>
              </h1>

              <p>
                Join clubs, take part in events and meet new people.
              </p>

              <button
                className="primary-button"
                onClick={() => changePage("membership")}
              >
                Join a Club
              </button>

              <button
                className="secondary-button"
                onClick={() => changePage("clubs")}
              >
                View Clubs
              </button>
            </div>

            <div className="hero-box">
              <div>🎓</div>
              <h3>University Life</h3>
              <p>Learn and enjoy university life.</p>
            </div>
          </section>

          <section className="clubs-section">
            <h2>Our Clubs</h2>
            <p>Choose a club and join us.</p>

            <div className="cards">

              <div className="card">
                <div className="card-icon">💻</div>
                <h3>Computer Club</h3>
                <p>Learn programming and computer skills.</p>
                <button onClick={() => changePage("membership")}>
                  Join Now
                </button>
              </div>

              <div className="card">
                <div className="card-icon">📷</div>
                <h3>Photography Club</h3>
                <p>Learn photography and creative skills.</p>
                <button onClick={() => changePage("membership")}>
                  Join Now
                </button>
              </div>

              <div className="card">
                <div className="card-icon">⚽</div>
                <h3>Sports Club</h3>
                <p>Play sports and join activities.</p>
                <button onClick={() => changePage("membership")}>
                  Join Now
                </button>
              </div>

            </div>
          </section>
        </>
      )}

      {page === "clubs" && (
        <section className="page">
          <h1>Our Clubs</h1>

          <div className="cards">

            <div className="card">
              <div className="card-icon">💻</div>
              <h3>Computer Club</h3>
              <p>Programming and technology activities.</p>
            </div>

            <div className="card">
              <div className="card-icon">📷</div>
              <h3>Photography Club</h3>
              <p>Photography and creative activities.</p>
            </div>

            <div className="card">
              <div className="card-icon">⚽</div>
              <h3>Sports Club</h3>
              <p>Sports and games.</p>
            </div>

          </div>
        </section>
      )}

      {page === "events" && (
        <section className="page">
          <h1>Upcoming Events</h1>

          <div className="event">
            <h3>Programming Contest</h3>
            <p>10 October 2026</p>
          </div>

          <div className="event">
            <h3>Photography Exhibition</h3>
            <p>18 October 2026</p>
          </div>

          <div className="event">
            <h3>Sports Day</h3>
            <p>25 October 2026</p>
          </div>
        </section>
      )}

      {page === "membership" && (
        <section className="form-section">
          <h1>Membership Form</h1>
          <p>Fill up the form to join a club.</p>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <form onSubmit={submitForm}>

            <label>Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />

            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <label>Phone *</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="01XXXXXXXXX"
            />

            <label>Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />

            <label>Confirm Password *</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
            />

            <label>Age *</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
            />

            <label>Choose Club *</label>
            <select
              value={club}
              onChange={(e) => setClub(e.target.value)}
            >
              <option value="">Select a club</option>
              <option value="Computer Club">Computer Club</option>
              <option value="Photography Club">Photography Club</option>
              <option value="Sports Club">Sports Club</option>
            </select>

            <label>Gender *</label>

            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>

            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write something..."
            ></textarea>

            <div className="form-buttons">
              <button type="submit" className="submit-button">
                Submit
              </button>

              <button
                type="button"
                className="reset-button"
                onClick={resetForm}
              >
                Reset
              </button>
            </div>

          </form>
        </section>
      )}

      <footer>
        <p>© 2026 UniClub</p>
        <p>University Club Portal</p>
      </footer>

    </div>
  );
}

export default App;