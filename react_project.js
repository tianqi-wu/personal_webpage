const Project_Element = []

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
                        <h2>Project Name: &nbsp;{eachElement[1]}</h2>
                        {console.log(eachElement[0])}
                        <h5>ID:  &nbsp;{eachElement[0]}</h5>
                        <p> {eachElement[3]}</p>
                        <p> {eachElement[4]}</p>
                    </div>         
                    </div>
                    <div className="col-md-3" style={{alignItems: 'center'}}>
                    <img style={{maxWidth:'150px'}} src = {""+ eachElement[2]} alt="proje-picture"/>
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
updateAjax()





