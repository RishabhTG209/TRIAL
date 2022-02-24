    
//Variables Declare

let datacheck=document.querySelector("#check");
let datadiv=document.querySelector("#inputdata");
let movies_div=document.createElement("div");
    movies_div.setAttribute("class","movies_div")
let movieWaiting;
let p;
let divtrailer=document.createElement("div");

async function fetchdata(){
        datadiv.innerHTML="";
        datacheck.innerHTML="";
        divtrailer.innerText="";
        try{
            let movieName=document.querySelector("#movieinput").value;

                let response=await fetch(
                    `https://myapplication-nine-west.herokuapp.com/players`
                    // `https://www.omdbapi.com/?t=${movieName}&apikey=46d687e2`
                );
                let data=await response.json();
                console.log(data)
                    showMovie(data);
                    // fetchtrailer(event.Title);
                console.log("Data: ",data);     
        }
        catch(error){
            console.log("Error : ",error);
            
        }       
    }

function showMovie(movie){
        console.log(movie);
        // let poster=document.createElement("img")
        // poster.src=movie.Poster;
        // poster.setAttribute("class","poster")
        // let div1=document.createElement("div");
        // div1.append(poster);

        // let div2=document.createElement("div");
        // div2.setAttribute("class","div2");
        // let title=document.createElement("p");
        // title.setAttribute("class","title");
        // title.textContent=movie.Title;
        
        // let released=document.createElement("p");
        // released.textContent="Released year: "
        // released.setAttribute("class","bluedata");
        // let year=document.createElement("p");
        // year.textContent=movie.Year;
        // year.setAttribute("class","whitedata");
        // let div21=document.createElement("div");
        // div21.setAttribute("id","alldatadiv");
        // div21.append(released,year);

        // let type=document.createElement("p");
        // type.textContent="Genre: ";
        // let genre=document.createElement("p");
        // genre.textContent=movie.Genre;
        // type.setAttribute("class","bluedata");
        // genre.setAttribute("class","whitedata");
        // let div22=document.createElement("div");
        // div22.setAttribute("id","alldatadiv");
        // div22.append(type,genre);

        // let imdbstar=document.createElement("p");
        // imdbstar.textContent=movie.imdbRating;
        // let imdbR=document.createElement("p");
        // imdbR.textContent="IMDB Rating: ";
        // imdbR.setAttribute("class","bluedata");
        // imdbstar.setAttribute("class","whitedata");
        // let div23=document.createElement("div");
        // div23.setAttribute("id","alldatadiv");
        // div23.append(imdbR,imdbstar);

        // let runtime=document.createElement("p");
        // runtime.textContent=movie.Runtime;
        // let time=document.createElement("p");
        // time.textContent="Length: ";
        // time.setAttribute("class","bluedata");
        // runtime.setAttribute("class","whitedata");
        // let div24=document.createElement("div");
        // div24.setAttribute("id","alldatadiv");
        // div24.append(time,runtime);


        // let lang=document.createElement("p");
        // lang.textContent=movie.Language;
        // let language=document.createElement("p");
        // language.textContent="Languages: ";
        // language.setAttribute("class","bluedata");
        // lang.setAttribute("class","whitedata");
        // let div25=document.createElement("div");
        // div25.setAttribute("id","alldatadiv");
        // div25.append(language,lang);


        // let cast=document.createElement("p");
        // cast.textContent=movie.Actors;
        // let actor=document.createElement("p");
        // actor.textContent="Cast: ";
        // actor.setAttribute("class","bluedata");
        // cast.setAttribute("class","whitedata");
        // let div26=document.createElement("div");
        // div26.setAttribute("id","alldatadiv");
        // div26.append(actor,cast);


        // let summary=document.createElement("p");
        // summary.textContent="Plot: ";
        // let plot=document.createElement("p");
        // plot.textContent=movie.Plot;
        // summary.setAttribute("class","bluedata");
        // plot.setAttribute("class","whitedata");
        // let div27=document.createElement("div");
        // div27.setAttribute("id","alldatadiv");
        // div27.append(summary,plot);
        

        // div2.append(title,div21,div22,div23,div24,div25,div26,div27);
        // if(imdbstar.textContent>=8.5){
        //     let recommend=document.createElement("p");
        //     recommend.setAttribute("class","recommend");
        //     recommend.textContent="Recommended";
        //     divrec=document.createElement("div");
        //     divrec.append(recommend);
        //     divrec.setAttribute("class","divrec");
        //     divtrailer.append(divrec)
        //     document.querySelector("#inputdata").append(div1,div2,divtrailer);
        // }
        // else{
        //     document.querySelector("#inputdata").append(div1,div2);
        // }
        



    }

// function falsepage(){
//     let notfound=document.createElement("img");
//     notfound.src="https://ell.brainpop.com/conceptmap/img/img_noresults_movies.png";
//     notfound.setAttribute("class","notfound");
//     document.querySelector("#inputdata").append(notfound);
// }


// //new api key=AIzaSyDMRGk7JPkAaX9hE6ohxmwgc_LvoFX1fss
// // old api key=AIzaSyDWSt2KeKOG_TXP2vl6Xcm56YCgO9dzEBE


// //Async function for trailer
// async function fetchtrailer(name){
//     // divtrailer.innerText="";
//     try{
//         console.log("Movie Name: ",name);
//         let trailername=name+"official trailer"
//         let response2=await fetch(
//             `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${trailername}&type=video&key=AIzaSyDWSt2KeKOG_TXP2vl6Xcm56YCgO9dzEBE&maxResults=1`
//         )
//         let data2=await response2.json();
//         // console.log("Hey baby1:",data2);

//         let trailervideo=data2.items;
//         appendTrailer(trailervideo);
//         // console.log("Hey baby 2 :",trailervideo);
//     }
//     catch(error){
//         console.log("Name of Error: ",error);
//     }
// }

// const appendTrailer = (items) =>{
//     items.forEach((elem) => {

//         let {
//             id:{videoId}
//         } =elem

//         let iframe=document.createElement("iframe");
//         iframe.src=`https://www.youtube.com/embed/${videoId}`;
//         iframe.width="500"
//         iframe.height="350"
//         // divtrailer=document.createElement("div");
//         divtrailer.setAttribute("class","divtrailer");
//         divvideo=document.createElement("div");
//         divvideo.append(iframe);
//         divvideo.setAttribute("class","divvideo");
//         divtrailer.append(divvideo);
//         document.querySelector("#inputdata").append(divtrailer);
//     });
// };


// //async function for searchlist
// async function searchMovie(){
    
//     movies_div.innerHTML="";
//     let movieList=document.querySelector("#movieinput").value  
//     try{
//         let response1 =await fetch(
//             `https://www.omdbapi.com/?apikey=46d687e2&s=${movieList}`
//         );
//         let data1=await response1.json();
//         console.log("Data1 : ",data1);
//         let movies_arr=data1.Search;
//         appendMovies(movies_arr);
//     }
//     catch(error){
//         console.log("Error: ",error);
//     }
// }       

// //to access the search menu
// function appendMovies(movies){
//     if(movies==undefined){
//         return false;
//     }
//     movies.map(function(elem){
//         p=document.createElement("p");
//         p.innerText=elem.Title;
//         p.setAttribute("class","listP");
//         p.addEventListener("click", function () {
//             console.log("hey3: ",elem);
//           removemovie()  
//           fetchdata(elem);
//         });
//         let poster1=document.createElement("img");
//         poster1.src=elem.Poster;
//         poster1.setAttribute("class","listPoster");
//         poster1.addEventListener("click", function () {
//             console.log("hey3: ",elem);
//           removemovie()  
//           fetchdata(elem);
//         });
//         divflex=document.createElement("div")
//         divflex.setAttribute("class","divflex");
//         divflex.append(poster1,p);
//         movies_div.append(divflex);
//         document.querySelector("#check").append(movies_div);
//     })
//     p.innerText="";

// }

// //Removing the already present movie poster in #inputdata
// function removemovie(){
//     document.querySelector("#inputdata").innerHTML="";
// }

// //Removing previous API calls which is not required for fast typers
// function debounce(func,delay){
    
//     if(movieWaiting){
//         clearTimeout(movieWaiting);
//     }
//     movieWaiting=setTimeout(function(){
//         func();
//     },delay);
// }