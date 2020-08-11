import React from 'react';
import Question from './Question';
import './FAQ.css';

const employerFaq = [
    ['How is Talville different from other recruitment consulting firms?','At Talville, we only share candidates who are fit for the role and interested in the opportunity. Our sole focus is on providing you quality interview ready candidates.'],
    ['What is the process for signing up with you guys?','Once you have decided to come on board with us, we will be sharing an agreement with you. Meanwhile we will start working on the JDs or job profiles you have shared with us. You will be required to send us a signed copy of the agreement over email before we can start sharing candidates with you.'],
    ['What kind of industries and roles do you work on?','We work with leading tech startups and companies. We work on various kinds of roles across Technology, Product, Business, Marketing and Operations. '],
    ['When will we start getting profiles and how many profiles can I expect from you?','It depends on the kind of job you are sharing, on an average we are able to start sharing profiles within 2 working days.The number of profiles and frequency of sharing will depend on the available talent pool for the job shared. '],
    ['How much time will you take to close the positions I have shared?','On an average we are able to close a position within 4 weeks, but this varies with the complexity of the role and hiring process at your end. We try our best to close the positions within your deadline. '],
    ['What are the locations you hire for?','We hire for positions all over India.'],
    ['What is your screening process?','We have a very stringent screening process to ensure that you do not get candidates who are uninterested in making the switch. We only share those candidates who match all the criteria mentioned by you. We use a 3 tier screening process, first we check the intent of the candidate through a series of forms and calls, next our recruiters check for any signals which might deter the  candidate from joining you, and lastly our team does a final confirmation call with the candidate just before sharing the profile to make sure he is still available and interested in the opportunity.'],
    ['In which format will you be sharing the profiles?','We will be sharing the canddiates  with you in the form of standard resumes. The actual resume will be available as a link inside the standard resume. Please click here to view a sample Standard Resume.'],
    ['What other info do you share along with the resume of the candidate?','Along with the resume we share all the other relevant information like expected CTC, notice period details, preferences etc. Please click here to view a sample resume. This is the format in which we shall be sharing the profiles with you.'],
    ['Can you help me in outsourcing my interviews?','Yes, we can help you in outsourcing interviews. We have interview patners who can conduct interviews on your behalf. Pricing for this service is on a prepaid basis and is done on a case by case basis.'],
    ['I have found a good candidate but I don\'t have his contact details, do you help in such cases?','Yes, in case you have found a canddiate on a social networking website but due to certain reasons you are not able to approach him, we can help you in such cases. In cases where you just want us to help in the recruitment process only, the pricing charged will be different, it will be much lower than the recruitment consulting fees. Please refer to the agreement for details.'],
    ['Can you help me in outsourcing my recruitment process?','Yes, we can help you with that. We can manage your entire recruitment process from scratch.'],
    ['I am based out of US and looking to hire in India, will you help with that?','Yes, we can help you with that. If you are a team in US and looking to hire a team in India then we can help you with that. We have already helped several US based startups hire remote talent in India.'],
    ['Can i make a job private, since I do not want my current employees to know about this job?','Yes, you can let us know in the begining itself that the job is private. We will ensure that the job is not posted on any social media sites.'],
    ['What is your pricing?','For detailed info on pricing please connect with us over a call or send us an email at business@talville.com. The pricing details willl be mentioned in the agreement which we sign with each other.'],
    ['When and how do I make the payment?','The payment terms and conditions are part of the agreement that we sign. ']
]

export default () => (
    <section className='faq' >
        <h1 className='title'>Frequently asked questions</h1>
        <div className='content'>
            <div className='lhs-menu'>
                <div className='topics'>
                    <h1 className='title'>Choose Topic</h1>
                    <a href='/faq-candidate' className='no-underline'><h3 className='topic inactive'>FOR CANDIDATES</h3></a>
                    <a href='/faq-employer' className='no-underline'><h3 className='topic active'>FOR EMPLOYERS</h3></a>
                </div>
                <div className='contact-us lhs'>
                    <h1 className='title'>CAN'T FIND ANSWER?</h1>
                    <h3 className='subtitle'>Don’t worry, our support team will help you</h3>
                    <a className='no-underline' href='mailto:hello@talville.com' target='_blank' rel='noopener noreferrer'>
                        <div className='footer'>
                            <img src={process.env.PUBLIC_URL + '/images/contact-faq.png'} alt='contact' />
                            <h3>CONTACT US</h3>
                        </div>
                    </a>
                </div>
            </div>
            <div className='questions'>
                {employerFaq.map((faq, i) => (<Question serial={i+1} q={faq[0]} a={faq[1]}/>))}
            </div>
            <div className='contact-us bottom'>
                <h1 className='title'>CAN'T FIND ANSWER?</h1>
                <h3 className='subtitle'>Don’t worry, our support team will help you</h3>
                <a className='no-underline' href='mailto:hello@talville.com' target='_blank' rel='noopener noreferrer'>
                    <div className='footer'>
                        <img src={process.env.PUBLIC_URL + '/images/contact-faq.png'} alt='contact' />
                        <h3>CONTACT US</h3>
                    </div>
                </a>
            </div>
        </div>
    </section>
)