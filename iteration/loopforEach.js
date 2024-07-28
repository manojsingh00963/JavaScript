// For each loop at Array.
// this is the default for aaray. 
// The function that is inside of the for-Each has No❌Name. - 
// can use Arrow function instead of function -> (For Better Experiens.)
//2 only need one parametar/(value) - automatically bring vlaue as a prameter,
//3 


const programming = ['JavaScript','Python','Java','C++','Flutter','Swift'];

programming.forEach(function(plang,index){
    // console.log(plang);
    // console.log(`Programing language ${programming} - ${plang}`); // for learning purpuse can try.
})

/// ---------- Print with Index -----------
programming.forEach(function(plang,index){
    
    // index = index+1; // both are right 
    // console.log(` ${index+1} Programing language - ${plang},`);

})

programming.forEach((e)=>{
    // console.log(e);
})


// some one Method , Decler functino and then call or send direct in for each

function printArray(elem){
    console.log(elem);
}

// programming.forEach(printArray); // only pass fucntion name don't call function inside for-each it call it self: means dont do programming.forEach(printArray()<= These parantheses,)



//NOTe for each has also index and full arry access,

// more--------------------------------------
// !importand - becase all data came form data base as in this form ( mean's arr & object, each value would be an object.) 

const coding = [
    {languagname:"javaScript",
        flieName:"js"
    },

    {languagname:"Python",
        flieName:"py"
    },

    {languagname:"C++",
        flieName:"cpp"
    },

];

coding.forEach((item)=>{
    // console.log(item.languagname);
    console.log(item.languagname+" : "+item.flieName);
})