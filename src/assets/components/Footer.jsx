import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="mb-1">Weather Freak © {new Date().getFullYear()}</p>
        <small>
          Data provided by{" "}
          <a
            href="https://openweathermap.org/"
            >
            OpenWeather
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer