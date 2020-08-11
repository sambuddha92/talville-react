import React from 'react';
import Question from './Question';
import './FAQ.css';

const employerFaq = [
    ['How should I apply to a job i find with Talville?','You can upload your resume on our website or send us an email at hello@talville.com. While uploading your resume do not forget to choose a primary function. Primary function is the major field of interest in which you are looking for a job. In most cases you will have received an email from us with a relevant job opportunity. In that case you can directly apply by clicking on the link sent to you and filling out a simple form.'],
    ['How will I be notified if I am matched with a certain company?','You will receive an email from Talville. In case you miss our emails, our recruiters will give you a call to make sure you are notified of the relevant opportunity. '],
    ['How long will you help me in my job search process?','Once we have your profile we will constantly keep looking for opportunities relevant to you. If we find a great fit for you, we will send the details over email. You can also unsubscribe from this process at any point of time.'],
    ['Why should I use Talville and not directly apply on Job Boards?','At Talville we are constantly engaging with our clients to make sure that your profile reaches the correct decision making authority inside every company. Since we only approach our clients with relevant candidates we have a better success rate than traditional Job Boards. '],
    ['What if the job you have apporached me for isn\'t the right fit for me?','You can either fill out the form or just reply back to the same email with your preferences. We will update these parameters in our database and make sure that you only receive relevant openings in future.'],
    ['What are the different kinds of roles available with you?','We work with leading tech companies and startups. We have open positions across Product, Technology and Business functions. We typically deal with jobs with a minimum CTC of INR 8 lakhs. '],
    ['I have got an email from Talville asking me to fill out a form, what does it mean?','It means you have been matched with relevant opportunities. Click on the link to the form and fill out your details. You will get an option to select the opportunity/opportunities for which you wish to apply and submit details accordingly. In this form we ask you for details which are not present in your resume like notice period, expected CTC etc.. Filling out this form is the only way to apply for any company through us. '],
    ['What should I put up as my expected CTC?','Ideally you should be projecting an expected CTC at which you are comfortable making the switch. If you project it as very high or very low then the chances of getting shortlisted reduces drastically. Typically market standard for hike is from 10% to 40%, although there have been cases where companies have shelled out  more.'],
    ['When will I get a response after filling out my details?','After you fill out the details you may receive a confirmation call from one of our recruiters within 24 hours. Post which we shall be sharing your profile with the company. If your profile gets shortlisted or rejected you shall be notified of the same via email instantly. We follow up with the company on a regular basis to make sure we get an update on all the profiles we have shared. '],
    ['I was said over call that I have received an email from Talville but I can\'t find it in my Inbox','Please make sure you have checked your spam folder and have provided the correct email address to Team Talville. To update your email for communication please send an email to hello@talville.com with the subject "Email Id Change Request" along with your old and new email addresses. '],
    ['I need more clarifications, who should I call?','You can reach out to us over email by sending us an email at "talent@talville.com". We are extremely responsive over email and make sure that our inbox is clear before we leave office. In case you have an emergency please call/text or whatsapp on +91 85279 34598. '],
    ['How do I know of more relevant job opportunities with you?','Once we have your profile you need not worry about this. Our internal matching processes ensure that any opportunity which is a good fit for you is shared over to you without any delay. Just make sure our emails are not going to your spam. There is no specific frequency at which we shall be sharing new roles with you.'],
    ['Who will you be sharing my data with?','Your data will be shared with prospective employers apart from your current employer. Before we share it with the company it will only be available to the recruiter assigned to you. Your coordinates are completely safe with us. ']
]

export default () => (
    <section className='faq' >
        <h1 className='title'>Frequently asked questions</h1>
        <div className='content'>
            <div className='lhs-menu'>
                <div className='topics'>
                    <h1 className='title'>Choose Topic</h1>
                    <a href='/faq-candidate' className='no-underline'><h3 className='topic active'>FOR CANDIDATES</h3></a>
                    <a href='/faq-employer' className='no-underline'><h3 className='topic inactive'>FOR EMPLOYERS</h3></a>
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