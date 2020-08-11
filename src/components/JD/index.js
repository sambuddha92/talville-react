import React, {useState, useEffect, Fragment} from 'react';
import './JD.css';
import ReactHtmlParser from 'react-html-parser';
const fetch = require("node-fetch");


export default ({match}) => {
    const [CompanyLogo, setCompanyLogo] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const [JobTitle, setJobTitle] = useState('');
    const [About, setAbout] = useState('');
    const [Sections, setSections] = useState([{}]);
    const [CompanyTags, setCompanyTags] = useState([{}]);
    const [Compensation, setCompensation] = useState('');
    const [SecondaryCompensation, setSecondaryCompensation] = useState('');
    const [JobLocation, setJobLocation] = useState('');
    const [GoogleMapLink, setGoogleMapLink] = useState('');
    const [Experience, setExperience] = useState('');
    const [Pedigree, setPedigree] = useState('');
    
    const jobId = match.params.id;
    const jdFetchUrl = `https://gateway.talville.net/api/jd/${jobId}`;

    useEffect(() => {
        async function fetchData(url) {
            const response = await fetch(url);
            return response.json();
        }

        let json;
        //.replace(/<p>+/g, '').replace(/<\/p>+/g, '')

        async function main() {
            json = await fetchData(jdFetchUrl);

            setCompanyName(json.companyName);
            setCompanyLogo(json.companyLogo);
            setJobTitle(json.jobTitle);
            setAbout(json.about);
            setSections(json.sections);
            setCompanyTags(json.companyTags);
            setCompensation(json.compensation);
            setSecondaryCompensation(json.secondaryCompensation);
            setJobLocation(json.jobLocation);
            setGoogleMapLink(json.googleMapLink);
            setExperience(json.experience);
            setPedigree(json.pedigree);

            
        }
        main();
    }, [jdFetchUrl])

    return (
        <Fragment>
            <hr className='jd-hr'/>
            <section className='job-description'>
                <div className='heading'>
                    <img src={CompanyLogo} alt={`${CompanyName} Logo`} className='company-logo' />
                    <div className='title'>
                        <div className='designation'>{JobTitle}</div>
                        <div className='company-name'>{CompanyName}</div>
                    </div>
                    <div className='app-open'>
                        <img src={process.env.PUBLIC_URL + '/images/green-check-jd.png'} alt='check' className='check-icon-jd' />
                        <p>Accepting applications</p>
                    </div>
                </div>
                <div className='content'>
                    <div className='main'>
                        <div className='details sub-main'>
                            <div className='comp'>
                                <div className='detail'>
                                    <p className='type'>Compensation</p>
                                    <p className='value'>{Compensation}</p>
                                    <p className='sub-value'>{SecondaryCompensation}</p>
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div className='loc'>
                                <div className='detail'>
                                    <p className='type'>Location</p>
                                    <p className='value'>{JobLocation}</p>
                                    {GoogleMapLink !== '#' && <a href={GoogleMapLink} target='_blank' rel="noopener noreferrer"><p className='sub-value'>Google Maps</p></a>}
                                </div>
                            </div>
                            <div class="vl"></div>
                            <div className='exp'>
                                <div className='detail'>
                                    <p className='type'>Experience</p>
                                    <p className='value'>{Experience}</p>
                                    <p className='sub-value'>{Pedigree}</p>
                                </div>
                            </div>
                        </div>
                        <div className='about-company sub-main'>
                            <div className='sub-title'>
                                <div className='main-point'>{`About ${CompanyName}`}</div>
                                <div className='tags'>
                                    {CompanyTags.map(tag =>(
                                        <div className='tag'>
                                            {tag.value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='sub-text'>{ReactHtmlParser(About)}</div>
                        </div>
                        {Sections.map(sec => (
                        <div className='section sub-main'>
                                <div className='sub-title'>{sec.title}</div>
                                <div className='sub-text'>{ReactHtmlParser(sec.content)}</div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}