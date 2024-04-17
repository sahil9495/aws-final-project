import "./Home.css"
export const Home = () => {
    return (
        <>
        
        <section>

                <div className="container">

                        <div className="grid grid-two-cols">

                                <div>
                                    
                                    <h1>Empowering Lives, One Drop at a Time: Join Our Blood Donation Community Today!
                                    </h1>
                                    <p>Every donation is critical and you can make a lifesaving difference. 
                                        Patients with trauma, undergoing surgery, or with conditions
                                         that require blood transfusions, such as sickle cell disease, 
                                         need blood and blood products. You can help.</p>

                                         <button className="btn">Donate Now</button>
                                         <button className="btn btn1">Looking For Blood</button>
                                </div>

                                <div className="home-image">

                                    <img className="img-fluids" src="/home_image.jpg" alt="" />

                                </div>

                        </div>

                </div>
        
        </section>


        <section id="process">

        <h2>Why Donate Blood</h2>

        <div className="container">

            
            <div className="grid grid-two-cols">

                <div className="process-theroy">

                    <h3>Welcome to Our Blood Donation Community!</h3>
                     <p>
                    At our blood donation platform, we believe in the extraordinary impact of giving the gift of life. Blood is not just a fluid; it's the essence of life itself.
                    <br /> <br />
                    "Your blood saves more than one life when it is separated into its components (red blood cells, plasma, etc.)."
                    <br /> <br />
                    Each donation has the power to transform and save multiple lives. Whether it's for patients battling thalassemia, hemophilia, or those in need of urgent transfusions after accidents or surgeries, your contribution makes a difference.
                    <br /> <br />
                    "It improves your health."
                      <br /> <br />
                    Donating blood not only helps others but also has health benefits for you. It stimulates the production of new blood cells, enhances circulation, and can even reduce the risk of certain health conditions.
                    <br /> <br />
                    Join us in our mission to empower lives, one donation at a time. Together, we can make a lasting impact and ensure a healthier future for all.
                 </p>

                </div>

                <div className="process-image">
         
                     <img src="/benfits-blood.jpg" alt="" srcset="" />
                
                </div>

            </div>
         </div>

        </section>


        <section id ="requirments">

            <h2>Before You Donate</h2>

            <div className="container">

                <div className="grid grid-two-cols">

                    <div className="requirments-advisory">

                        <img src="/advisory.jpg" alt="" srcset="" /> 


                    </div>
                    <div className="box">
                    
                    <ul>
                     <li>Requirement before Blood Donation is that your weight should be atleast 45 kgs ,
                         be at least 18 years old and be healthy in general.
                    </li>
                      
                    <li> 
                         If you have any particular health concerns then inform the blood bank at the time of blood donation.
                    </li> 
                    <li>
                        During pre-donation screening, a blood bank employee will ask you some questions about your health, lifestyle,
                        and disease risk factors. All of this information is confidential.
                    </li>
                    <li>
                         An employee will perform a short health exam, taking your pulse, 
                        temperature and blood pressure. A drop of blood from your finger will 
                        also be tested to ensure that your blood iron level is sufficient for you to donate.

                    </li>
                    <li>
                        All medical equipment used for this test, as well as during the donation process,
                         is sterile, used only once and then disposed.
                    </li>
                       
                     </ul>
                    
                </div>


                </div>
               
            </div>

        </section>

        </>
    )
}