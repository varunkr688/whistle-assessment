import "../styles/ClinicBanner.css";
function ClinicBanner() {
  return (
    <div>
      <div className="clinic">
        <div className="small">
          <div className="book">
            <div className="cil">
              <div className="pp">
                <p>Book a Free 3D Teeth Scan and Orthodontist Consult in a</p>
                <p>Clove Dental Clinic near you.</p>
              </div>
              <div className="poster">
                <p className="pa">
                  clove <span class="smiley-text">:)</span>
                </p>
                <p className="pb">DENTAL</p>
              </div>
            </div>
            <div className="find">
              <label>Find Clinic</label>
              <select id="clinic-select"></select>
            </div>
          </div>
        </div>
      </div>
      <div className="linear">
        <p>Our inaugural launch benefit</p>
        <p>Free teeth scan<spna>worth ₹500</spna></p>
        <p>Free orthodontist consultation<spna>worth ₹1500</spna></p>
        <p>Our inaugural launch benefit</p>
        <p>Free teeth scan<spna>worth ₹500</spna></p>
        <p>Free orthodontist consultation<spna>worth ₹1500</spna></p>
      </div>
    </div>
  );
}

export default ClinicBanner;
