import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pt-32 pb-20">
        <article className="prose prose-lg mx-auto text-center [&_h2]:font-bold [&_h3]:font-bold">
          <div className="mb-16 flex flex-col items-center gap-6">
            <div className="text-gray-500 text-base mb-2">12 Dec, 2024 <span className="mx-2">|</span> <span className="font-medium">PushSend Team</span></div>
            <h1 className="text-4xl font-bold mb-2 leading-tight">Privacy Policy</h1>
            <p className="text-gray-800 mb-6">
            We are PushSend – providing lead generation and outbound marketing services to our global client base. We are a technology company that helps businesses generate qualified leads and optimize their sales pipeline. Your privacy is important to us, and we are committed to protecting your personal information.
        </p>
            <p className="text-gray-800 mb-6">
            <strong>By email to our Data Protection Officer:</strong> <a href="mailto:richard@pushsend.co" className="text-blue-600 hover:underline">richard@pushsend.co</a>
        </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Our GDPR Policy</h2>
            
            <p>
              We are committed to safeguarding the privacy and accuracy of the personal data of our website visitors, service users and email recipients.
            </p>

            <p>
              This policy applies where we are acting as a Controller with respect to the personal data of our website visitors, service users, email recipients and personal data collected from public sources; in other words, where we determine the purposes and means of the processing of that personal data.
            </p>

            <p>
              In this privacy policy, "We", "Us" and "Our" refer to PushSend.
            </p>

            <p>
              Any reference to a Data Subject means a natural person whose personal data is processed by us as a Data Controller, Joint Controller or as a Data Processor, in other words, you.
            </p>

            <p>
              Any reference to the GDPR applies to both the UK GDPR and EU GDPR. Likewise, any reference to EU countries will also apply to the UK. This will remain the case so long as the UK is subject to an adequacy decision by the EU. Should there be a conflict between the two, the version that grants data subjects the greatest protection will apply.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">How We Use Your Personal Data</h2>
            
            <p>
              We want to be clear with you about how we use your data, so in this section we talk about the general categories of personal data that we may process and, in the case of personal data that we did not obtain directly from you, we'll tell you where we got your data and the purposes for which we may process your data; finally, and very importantly, we'll explain the legal bases of the processing which applies to us and you.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">The General Categories of Personal Data That We May Process:</h3>

            <h4 className="text-lg font-bold mt-6 mb-3">Usage Data</h4>
            <p>
              We may process data about your use of our website and services ("Usage Data"). The Usage Data may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use. The source of the Usage Data is Google Analytics as well as our analytics tracking system. This Usage Data may be processed for the purposes of analysing the use of the website and services. The legal basis for this processing is our legitimate interests, namely monitoring and improving our website and services, and tailoring any communication with you.
            </p>

            <h4 className="text-lg font-bold mt-6 mb-3">Account Data</h4>
            <p>
              We may process your Account Data ("Account Data"). The Account Data may include your name, email address, company information, and other contact and related information we may collect about you. The source of the Account Data is generally you or your employer. The Account Data may be processed for the purposes of providing our services, ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you. The legal basis for this processing is the performance of a contract between you and us [or your employer] and/or taking steps, at your request, to enter into such a contract.
            </p>

            <h4 className="text-lg font-bold mt-6 mb-3">Service Data</h4>
            <p>
              We may process your personal data that are provided in the course of the use of our services ("Service Data"). The Service Data may include name, email address, telephone number, and other related information. The source of the Service Data is you or your employer. The Service Data may be processed for the purposes of operating our website, providing our services, ensuring the security of our website and services, maintaining back-ups of our databases and communicating with you. The legal basis for this processing is the performance of a contract between you and us and/or taking steps, at your request, to enter into such a contract.
            </p>

            <h4 className="text-lg font-bold mt-6 mb-3">Prospect Data</h4>
            <p>
              We may process information related to HubSpot implementations, marketing automation workflows, and client business requirements ("Service Data"). This data may include business information, marketing goals, technical requirements, and other relevant professional information. Service Data may be processed for the purposes of providing HubSpot optimization services and improving our client's marketing automation. The legal basis for this processing is our legitimate interests, namely to develop our business and provide services to our clients.
            </p>

            <h4 className="text-lg font-bold mt-6 mb-3">HubSpot Data</h4>
            <p>
              We may process data related to HubSpot implementations and marketing automation ("HubSpot Data"). This includes workflow performance metrics, automation effectiveness, and platform optimization data. The source of the HubSpot Data is our HubSpot partner platform and client interactions. The legal basis for this processing is legitimate interests and/or performance of a contract with our clients.
            </p>

            <h4 className="text-lg font-bold mt-6 mb-3">Enquiry Data</h4>
            <p>
              We may process information contained in any enquiry you submit to us regarding goods and/or services ("Enquiry Data"). The Enquiry Data may be processed for the purposes of offering, marketing and selling relevant goods and/or services to you. The legal basis for this processing is consent or legitimate interests, depending on the nature of the enquiry and our relationship with you.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Our Legitimate Interest</h2>
            
            <p>
              Our lawful bases for processing include our Legitimate Interest to process your data. In this regard, we have carefully considered your rights and expectations of privacy and our rights, alongside the rights of our clients, to run our business. We have conducted thorough Legitimate Interest Assessments (LIA) and Data Protection Impact Assessments (DPIA) to ensure our processing activities are necessary and proportionate.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Source of Your Personal Data</h2>
            
            <p>We use a range of sources to provide our services, including:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>HubSpot platform data</li>
              <li>Client business requirements</li>
              <li>Marketing automation workflows</li>
              <li>Client-provided information</li>
              <li>Direct submissions through our website</li>
            </ul>

            <p>
              Our approach is based on understanding our clients' business needs and optimizing their HubSpot implementation to improve marketing automation and business outcomes.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Data Sharing</h2>
            
            <p>We don't routinely share your personal data with third parties except:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>With the specific client on whose behalf we are providing HubSpot services</li>
              <li>With our carefully selected service providers who help us deliver our services</li>
              <li>Where required by law or regulation</li>
              <li>With our group companies where necessary for internal administration</li>
            </ul>

            <p>
              Where we share your data, we ensure appropriate data processing agreements are in place and that your rights are protected.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">International Transfers of Your Personal Data</h2>
            
            <p>Where we transfer personal data outside the UK or EEA, we ensure appropriate safeguards are in place through:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Standard Contractual Clauses approved by the UK Information Commissioner's Office</li>
              <li>Adequacy decisions</li>
              <li>Binding corporate rules where applicable</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Retaining and Deleting Personal Data</h2>
            
            <p>We retain personal data only as long as necessary for the purposes we collected it. Typical retention periods are:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Client data: Duration of service plus 6 years for legal and tax purposes</li>
              <li>HubSpot implementation data: 2 years from last interaction</li>
              <li>Service data: 3 years from service completion</li>
              <li>Technical data: 14 months</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Your Rights as a Data Subject</h2>
            
            <p>Under data protection law, you have the following rights:</p>
            <ol className="list-decimal pl-6 mt-4 space-y-2">
              <li>The right to be informed about our collection and use of your personal data</li>
              <li>The right to access your personal data</li>
              <li>The right to have inaccurate personal data rectified</li>
              <li>The right to be forgotten (in certain circumstances)</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to our processing of your personal data</li>
              <li>Rights relating to automated decision-making and profiling</li>
            </ol>

            <p>
              To exercise any of these rights, please contact our Data Protection Officer using the contact details provided at the beginning of this policy. We will respond to your request within one month.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Automated Processing</h2>
            
            <p>We use automated processing to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Optimize HubSpot workflows</li>
              <li>Assess marketing automation effectiveness</li>
              <li>Monitor platform performance</li>
              <li>Improve service delivery</li>
            </ul>

            <p>
              You have the right to object to automated processing and request human intervention in any automated decision-making process.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Security</h2>
            
            <p>We implement appropriate technical and organisational measures to protect personal data, including:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Staff training</li>
              <li>Data processing agreements with suppliers</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">Complaints</h2>
            
            <p>If you have concerns about how we process your personal data:</p>
            <ol className="list-decimal pl-6 mt-4 space-y-2">
              <li>Please contact us first at <a href="mailto:richard@pushsend.co" className="text-blue-600 hover:underline">richard@pushsend.co</a> - we aim to resolve all complaints internally</li>
              <li>If you remain unsatisfied, you can contact the Information Commissioner's Office:</li>
            </ol>

            <div className="bg-gray-100 p-6 rounded-lg my-6">
              <p><strong>Information Commissioner's Office</strong></p>
              <p>Wycliffe House</p>
              <p>Water Lane</p>
              <p>Wilmslow</p>
              <p>Cheshire</p>
              <p>SK9 5AF</p>
              <p className="mt-4">
                <strong>Website:</strong> <a href="https://www.ico.org.uk" className="text-blue-600 hover:underline">www.ico.org.uk</a>
              </p>
              <p><strong>Telephone:</strong> 0303 123 1113</p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Changes to This Policy</h2>
            
            <p>
              We may update this policy from time to time by publishing a new version on our website. You should check this page occasionally to ensure you are happy with any changes to this policy. We may notify you of significant changes by email.
            </p>

            <p>
              This policy was last updated on 12 December 2024.
            </p>
          </div>
        </article>
      </main>
      <FooterSection />
    </div>
  );
} 