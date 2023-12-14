
const Resume = () => {
    
    return (
        <div className="main-band">
            <div className="exp-band">
               <h2>Work Experience</h2> 
               <div className="work-band">
                  <h3>NCR Voyix</h3>
                  <h4>Web Developer</h4>
                  <h4>July 2016 - present</h4>
                  <ul>
                    <li>Collaborated with a team of project managers and designers to build custom Wordpress sites.</li>
                    <li> Increased quality of user experience by using ADA guidelines and responsive best practices.</li>
                    <li>Transformed design prototypes into websites using HTML, CSS, PHP, jQuery, React.js and JavaScript.</li>
                    <li>Improved team efficiency using Javascript, Bash, and Python to make internal tools.</li>
                    <li>Translated customer specific mockups into financial forms using HTML, CSS, JavaScript, Velocity and jQuery.</li>
                    <li>Maintained clean robust code using Git version control.</li>
                    <li>Member of a team of developers supporting and maintaining 150+ websites.</li>
                    <li>Qualitatively improved speed of developer workflow by implementing 2 Chrome extensions to make customer information more accessible.</li>
                  </ul>
               </div>
               <div className="work-band">
                   <h3>Peachtree Medical Billing</h3>
                   <h4>Software Developer Co-op</h4>
                   <h4>November 2015 - May 2016</h4>
                   <ul>
                     <li>Designed and developed Chrome extension to make task management more efficient.</li>
                     <li>Used JasmineJS to run unit tests on project code.</li>
                   </ul>
               </div>
               <div className="work-band">
                   <h3>Webber-Coleman Woodworks</h3>
                   <h4>Designer/Cabinetmaker</h4>
                   <h4>September 2001 - November 2015</h4>
                   <ul>
                     <li>Worked with customers and developers to design and build custom cabinetry using Cabinet Vision CAD software.</li>
                     <li>Manufactured cabinets using a Computer Numeric Controlled router using G Code.</li>
                     <li>Installed custom cabinets and trim at job sites.</li>
                   </ul>
               </div>
            </div>
            <div className="school-band">
                <div className="degree-band">
                    <h3>University of Georgia</h3>
                    <h4>Bachelor of Computer Science</h4>
                    <h4>May 2016</h4>
                </div>
                <div className="degree-band">
                    <h3>University of Georgia</h3>
                    <h4>Bachelor of Arts in English</h4>
                    <h4>May 2001</h4>
                </div>
            </div>
        </div>
    )
}

export default Resume;