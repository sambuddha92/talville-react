import React, {useState, useEffect, Fragment} from 'react';
import './JobPage.css';
import ReactHtmlParser from 'react-html-parser';
const fetch = require("node-fetch");

//https://docs.google.com/spreadsheets/d/e/2PACX-1vRu1pXjwcaLdGTOJNem1vxYT90exy3J_hE8d_0CsFpD15MxlgwE7OUIfw7bwRoL11AfX7woImGOqPe7/pubhtml


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
    const [GlassdoorRating, setGlassdoorRating] = useState('');
    const [TotalFunding, setTotalFunding] = useState('');
    const [FundingRevenue, setFundingRevenue] = useState('Funding');
    
    const jobId = match.params.id;

    useEffect(() => {
        async function getData() {
            var sheedID = '1b7EnH73IwiJeMhsi7hNDEcVUi-iWG52ovePLsJ5oVZM';
            var url = 'https://spreadsheets.google.com/feeds/list/'+sheedID+'/od6/public/values?alt=json';
            const response = await fetch(url);
            const json = await response.json();
            return json.feed.entry[jobId-1];
        }

        async function main() {
            const jobDetails = await getData();
            setCompanyName(jobDetails.gsx$companyname.$t);
            setCompanyLogo(jobDetails.gsx$companylogo.$t);
            setJobTitle(jobDetails.gsx$jobtitle.$t);
            setAbout(jobDetails.gsx$about.$t);
            var tagString = jobDetails.gsx$companytags.$t;
            var tagArr = tagString.split(",");
            var tagsTemp = [];
            for (var j = 0; j < tagArr.length; j++) {
                tagsTemp.push({value: tagArr[j]});
            }
            setCompanyTags(tagsTemp);
            var sectionsTemp = [];
            if(jobDetails.gsx$section1title.$t && jobDetails.gsx$section1content.$t) {sectionsTemp.push({title: jobDetails.gsx$section1title.$t, content: jobDetails.gsx$section1content.$t })};
            if(jobDetails.gsx$section2title.$t && jobDetails.gsx$section2content.$t) {sectionsTemp.push({title: jobDetails.gsx$section2title.$t, content: jobDetails.gsx$section2content.$t })};
            if(jobDetails.gsx$section3title.$t && jobDetails.gsx$section3content.$t) {sectionsTemp.push({title: jobDetails.gsx$section3title.$t, content: jobDetails.gsx$section3content.$t })};
            if(jobDetails.gsx$section4title.$t && jobDetails.gsx$section4content.$t) {sectionsTemp.push({title: jobDetails.gsx$section4title.$t, content: jobDetails.gsx$section4content.$t })};
            if(jobDetails.gsx$section5title.$t && jobDetails.gsx$section5content.$t) {sectionsTemp.push({title: jobDetails.gsx$section5title.$t, content: jobDetails.gsx$section5content.$t })};
            if(jobDetails.gsx$section6title.$t && jobDetails.gsx$section6content.$t) {sectionsTemp.push({title: jobDetails.gsx$section6title.$t, content: jobDetails.gsx$section6content.$t })};
            setSections(sectionsTemp);
            setCompensation(jobDetails.gsx$compensation.$t);
            setSecondaryCompensation(jobDetails.gsx$secondarycompensation.$t);
            setJobLocation(jobDetails.gsx$joblocation.$t);
            setGoogleMapLink(jobDetails.gsx$googlemaplink.$t);
            setExperience(jobDetails.gsx$experience.$t);
            setPedigree(jobDetails.gsx$pedigree.$t);
            setGlassdoorRating(jobDetails.gsx$glassdoorrating.$t);
            var fundingTemp = jobDetails.gsx$totalfunding.$t;
            var fundingTempArr = fundingTemp.split(' -|- ')
            setTotalFunding(fundingTempArr[0]);
            if (fundingTempArr[1] === 'revenue') {setFundingRevenue('Revenue')};
        }

        main();
    },[jobId])

    return (
        <Fragment>
            <hr className='jd-hr'/>
            {(!CompanyName || !JobTitle || !About || !CompanyLogo || !Compensation || !Experience) &&
                <img src={process.env.PUBLIC_URL + '/images/loading.gif'} alt='loading' className='job-description loading'/>
            }
            {CompanyName && JobTitle && About && CompanyLogo && Compensation && Experience &&
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
                            <div className="vl"></div>
                            <div className='loc'>
                                <div className='detail'>
                                    <p className='type'>Location</p>
                                    <p className='value'>{JobLocation}</p>
                                    {GoogleMapLink !== '' && <a href={GoogleMapLink} target='_blank' rel="noopener noreferrer"><p className='sub-value'>Google Maps</p></a>}
                                </div>
                            </div>
                            <div className="vl"></div>
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
                            {(GlassdoorRating || TotalFunding) && 
                                <div className='stats'>
                                    {GlassdoorRating &&
                                        <div className='glassdoor'>
                                            <div className='rating'>{GlassdoorRating}</div>
                                            <div className='identifier'>Glassdoor Rating</div>
                                        </div>
                                    }
                                    {GlassdoorRating && TotalFunding &&
                                        <div className="vl"></div>
                                    }
                                    { TotalFunding && 
                                        <div className='funding'>
                                            <div className='rating'>{TotalFunding}</div>
                                            <div className='identifier'>{FundingRevenue}</div>
                                        </div>
                                    } 
                                </div>
                            }
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
            }
        </Fragment>
    )
}