import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { VscDebugBreakpointLog } from "react-icons/vsc";


function WorkEducation() {
  return (
    <div>
    <Tabs>
    <TabList>
      <Tab>Work Experience</Tab>
      <Tab>Education</Tab>
      <Tab>Achievements</Tab>
    </TabList>

<TabPanel>
                        <div className="work-edu">
                            <h3><VscDebugBreakpointLog/><span className="purple">Amazon, Hyderabad(hyd13)</span></h3>
                            <div style={{paddingLeft:"50px"}}>
                            <p className="info">
                            
                            <span>&bull;</span>Software Development Engineer 1 <em className="date">(April 2022</em> - <em className="date">Present)</em></p>
                            <ul>
                                <li>Working as full stack on an authorization and data privacy project in Amazon.</li>
                            </ul>
                            </div>
                       </div>
                       <div className="work-edu">
                            <h3><VscDebugBreakpointLog/><span className="purple">EPAM, Hyderabad</span></h3>
                            <div style={{paddingLeft:"50px"}}>
                            <p className="info">
                            
                            <span>&bull;</span>Junior Software Engineer <em className="date">(May 2021</em> - <em className="date">Apr 2022)</em></p>
                            <ul>
                                <li>Working for Clarivate Analytics to develop backend microservices in spring boot for their web app.</li>
                                <li>Worked on new feature development and writing junit test cases for the same with code coverage of above 85 %.</li>
                                <li>Designed and developed asynchronous RESTful Microservices using Spring boot.</li>
                            </ul>
                            </div>
                       </div>

                       <div className="work-edu">
                            <h3><VscDebugBreakpointLog/><span className="purple">MAQ Software, Hyderabad</span></h3>
                            <div style={{paddingLeft:"50px"}}>
                            <p className="info">
                            <span>&bull;</span>Software Engineer 1 <em className="date">(Nov 2020</em> - <em className="date">Apr 2021)</em></p>
                            <ul>
                                <li>Worked for Microsoft to create React JS components for their web application.</li>
                                <li>Also worked on backend Microservices for feature development for the same. </li>
                                <li>Worked on the cosmos db of Microsoft to investigate and resolve issues related to errors in data field values.</li>
                            </ul>
                            </div>
                       </div>

                       <div className="work-edu">
                            <h3><VscDebugBreakpointLog/><span className="purple">Indian Institute of Tropical Metrology, Pune</span></h3>
                            <div style={{paddingLeft:"50px"}}>
                            <p className="info">
                            
                            <span>&bull;</span>Project Intern <em className="date">(July 2019</em> - <em className="date">Apr 2020)</em></p>
                            <ul>
                                <li>Worked for IITM , Pune to collect the data for cloud reflectivity values obtained form the Mumbai weather radar station and perform data cleaning.</li>
                                <li>Used this data to create machine learning models to predict the cloud reflectivity values.</li>
                            </ul>
                            </div>
                       </div>

                       <div className="work-edu">
                            <h3><VscDebugBreakpointLog/><span className="purple">Tech Mahindra, Pune</span></h3>
                            <div style={{paddingLeft:"50px"}}>
                            <p className="info">
                            <span>&bull;</span>Intern <em className="date">(Jan 2019</em> - <em className="date">Mar 2019)</em></p>
                            <ul>
                                <li> Made a device to recognize emotions of cab drivers and send audio messages to them remotely in any regional language.</li>
                                <li>Used machine learning algorithms to capture emotions and send the data to a central server and then send back text to speech audio.</li>
                            </ul>
                            </div>
                       </div>

                    

    </TabPanel>
    <TabPanel>
    <div className="work-edu">
                            <h3><VscDebugBreakpointLog/><span className="purple">AISSMS Institute of Information Technology, Pune</span></h3>
                            <div style={{paddingLeft:"50px"}}>
                            <p className="info">
                            
                            <span>&bull;</span>Bachelors in Computer Engineering <em className="date">(Aug 2016</em> - <em className="date">Aug 2020)</em></p>
                            </div>
                       </div>

                       <div className="work-edu">
                            <h3><VscDebugBreakpointLog/><span className="purple">Jindal Vidya Mandir, Salav</span></h3>
                            <div style={{paddingLeft:"50px"}}>
                            <p className="info">
                            
                            <span>&bull;</span>12th CBSE 90.4% <em className="date">(2016)</em></p>
                            </div>
                       </div>
                       <div className="work-edu">
                            <h3><VscDebugBreakpointLog/><span className="purple">Jindal Vidya Mandir, Salav</span></h3>
                            <div style={{paddingLeft:"50px"}}>
                            <p className="info">
                            
                            <span>&bull;</span>10 CBSE 93.6% <em className="date">(2014)</em></p>
                            </div>
                       </div>
    </TabPanel>
    <TabPanel>
    <div className="work-edu">
        <ul><br/>
            <li>Selected among top 100 students of India by Cummins India Ltd. program for complete funding of 
                education.</li><br/>
            <li>Awarded with JSW Steel Ltd. scholarship.</li><br/>
            <li>Taluka level topper for 12th Science CBSE Examination.</li><br/>
            <li>Microsoft Certified-Data Analyst Associate.</li><br/>
        </ul>
        </div>
    </TabPanel>
  </Tabs>
          </div>
  );
}

export default WorkEducation;
