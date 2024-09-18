/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/RecruitmentForm.css'; // Replace with your CSS file path
import image5 from '../assets/Recruitment.jpg';
import Footer from './Footer';

const RecruitmentSection = () => {
  const [termsVisible, setTermsVisible] = useState(false);

  const handleTermsClick = () => {
    setTermsVisible(!termsVisible);
  };

  return (
    <>
      <section className="responsive-section">
      <div className="responsive-image" 
     style={{ 
       backgroundImage: `url(${image5})`, 
       width: '100%', 
       height: '400px', 
       backgroundSize: 'cover', 
       backgroundPosition: 'center' 
     }}>
      <div className="text-content">
        
        <p>
          Recruitment with TruxConsult involves a strategic approach to identifying, attracting, and hiring top talent for various organizations. TruxConsult specializes in understanding the unique needs of each client, whether they are looking to fill executive positions, technical roles, or build a diverse workforce.
        </p>
      </div>
</div>

        
      </section>

      <section>
        <div className="recruitment-form-container">
          <form id="recruitmentForm">
            <h2>Recruitment Form</h2>

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="countryCode">Country Code</label>
            <select id="countryCode" name="countryCode" required>
              <option value="+1">USA (+1)</option>
              <option value="+44">UK (+44)</option>
              <option value="+91">India (+91)</option>
              <option value="+86">China (+86)</option>
              <option value="+61">Australia (+61)</option>
              <option value="+33">France (+33)</option>
              <option value="+49">Germany (+49)</option>
              <option value="+81">Japan (+81)</option>
              <option value="+7">Russia (+7)</option>
              <option value="+82">South Korea (+82)</option>
              <option value="+55">Brazil (+55)</option>
              <option value="+20">Egypt (+20)</option>
              <option value="+27">South Africa (+27)</option>
              <option value="+52">Mexico (+52)</option>
              <option value="+91">Pakistan (+92)</option>
              <option value="+234">Nigeria (+234)</option>
              <option value="+62">Indonesia (+62)</option>
              <option value="+39">Italy (+39)</option>
              <option value="+34">Spain (+34)</option>
              <option value="+972">Israel (+972)</option>
              <option value="+966">Saudi Arabia (+966)</option>
              <option value="+971">United Arab Emirates (+971)</option>
              <option value="+65">Singapore (+65)</option>
              <option value="+46">Sweden (+46)</option>
              <option value="+41">Switzerland (+41)</option>
              <option value="+31">Netherlands (+31)</option>
              <option value="+64">New Zealand (+64)</option>
              <option value="+351">Portugal (+351)</option>
              <option value="+60">Malaysia (+60)</option>
              <option value="+54">Argentina (+54)</option>
              <option value="+880">Bangladesh (+880)</option>
              <option value="+32">Belgium (+32)</option>
            </select>

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required pattern="\d{10,15}" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="image">Upload Image</label>
            <input type="file" id="image" name="image" accept="image/*" required />

            <label htmlFor="cv">Upload CV</label>
            <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" required />

            <label htmlFor="specialization">Specialization</label>
            <select id="specialization" name="specialization" required>
              <option value="">Select Specialization</option>
              <option value="structural_engineering">Structural Engineering</option>
              <option value="civil_engineering">Civil Engineering</option>
              <option value="geotechnical_engineering">Geotechnical Engineering</option>
              <option value="environmental_engineering">Environmental Engineering</option>
              <option value="construction_management">Construction Management</option>
              <option value="building_services_engineering">Building Services Engineering</option>
              <option value="quantity_surveying">Quantity Surveying</option>
             <option value="water_resources_engineering">Water Resources Engineering</option>
              <option value="sustainable_building_design">Sustainable Building Design</option>
             
            </select>

            <label htmlFor="idCard">Upload ID Card</label>
            <input type="file" id="idCard" name="idCard" accept=".pdf,.jpg,.jpeg,.png" required />

            <label htmlFor="accountNumber">Account Number</label>
            <input type="text" id="accountNumber" name="accountNumber" required pattern="\d{10,15}" />

            <label htmlFor="accountName">Account Name</label>
            <input type="text" id="accountName" name="accountName" required />

            <label htmlFor="bank">Bank</label>
            <select id="bank" name="bank" required>
              <option value="">Select Bank</option>
              <option value="access_bank">Access Bank Plc</option>
              <option value="first_bank">First Bank of Nigeria Limited</option>
              <option value="gtbank">Guaranty Trust Bank (GTBank)</option>
              <option value="zenith_bank">Zenith Bank Plc</option>
              <option value="uba">United Bank for Africa (UBA)</option>
              <option value="ecobank">EcoBank Nigeria</option>
              <option value="sterling_bank">Sterling Bank Plc</option>
              <option value="diamond_bank">Diamond Bank Plc</option>
              <option value="fidelity_bank">Fidelity Bank Plc</option>
              <option value="union_bank">Union Bank of Nigeria Plc</option>
              <option value="polaris_bank">Polaris Bank</option>
              <option value="fcmb">First City Monument Bank (FCMB)</option>
              <option value="wema_bank">Wema Bank Plc</option>
              <option value="jaiz_bank">Jaiz Bank Plc</option>
              <option value="suntrust_bank">SunTrust Bank Nigeria Limited</option>
              <option value="boi">Bank of Industry (BoI)</option>
              <option value="dbn">Development Bank of Nigeria (DBN)</option>
              <option value="lapo_microfinance">LAPO Microfinance Bank</option>
              <option value="mutual_trust">Mutual Trust Microfinance Bank</option>
              <option value="fortis_microfinance">Fortis Microfinance Bank</option>
            </select>

            <label htmlFor="degree">Highest Degree</label>
            <select id="degree" name="degree" required>
              <option value="Bachelor" data-price="40000">Bachelor (25,000)</option>
              <option value="Master" data-price="60000">Master (35,000)</option>
              <option value="Doctorate" data-price="80000">Doctorate (55,000)</option>
            </select>

            <label>
              <input type="checkbox" id="terms" name="terms" required />
              I agree to the{' '}
              <a href="#" onClick={handleTermsClick}>
                terms and conditions
              </a>
            </label>

            {termsVisible && (
              <div id="terms-and-conditions" style={{ border: '1px solid #ddd', padding: '15px', marginTop: '10px',color: 'black' }}>
                <strong>⚠️ Submission of Credentials and Termination Policy</strong><br /><br />
                By submitting an application through our platform, you affirm that all information and credentials provided are accurate, truthful, and up-to-date. <strong>⚠️ In the event that we determine or reasonably suspect that any credentials or information submitted are false, misleading, or fraudulent, we reserve the right to terminate your application immediately.</strong><br /><br />
                <strong>Termination of Application:</strong> If it is discovered that any credentials or information submitted are not genuine or have been falsified, your application will be terminated without notice. This action may also include the suspension of any associated accounts and potential legal action as deemed appropriate.<br /><br />
                <strong>Responsibility for Accuracy:</strong> You are solely responsible for ensuring the accuracy and truthfulness of the information you provide. Submitting fake or misleading information undermines the integrity of the recruitment process and is considered a serious breach of our terms.<br /><br />
                Please ensure that all documents, certificates, and personal details provided are genuine and correctly represented. If you have any questions or need assistance, please contact our support team.
              </div>
            )}

            <button type="submit">Submit</button>
          </form>
        </div>
        <Footer /> 
      </section>
    </>
  );
};

export default RecruitmentSection;
