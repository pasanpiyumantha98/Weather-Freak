import 'bootstrap/dist/css/bootstrap.min.css';

function Footer1() {
  return (
    <footer className="footer1">
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

export default Footer1