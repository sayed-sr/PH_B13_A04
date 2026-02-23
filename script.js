let jobs = [
    { 
id: 1, company: "Mobile First Corp", 
 role: "React Native Developer",
 info: "Remote • Full-time • $130k - $175k", 
desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
 status: "none" 
    },



    { 
 id: 2,
 company: "WebFlow Agency",
    role: "Web Designer & Developer",
info: "Los Angeles, CA • Part-time • $80k - $120k", 
    desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
 status: "none"

     },

    { 
        id: 3,
company: "DataViz Solutions",
 role: "Data Visualization Specialist",
       info: "Boston, MA • Full-time • $125k - $165k",
desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
 status: "none"

      },




    { 
id: 4,
 company: "CloudFirst Inc",
 role: "Backend Developer",
    info: "Seattle, WA • Full-time • $140k - $190k", 
desc: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "none"

      },


    { 

        id: 5,
company: "Innovation Labs",
         role: "UI/UX Engineer",
 info: "Austin, TX • Full-time • $110k - $150k", 
     desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
status: "none"

      },



    { 
        id: 6,
 company: "MegaCorp Solutions",
   role: "JavaScript Developer",
  info: "New York, NY • Full-time • $130k - $170k",
 desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
 status: "none" 

    },







    { 
id: 7,
    company: "StartupXYZ",
    role: "Full Stack Engineer", 
        info: "Remote • Full-time • $120k - $160k",
       desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "none"
 },




    { 
 id: 8, 
 company: "TechCorp Industries", 
role: "Senior Frontend Developer",
 info: "San Francisco, CA • Full-time • $130k - $175k", 
desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
        status: "none"

      }

];
// ============================================================================================

let currentFilter = 'all';

function renderUI() {
    const wrapper = document.getElementById('job-wrapper');
    const emptySec = document.getElementById('empty-state');
    

    const filtered = jobs.filter(j => currentFilter === 'all' || j.status === currentFilter);
    // =====================================================================================


  
    document.getElementById('total-count').innerText = jobs.length;

    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;

document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
     document.getElementById('display-count').innerText = filtered.length;


  
    if (filtered.length === 0) {
        wrapper.innerHTML = "";

        emptySec.classList.remove('hidden'); 
} 
    
    else {
        emptySec.classList.add('hidden'); 

        wrapper.innerHTML = filtered.map(job => {
            let tagTxt = "NOT APPLIED";

            let tagClass = "";
            
        
    if(job.status === 'interview') { 
        tagTxt = "INTERVIEWED"; 
                 tagClass = "applied"; 
         }

            if(job.status === 'rejected') { 

                 tagTxt = "REJECTED"; 
                tagClass ="rejected"; 
            }
            // ============================================================================================


return `
<div class="job-item">
    <div class="header-box">
                        <div>
             <h4>${job.company}</h4>
             <p class="role-txt">${job.role}</p>
            <p class="info-row">${job.info}</p>
                        </div>
           <span class="del-icon" onclick="deleteJob(${job.id})">🗑</span>
    </div>
                    <div class="status-tag ${tagClass}">${tagTxt}</div>
                     <p class="job-desc">${job.desc}</p>
                    <div class="action-ctn">
         <button class="btn-action btn-int" onclick="updateStatus(${job.id}, 'interview')">INTERVIEW</button>
        <button class="btn-action btn-rej" onclick="updateStatus(${job.id}, 'rejected')">REJECTED</button>
     </div>      </div>
            `;


        }).join('');
    }
}

// ============================================================================================


function updateStatus(id, stat) {

    jobs = jobs.map(j => j.id === id ? {...j, status: stat} : j);

    renderUI();
}



function deleteJob(id) {
    
jobs = jobs.filter(j => j.id !== id);
    renderUI();
}


document.querySelectorAll('.tab-btn').forEach(btn => {

    btn.addEventListener('click', (e) => {

    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
       
    renderUI();
    });

});
// ============================================================================================

renderUI();