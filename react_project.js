let Project_Element = [];
let currentResult = "Default";
class Projects{
  constructor(){
    this.name = ""
  }
}

const default_result = (              
<div className="container">
<div className="row">
  <div className="col-lg-12">
    <div className="content">
         <div className="container">
           <div className="row">
               <div className="col-sm-12">
                  <div style={{borderRadius:'22px'}} className="jumbotron" style={{alignItems: 'center'}}>
                    <h1>Under construction.....</h1>
                    <h3> This part is currently still under construction.</h3>
                    <p>I am looking for a way to display all the projects I have done. </p>
                    <p> Probably just showing a collection of pictures and how they are implemented would work here.</p>
                    
           </div>
           </div>
           </div>
         </div>
         </div>
         </div>
         </div>
</div>);




function generateResult(data){
  currentResult = "Default"
  let Project_Element = [];
  let allContent = data.value.split("\n");
  for(let i = 1; i < allContent.length;i++){
    //split each of them
    let eachElement = allContent[i].split("\t");
    console.log(allContent[i]);
    Project_Element.push(  <div className="container" key={i}>
    <div className="jumbotron">
               <div className="row">
                   <div className="col-md-9">
                   <div style={{borderRadius:'22px'}} style={{alignItems: 'center'}}>
                        <h2>Project Name: &nbsp;{eachElement[1]}                      <button id={eachElement[0]} onClick={() =>{loadDetails(eachElement[0])}} className="btn btn-info">See more about this project</button></h2>
                        {console.log(eachElement[0])}
                        <h5>ID:  &nbsp;{eachElement[0]}</h5>
                        <p> {eachElement[3]}</p>
                        <p> {eachElement[4]}</p>
			</div>         
                    </div>
                    <div className="col-md-3" style={{alignItems: 'center'}}>
                    <img style={{maxWidth:'231px',maxHeight:'204px'}} src = {""+ eachElement[2]} alt="proje-picture"/>
                    </div>
               </div>
             </div>
             </div>);
  }
  ReactDOM.render((Project_Element.length > 0 ? Project_Element:default_result),document.getElementById('Projects-loadDataBase'))

}




function updateAjax(){
  const data = { result: 'fetching' };

    fetch("update_ajax.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(console.log(data))
        .then(response => response.json())
        .then(data => generateResult(data))
}
//Unfinished

function generateDetailedResult(data){
  Project_Element = [];
  console.log("AA")
  currentResult = "Detailed"
  let allContent = data.value.split("\n");
  for(let i = 1; i < allContent.length;i++){
    //split each of them
    let eachElement = allContent[i].split("\t");
    console.log(allContent[i]);
    Project_Element.push(  <div className="container" key={i}>
    <div className="jumbotron">
               <div className="row">
                   <div className="col-md-9">
                   <div style={{borderRadius:'22px'}} style={{alignItems: 'center'}}>
                        <h2>Project Name: &nbsp;{eachElement[1]}                      <button id={eachElement[0]} onClick={() =>{currentResult = "Default"; updateAjax();}} className="btn btn-info">Return to the Projects page</button></h2>
                        {console.log(eachElement[0])}
                        <h5>ID:  &nbsp;{eachElement[0]}</h5>
                        <p> {eachElement[3]}</p>
                        <p> {eachElement[4]}</p>
                        <p> Implementation(General):{eachElement[7]}</p>
			</div>         
                    </div>
                    <div className="col-md-3" style={{alignItems: 'center'}}>
                    <img style={{maxWidth:'231px',maxHeight:'204px'}} src = {""+ eachElement[2]} alt="proje-picture"/>
                    </div>
               </div>
             </div>
             </div>);
  }
  ReactDOM.render((Project_Element.length > 0 ? Project_Element:default_result),document.getElementById('Projects-loadDataBase'))


}

function loadDetails(projectId){
  //Another PHP thing, you know
  const data = { id: projectId };
      fetch("update_ajax_detailed.php", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        })
        .then(console.log(data))
        .then(response => response.json())
        .then(data => generateDetailedResult(data))
}


if(currentResult==="Default"){
  
updateAjax();
}
